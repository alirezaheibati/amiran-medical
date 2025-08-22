import { getBlogPostsCount, getPostsFirstPage } from "@/app/_lib/posts";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import BlogPostsGrid from "@/app/components/blog/BlogPostsGrid";
/**
 * Server-side component that renders the main blog page.
 *
 * Fetches the total number of blog posts and the first page of posts from the database.
 * Displays a header with the blog title and post count (converted to Persian digits),
 * followed by a grid of blog post cards with pagination.
 *
 * @component
 * @returns {Promise<JSX.Element>} The rendered blog page section.
 */
export default async function BlogPage() {
  const allPostsCount = await getBlogPostsCount();
  const blogPosts = await getPostsFirstPage();
  return (
    <section>
      <div className="flex justify-between items-center py-4 text-[#003d5d]">
        <h1 className="font-semibold text-2xl font-messiri">پست های وبلاگ</h1>
        <p className="flex justify-start items-center gap-0.5">
          <span className="font-semibold">{convertToPersianDigits(12)}</span>
          <span>مطلب موجود است.</span>
        </p>
      </div>
      <hr className="border-2 border-[#003d5d]/20 mb-8" />
      <BlogPostsGrid blogPosts={blogPosts} allPostsCount={allPostsCount} />
    </section>
  );
}
