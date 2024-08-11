const express = require("express");
const router = express.Router();
const db = require("./db");

// Get all flashcards
// Get all flashcards
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM flashcards");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching flashcards:", err);
    res.status(500).json({ error: "Failed to fetch flashcards" });
  }
});

// Get a single flashcard by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM flashcards WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Flashcard not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new flashcard
router.post("/", async (req, res) => {
  const { question, answer } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO flashcards (question, answer) VALUES (?, ?)",
      [question, answer]
    );
    res.json({ id: result.insertId, question, answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit an existing flashcard
router.put("/:id", async (req, res) => {
  const { question, answer } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE flashcards SET question = ?, answer = ? WHERE id = ?",
      [question, answer, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Flashcard not found" });
    res.json({ id: req.params.id, question, answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a flashcard
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM flashcards WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Flashcard not found" });
    res.json({ message: "Flashcard deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;