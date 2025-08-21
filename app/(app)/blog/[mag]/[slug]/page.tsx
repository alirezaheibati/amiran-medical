import { getPostBySlug } from "@/app/_lib/posts";
import Breadcrumb from "@/app/components/blog/Breadcrumb";
import Image from "next/image";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
/**
 * Renders a blog post page based on the provided slug identifier.
 *
 * This asynchronous component fetches post data using the slug from the URL parameters,
 * and displays the post content including title, image, and HTML-formatted body.
 * It also includes a breadcrumb navigation component for contextual navigation.
 *
 * @param {Object} props - The props object containing route parameters.
 * @param {Object} props.params - The dynamic route parameters.
 * @param {string} props.params.slug - The unique identifier for the blog post.
 *
 * @returns {JSX.Element} A rendered blog post page section.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;

  const post = await getPostBySlug(resolvedParams.slug);
  return (
    <section className="max-w-7xl mx-auto p-8 border border-gray-200 rounded-md">
      <Breadcrumb post={post} />
      <hr className="my-6" />
      <h1 className="text-[#003d5d] text-2xl font-messiri mb-4 font-semibold">
        {post.title}
      </h1>
      <div className="relative w-full aspect-3/2 mb-8">
        <Image src={post.image} alt={post.title} fill className="rounded-md" />
      </div>
      <div
        className="[&_p]:mb-2 [&_h2]:font-semibold [&_h2]:text-xl [&_ul]:px-4 [&_ul]:my-2 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
}
