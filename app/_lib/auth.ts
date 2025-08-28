"use server";

import lucia from "./lucia-config";
import { cookies } from "next/headers";

/**
 * `createAuthSession(userId)` creates a new authenticated session for the given user
 * using Lucia Auth and sets the session cookie.
 *
 * Parameters:
 * @param userId The user's unique identifier (typically a UUID or string-based ID).
 */

export async function createAuthSession(userId: string) {
  // Create a new session for the user
  const session = await lucia.createSession(userId, {});

  // Generate the session cookie
  const sessionCookie = lucia.createSessionCookie(session.id);

  // Set the cookie in the response
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

/**
 * `verifyAuth()` validates the user's session using Lucia and returns the session/user status.
 *
 * Behavior:
 * - Retrieves the current session cookie using Next.js's `cookies()` API and Lucia's session cookie name.
 * - If the cookie or its value is missing, returns `{ user: null, session: null }`.
 * - Otherwise, calls `lucia.validateSession(sessionId)` to verify the session.
 */

export async function verifyAuth() {
  const sessionCookie = (await cookies()).get(lucia.sessionCookieName);

  const sessionId = sessionCookie?.value;
  if (!sessionId) {
    return { user: null, session: null };
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session?.fresh) {
      const newCookie = lucia.createSessionCookie(result.session.id);
      (await cookies()).set(
        newCookie.name,
        newCookie.value,
        newCookie.attributes
      );
    } else if (!result.session) {
      const blankCookie = lucia.createBlankSessionCookie();
      (await cookies()).set(
        blankCookie.name,
        blankCookie.value,
        blankCookie.attributes
      );
    }
  } catch {
    // Silently fail — optionally log if needed
  }

  return result;
}

/**
 * `destroySession()` invalidates the authenticated user's session and clears their session cookie.
 *
 * Behavior:
 * - Uses `verifyAuth()` to retrieve the current session.
 */

export async function destroySession() {
  const { session } = await verifyAuth();
  if (!session) {
    return { error: "Unauthorized!" };
  }

  await lucia.invalidateSession(session.id);

  const blankCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    blankCookie.name,
    blankCookie.value,
    blankCookie.attributes
  );
}
