import { pool } from "@/app/_lib/db";
import { NextResponse } from "next/server";
/**
 * Handles GET requests to retrieve a paginated list of posts from the database.
 *
 * Extracts `limit` and `offset` query parameters from the request URL to control pagination.
 * Validates the parameters to ensure they are within acceptable bounds.
 * Queries the `posts` table, ordering by `created_at` in descending order.
 *
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response containing either:
 * - an array of posts if the query is successful, or
 * - an error message with status 400 if the parameters are invalid.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  // validate values
  if (isNaN(limit) || isNaN(offset) || limit < 1 || offset < 0) {
    return NextResponse.json(
      { error: "Invalid limit or offset" },
      { status: 400 }
    );
  }

  const [rows] = await pool.query(
    "SELECT * FROM `posts` ORDER BY `created_at` DESC LIMIT ? OFFSET ?",
    [limit, offset]
  );

  return NextResponse.json({ posts: rows });
}
