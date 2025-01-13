const express = require("express");
const router = express.Router();
const Game = require("../models/gameModel");

// Create Game
router.post("/", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ message: "Error creating game", error });
  }
});

// Read All Games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Error fetching games", error });
  }
});

// Read Single Game
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: "Error fetching game", error });
  }
});

// Update Game
// Update Game
router.put("/:id", async (req, res) => {
  const { id } = req.params; // Mengambil id dari URL params
  const { name, developer, genre, price } = req.body; // Data yang akan diupdate

  try {
    // Mengupdate game berdasarkan id
    const game = await Game.findByIdAndUpdate(
      id,
      { name, developer, genre, price },
      { new: true } // Mengembalikan game yang sudah diperbarui
    );

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.json(game); // Mengirimkan game yang sudah diperbarui
  } catch (error) {
    console.error("Error updating game:", error);
    res.status(400).json({ message: "Error updating game", error });
  }
});

// Delete Game
router.delete("/:id", async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting game", error });
  }
});

module.exports = router;
