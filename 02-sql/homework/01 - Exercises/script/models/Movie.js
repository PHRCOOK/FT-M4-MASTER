const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      'movie',
      {
         title: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true,
         },
         year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            require: true,
         },
         ratings: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            require: true,
         },
         duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            require: true,
         },
         releaseDate: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true,
         },
         originalTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true,
         },
         storyline: {
            type: DataTypes.TEXT,
            allowNull: false,
            require: true,
         },
         actors: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            require: true,
         },
         posterurl: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true,
         },
      },
      { timestamps: false }
   );
};
