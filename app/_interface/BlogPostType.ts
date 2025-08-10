/**
 * Represents a single blog post with all relevant metadata.
 *
 * @property id - Unique identifier for the blog post
 * @property slug - URL-friendly identifier used for routing and SEO
 * @property title - Title of the blog post
 * @property content - Main body content of the post (e.g., Markdown or HTML)
 * @property image - Path or URL to the featured image
 * @property created_at - ISO 8601 timestamp of when the post was created
 * @property category - Category or tag associated with the post
 */
export type BlogPostType = {
  id: string;
  slug: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  category: string;
};
