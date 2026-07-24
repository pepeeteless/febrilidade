import database from "infra/database.js";

describe("DATABASE CONNECTIONS", () => {
  test("Connecting to Database", async () => {
    const result = await database.query("SELECT 1 + 1 as value;");
    expect(result.rows[0].value).toBe(2);
  });
});
