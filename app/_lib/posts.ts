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
/**
 * Retrieves blog posts from the database that belong to a specific category.
 *
 * Executes a SQL query to select all posts from the `posts` table
 * where the `category` matches the provided parameter. Results are
 * ordered by the `created_at` timestamp in ascending order.
 *
 * @param {string} category - The category name used to filter blog posts.
 * @returns {Promise<BlogPostType[]>} A promise that resolves to an array of blog posts matching the category.
 * @throws Will throw an error if the database query fails.
 */
export async function getCategoryPosts(
  category: string
): Promise<BlogPostType[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM `posts` WHERE `category` = ? ORDER BY `created_at` ASC",
      [category]
    );
    return rows as BlogPostType[];
  } catch (err) {
    console.error("Error fetching posts of category:", err);
    throw err;
  }
}

import { RowDataPacket } from "mysql2";
/**
 * Retrieves a blog post from the database by given slug.
 *
 * Executes a SQL query to select a post from the `posts` table
 * where the `slug` matches the provided parameter.
 *
 * @param {string} slug - The post slug used to fetch blog posts.
 * @returns {Promise<BlogPostType>} A promise that resolves to a blog post matching the slug.
 * @throws Will throw an error if the database query fails.
 */
export async function getPostBySlug(slug: string): Promise<BlogPostType> {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM `posts` WHERE `slug` = ? LIMIT 1",
      [slug]
    );

    if (rows.length === 0) {
      throw new Error("Post not found");
    }

    return rows[0] as BlogPostType;
  } catch (err) {
    console.error("Error fetching post by slug:", err);
    throw err;
  }
}

type CategoryCount = {
  category: string;
  count: number;
};
/**
 * Retrieves a list of blog post categories along with the count of posts in each category.
 *
 * Executes a SQL query that groups posts by their `category` field and counts
 * the number of posts in each group. Useful for generating category filters,
 * tag clouds, or analytics dashboards.
 *
 * @returns {Promise<CategoryCount[]>} A promise that resolves to an array of category-count pairs.
 * @throws Will throw an error if the database query fails.
 */
export async function getPostCategories(): Promise<CategoryCount[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT `category`, COUNT(*) AS count FROM `posts` GROUP BY `category`"
    );
    return rows as CategoryCount[];
  } catch (err) {
    console.error("Error fetching post categories:", err);
    throw err;
  }
}
