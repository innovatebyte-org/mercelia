import { cn } from "@/utils/cn";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  ComponentProps,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
  error?: string | null;
  register: UseFormRegister<FieldValues>;
  label: string;
  extraContent?: ReactNode;
};

export const Input = ({
  name,
  label,
  register,
  error,
  type,
  className,
  extraContent,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(
    type || "text",
  );
  const isInputPassword = type === "password";

  const toggleViewPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="w-full relative">
        <input
          type={inputType}
          id={name}
          className={cn(
            "flex h-12 w-full flex-1 rounded-lg border border-slate-400 hover:border-slate-800 px-4 py-2 focus:border-2 focus:border-slate-900 focus:shadow-md focus:outline-none focus:ring-0",
            className,
            {
              "border-red-500": error,
              "pl-8": extraContent,
            },
          )}
          {...register}
          {...props}
        />
        {extraContent ? (
          <div className="absolute top-1/2 -translate-y-1/2 left-3 opacity-75">
            {extraContent}
          </div>
        ) : null}
        {isInputPassword ? (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={toggleViewPassword}
          >
            {inputType === "password" ? (
              <EyeSlashIcon className="size-5 text-gray-900" />
            ) : (
              <EyeIcon className="size-5 text-gray-900" />
            )}
          </span>
        ) : null}
      </div>
      {error ? (
        <span className="text-sm text-red-600 font-medium -mt-1">{error}</span>
      ) : null}
    </div>
  );
};
