import Image, { StaticImageData } from "next/image";
interface SingleFeatureProps {
  title: string;
  img: StaticImageData;
  description: string;
}
/**
 * Displays a single feature with an image, title, and description.
 *
 * @param {SingleFeatureProps} props - The feature data to display
 * @returns {JSX.Element} The rendered feature component
 */
export default function SingleFeature({
  title,
  img,
  description,
}: SingleFeatureProps) {
  return (
    <div className="text-[#003d5d] flex justify-start items-center gap-2 mb-4">
      <Image src={img} alt={title} width={50} height={50} />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
