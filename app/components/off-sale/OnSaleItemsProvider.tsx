import { getOnOffProducts } from "@/app/_lib/products";
import DiscountItemCard from "./DiscountItemCard";
/**
 * Asynchronously fetches discounted products and renders them
 * as a list of `DiscountItemCard` components.
 *
 * This component is useful for displaying time-limited or promotional items.
 * It should be wrapped inside a container like a slider or grid layout.
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A rendered list of discounted product cards
 */
export default async function OnSaleItemsProvider() {
  const items = await getOnOffProducts();
  return (
    <>
      {items.map((item) => (
        <DiscountItemCard product={item} key={item.id} />
      ))}
    </>
  );
}
