/**
 * OutOfStockCover component displays a semi-transparent overlay indicating that the item is out of stock.
 * Intended to be layered over product cards or interactive elements to block interaction.
 *
 * @component
 * @returns {JSX.Element} A full-cover overlay with "Out of Stock" message
 */
export default function OutOfStockCover() {
  return (
    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-20 bg-black/70">
      <p className="text-xl font-semibold text-white/70">اتمام موجودی</p>
    </div>
  );
}
