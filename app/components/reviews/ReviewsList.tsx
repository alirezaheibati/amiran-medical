"use client";
import { useState } from "react";
import Dots from "./Dots";
import SingleReview from "./SingleReview";
import { ReviewType } from "@/app/_interface/ReviewType";

interface ReviewsListProps {
  reviews: ReviewType[];
}
/**
 * `ReviewsList` renders a horizontally scrollable carousel of customer reviews.
 * Includes interactive dot navigation to switch between reviews.
 *
 * @component
 * @param {ReviewsListProps} props - Props containing the list of reviews.
 * @returns {JSX.Element} A full-screen review section with animated transitions and dot controls.
 */
export default function ReviewsList({ reviews }: ReviewsListProps) {
  const [activeDot, setActiveDot] = useState(2);

  function dotsSelectHandler(dotNumber: number) {
    setActiveDot(dotNumber);
  }

  return (
    <div className="h-screen  relative overflow-x-hidden flex justify-center items-start flex-col gap-12 md:gap-16">
      <div className="w-full">
        <h2 className="text-center w-full text-[#003d5b] font-messiri text-3xl md:text-4xl font-bold relative z-20 mb-2">
          آخرین نظرات خریداران
        </h2>
        <p className="w-full text-center text-secondary text-sm">
          شما هم میتوانید درباره محصولات دیدگاه ثبت کنید
        </p>
      </div>
      <div className=" absolute left-0 top-0 h-full w-full bg-custom-gradient md:z-10"></div>
      <div
        className={`flex justify-around items-stretch w-[500vw] md:w-[231vw] md:px-[33vw] transition-transform duration-300
          ${
            activeDot === 0
              ? " translate-x-0 md:translate-x-0 "
              : activeDot === 1
              ? " translate-x-[100vw] md:translate-x-[33vw]"
              : activeDot === 2
              ? " translate-x-[200vw] md:translate-x-[66vw]"
              : activeDot === 3
              ? " translate-x-[300vw] md:translate-x-[100vw]"
              : " translate-x-[400vw] md:translate-x-[133vw]"
          }
           `}
      >
        {reviews.map((review) => (
          <SingleReview
            key={review.id}
            review={review}
            activeStatus={activeDot === review.id - 1}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-2 relative z-20">
        {reviews.map((review) => (
          <Dots
            key={review.id}
            dotNumber={review.id - 1}
            onSelectDot={dotsSelectHandler}
            activeDot={activeDot === review.id - 1}
          />
        ))}
      </div>
    </div>
  );
}
