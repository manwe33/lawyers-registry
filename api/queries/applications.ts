import { eq, desc } from "drizzle-orm";
import { getDb } from "./connection";
import { applications, type InsertApplication } from "@db/schema";

export async function createApplication(data: InsertApplication) {
  const db = getDb();
  const result = await db.insert(applications).values(data);
  return result;
}

export async function getApplications() {
  const db = getDb();
  return db.select().from(applications).orderBy(desc(applications.createdAt));
}

export async function getApplicationById(id: number) {
  const db = getDb();
  return db.select().from(applications).where(eq(applications.id, id));
}

export async function updateApplicationStatus(id: number, status: "pending" | "reviewing" | "approved" | "rejected") {
  const db = getDb();
  return db.update(applications).set({ status }).where(eq(applications.id, id));
}
