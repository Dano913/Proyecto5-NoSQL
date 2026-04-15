const express = require('express');
const router = express.Router();

const data = require('../data/movies.json');
let movies = [...data];


// GET ALL
router.get('/', (req, res) => {
  res.json(movies);
});


// GET BY ID
router.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);

  if (!movie) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }

  res.json(movie);
});


// POST
router.post('/', (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    title: req.body.title
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});


// PUT
router.put('/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);

  if (!movie) {
    return res.status(404).json({ error: 'Película no encontrada' });
  }

  movie.title = req.body.title;
  res.json(movie);
});


// DELETE
router.delete('/:id', (req, res) => {
  movies = movies.filter(m => m.id != req.params.id);

  res.json({ message: 'Película eliminada' });
});

module.exports = router;