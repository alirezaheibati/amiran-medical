"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { itemsActions } from "@/app/_store/items-slice";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { useEffect } from "react";
import { useState } from "react";
/**
 * PriceFilter component renders a dual-range slider to filter items by price.
 * It calculates the min and max prices from the Redux store and updates the filter state.
 *
 * @component
 * @returns {JSX.Element} A price range filter with Persian digit formatting and Redux integration
 */

export default function PriceFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.items);

  const [slideOne, setSlideOne] = useState(0);
  const [slideTwo, setSlideTwo] = useState(0);
  useEffect(() => {
    const priceList = items.map((item) => item.price);
    const min = Math.min(...priceList);
    const max = Math.max(...priceList);
    setMinPrice(min);
    setMaxPrice(max);
    dispatch(itemsActions.setPrice({ min, max }));
    setSlideOne(min);
    setSlideTwo(max);
  }, [items, dispatch]);

  function slideOneFn(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.target.value >= slideTwo) {
      setSlideOne(slideTwo - 1);

      dispatch(
        itemsActions.setPrice({
          min: slideTwo - 1,
          max: slideTwo,
        })
      );
    } else {
      setSlideOne(+e.target.value);
      dispatch(
        itemsActions.setPrice({
          min: e.target.value,
          max: slideTwo,
        })
      );
    }
  }
  function slideTwoFn(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.target.value <= slideOne) {
      setSlideTwo(slideOne + 1);
      dispatch(
        itemsActions.setPrice({
          min: slideOne,
          max: slideOne + 1,
        })
      );
    } else {
      setSlideTwo(+e.target.value);

      dispatch(
        itemsActions.setPrice({
          min: slideOne,
          max: e.target.value,
        })
      );
    }
  }
  return (
    <div>
      <h2 className="text-xl my-4 font-messiri">محدوده قیمت</h2>
      <div className="flex justify-between items-center">
        <span id="range1">
          {addCommasToString(convertToPersianDigits(slideOne))}
          <span className="text-xs mr-0.5">تومان</span>
        </span>
        <span id="range2">
          {addCommasToString(convertToPersianDigits(slideTwo))}
          <span className="text-xs mr-0.5">تومان</span>
        </span>
      </div>
      <div className="relative w-full py-4">
        <div
          className={`absolute bg-gray-200 h-2 w-full rounded-lg top-2 `}
        ></div>
        <div
          className={`absolute bg-[#3264fe] h-2 rounded-lg top-2`}
          style={{
            right: `${(slideOne - minPrice) * (100 / (maxPrice - minPrice))}%`,
            left: `${(maxPrice - slideTwo) * (100 / (maxPrice - minPrice))}%`,
          }}
        ></div>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1000}
          value={slideOne}
          id="slider-1"
          onChange={slideOneFn}
          className="slider absolute left-0 top-2"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={1000}
          value={slideTwo}
          id="slider-2"
          onChange={slideTwoFn}
          className="slider absolute left-0 top-2"
        />
      </div>
    </div>
  );
}
