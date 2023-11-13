const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Character = sequelize.define(
    "Character",
    {
      code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
        validate: {
          customValidator(value) {
            if (value && value.toLowerCase() === "henry") {
              throw new Error("El código no puede ser 'HENRY'.");
            }
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notIn: [["Henry", "SoyHenry", "Soy Henry"]],
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      race: {
        type: DataTypes.ENUM(
          "Human",
          "Elf",
          "Machine",
          "Demon",
          "Animal",
          "Other"
        ),
        defaultValue: "Other",
        allowNull: true,
      },
      hp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mana: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Character;
};
