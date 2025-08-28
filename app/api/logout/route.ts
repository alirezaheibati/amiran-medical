import { destroySession } from "@/app/_lib/auth";
import { NextResponse } from "next/server";
/**
 * Handles user logout via POST request.
 *
 * Workflow:
 * - Calls `destroySession()` to invalidate the current session and clear the session cookie.
 * - If no active session is found, returns a 401 Unauthorized response.
 * - Otherwise, returns a success response indicating session termination.
 *
 * @returns {Promise<NextResponse>} JSON response with logout result or error.
 */
export async function POST() {
  const result = await destroySession();

  if (result?.error) {
    return NextResponse.json(result, { status: 401 });
  }

  return NextResponse.json(result);
}
