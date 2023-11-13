const { Sequelize, Op } = require("sequelize");
const modelCharacter = require("./models/Character.js");
const modelAbility = require("./models/Ability.js");
const modelRole = require("./models/Role.js");

const db = new Sequelize(
  "postgres://postgres:P1234567@localhost:5432/henrydatabase",
  {
    logging: false,
  }
);

// const { Character, Ability, Role } = db.models;

// Character.hasOne(Ability); // Un personaje tiene una habilidad (relación uno a uno)
// Ability.belongsTo(Character); // Una habilidad pertenece a un personaje (relación uno a uno)

// Character.belongsToMany(Role, { through: "CharacterRole" }); // Un personaje pertenece a muchos roles (relación muchos a muchos)
// Role.belongsToMany(Character, { through: "CharacterRole" }); // Un

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
  ...db.models,
  db,
  Op,
};
