const { db, Character, Ability } = require("../db");


describe("Ejercicio 3 | Validaciones", () => {
    beforeAll(async () => {
        await db.sync({ force: true });
    });

    test("Ability | El valor de mana_cost debe estar entre 10.0 y 250.0", async () => {
        expect.assertions(1);
        try {
            await Ability.create({
                name: "Thunderbolt",
                description: "An incredibly powerful thunderbolt",
                mana_cost: 534.87
            });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    });

    test("Character | El valor de name no puede ser Henry", async () => {
        expect.assertions(1);
        try {
            await Character.create({
                code: "234Db",
                age: 25,
                name: "Henry",
                hp: 128.0,
                mana: 112.0,
              });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    })

    test("Character | El valor de name no puede ser SoyHenry", async () => {
        expect.assertions(1);
        try {
            await Character.create({
                code: "178hb",
                age: 25,
                name: "SoyHenry",
                hp: 132.0,
                mana: 182.0,
              });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    })

    test("Character | El valor de name no puede ser Soy Henry", async () => {
        expect.assertions(1);
        try {
            await Character.create({
                code: "278fD",
                age: 45,
                name: "Soy Henry",
                hp: 115.0,
                mana: 152.0,
              });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    })

    test("Character | El valor de code no puede ser HENRY en mayúsculas", async () => {
        expect.assertions(1);
        try {
            await Character.create({
                code: "HENRY",
                age: 25,
                name: "Dai",
                hp: 115.0,
                mana: 152.0,
              });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    });

    test("Character | El valor de code no puede ser HENRY en minísculas", async () => {
        expect.assertions(1);
        try {
            await Character.create({
                code: "henry",
                age: 31,
                name: "Pipe",
                hp: 115.0,
                mana: 152.0,
              });
        } catch (error) {
            expect(error.message).toBeDefined();
        }
    })

    afterAll(async () => {
        await db.sync({ force: true });
        db.close();
    });
})