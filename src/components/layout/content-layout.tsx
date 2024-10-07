import { Head, HeadProps } from "@/seo";
import { PropsWithChildren } from "react";

type ContentLayoutProps = HeadProps & PropsWithChildren;

export const ContentLayout = ({
  title,
  description,
  children,
}: ContentLayoutProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <Head title={title} description={description} />
      {children}
    </div>
  );
};
