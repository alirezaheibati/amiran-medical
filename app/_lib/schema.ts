import { mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";
/**
 * Defines the schema for the 'users' table.
 * Used by Lucia for authentication and user management.
 */
export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(), // Lucia expects string ID
  email: varchar("email", { length: 255 }).notNull().unique(), // unique email
  username: varchar("username", { length: 255 }), // optional username
  hashedPassword: varchar("hashed_password", { length: 255 }).notNull(), // bcrypt hash
});
/**
 * Defines the schema for the 'sessions' table.
 * Stores session data for authenticated users.
 */
export const sessions = mysqlTable("sessions", {
  id: varchar("id", { length: 255 }).primaryKey(), // session ID
  userId: varchar("user_id", { length: 255 }).notNull(), // must match users.id
  expiresAt: timestamp("expires_at").notNull(), // Lucia expects this exact name
});
