import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faDolly, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DeliveryStep from "./DeliveryStep";
/**
 * WhatIsNext component displays the post-order delivery steps to inform the user.
 * Includes visual steps for processing, shipping, and delivery with icons and descriptions.
 *
 * @component
 * @returns {JSX.Element} A styled section outlining the delivery process
 */
export default function WhatIsNext() {
  return (
    <div className="w-full border border-gray-100 shadow-md p-4 rounded-md flex flex-col justify-start items-center gap-2">
      <h2 className="text-[#003d5b] text-xl font-messiri font-semibold py-4">
        بعدش چی میشه؟
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-2">
        <DeliveryStep
          title="پردازش سفارش"
          description="سفارش شما از انبار ما جمع اوری و آماده ارسال میشود."
          icon={faDolly}
          bgColor="bg-[#edae49]/20"
          textColor="text-[#edae49]"
        />
        <DeliveryStep
          title="ارسال سفارش"
          description="سفارش از طریق پست یا تیپاکس به آدرس شما ارسال میشود."
          icon={faTruckFast}
          bgColor="bg-[#d1495b]/20"
          textColor="text-[#d1495b]"
        />
        <DeliveryStep
          title="تحویل سفارش"
          description="از طریق پیامک زمان دقیق تحویل سفارش به شما اطلاع داده میشود."
          icon={faCheckCircle}
          bgColor="bg-[#003d5b]/20"
          textColor="text-[#003d5b]"
        />
      </div>
      <p className="mt-8 text-sm ">
        درباره تحویل سفارش سوالی دارید؟
        <Link href={"#"} className="font-semibold text-[#00798c] mr-1">
          با ما تماس بگیرید.
        </Link>
      </p>
    </div>
  );
}
