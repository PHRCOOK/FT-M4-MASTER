const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Ability = sequelize.define(
    "Ability",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 10.0,
          max: 250.0,
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["name", "mana_cost"],
          name: "compositeIndex",
        },
      ],
    }
  );
  return Ability;
};
