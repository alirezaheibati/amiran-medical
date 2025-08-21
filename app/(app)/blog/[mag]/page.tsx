import { getCategoryPosts } from "@/app/_lib/posts";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { mapPostCategoryToPersian } from "@/app/_utils/mapPostCatName";
import BlogPostCard from "@/app/components/blog/BlogPostCard";
interface BlogPostsCategoryPageProps {
  params: {
    mag: string;
  };
}
/**
 * Renders a blog category page displaying all posts under a specific magazine category.
 *
 * This asynchronous component fetches posts based on the `mag` parameter,
 * converts the post count to Persian digits, maps the category name to Persian,
 * and displays a grid of blog post cards. If no posts are found, a fallback message is shown.
 *
 * @param {Object} props - The props object containing route parameters.
 * @param {Object} props.params - The dynamic route parameters.
 * @param {string} props.params.mag - The magazine/category identifier used to fetch posts.
 *
 * @returns {JSX.Element} A section element containing the category title, post count, and post cards.
 */
export default async function BlogPostsCategoryPage({
  params,
}: BlogPostsCategoryPageProps) {
  const resolvedParams = await params;
  const CategoryPosts = await getCategoryPosts(resolvedParams.mag);
  const allPostsCount = CategoryPosts.length;
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center py-4 text-[#003d5d]">
        <h1 className="font-semibold text-2xl font-messiri">
          پست های دسته {mapPostCategoryToPersian(resolvedParams.mag)}
        </h1>
        <p className="flex justify-start items-center gap-0.5">
          <span className="font-semibold">
            {convertToPersianDigits(allPostsCount)}
          </span>
          <span>مطلب موجود است.</span>
        </p>
      </div>
      <hr className="border-2 border-[#003d5d]/20 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mb-16">
        {allPostsCount < 1 && <p>مطلب در دسته بندی انتخابی موجود نمیباشد.</p>}
        {CategoryPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
