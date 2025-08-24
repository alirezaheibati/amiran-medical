import { CartItemType } from "@/app/_interface/CartItemType";
import CartItemRow from "./CartItemRow";

interface CartTableProps {
  items: CartItemType[];
}
/**
 * CartTable component renders a table layout for displaying shopping cart items.
 * Each item is displayed in a row using the CartItemRow component.
 *
 * @component
 * @param {CartTableProps} props - Props containing an array of cart items
 * @param {CartItemType[]} props.items - List of items currently in the cart
 * @returns {JSX.Element} A responsive table with product details and actions
 */
export default function CartTable({ items }: CartTableProps) {
  return (
    <table className="w-full text-right min-w-[500px]">
      <thead>
        <tr className="border-b border-slate-300 bg-slate-50">
          <th className="py-4 px-2 text-sm leading-none text-[#003d5b] w-5/12">
            محصول
          </th>
          <th className="py-4 px-2 text-sm text-center leading-none text-[#003d5b]">
            تعداد
          </th>
          <th className="py-4 px-2 text-sm flex justify-center items-center gap-0.5 leading-none text-[#003d5b]">
            <span>قیمت</span>
            <span className="text-[8px]">(تومان)</span>
          </th>
          <th className="py-4 px-2 text-sm text-center leading-none text-[#003d5b]">
            مجموع
          </th>
          <th className="py-4 px-2 text-sm  text-center leading-none text-[#003d5b]"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
