import { pool } from "@/app/_lib/db";
import { ProductType } from "../_interface/ProductType";
/**
 * Fetches products from the database that have an active discount applied.
 * Executes a SQL query selecting items where `discount > 0` and returns
 * them as an array of `ProductType` objects.
 *
 * Commonly used to display promotional or on-sale products in the UI.
 *
 * @async
 * @function
 * @returns {Promise<ProductType[]>} Resolves with a list of discounted products
 * @throws {Error} If the database query fails
 */
export async function getOnOffProducts(): Promise<ProductType[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM products WHERE discount > 0"
    );
    return rows as ProductType[];
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
}
/**
 * Retrieves all products belonging to a specific category from the database.
 *
 * @param {string} category - The category name used to filter products.
 * @returns {Promise<ProductType[]>} - A promise that resolves to an array of products in the given category.
 * @throws Will throw an error if the query fails or the database connection encounters an issue.
 */
export async function getAllProductsOfCategory(
  category: string
): Promise<ProductType[]> {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM `products` WHERE `category` = ? ORDER BY `date` ASC",
      [category]
    );
    return rows as ProductType[];
  } catch (err) {
    console.error("Error fetching products of category:", err);
    throw err;
  }
}
