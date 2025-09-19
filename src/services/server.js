import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import path from 'path'

const app = express();
app.use(cors());

// Serve images from the /DATA/Recipe directory
app.use("/images", express.static(path.join(__dirname, "DATA", "Recipe")));

// MySQL connection
const conn = await mysql.createConnection({
  host: "127.0.0.1",
  user: "mbxservices_ro",
  port: 3307,               // matches SSH tunnel
  password: "sv5hd2dg_F",
  database: "mbxservices"
});

// ---- GET ALL RECIPES ----
export async function getRecipes(req, res) {
  try {
    const [rows] = await conn.execute(`
      SELECT id, date_published, date_modified, rating, prep_time, cook_time, total_time, main_image
      FROM recipes
      LIMIT 1000
    `);
    const recipes = rows.map((r) => ({
      ...r,
      main_image: "/images/" + path.basename(r.main_image),
    }));
    res.json(recipes);
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
}

app.get("/recipes", getRecipes);


// ---- GET SINGLE RECIPE ----
app.get("/recipes/:id", async (req, res) => {
  const recipeId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT *
      FROM recipes r
      LEFT JOIN recipes_translations rt ON r.id = rt.recipe_id AND rt.locale = 'en'
      WHERE r.id = ?
    `, [recipeId]);
    if (rows[0]) {
      rows[0].main_image = "/images/" + path.basename(rows[0].main_image);
    }
    res.json(rows[0] || {});
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET INGREDIENTS ----
app.get("/recipes/:id/ingredients", async (req, res) => {
  const recipeId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT rit.id, rit.ingredient
      FROM recipe_ingredients ri
      JOIN recipe_ingredients_translations rit ON ri.id = rit.recipe_ingredient_id AND rit.locale = 'en'
      WHERE ri.recipe_id = ?
      ORDER BY ri.id
    `, [recipeId]);
    res.json(rows);
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET DIRECTIONS ----
app.get("/recipes/:id/directions", async (req, res) => {
  const recipeId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT rdt.id, rdt.instruction
      FROM recipe_directions rd
      JOIN recipe_directions_translations rdt ON rd.id = rdt.recipe_direction_id AND rdt.locale = 'en'
      WHERE rd.recipe_id = ?
      ORDER BY rd.step_number
    `, [recipeId]);
    res.json(rows);
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET NUTRITION ----
app.get("/recipes/:id/nutrition", async (req, res) => {
  const recipeId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT *
      FROM recipe_nutrition
      WHERE recipe_id = ?
    `, [recipeId]);
    res.json(rows[0] || {});
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET ALL CATEGORIES ----
app.get("/categories", async (req, res) => {
  try {
    const [rows] = await conn.execute(`
      SELECT c.id, c.image_url, ct.name, ct.description
      FROM categories c
      JOIN categories_translations ct ON c.id = ct.category_id
      WHERE ct.locale = 'en'
      ORDER BY ct.name
    `);
    res.json(rows);
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET CATEGORY INFO ----
app.get("/categories/:id", async (req, res) => {
  const categoryId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT c.id, c.image_url, ct.name, ct.description
      FROM categories c
      JOIN categories_translations ct ON c.id = ct.category_id
      WHERE c.id = ? AND ct.locale = 'en'
    `, [categoryId]);
    res.json(rows[0] || {});
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- GET RECIPES IN CATEGORY ----
app.get("/categories/:id/recipes", async (req, res) => {
  const categoryId = Number(req.params.id);
  try {
    const [rows] = await conn.execute(`
      SELECT r.id, r.main_image, rt.name, r.rating
      FROM recipe_categories rc
      JOIN recipes r ON rc.recipe_id = r.id
      LEFT JOIN recipes_translations rt ON r.id = rt.recipe_id AND rt.locale = 'en'
      WHERE rc.category_id = ?
    `, [categoryId]);

    const recipes = rows.map((r) => ({
      ...r,
      main_image: "/images/" + path.basename(r.main_image),
    }));

    res.json(recipes);
  } catch (err) {
    console.error("SQL ERROR:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// ---- START SERVER ----
app.listen(3000, () => console.log("API running on http://localhost:3000"));
