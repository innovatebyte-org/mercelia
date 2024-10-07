import { dummyCart } from "@/data/cart";
import { CartItem } from "./cart-item";

export const CartList = () => {
  return (
    <div className="w-full flex flex-col divide-y gap-4 border-y">
      {dummyCart.map((cart) => (
        <CartItem key={cart.orderId} {...cart} />
      ))}
    </div>
  );
};
