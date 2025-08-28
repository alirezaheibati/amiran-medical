"use server";
/**
 * `createUser(email, password)` inserts a new user into the `users` table.
 *
 * Parameters:
 * @param string email: The user's email address.
 * @param string password: The user's password (assumed to be hashed before calling).
 */

// user.ts

import { users } from "./schema";
import { eq } from "drizzle-orm";
import { db } from "./db"; // assuming you have a db instance
import { hashUserPassword } from "./hash";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  // Normalize email for consistency
  const normalizedEmail = email.trim().toLowerCase();

  // Check for existing user
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.email, normalizedEmail));

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password securely
  const hashedPassword = hashUserPassword(password);

  const userId = crypto.randomUUID(); // Lucia expects string ID

  await db.insert(users).values({
    id: userId,
    email: normalizedEmail,
    username: name,
    hashedPassword,
  });

  return { success: true, userId };
}

export async function fetchUserByEmail(email: string) {
  const result = await db.select().from(users).where(eq(users.email, email));

  return result[0] ?? null; // Return the first match or null
}
