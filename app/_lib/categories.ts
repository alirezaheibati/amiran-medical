import { pool } from "@/app/_lib/db";
import { CategoryType } from "../_interface/CategoryType";
/**
 * Retrieves the list of all category records from the database.
 *
 * Executes a SQL query to select all rows from the `categories` table
 * and returns them as an array of `CategoryType` objects.
 *
 * @returns {Promise<CategoryType[]>} A promise resolving to an array of category objects
 */
export async function getCategoriesList(): Promise<CategoryType[]> {
  try {
    const [rows] = await pool.execute("SELECT * FROM categories");
    return rows as CategoryType[];
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err;
  }
}
/**
 * Fetches a category from the database by its slug.
 *
 * @param {string} slug - The unique slug identifier for the category.
 * @returns {Promise<CategoryType>} - A promise that resolves to the matching category object.
 * @throws Will throw an error if no category is found or if the query fails.
 */
import { RowDataPacket } from "mysql2";
export async function getCategoryBySlug(slug: string): Promise<CategoryType> {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM `categories` WHERE `slug` = ? LIMIT 1",
      [slug]
    );

    if (rows.length === 0) {
      throw new Error("Category not found");
    }

    return rows[0] as CategoryType;
  } catch (err) {
    console.error("Error fetching category by slug:", err);
    throw err;
  }
}
