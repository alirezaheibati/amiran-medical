/**
 * Represents a single category with metadata used throughout the system.
 *
 * @property id - Unique identifier for the category
 * @property name - Display name of the category
 * @property slug - URL-friendly identifier for routing and SEO
 * @property color - Associated color code (e.g., for UI styling)
 * @property description - Textual description of the category
 * @property image - Path or URL to the category image
 */
export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  color: string;
  description: string;
  image: string;
};
