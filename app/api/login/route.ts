import { createAuthSession } from "@/app/_lib/auth";
import { verifyPassword } from "@/app/_lib/hash";
import { fetchUserByEmail } from "@/app/_lib/users";
import { NextResponse } from "next/server";
/**
 * Handles user login via POST request.
 *
 * Workflow:
 * - Parses email and password from request body.
 * - Fetches user by email from the database.
 * - Verifies password using secure hash comparison.
 * - If valid, creates an authenticated session and returns user data.
 * - If invalid, returns an error message in Persian.
 * - Catches and logs unexpected errors, returning a generic failure response.
 *
 * @param {Request} req - The incoming HTTP request containing login credentials.
 * @returns {Promise<NextResponse>} JSON response with login result or error.
 */
export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await fetchUserByEmail(email);
    const isLogin = verifyPassword(user.hashedPassword, password);

    if (isLogin) {
      await createAuthSession(user.id);
      return NextResponse.json({
        message: "User logined successfully",
        user,
      });
    } else {
      return NextResponse.json(
        { error: "نام کاربری با رمز عبور تطابق ندارد." },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.log(error);

    return NextResponse.json(
      { error: "خطایی در ورود به اکانت رخ داد." },
      { status: 500 }
    );
  }
}
