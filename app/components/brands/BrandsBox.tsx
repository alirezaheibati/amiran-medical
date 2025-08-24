"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BrandsCarousel from "./BrandsCarousel";
/**
 * A responsive container component that displays a carousel of brand logos.
 * Includes navigation buttons and adapts the number of visible slides based on screen width.
 *
 * @component
 * @returns {JSX.Element} A section with a heading and a navigable brand carousel.
 */
export default function BrandsBox() {
  const [width, setWidth] = useState(globalThis.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);
  // Decreases the active slide index (if greater than 0)
  function slideCountDecreaseHandler() {
    setActiveSlide((prev) => {
      if (prev > 0) return --prev;
      else return prev;
    });
  }
  // Increases the active slide index based on screen width and max allowed slides
  function slideCountIncreaseHandler() {
    setActiveSlide((prev) => {
      if (width < 768 && prev < 4) return ++prev;
      else if (width >= 768 && width < 1280 && prev < 3) return ++prev;
      else if (width >= 1280 && prev < 2) return ++prev;
      else return prev;
    });
  }
  /**
   * Resets the active slide index to 0 whenever the screen is resized.
   * Ensures the carousel starts from the beginning on layout changes.
   */
  useEffect(() => {
    window.addEventListener("resize", () => setActiveSlide(0));

    return () => {
      window.removeEventListener("resize", () => setActiveSlide(0));
    };
  }, []);
  /**
   * Updates the `width` state whenever the screen is resized.
   * Used to determine how many slides are visible at once.
   */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="max-w-7xl mx-auto pb-16 overflow-hidden">
      <h2 className="font-messiri font-semibold text-3xl text-center text-[#003d5d] mb-4">
        محبوبترین برندها
      </h2>
      <div className="w-full rounded-xl border border-gray-200 overflow-hidden py-4">
        <div className="px-6 relative">
          <button
            className="absolute left-1.5 top-1/2 -translate-y-1/2 text-2xl cursor-pointer hover:scale-125 transition-transform"
            onClick={slideCountDecreaseHandler}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="" />
          </button>
          <button
            className="absolute right-1.5 top-1/2 -translate-y-1/2 text-2xl cursor-pointer hover:scale-125 transition-transform"
            onClick={slideCountIncreaseHandler}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <BrandsCarousel activeSlide={activeSlide} />
        </div>
      </div>
    </section>
  );
}
