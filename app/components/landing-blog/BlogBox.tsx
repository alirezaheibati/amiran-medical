import { getLatestPosts } from "@/app/_lib/posts";
import PostCard from "./PostCard";
import BlogsHeading from "./BlogsHeading";
/**
 * `BlogBox` is an asynchronous React Server Component that fetches and displays
 * the latest blog posts in a responsive grid layout. It includes a heading and
 * a list of `PostCard` components for each post.
 *
 * @async
 * @function
 * @returns {Promise<JSX.Element>} A section element containing blog post previews.
 */
export default async function BlogBox() {
  const posts = await getLatestPosts();
  return (
    <section className="max-w-7xl mx-auto py-8 md:py-16 text-[#003d5d] overflow-hidden">
      <BlogsHeading />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 px-2 md:px-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
}
