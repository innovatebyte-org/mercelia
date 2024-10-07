import { DeliveryOptions } from "./delivery-options";
import { CheckoutOrderSummary } from "./order-summary";
import { PaymentInformation } from "./payment-info";

export const Checkout = () => {
  return (
    <div className="w-full lg:max-w-7xl mx-auto py-10 lg:py-16 px-6 flex flex-col items-start gap-4 lg:gap-8">
      <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-slate-950">
        Checkout
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-24">
        {/*transfer details*/}

        <div className="w-full flex flex-col gap-4 lg:gap-8 items-start">
          <PaymentInformation />
          <DeliveryOptions />
        </div>
        {/*order summary */}
        <CheckoutOrderSummary />
      </div>
    </div>
  );
};
