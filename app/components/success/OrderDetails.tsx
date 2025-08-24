import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
/**
 * OrderDetails component displays a confirmation message after a successful order placement.
 * Includes order number, estimated delivery time, and navigation buttons for home and shop.
 *
 * @component
 * @returns {JSX.Element} A styled confirmation block with order metadata and navigation links
 */
export default function OrderDetails() {
  return (
    <div className="w-full border border-gray-100 shadow-md p-4 rounded-md flex flex-col justify-start items-center gap-2 mb-12">
      <div className="bg-[#00798c]/20 rounded-full p-3 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-4xl text-[#00798c]"
        />
      </div>
      <h1 className="text-[#003d5b] font-messiri font-semibold text-2xl pt-4">
        سفارش با موفقیت ثبت شد.
      </h1>
      <p className="text-center text-sm text-[#003d5b]/80 max-w-xs">
        با تشکر از خرید شما. سفارش با موفقیت ثبت شد و پس از پردازش و آماده سازی،
        ارسال میگردد.
      </p>
      <div className="bg-gray-100 rounded-md px-4 py-2 w-xs text-[#003d5b]/80">
        <div className="flex justify-between items-center text-sm py-2">
          <p>شماره سفارش:</p>
          <p className="font-semibold">{convertToPersianDigits(1234567)}</p>
        </div>
        <div className="flex justify-between items-center text-sm py-2">
          <p>زمان تقریبی تحویل:</p>
          <p>
            {addCommasToString(convertToPersianDigits(3))}
            <span> روز کاری</span>
          </p>
        </div>
      </div>
      <div className="w-xs flex justify-center items-center gap-2 pt-4">
        <Link
          href={"/"}
          className="w-full py-3 cursor-pointer flex justify-center items-center gap-2 rounded-full text-white text-sm font-medium bg-[#00798c]/90 hover:bg-[#00798c]"
        >
          بازگشت به خانه
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link
          href={"/shop"}
          className="w-full py-3 cursor-pointer flex justify-center items-center gap-2 rounded-full text-white text-sm font-medium bg-[#edae49]/95 hover:bg-[#edae49]"
        >
          ادامه خرید
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
      </div>
    </div>
  );
}
