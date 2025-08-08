import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface AdsItemProps {
  href: string;
  alt: string;
  image: StaticImageData;
}
/**
 * A visual ad component that displays an image wrapped in a clickable link.
 *
 * @component
 * @param {AdsItemProps} props - The props for the component.
 * @returns {JSX.Element} A styled link containing an image.
 */
export default function AdsItem({ href, alt, image }: AdsItemProps) {
  return (
    <Link
      href={href}
      className="col-span-1 rounded-xl overflow-hidden shadow-[5px_5px_10px_rgba(0,61,93,0.4)]"
    >
      <Image src={image} alt={alt} />
    </Link>
  );
}
