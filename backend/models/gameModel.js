const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  developer: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
