"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import banner1 from "@/app/assets/banner1.jpg";
import banner2 from "@/app/assets/banner2.jpg";
import banner3 from "@/app/assets/banner3.jpg";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
/**
 * Hero component for the homepage.
 * Features a sliding banner carousel with manual navigation.
 * Banners are full-width images and transitions are animated.
 *
 * @component
 * @returns {JSX.Element} A responsive hero slider
 */
export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  // Move to next slide if not at the last
  function increaseAtiveSlideNum() {
    setActiveSlide((prev) => {
      if (prev <= 1) return ++prev;
      return prev;
    });
  }
  // Move to previous slide if not at the first
  function decreaseAtiveSlideNum() {
    setActiveSlide((prev) => {
      if (prev >= 1) return --prev;
      return prev;
    });
  }
  return (
    <div className="h-[324px] w-screen relative overflow-hidden group bg-red-200">
      <button
        className="opacity-0 absolute top-1/2 -translate-y-1/2 right-6 group-hover:opacity-100 z-10 transition-opacity cursor-pointer"
        onClick={increaseAtiveSlideNum}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
      </button>
      <button
        className="opacity-0 absolute top-1/2 -translate-y-1/2 left-6 group-hover:opacity-100 z-10 transition-opacity cursor-pointer"
        onClick={decreaseAtiveSlideNum}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
      </button>
      <div
        className={`h-full transition-transform duration-500 flex justify-start items-center ${
          activeSlide === 1
            ? "translate-x-full"
            : activeSlide === 2
            ? "translate-x-[200%]"
            : "translate-x-0"
        }`}
      >
        <div className="h-full w-screen relative shrink-0">
          <Image
            src={banner1}
            alt="advertisment banner one"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="h-full w-screen relative shrink-0">
          <Image
            src={banner2}
            alt="advertisment banner one"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="h-full w-screen relative shrink-0">
          <Image
            src={banner3}
            alt="advertisment banner one"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}
