import { useState } from "react";
import { CartItemProps } from "./type";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/utils/currency";

export const CartItem = ({ order, quantity }: CartItemProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const totalAmount = order.price * currentQuantity;

  return (
    <div className="w-full h-48 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          to={`/shoes/${order.slug}`}
          className="size-36 bg-slate-50 rounded-lg flex items-center justify-center"
        >
          <img
            className="size-5/6 object-cover object-center drop-shadow-2xl"
            src={order.previewImage}
            alt={order.name}
          />
        </Link>
        <div className="flex flex-col items-start gap-1 py-6">
          <h6 className="text-slate-700 font-medium">{order.name}</h6>
          <p className="text-slate-800">{formatCurrency(totalAmount)}</p>

          <select
            name="quantity"
            onChange={(e) => setCurrentQuantity(+e.target.value)}
            className="accent-slate-900 rounded-md mt-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>

      <TrashIcon
        className="text-slate-700 hover:text-red-800 size-6 mt-6"
        onClick={() => console.log("remove item from cart")}
        title="Remove item from cart"
      />
    </div>
  );
};
