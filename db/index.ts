import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
export const database = drizzle(neon(`${process.env.DATABASE_URL}`), {
  schema,
});

export function getDb() {
  return drizzle(neon(`${process.env.DATABASE_URL}`), { schema });
}
