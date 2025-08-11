import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
interface BlogPostsPaginationProps {
  allPostsCount: number;
  perPage: number;
  page: number;
  onDecreasePage: () => void;
  onIncreasePage: () => void;
}
/**
 * Renders pagination controls for a list of blog posts.
 *
 * Displays up to three buttons: previous page, current page, and next page.
 * The current page number is highlighted, and all numbers are converted to Persian digits.
 * Pagination is only shown if the total number of posts exceeds the number of posts per page.
 *
 * @component
 * @param {BlogPostsPaginationProps} props - The props for the pagination component.
 * @param {number} props.allPostsCount - Total number of blog posts available.
 * @param {number} props.perPage - Number of posts displayed per page.
 * @param {number} props.page - Current page number (1-based).
 * @param {() => void} props.onDecreasePage - Callback to navigate to the previous page.
 * @param {() => void} props.onIncreasePage - Callback to navigate to the next page.
 * @returns {JSX.Element} Pagination UI with page navigation buttons.
 */
export default function BlogPostsPagination({
  allPostsCount,
  perPage,
  page,
  onDecreasePage,
  onIncreasePage,
}: BlogPostsPaginationProps) {
  return (
    <>
      {allPostsCount > perPage && (
        <div className="flex justify-start items-center gap-2 pt-8">
          {page > 1 && (
            <button
              onClick={onDecreasePage}
              className="rounded-md border border-[#003d5d] text-[#003d5d] w-8 h-8 flex justify-center items-center cursor-pointer hover:text-white hover:bg-[#003d5d]"
            >
              {convertToPersianDigits(page - 1)}
            </button>
          )}
          {
            <button className="rounded-md border border-[#003d5d] w-8 h-8 flex justify-center items-center cursor-pointer text-white bg-[#003d5d]">
              {convertToPersianDigits(page)}
            </button>
          }
          {page * perPage < allPostsCount && (
            <button
              onClick={onIncreasePage}
              className="rounded-md border border-[#003d5d] text-[#003d5d] w-8 h-8 flex justify-center items-center cursor-pointer hover:text-white hover:bg-[#003d5d]"
            >
              {convertToPersianDigits(page + 1)}
            </button>
          )}
        </div>
      )}
    </>
  );
}
