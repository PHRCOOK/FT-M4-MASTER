require('dotenv').config();
const { Sequelize } = require('sequelize');
const firstLetterToCapital = require('./firstLetterToCapital');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/movies`,
   { logging: false, native: false }
);

Genre(sequelize);
Movie(sequelize);

sequelize.models = firstLetterToCapital(sequelize.models);

sequelize.models.Movie.belongsToMany(sequelize.models.Genre, {
   through: 'movie_genre',
});
sequelize.models.Genre.belongsToMany(sequelize.models.Movie, {
   through: 'movie_genre',
});

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
