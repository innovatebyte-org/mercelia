import { formatCurrency } from "@/utils/currency";
import { ShoeProps } from "./type";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { shoeRating } from "@/utils/rating";
import { StarIcon } from "@heroicons/react/20/solid";

export const Shoe = ({
  previewImage,
  name,
  price,
  stock,
  slug,
  reviews,
}: ShoeProps) => {
  const isShoeAvailableForPurchase = stock > 0;

  const totalShoeRating = shoeRating(reviews || []);
  const topRated = totalShoeRating >= 4;

  return (
    <div className="w-full h-full flex flex-col gap-2 items-start">
      <Link
        to={`/shoes/${slug}`}
        className="w-full h-96 bg-slate-50/75 hover:bg-slate-100 group rounded-md flex items-center justify-center relative"
      >
        {topRated ? (
          <div className="absolute top-2 lg:top-4 left-2 lg:left-4 flex items-center gap-2 p-2 px-2.5 rounded-full bg-slate-300">
            <StarIcon className="size-5 text-slate-800" />
            <p className="text-sm font-medium text-slate-800">Highly Rated</p>
          </div>
        ) : null}
        <img
          src={previewImage}
          alt={name}
          className="size-5/6 object-cover object-center group-hover:scale-110 transition-all ease-in-out duration-200"
          loading="lazy"
        />
      </Link>
      <div className="w-full flex flex-col items-start gap-1">
        <h4 className="text-sm text-slate-700 capitalize line-clamp-2">
          {name}
        </h4>
        <p className="text-xl font-medium text-slate-950">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="w-full flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-2">
        <Button
          size={"lg"}
          width={"full"}
          disabled={!isShoeAvailableForPurchase}
        >
          Add to Bag <ShoppingBagIcon className="text-current size-6" />
        </Button>
      </div>
    </div>
  );
};
