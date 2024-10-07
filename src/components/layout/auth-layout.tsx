import { Head } from "@/seo";
import { PropsWithChildren } from "react";

type AuthLayoutProps = {
  title: string;
} & PropsWithChildren;

export const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Head title={title} />
      <div className="w-2/5 mx-auto p-4 flex flex-col items-center gap-4">
        <h3 className="text-4xl font-bold text-slate-900">M</h3>
        {children}
      </div>
    </div>
  );
};
