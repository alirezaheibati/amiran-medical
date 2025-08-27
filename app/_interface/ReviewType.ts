/**
 * Represents a product review submitted by a user.
 *
 * @property {number} id - Unique identifier for the review.
 * @property {string} writer - Name of the person who wrote the review.
 * @property {string} review - Text content of the review.
 * @property {string} product_image - URL or path to the image of the reviewed product.
 * @property {string} avatar - URL or path to the avatar of the reviewer.
 * @property {string} product_name - Name of the product being reviewed.
 */
export type ReviewType = {
  id: number;
  writer: string;
  review: string;
  product_image: string;
  avatar: string;
  product_name: string;
};
