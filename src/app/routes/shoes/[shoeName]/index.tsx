import { dummyShoesData } from "@/data/shoes";
import { SingleShoe } from "@/features/shoes/components/single-shoe";
import { Head } from "@/seo";
import { useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const ViewShoeRoute = () => {
  const params = useParams();
  const shoeSlug = params.shoeSlug as string;

  // fetch single shoe with shoeSlug
  const shoe = dummyShoesData.find((shoe) => shoe.slug === shoeSlug);

  return (
    <Fragment>
      <Head title={shoe?.name} />
      <SingleShoe slug={shoeSlug} />
    </Fragment>
  );
};
