import { Lucia } from "lucia";
import { DrizzleMySQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "./db";
import { users, sessions } from "./schema";

/**
 * Defines the shape of user attributes exposed by Lucia.
 */
type LuciaUserAttributes = {
  /** The username of the user; can be null if not set */
  username: string | null;

  /** The email address of the user */
  email: string;
};

/**
 * Creates a Drizzle adapter for Lucia using the database and schema.
 */
const adapter = new DrizzleMySQLAdapter(db, sessions, users);

/**
 * Initializes Lucia authentication with custom user attributes and session cookie settings.
 */
const lucia = new Lucia<LuciaUserAttributes>(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      /** Ensures cookies are secure in production */
      secure: process.env.NODE_ENV === "production",
    },
  },
  /**
   * Maps raw database user data to LuciaUserAttributes.
   * @param data - Raw user data from the database
   * @returns Mapped user attributes
   */
  getUserAttributes: (data: any): LuciaUserAttributes => ({
    username: data.username,
    email: data.email,
  }),
});

export default lucia;
