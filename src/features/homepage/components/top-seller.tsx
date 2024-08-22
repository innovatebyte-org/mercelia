import { dummyShoesData } from "@/data/shoes";
import { ShoeList } from "@/features/shoes/components/shoe-list";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export const TopSellingShoes = () => {
  return (
    <div className="w-full lg:max-w-7xl mx-auto flex flex-col items-start gap-10 py-10 lg:py-24 px-6">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-slate-800 text-2xl font-semibold">
          Best Selling Shoes
        </h3>
        <Link
          to={"/shoes"}
          className="inline-flex items-center gap-1 lg:text-lg capitalize"
        >
          view all <ArrowRightIcon className="text-current size-4" />
        </Link>
      </div>

      <ShoeList shoes={dummyShoesData} />
    </div>
  );
};
