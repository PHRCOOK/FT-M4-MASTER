const { db } = require("../db");

describe("Conexión a la base de datos", () => {
  test("Debe establecerse correctamente la conexión", async () => {
    try {
      await db.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  test("Debe ser posible realizar operaciones en la base de datos", async () => {
    try {
      await db.query("SELECT 1 + 1");
      expect(true).toBe(true);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });
});
