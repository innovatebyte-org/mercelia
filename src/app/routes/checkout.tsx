import { Checkout } from "@/features/checkout/components";
import { Head } from "@/seo";
import { Fragment } from "react/jsx-runtime";

export const CheckoutRoute = () => {
  return (
    <Fragment>
      <Head title="Checkout" />
      <Checkout />
    </Fragment>
  );
};
