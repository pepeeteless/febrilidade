import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();

  await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
});

describe("GET /api/v1/migrations", () => {
  test("Returns all executed migrations", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });
});
