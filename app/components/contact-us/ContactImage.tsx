import Image from "next/image";
import userImage from "@/app/assets/contact-guy.png";
/**
 * A decorative image component for the contact page.
 * Displays a centered image of a person with a phone and a styled background element.
 *
 * @returns {JSX.Element} A responsive image block with layered styling.
 */
export default function ContactImage() {
  return (
    <div className="w-full md:w-1/3 relative">
      <Image
        src={userImage}
        alt="man with a phone in his hand"
        className="block mx-auto z-10 relative"
      />
      <div className="absolute w-72 max-w-full aspect-square bg-[#003d5d] left-1/2 bottom-3 -translate-x-1/2 rounded-xl shadow-md"></div>
    </div>
  );
}
