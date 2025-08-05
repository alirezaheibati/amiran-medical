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
