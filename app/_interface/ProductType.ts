/**
 * Represents a product in the store's inventory system.
 *
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name or title of the product.
 * @property {number} price - Price of the product in local currency (before discount).
 * @property {string} description - Textual description of the product's features or usage.
 * @property {string} image - Relative or absolute path to the product's image file.
 * @property {string} category - Product grouping (e.g., "hygiene", "pillow", "sports-supplement").
 * @property {string} date - ISO 8601 date string indicating when the product was added.
 * @property {string} brand - Brand name or manufacturer.
 * @property {number} amount - Stock quantity available.
 * @property {number} discount - Discount applied to the product (absolute amount or percentage).
 */
export type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  date: string;
  brand: string;
  amount: number;
  discount: number;
};
