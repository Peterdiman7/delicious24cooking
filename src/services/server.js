import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Load environment
dotenv.config({ path: path.resolve("/home/devalex/delicious24cooking.com/delicious24cooking/.env") });

const PORT = process.env.PORT || 9103;
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("Missing JWT_SECRET in .env");
  process.exit(1);
}

const app = express();

// CORS config
const allowedOrigins = [
  "https://delicious24cooking.com",
  "http://localhost:9003",
  "http://localhost:5173"
];
app.use(cors({
  origin: (origin, callback) => (!origin || allowedOrigins.includes(origin) ? callback(null, origin) : callback(new Error("Not allowed by CORS"))),
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ---- MYSQL POOL ----
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ---- REGISTER ----
app.post("/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ error: "All fields are required" });

  try {
    const hashed = await bcrypt.hash(password, 10);
    const conn = await pool.getConnection();
    await conn.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashed]);
    conn.release();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    if (err.code === "ER_DUP_ENTRY") res.status(409).json({ error: "Username or email already exists" });
    else res.status(500).json({ error: "Database error" });
  }
});

// ---- LOGIN ----
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute("SELECT * FROM users WHERE username = ?", [username]);
    conn.release();
    if (!rows.length) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, { expiresIn: "2h" });

    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 2 * 60 * 60 * 1000 });
    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// ---- PROTECTED ----
app.get("/auth/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json(decoded);
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

// ---- LOGOUT ----
app.post("/auth/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
  res.json({ message: "Logged out" });
});

// ---- START SERVER ----
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
