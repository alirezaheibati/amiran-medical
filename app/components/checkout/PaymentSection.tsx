"use client";
import { useState } from "react";
import DeliveryForm from "@/app/components/checkout/DeliveryForm";
import {
  faArrowLeft,
  faCreditCard,
  faHouseCircleCheck,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PayMethodRow from "./PayMethodRow";
/**
 * PaymentSection component renders the payment method selection and delivery form.
 * Allows users to choose between online, cash-on-delivery, or installment payment options.
 *
 * @component
 * @returns {JSX.Element} A styled section with payment method rows and delivery form
 */
export default function PaymentSection() {
  const [payMethod, setPayMethod] = useState("credit-card");
  function payMethodChangeHandler(identifier: string): void {
    setPayMethod(identifier);
  }
  return (
    <div className="lg:col-span-2 ">
      <ul className=" overflow-x-auto border border-gray-100 shadow-md p-4 rounded-xl">
        <PayMethodRow
          title="پرداخت آنلاین"
          description="پرداخت از طریق کارت های عضو شتاب"
          icon={faCreditCard}
          id="credit-card"
          isActive={"credit-card" === payMethod}
          OnInputChange={payMethodChangeHandler}
        />
        <PayMethodRow
          title="پرداخت درب منزل"
          description="پرداخت درب منزل بعد از دریافت سفارش"
          icon={faHouseCircleCheck}
          id="home-payed"
          isActive={"home-payed" === payMethod}
          OnInputChange={payMethodChangeHandler}
        />
        <PayMethodRow
          title="پرداخت اقساطی"
          description="پرداخت در چهار قسط با چک یا سفته"
          icon={faMoneyCheckDollar}
          id="ghesti-card"
          isActive={"ghesti-card" === payMethod}
          OnInputChange={payMethodChangeHandler}
        />
      </ul>
      <DeliveryForm />
      <Link
        href="/cart"
        className="py-4 text-sm w-full inline-flex justify-end items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
      >
        بازگشت به سبد خرید
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </Link>
    </div>
  );
}
