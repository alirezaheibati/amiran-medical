"use server";
import { createUser } from "@/app/_lib/users";
import { NextResponse } from "next/server";

/**
 * Handles user registration via POST request.
 *
 * Workflow:
 * - Parses `username`, `email`, and `password` from request body.
 * - Creates a new user record in the database (with internal password hashing).
 * - Initializes an authenticated session for the newly registered user.
 * - Returns success response with user ID.
 * - Handles duplicate email errors with localized messaging.
 * - Catches unexpected errors and returns a generic failure response.
 *
 * @param {Request} req - The incoming HTTP request containing signup credentials.
 * @returns {Promise<NextResponse>} JSON response with registration result or error.
 */
import { createAuthSession } from "@/app/_lib/auth";

export async function POST(req: Request) {
  const body = await req.json();
  const { username, email, password } = body;

  try {
    const { userId } = await createUser(username, email, password);

    await createAuthSession(userId);

    return NextResponse.json({
      message: "User registered successfully",
      userId,
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "Email already exists") {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "خطایی در ثبت‌نام رخ داد." },
      { status: 500 }
    );
  }
}
