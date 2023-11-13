const { Movie, conn, Genre } = require('./Utils/sequelize');
const saveInfoInDB = require('./Utils/saveInfoInDB');
const saveInfoInDBWithRelation = require('./Utils/saveInfoInDBWithRelation');
const moviesJson = require('./Utils/movies.json');
const genreJson = require('./Utils/generos.json');

conn
   .sync({ force: true })
   .then(() => saveInfoInDB(moviesJson, Movie))
   .then(() => saveInfoInDBWithRelation(genreJson, Genre, Movie))
   .then(() =>
      console.log('Tu base de datos se a cargado con información correctamente')
   )
   .catch((err) => {
      console.log(err.message);
   });
