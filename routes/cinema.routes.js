const express = require('express');
const router = express.Router();

const data = require('../data/cinemas.json');
let cinemas = [...data];


// GET ALL
router.get('/', (req, res) => {
  res.json(cinemas);
});


// GET BY ID
router.get('/:id', (req, res) => {
  const cinema = cinemas.find(c => c.id == req.params.id);

  if (!cinema) {
    return res.status(404).json({ error: 'Cine no encontrado' });
  }

  res.json(cinema);
});


// POST
router.post('/', (req, res) => {
  const newCinema = {
    id: cinemas.length + 1,
    name: req.body.name,
    movies: req.body.movies
  };

  cinemas.push(newCinema);
  res.status(201).json(newCinema);
});


// PUT
router.put('/:id', (req, res) => {
  const cinema = cinemas.find(c => c.id == req.params.id);

  if (!cinema) {
    return res.status(404).json({ error: 'Cine no encontrado' });
  }

  cinema.name = req.body.name || cinema.name;
  cinema.movies = req.body.movies || cinema.movies;

  res.json(cinema);
});


// DELETE
router.delete('/:id', (req, res) => {
  cinemas = cinemas.filter(c => c.id != req.params.id);

  res.json({ message: 'Cine eliminado' });
});

module.exports = router;