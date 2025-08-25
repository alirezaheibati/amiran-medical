/**
 * Represents a single item in the shopping cart.
 *
 * @typedef {Object} CartItemType
 * @property {number} id - Unique identifier for the product
 * @property {string} name - Name of the product
 * @property {number} price - Original price of the product (before discount)
 * @property {string} description - Short description of the product
 * @property {string} image - URL or path to the product image
 * @property {string} category - Category name the product belongs to
 * @property {number} date - Timestamp representing when the product was added
 * @property {string} brand - Brand name of the product
 * @property {number} amount - Total available quantity of the product
 * @property {number} discount - Discount percentage applied to the product
 * @property {number} count - Quantity of this item added to the cart
 */
export type CartItemType = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  date: number;
  brand: string;
  amount: number;
  discount: number;
  count: number;
};
