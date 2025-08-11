import { BlogPostType } from "../_interface/BlogPostType";
import { pool } from "@/app/_lib/db";
/**
 * Fetches the latest blog posts from the database.
 *
 * This function queries the `posts` table, ordering by the `created_at` field
 * in ascending order and limiting the result to 4 entries. It returns the result
 * as an array of `BlogPostType` objects.
 *
 * @async
 * @function
 * @returns {Promise<BlogPostType[]>} A promise that resolves to an array of blog post objects.
 * @throws Will throw an error if the database query fails.
 */
export async function getLatestPosts(): Promise<BlogPostType[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM `posts` ORDER BY `created_at` ASC LIMIT 4"
    );
    return rows as BlogPostType[];
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    throw err;
  }
}
/**
 * Retrieves the total number of blog posts from the database.
 *
 * Executes a SQL query to count all entries in the `posts` table.
 * Returns the count as a number. If the query fails, the error is logged and rethrown.
 *
 * @returns {Promise<number>} The total number of blog posts.
 * @throws Will throw an error if the database query fails.
 */
export async function getBlogPostsCount(): Promise<number> {
  try {
    const [rows] = await pool.execute("SELECT COUNT(*) AS count FROM `posts`");
    const count = (rows as any)[0]?.count ?? 0;
    return count;
  } catch (err) {
    console.error("Error fetching blog post count:", err);
    throw err;
  }
}
/**
 * Fetches the first page of blog posts from the database.
 *
 * Executes a SQL query to retrieve the earliest 8 posts from the `posts` table,
 * ordered by `created_at` in ascending order.
 *
 * @returns {Promise<BlogPostType[]>} An array of blog post objects.
 * @throws Will log and rethrow any error encountered during the database query.
 */
export async function getPostsFirstPage(): Promise<BlogPostType[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM `posts` ORDER BY `created_at` ASC LIMIT 8"
    );
    return rows as BlogPostType[];
  } catch (err) {
    console.error("Error fetching latest posts:", err);
    throw err;
  }
}
