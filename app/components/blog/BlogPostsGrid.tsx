"use client";
import { BlogPostType } from "@/app/_interface/BlogPostType";
import BlogPostCard from "./BlogPostCard";
import { useEffect, useState } from "react";
import BlogPostsPagination from "./BlogPostsPagination";
interface BlogPostsGridProps {
  blogPosts: BlogPostType[];
  allPostsCount: number;
}
/**
 * Displays a paginated grid of blog post cards.
 *
 * Initializes with a list of blog posts and total post count, then handles pagination
 * by fetching additional posts from the `/api/blog` endpoint based on the current page.
 * Includes a pagination UI and uses suspense for loading fallback.
 *
 * @component
 * @param {BlogPostsGridProps} props - Props for the blog post grid.
 * @param {BlogPostType[]} props.blogPosts - Initial list of blog posts to display.
 * @param {number} props.allPostsCount - Total number of blog posts available.
 * @returns {JSX.Element} A responsive grid of blog post cards with pagination controls.
 */
export default function BlogPostsGrid({
  blogPosts,
  allPostsCount,
}: BlogPostsGridProps) {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<BlogPostType[]>(blogPosts);
  const perPage = 8;

  useEffect(() => {
    async function paginatePosts() {
      const result = await fetch(`/api/blog?limit=8&offset=${(page - 1) * 8}`);
      const posts = await result.json();

      setPosts(posts.posts);
    }
    paginatePosts();
  }, [page]);

  function increasePageHandler() {
    setPage((prev) => ++prev);
  }
  function decreasePageHandler() {
    setPage((prev) => --prev);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      {/* pagination */}
      <BlogPostsPagination
        onIncreasePage={increasePageHandler}
        onDecreasePage={decreasePageHandler}
        page={page}
        perPage={perPage}
        allPostsCount={allPostsCount}
      />
    </>
  );
}
