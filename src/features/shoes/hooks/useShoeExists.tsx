import { dummyShoesData } from "@/data/shoes";
import { Head } from "@/seo";
import { Link } from "react-router-dom";

export const useShoeExists = (shoeSlug: string) => {
  const shoe = dummyShoesData.find((shoe) => shoe.slug === shoeSlug);
  if (!shoe) {
    return (
      <div>
        <Head title={"Shoe not found"} />
        Shoe not found <Link to={"/shoes"}>View all shoes</Link>
      </div>
    );
  }
};
