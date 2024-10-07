import { formatCurrency } from "@/utils/currency";
import { ClipboardIcon } from "@heroicons/react/20/solid";

export const PaymentInformation = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h4 className="text-xl font-semibold text-slate-800">
        Payment Information
      </h4>
      <h5 className="text-lg text-slate-500">
        Make a Transfer to the following account
      </h5>
      <div className="w-max bg-slate-50 hover:bg-slate-100 rounded-lg p-4 inline-flex flex-col items-start gap-4">
        <p className="inline-flex items-center gap-2 font-semibold text-base">
          Account Number:{" "}
          <span className="font-normal text-lg">2002413938</span>{" "}
          <ClipboardIcon className="size-5 text-slate-800" />
        </p>
        <p className="inline-flex items-center gap-2 font-semibold text-base">
          Account Bank:{" "}
          <span className="font-normal text-lg">Kuda Microfinance Bank</span>{" "}
        </p>
        <p className="inline-flex items-center gap-2 font-semibold text-base">
          Account Name:{" "}
          <span className="font-normal text-lg">
            Toluwanimi Emmanuel Adeyemo
          </span>{" "}
        </p>
        <p className="inline-flex items-center gap-2 font-semibold text-base">
          Amount:{" "}
          <span className="font-normal text-lg">{formatCurrency(20000)}</span>{" "}
        </p>
      </div>
      <p>Add a submit receipt of payment input</p>
    </div>
  );
};
