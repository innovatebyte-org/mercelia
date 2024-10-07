import { PropsWithChildren } from "react";

export const ShoeContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full container mx-auto py-10 lg:py-16 flex flex-col gap-8 items-start px-3 lg:px-6">
      {children}
    </div>
  );
};

const ShoeContainerTitle = ({ children }: PropsWithChildren) => (
  <h3 className="text-xl lg:text-2xl text-slate-800 font-semibold">
    {children}
  </h3>
);

ShoeContainer.Title = ShoeContainerTitle;
