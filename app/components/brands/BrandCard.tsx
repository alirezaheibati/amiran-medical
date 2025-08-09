import Image, { StaticImageData } from "next/image";
interface BrandCardProps {
  image: StaticImageData;
  alt: string;
}
/**
 * A reusable card component that displays a brand image.
 *
 * @component
 * @param {BrandCardProps} props - The props for the component.
 * @param {StaticImageData} props.image - The image source for the brand.
 * @param {string} props.alt - The alternative text for the image.
 * @returns {JSX.Element} A styled brand image card.
 */
export default function BrandCard({ image, alt }: BrandCardProps) {
  return (
    <div className="rounded-md aspect-square relative overflow-hidden shrink-0 w-[calc(10%-4px)] bg-gray-100">
      <Image src={image} alt={alt} fill />
    </div>
  );
}
