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
