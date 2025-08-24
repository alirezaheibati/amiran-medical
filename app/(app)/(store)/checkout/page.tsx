import InvoiceSummary from "@/app/components/checkout/InvoiceSummary";
import PaymentSection from "@/app/components/checkout/PaymentSection";
/**
 * CheckoutPage component renders the checkout interface.
 * Includes payment method selection and invoice summary for the user's cart.
 *
 * @component
 * @returns {JSX.Element} A responsive checkout layout with payment and invoice sections
 */
export default async function CheckoutPage() {
  return (
    <section className="max-w-7xl px-4 mx-auto pt-8">
      <h1 className="text-3xl font-bold text-[#003d5b] mb-2 line-clamp-1 font-messiri">
        تسویه حساب
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PaymentSection />
        <div className="lg:col-span-1">
          <InvoiceSummary />
        </div>
      </div>
    </section>
  );
}
