import { OrderSummary } from "./order-summary";
import { CartList } from "./cart-list";

export const MyCart = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto py-10 lg:py-16 px-6 flex flex-col items-center gap-4 lg:gap-16">
      <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-slate-950">
        My Shopping Cart
      </h2>
      <div className="w-full grid grid-cols-1 gap-y-6">
        <CartList />
        <OrderSummary />
      </div>
    </div>
  );
};
