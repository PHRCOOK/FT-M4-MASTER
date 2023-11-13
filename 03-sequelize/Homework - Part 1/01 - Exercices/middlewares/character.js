const { Router } = require("express");
const { Op, Character } = require("../db");
const router = Router();

// POST /character
router.post("/", async (req, res) => {
  const { code, name, hp, mana } = req.body;
  if (!code || !name || !hp || !mana) {
    return res.status(404).send("Falta enviar datos obligatorios");
  }
  try {
    const character = await Character.create({
      code,
      name,
      hp,
      mana,
      age: null,
      race: "Other",
    });
    return res.status(201).json(character);
  } catch (error) {
    return res.status(404).send("Error en alguno de los datos provistos");
  }
});

// GET /character
router.get("/", async (req, res) => {
  const { race, age } = req.query;
  let whereClause = {};
  if (race) {
    whereClause.race = race;
  }
  if (age) {
    whereClause.age = age;
  }
  try {
    const characters = await Character.findAll({ where: whereClause });
    return res.json(characters);
  } catch (error) {
    return res.status(404).send("Error al obtener los personajes");
  }
});

// GET /character/:code
router.get("/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const character = await Character.findOne({ where: { code } });
    if (!character) {
      return res
        .status(404)
        .send(`El código ${code} no corresponde a un personaje existente`);
    }
    return res.json(character);
  } catch (error) {
    return res.status(404).send("Error al obtener el personaje");
  }
});

// PUT /character/:attribute?value=...
router.put("/:attribute", async (req, res) => {
  const { attribute } = req.params;
  const { value } = req.query;
  try {
    const result = await Character.update(
      { [attribute]: value },
      { where: { [attribute]: null } }
    );
    if (result[0] > 0) {
      return res.send("Personajes actualizados");
    }
    return res.status(404).send("No se encontraron personajes para actualizar");
  } catch (error) {
    return res.status(404).send("Error al actualizar los personajes");
  }
});

module.exports = router;
