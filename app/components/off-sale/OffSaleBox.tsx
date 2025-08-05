import DiscountItemsSlider from "./DiscountItemsSlider";
import DiscountTimer from "./DiscountTimer";
import OnSaleItemsProvider from "./OnSaleItemsProvider";
/**
 * OffSaleBox component renders a promotional section that highlights
 * time-limited discount offers. It includes a countdown timer and
 * horizontally scrollable list of discounted items.
 *
 * Layout features:
 * - A header with section title and timer
 * - A styled product carousel for deals
 *
 * @component
 * @returns {JSX.Element} A styled section showcasing discounted products with timer
 */
export default function OffSaleBox() {
  return (
    <section className="max-w-7xl mx-auto p-2 md:p-4 overflow-hidden">
      <div className="rounded-xl py-8 px-4 md:px-8 bg-[#003d5d]/80 shadow-[5px_5px_10px_rgba(0,61,93,0.4)]">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center text-white/90">
          <div className="flex justify-start items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-white/90"></div>
            <h2 className="font-messiri font-bold text-xl md:text-2xl">
              پیشنهادات شگفت انگیز
            </h2>
          </div>
          <DiscountTimer />
        </div>
        <hr className="border-2 rounded-xl border-white/90 mt-4 mb-8" />
        {/* products */}
        <DiscountItemsSlider>
          <OnSaleItemsProvider />
        </DiscountItemsSlider>
      </div>
    </section>
  );
}
