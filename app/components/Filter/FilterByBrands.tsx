"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { itemsActions } from "@/app/_store/items-slice";
/**
 * FilterByBrands component renders a list of radio buttons for filtering products by brand.
 * It dynamically generates brand options from the items in the store and updates the selected brand in state.
 *
 * @component
 * @returns {JSX.Element} A brand filter UI for product listing
 */
export default function FilterByBrands() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items);
  const selectedBrand = useAppSelector((state) => state.items.brand);
  const brandsList: string[] = [...new Set(items.map((item) => item.brand))];

  function filterByBrandHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);

    dispatch(itemsActions.setBrand(e.target.value));
  }
  return (
    <div>
      <h2 className="text-xl mt-4 mb-2">برند محصولات</h2>
      <ul>
        {" "}
        <li className="mb-1.5" key={"all-prodducts"}>
          <input
            type="radio"
            name="brands"
            value={"all"}
            id={"all-prodducts"}
            className="ml-1 translate-y-1"
            onChange={filterByBrandHandler}
            checked={"all" === selectedBrand}
          />
          <label htmlFor={"all-prodducts"}>{"تمامی محصولات"}</label>
        </li>
        {brandsList.map((item) => (
          <li className="mb-1.5" key={item}>
            <input
              type="radio"
              name="brands"
              value={item}
              id={item}
              className="ml-1 translate-y-1"
              onChange={filterByBrandHandler}
              checked={item === selectedBrand}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
