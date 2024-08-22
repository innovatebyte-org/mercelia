import { AllShoes } from "@/features/shoes/components/all-shoes";
import { Head } from "@/seo";
import { Fragment } from "react/jsx-runtime";

export const ShoesListRoute = () => {
  return (
    <Fragment>
      <Head title="Top Selling Shoes" description="Top selling shoes" />
      <AllShoes />
    </Fragment>
  );
};
