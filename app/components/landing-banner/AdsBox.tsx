import adsOne from "@/app/assets/add1.png";
import adsTwo from "@/app/assets/add2.png";
import AdsItem from "./AdsItem";
/**
 * AdsBox component displays a section containing promotional ad items.
 * Each ad is rendered using the AdsItem component and links to the shop page.
 *
 * @component
 * @returns {JSX.Element} A responsive grid of ad items.
 */
export default function AdsBox() {
  return (
    <section className="max-w-7xl mx-auto py-8 md:pt-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4">
        <AdsItem href="/shop" alt="image for Hygine category" image={adsOne} />
        <AdsItem href="/shop" alt="image for food category" image={adsTwo} />
      </div>
    </section>
  );
}
