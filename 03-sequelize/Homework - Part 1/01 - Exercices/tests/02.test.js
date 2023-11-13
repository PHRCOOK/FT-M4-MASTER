const { db, Character, Ability, Role } = require("../db");

describe("Ejercicio 2 | Modelos DB", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  describe("Character", () => {
    test("Debe existir", () => {
      const Character = db.models.Character;
      expect(Character).toBeDefined();
    });

    test("Debe tener las propiedades correctas", async () => {
      const character = await Character.build({
        code: "12345",
        name: "Franco",
        age: 30,
        hp: 100.0,
        mana: 150.0,
      });
      const keys = ['race', 'code', 'name', 'age', 'hp', 'mana'];
      expect(Object.keys(character.toJSON())).toEqual(keys);
    });

    test("La propiedad code no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          age: 25,
          name: "Dai",
          hp: 128.0,
          mana: 112.0,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad name no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          age: 25,
          code: "12345",
          hp: 128.0,
          mana: 112.0,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad hp no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          age: 25,
          code: "12345",
          name: "Tincho",
          mana: 112.0,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad mana no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          age: 25,
          code: "12345",
          hp: 128.0,
          name: "Nacho",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("No debe contener los timestamps automáticos: createdAt y updatedAt", async () => {
      const character = await Character.create({
        age: 25,
        code: "234Af",
        hp: 128.0,
        name: "Ale",
        mana: 254.0
      });
      const timestamps = ['createdAt', 'updatedAt'];
      expect(Object.keys(character.toJSON())).not.toEqual(expect.arrayContaining(timestamps));
    })
  });

  describe("Ability", () => {
    test("Debe existir", () => {
      const Ability = db.models.Ability;
      expect(Ability).toBeDefined();
    });

    test("Debe tener las propiedades correctas", async () => {
      const ability = await Ability.build({
        name: "Auri",
        description: "Que buena habilidad",
        mana_cost: 153.99
      })
      const keys = ['id', 'name', 'description', 'mana_cost'];
      console.log(ability.toJSON());
      expect(Object.keys(ability.toJSON())).toEqual(keys);
    });

    test("La propiedad name no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          description: "create ability",
          mana_cost: 133.0,
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La propiedad mana_cost no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Character.create({
          description: "create ability",
          name: "power",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    test("La combinación de name y mana_cost debe ser única", async () => {
      expect.assertions(5);
      try {
        const abilityOne = await Ability.create({name: 'Fire Ball', mana_cost: 150.0});
        expect(abilityOne.toJSON()).toHaveProperty('name','Fire Ball');
        expect(abilityOne.toJSON()).toHaveProperty('mana_cost',150.0);
        const abilityTwo = await Ability.create({name: 'Fire Ball', mana_cost: 100.0});
        expect(abilityTwo.toJSON()).toHaveProperty('name','Fire Ball');
        expect(abilityTwo.toJSON()).toHaveProperty('mana_cost',100.0);
        await Ability.create({name: 'Fire Ball', mana_cost: 150.0});
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    })
  });

  describe("Role", () => {
    test("Debe existir", () => {
      const Role = db.models.Role;
      expect(Role).toBeDefined();
    });

    test("La propiedad name no puede ser null", async () => {
      expect.assertions(1);
      try {
        await Role.create({
          description: "role",
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });
  });

  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
});
