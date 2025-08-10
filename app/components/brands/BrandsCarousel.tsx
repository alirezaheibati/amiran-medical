"use client";
import BrandCard from "./BrandCard";
import brand0 from "@/app/assets/brands/brand0.png";
import brand1 from "@/app/assets/brands/brand1.png";
import brand2 from "@/app/assets/brands/brand2.png";
import brand3 from "@/app/assets/brands/brand3.png";
import brand4 from "@/app/assets/brands/brand4.png";
import brand5 from "@/app/assets/brands/brand5.png";
import brand6 from "@/app/assets/brands/brand6.png";
import brand7 from "@/app/assets/brands/brand7.png";
import brand8 from "@/app/assets/brands/brand8.png";
import brand9 from "@/app/assets/brands/brand9.png";
const brands = [
  { id: "b0", image: brand0, name: "the Apovital brand logo" },
  { id: "b1", image: brand1, name: "the Hident brand logo" },
  { id: "b2", image: brand2, name: "the Molfix brand logo" },
  { id: "b3", image: brand3, name: "the Omron brand logo" },
  { id: "b4", image: brand4, name: "the Ryan brand logo" },
  { id: "b5", image: brand5, name: "the Segol brand logo" },
  { id: "b6", image: brand6, name: "the Paksaman brand logo" },
  { id: "b7", image: brand7, name: "the Nestle brand logo" },
  { id: "b8", image: brand8, name: "the Tanzib brand logo" },
  { id: "b9", image: brand9, name: "the Euorho vital brand logo" },
];
interface BrandsCarouselProps {
  activeSlide: number;
}
/**
 * A horizontal carousel component that displays brand logos.
 * The carousel shifts based on the `activeSlide` index to show different sets of logos.
 *
 * @component
 * @param {BrandsCarouselProps} props - Props for the carousel.
 * @param {number} props.activeSlide - Index of the active slide (used to control translation).
 * @returns {JSX.Element} A responsive carousel of brand cards.
 */
export default function BrandsCarousel({ activeSlide }: BrandsCarouselProps) {
  return (
    <div className="w-full overflow-hidden relative">
      <div
        className={`flex justify-around items-center w-[500%] sm:w-[333%] md:w-[250%] lg:w-[200%] xl:w-[166.66%] transition-transform duration-1000 ${
          activeSlide === 0
            ? "translate-x-0"
            : activeSlide === 1
            ? "translate-x-1/5"
            : activeSlide === 2
            ? "translate-x-2/5 xl:translate-x-2/5"
            : activeSlide === 3
            ? "translate-x-3/5 lg:translate-x-1/2"
            : "translate-x-4/5 sm:translate-x-[70%]"
        }`}
      >
        {brands.map((brand) => (
          <BrandCard key={brand.id} image={brand.image} alt={brand.name} />
        ))}
      </div>
    </div>
  );
}
