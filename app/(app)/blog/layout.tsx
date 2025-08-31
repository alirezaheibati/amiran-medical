import LatastPosts from "@/app/components/blog/LatastPosts";
import PostCategories from "@/app/components/blog/PostCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amirean medical Blog",
  description: "Amiran Medical blogs in lots of categories",
};
/**
 * BlogLayout component that structures the blog page layout.
 * It displays the main blog content alongside a sidebar with latest posts and categories.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - Props containing React children elements.
 * @returns {JSX.Element} The layout structure for the blog page.
 */
export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto px-4 py-8 gap-6 text-[#003d5d]">
      <div className="lg:w-3/4 w-full">{children}</div>
      <article className="w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col justify-start items-stretch gap-4">
        <LatastPosts />
        <PostCategories />
      </article>
    </main>
  );
}
