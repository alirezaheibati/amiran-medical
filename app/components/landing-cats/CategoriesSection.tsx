import CategoryCard from "./CategoryCard";
import Heading from "./Heading";
import { getCategoriesList } from "@/app/_lib/categories";
/**
 * Renders the main category browsing section.
 *
 * Fetches a list of product categories from the database and displays them
 * as interactive cards beneath a heading. Optimized for responsive layout.
 *
 * @component
 * @returns {Promise<JSX.Element>} A section element showing available categories
 */
export default async function CategoriesSection() {
  const categories = await getCategoriesList();
  return (
    <section className="max-w-7xl mx-auto p-4 py-16 ">
      <Heading />
      <div className="flex justify-center items-start flex-wrap gap-6 py-8 md:py-16 ">
        {categories.map((cat) => (
          <CategoryCard category={cat} key={cat.slug} />
        ))}
      </div>
    </section>
  );
}
