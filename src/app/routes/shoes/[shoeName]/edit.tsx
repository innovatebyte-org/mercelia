import { ContentLayout } from "@/components/layout/content-layout";
import { dummyShoesData } from "@/data/shoes";
import { EditShoe } from "@/features/shoes/components/edit-shoe";
import { Head } from "@/seo";
import { Link, useParams } from "react-router-dom";

export const EditShoeRoute = () => {
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

  if (!shoe) {
    return (
      <div>
        <Head title={"Shoe not found"} />
        Shoe not found
        <Link to={"/shoes"}>View all shoes</Link>
      </div>
    );
  }
  return (
    <ContentLayout title="Edit Shoe">
      <EditShoe shoe={shoe} />
    </ContentLayout>
  );
};
