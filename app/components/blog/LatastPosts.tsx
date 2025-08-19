import { getLatestPosts } from "@/app/_lib/posts";
import { mapPostCategoryToPersian } from "@/app/_utils/mapPostCatName";
import Image from "next/image";
import Link from "next/link";
/**
 * LatastPosts component displays a list of the latest blog posts.
 *
 * This asynchronous React Server Component fetches the most recent blog posts
 * using `getLatestPosts()` and renders them in a styled list. Each post includes
 * a thumbnail image, title, and its category name in Persian.
 *
 * @component
 * @async
 * @returns {JSX.Element} A styled list of the latest blog posts with links and images.
 */
export default async function LatastPosts() {
  const latestPosts = await getLatestPosts();

  return (
    <div className="rounded-lg border border-gray-200 p-4 mb-4">
      <h1 className="font-semibold font-messiri">آخرین مطالب</h1>
      <hr className="mb-4 mt-3" />
      <ul className="flex flex-col justify-start items-center">
        {latestPosts.map((post) => (
          <li
            className="mb-2 last:mb-0 w-full hover:bg-gray-100 rounded-md"
            key={post.id}
          >
            <Link
              href={`/blog/${post.category}/${post.slug}`}
              className="flex justify-start items-center gap-2"
            >
              <div className="relative shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={75}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <div className="text-xs">
                <p className="line-clamp-1 text-sm">{post.title}</p>
                <p>{mapPostCategoryToPersian(post.category)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
