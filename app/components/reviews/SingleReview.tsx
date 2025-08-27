import { ReviewType } from "@/app/_interface/ReviewType";
import Image from "next/image";

interface SingleReviewProps {
  // Indicates whether the review is currently active (e.g., highlighted in a carousel)
  activeStatus: boolean;
  // Review data including writer, product info, and avatar
  review: ReviewType;
}
/**
 * `SingleReview` displays a stylized review card with product image, review text,
 * and reviewer details. The card visually expands when active.
 *
 * @component
 * @param {SingleReviewProps} props - Props containing review data and active state.
 * @returns {JSX.Element} A responsive review card element.
 */
export default function SingleReview({
  activeStatus,
  review,
}: SingleReviewProps) {
  return (
    <div
      className={`border border-gray-300 shadow-md rounded-xl p-4 flex flex-col justify-between items-start transition-all duration-300 w-[80vw] md:w-[30vw] ${
        activeStatus
          ? "bg-[#003d5b]/5 scale-110 md:scale-[1.15] shadow-xl"
          : " scale-100"
      }`}
    >
      <div>
        <div className="h-12 w-12 bg-white flex justify-center items-center relative rounded-full border border-gray-300 overflow-hidden">
          <Image
            src={review.product_image}
            alt={review.product_name}
            width={60}
            height={60}
          />
        </div>
        <p className={`my-3 line-clamp-4 text-[#003d5b]/80 text-sm`}>
          {review.review}
        </p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <Image
          src={review.avatar}
          alt={review.writer}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border border-gray-300"
        />
        <div className="flex flex-col justify-start items-start">
          <p className="font-messiri text-[#003d5b] font-semibold md:text-lg">
            {review.writer}
          </p>
          <p className="text-sm text-[#003d5b]/80 line-clamp-1">
            {review.product_name}
          </p>
        </div>
      </div>
    </div>
  );
}
