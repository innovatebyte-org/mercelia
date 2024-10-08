import { dummyShoesData } from "@/data/shoes";
import { SingleShoe } from "@/features/shoes/components/single-shoe";
import { Head } from "@/seo";
import { Link, useParams } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export const ViewShoeRoute = () => {
  const params = useParams();
  const shoeSlug = params.shoeSlug as string;

  // fetch single shoe with shoeSlug
  const shoe = dummyShoesData.find((shoe) => shoe.slug === shoeSlug);
  if (!shoe) {
    return (
      <div>
        <Head title={"Shoe not found"} />
        Shoe not found <Link to={"/shoes"}>View all shoes</Link>
      </div>
    );
  }

  return (
    <Fragment>
      <Head title={shoe?.name} />
      <SingleShoe shoe={shoe} />
    </Fragment>
  );
};
