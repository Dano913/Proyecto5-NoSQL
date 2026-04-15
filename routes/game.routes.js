const express = require('express');
const router = express.Router();

const data = require('../data/games.json');
let games = [...data];


// GET ALL
router.get('/', (req, res) => {
  res.json(games);
});


// GET BY ID
router.get('/:id', (req, res) => {
  const game = games.find(g => g.id == req.params.id);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }

  res.json(game);
});


// POST
router.post('/', (req, res) => {
  const newGame = {
    id: games.length + 1,
    name: req.body.name,
    genre: req.body.genre
  };

  games.push(newGame);
  res.status(201).json(newGame);
});


// PUT
router.put('/:id', (req, res) => {
  const game = games.find(g => g.id == req.params.id);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado' });
  }

  game.name = req.body.name || game.name;
  game.genre = req.body.genre || game.genre;

  res.json(game);
});


// DELETE
router.delete('/:id', (req, res) => {
  games = games.filter(g => g.id != req.params.id);

  res.json({ message: 'Juego eliminado' });
});

module.exports = router;