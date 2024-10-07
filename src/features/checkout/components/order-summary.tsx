import { formatCurrency } from "@/utils/currency";

export const CheckoutOrderSummary = () => {
  return (
    <div className="w-full h-max rounded-lg bg-slate-50 p-4 lg:p-8 flex flex-col items-start gap-4">
      <h4 className="text-xl font-semibold text-slate-800">Order Summary</h4>
      <div className="w-full flex flex-col divide-y divide-slate-200">
        <div className="w-full flex justify-between py-2">
          <p className="text-slate-600">Subtotal</p>
          <p className="text-slate-800">{formatCurrency(18500)}</p>
        </div>
        <div className="w-full flex justify-between py-2">
          <p className="text-slate-600">Delivery Fees</p>
          <p className="text-slate-800">{formatCurrency(1500)}</p>
        </div>
        <div className="w-full flex justify-between py-2">
          <p className="text-slate-600 font-semibold text-lg">Total</p>
          <p className="text-slate-800 font-semibold text-lg">
            {formatCurrency(20000)}
          </p>
        </div>
      </div>
    </div>
  );
};
