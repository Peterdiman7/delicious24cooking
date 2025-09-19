import express from "express"
import mysql from "mysql2/promise"

const app = express();
const conn = await mysql.createConnection({
  host: "127.0.0.1",
  user: "mbxservices_ro",
  password: "your_password",
  database: "mbxservices"
});

// endpoint: /recipes
app.get("/recipes", async (req, res) => {
  const [rows] = await conn.execute("SELECT id, title FROM recipes LIMIT 20");
  res.json(rows);
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
