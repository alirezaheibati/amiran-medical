import { ReviewType } from "../_interface/ReviewType";
import { pool } from "@/app/_lib/db";
/**
 * Fetches all product reviews from the database.
 *
 * @returns A promise that resolves to an array of ReviewType objects.
 * @throws Will throw an error if the query execution fails.
 */
export async function getAllReviews(): Promise<ReviewType[]> {
  try {
    const [rows] = await pool.execute("SELECT * FROM reviews");
    return rows as ReviewType[];
  } catch (err) {
    console.error("Error fetching reviews:", err);
    throw err;
  }
}
