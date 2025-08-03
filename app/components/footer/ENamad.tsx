import Image from "next/image";
import nemad from "@/app/assets/nemad.png";
/**
 * Renders the eNamad trust seal image used to indicate verified business authenticity.
 * The image is centered within its container and styled using Tailwind CSS grid and flex classes.
 *
 * @returns {JSX.Element} A responsive section displaying the eNamad logo
 */
export default function ENamad() {
  return (
    <div className="col-span-1 md:col-span-1 flex justify-center items-center">
      <Image src={nemad} alt="nemad image" width={125} height={136} />
    </div>
  );
}
