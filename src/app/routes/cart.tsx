import { MyCart } from "@/features/cart/components";
import { Head } from "@/seo";
import { Fragment } from "react/jsx-runtime";

export const CartRoute = () => {
  return (
    <Fragment>
      <Head title="My Cart" description="" />
      <MyCart />
    </Fragment>
  );
};
