import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
export default function BlogsHeading() {
  /**
   * `BlogsHeading` is a React component that renders a heading section
   * for the blog overview page. It includes a localized title and a
   * navigation link to view all blog posts.
   *
   * @returns {JSX.Element} A styled header with a title and a link to the blog index.
   */
  return (
    <div className="flex justify-between items-center px-2 md:px-4 mb-4">
      <h2 className="font-messiri font-semibold text-xl md:text-2xl">
        آخرین نوشته های <span className="hidden sm:inline">وبلاگ</span>
      </h2>
      <Link
        href={"/blog"}
        className="font-semibold text-sm sm:text-base hover:opacity-80 hover:scale-105 transition-all flex justify-end items-center gap-1"
      >
        <span>مشاهده همه</span>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </div>
  );
}
