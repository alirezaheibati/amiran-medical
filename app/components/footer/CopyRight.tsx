import Link from "next/link";
/**
 * Displays a copyright notice with a link to the author's website.
 * The message is styled using Tailwind CSS and is shown at the bottom of the page.
 *
 * @returns {JSX.Element} A styled copyright section
 */
export default function CopyRight() {
  return (
    <div className="bg-gray-100">
      <Link
        href={"https://alirezaheibati.ir/"}
        className="block p-4 text-center text-sm text-[#003d5d]/70 hover:text-[#003d5d]"
      >
        تمام حقوق این سایت محفوظ است.
      </Link>
    </div>
  );
}
