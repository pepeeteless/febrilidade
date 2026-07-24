import database from "infra/database";
import { resolve } from "node:path";
import { runner } from "node-pg-migrate";

export default async function migrations(request, response) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method ${request.method} not allowed!`,
    });
  }
  let dbClient;

  try {
    dbClient = await database.getNewClient();

    if (request.method == "GET") {
      const pendingMigrations = await database.query(
        "SELECT * FROM pgmigrations ORDER BY run_on DESC",
      );

      return response.status(200).json(pendingMigrations.rows);
    }

    const defaultMigrationOptions = {
      dbClient: dbClient,
      dir: resolve("infra", "migrations"),
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
    };

    if (request.method == "POST") {
      const migratedMigrations = await runner(defaultMigrationOptions);
      if (migratedMigrations.length > 0) {
        return response.status(201).json({ migratedMigrations });
      }
      return response.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (dbClient) {
      await dbClient.end();
    }
  }
}
