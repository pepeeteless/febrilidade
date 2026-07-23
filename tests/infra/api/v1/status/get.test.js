import { convertSegmentPathToStaticExportFilename } from "next/dist/shared/lib/segment-cache/segment-value-encoding";

describe("GET to /api/v1/status", () => {
  describe("Anonimous User", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);

      const responseBody = await response.json();
      console.log(responseBody);

      const parsedUpdatedAt = new Date(responseBody.updatedAt).toDateString();
      expect(responseBody.updatedAt).toEqual(parsedUpdatedAt);
      expect(responseBody.dependencies.database.version).toEqual("16.14");
      expect(responseBody.dependencies.database.max_connections).toEqual("100");
      expect(responseBody.dependencies.database.opened_connections).toEqual(1);
    });
  });
});
