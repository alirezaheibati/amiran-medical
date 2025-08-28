import BrandsBox from "../components/brands/BrandsBox";
import AdsBox from "../components/landing-banner/AdsBox";
import BlogBox from "../components/landing-blog/BlogBox";
import CategoriesSection from "../components/landing-cats/CategoriesSection";
import OffSaleBox from "../components/off-sale/OffSaleBox";
import Reviews from "../components/reviews/Reviews";
/**
 * Renders the homepage layout.
 * Includes promotional sections, product categories, reviews, blog highlights, and brand showcase.
 *
 * @returns {JSX.Element} The rendered homepage content.
 */
export default function Home() {
  return (
    <>
      <CategoriesSection />
      <OffSaleBox />
      <AdsBox />
      <Reviews />
      <BlogBox />
      <BrandsBox />
    </>
  );
}
