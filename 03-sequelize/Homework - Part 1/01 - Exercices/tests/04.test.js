const request = require("supertest");
const { db, Character } = require("../db");
const server = require("../server");

describe("Parte 2 | Character Routes", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  describe("POST /character", () => {
    test("Si no recibe todos los parámetros necesarios, debe responder con un estado 404 y el mensaje correspondiente", async () => {
      const res = await request(server).post("/character");
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe("Falta enviar datos obligatorios");
    });

    test("Si alguna validación de la db falla, debe responder con un estado 404 y el mensaje correspondiente", async () => {
      const res = await request(server)
        .post("/character")
        .send({ code: "DAIANA", name: "Dai", hp: 100.0, mana: 120.0 });
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe("Error en alguno de los datos provistos");
    });

    test("Si recibe todos los parámetros necesarios, debe responder con un estado 201 y el personaje creado", async () => {
      const res = await request(server)
        .post("/character")
        .send({ code: "NACHO", name: "Ignacio", hp: 100.0, mana: 120.0 });
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({
        code: "NACHO",
        name: "Ignacio",
        hp: 100.0,
        mana: 120.0,
        age: null,
        race: "Other",
      });
    });

    afterAll(async () => {
      await db.sync({ force: true });
    });
  });

  describe("GET /character", () => {
    beforeAll(async () => {
      const p1Character = Character.create({
        code: "ONE",
        name: "First",
        hp: 90.0,
        mana: 150.0,
        race: "Human",
        age: 27,
      });
      const p2Character = Character.create({
        code: "TWO",
        name: "Second",
        hp: 135.0,
        mana: 40.0,
        race: "Machine",
        age: 20,
      });
      const p3Character = Character.create({
        code: "THREE",
        name: "Third",
        hp: 110.0,
        mana: 110.0,
        race: "Human",
        age: 23,
      });
      const [p1, p2, p3] = await Promise.all([
        p1Character,
        p2Character,
        p3Character,
      ]);
      // await Promise.all([
      //   p1.createRole({ name: "Tank" }),
      //   p1.createRole({ name: "Top" }),
      //   p2.createRole({ name: "Jungle" }),
      //   p3.createRole({ name: "Mid" }),
      //   p3.createRole({ name: "Support" }),
      // ]);
    });

    test("Debe responder con un estado 200 y la lista de los personajes", async () => {
      const res = await request(server).get("/character");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        {
          code: "ONE",
          name: "First",
          hp: 90.0,
          mana: 150.0,
          age: 27,
          race: "Human",
        },
        {
          code: "TWO",
          name: "Second",
          hp: 135.0,
          mana: 40.0,
          age: 20,
          race: "Machine",
        },
        {
          code: "THREE",
          name: "Third",
          hp: 110.0,
          mana: 110.0,
          age: 23,
          race: "Human",
        },
      ]);
    });

    test("Si recibe una raza por query, debe responder con la lista de personajes que matcheen con ella", async () => {
      const res = await request(server).get("/character?race=Human");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        expect.objectContaining({
          code: "ONE",
          name: "First",
          hp: 90.0,
          race: "Human",
        }),
        expect.objectContaining({
          code: "THREE",
          name: "Third",
          hp: 110.0,
          race: "Human",
        }),
      ]);
    });

    test("Si recibe raza y edad por query, debe responder con la lista de personajes que matcheen con ambas querys", async () => {
      await Character.create({
        code: "FOUR",
        name: "Fourth",
        hp: 48.0,
        mana: 65.0,
        age: 27,
      });
      const res = await request(server).get("/character?race=Human&age=27");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([
        expect.objectContaining({
          code: "ONE",
          name: "First",
          hp: 90.0,
          race: "Human",
          age: 27,
        }),
      ]);
    });
  });

  describe("GET /character/:code", () => {
    test("Debe responder con el personaje que coincida con el code recibido por params", async () => {
      const res = await request(server).get("/character/TWO");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        code: "TWO",
        name: "Second",
        hp: 135.0,
        mana: 40.0,
        age: 20,
        race: "Machine",
      });
    });

    test("Si el code recibido por params es inválido, debe responder con un estado 404 y el mensaje correspondiente", async () => {
      const res = await request(server).get("/character/FIFTH");
      expect(res.statusCode).toBe(404);
      expect(res.text).toBe(
        "El código FIFTH no corresponde a un personaje existente"
      );
    });
  });

  describe("PUT /character/:attribute?value=...", () => {
    test("Debe modificar el atributo recibido por params y reemplazarlo por el value recibido por query", async () => {
      const five = Character.create({
        code: "FIVE",
        name: "Fifth",
        hp: 15.0,
        mana: 500.0,
      });
      const six = Character.create({
        code: "SIX",
        name: "Sixth",
        hp: 305.0,
        mana: 23.0,
        age: 35,
      });
      const seven = Character.create({
        code: "SEVEN",
        name: "Seventh",
        hp: 305.0,
        mana: 23.0,
      });
      await Promise.all([five, six, seven]);
      const res = await request(server).put("/character/age?value=40");
      const characters = await Character.findAll();
      const with40years = characters.filter((c) => c.age === 40);
      expect(with40years).toEqual([
        expect.objectContaining({ code: "FIVE", age: 40 }),
        expect.objectContaining({ code: "SEVEN", age: 40 }),
      ]);
      expect(res.text).toBe("Personajes actualizados");
    });
  });
});
