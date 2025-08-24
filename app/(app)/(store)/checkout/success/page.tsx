import OrderDetails from "@/app/components/success/OrderDetails";
import WhatIsNext from "@/app/components/success/WhatIsNext";

/**
 * SeccessPage component renders the final checkout confirmation page,
 * displaying order details and a visual guide of next delivery steps.
 */
export default function SeccessPage() {
  return (
    <section className="max-w-7xl px-4 mx-auto py-8">
      <div className="w-full mx-auto max-w-xl">
        <OrderDetails />
        <WhatIsNext />
      </div>
    </section>
  );
}
