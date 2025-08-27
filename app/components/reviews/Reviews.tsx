import { getAllReviews } from "@/app/_lib/reviews";
import ReviewsList from "./ReviewsList";
import { ReviewType } from "@/app/_interface/ReviewType";
/**
 * `Reviews` is an asynchronous React Server Component that fetches all customer reviews
 * and renders them using the `ReviewsList` carousel component.
 *
 * @async
 * @component
 * @returns {Promise<JSX.Element>} A rendered list of customer reviews.
 */
export default async function Reviews() {
  const reviews: ReviewType[] = await getAllReviews();
  return <ReviewsList reviews={reviews} />;
}
