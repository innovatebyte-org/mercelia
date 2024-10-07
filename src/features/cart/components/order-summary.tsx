import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/currency";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  const continueShopping = () => navigate("/shoes");
  const proceedToCheckout = () => navigate("/checkout");

  return (
    <div className="w-full h-max p-4 lg:p-6 flex flex-col items-start gap-6">
      <div className="w-full flex items-center justify-between">
        <h4 className="text-base font-medium text-slate-800">Subtotal:</h4>
        <p className="text-xl font-semibold text-slate-800">
          {formatCurrency(20000)}
        </p>
      </div>

      <div className="w-full flex flex-col gap-2 items-center">
        <Button width={"full"} onClick={proceedToCheckout} size={"lg"}>
          Proceed to Payment
        </Button>
        <Button variant={"ghost"} onClick={continueShopping} size={"sm"}>
          Continue shoppping <ArrowRightIcon className="text-current size-4" />
        </Button>
      </div>
    </div>
  );
};
