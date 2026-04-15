const express = require('express');
const app = express();

app.use(express.json());

const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');
const gameRoutes = require('./routes/game.routes');

app.use('/games', gameRoutes);
app.use('/movies', movieRoutes);
app.use('/cinemas', cinemaRoutes);

app.listen(3000, () => {
  console.log('🚀 Server en http://localhost:3000');
});