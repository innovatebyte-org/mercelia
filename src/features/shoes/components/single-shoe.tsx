import { Button } from "@/components/ui/button";
import { dummyShoesData } from "@/data/shoes";
import { Head } from "@/seo";
import { cn } from "@/utils/cn";
import { formatCurrency } from "@/utils/currency";
import { shoeRating } from "@/utils/rating";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  ShoppingBagIcon,
  StarIcon as StarIconOutline,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SingleShoe = ({ slug }: { slug: string }) => {
  // fetch single shoe with shoeSlug
  const shoe = dummyShoesData.find((shoe) => shoe.slug === slug);

  if (!shoe) {
    return (
      <div>
        <Head title={"Shoe not found"} />
        Shoe not found <Link to={"/shoes"}>View all shoes</Link>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState<string>(
    shoe?.previewImage as string,
  );
  if (shoe) {
    const totalShoeRating = shoeRating(shoe.reviews || []);
    const topRated = totalShoeRating >= 4;

    return (
      <div className="w-full h-full lg:max-w-7xl mx-auto py-10 lg:py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="w-full flex flex-col lg:flex-row items-start gap-4 lg:gap-2 col-span-2">
          <div className="w-full h-96 lg:h-[600px] rounded-md bg-slate-100 flex items-center justify-center relative">
            {topRated ? (
              <div className="absolute top-2 lg:top-4 left-2 lg:left-4 flex items-center gap-2 p-2 px-2.5 rounded-full bg-slate-300">
                <StarIcon className="size-5 text-slate-800" />
                <p className="text-sm font-medium text-slate-800">
                  Highly Rated
                </p>
              </div>
            ) : null}
            <img
              src={mainImage}
              alt={shoe.name}
              className="size-5/6 object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-64 lg:order-first flex flex-row lg:flex-col items-center gap-4 lg:gap-3 overflow-x-auto hide-scrollbar">
            {shoe.images.map((image, index) => (
              <div
                className="size-32 lg:size-48 flex-none rounded-md bg-slate-50 hover:border border-slate-900 hover:bg-slate-100 flex items-center justify-center"
                key={index}
                onClick={() => setMainImage(image)}
                onMouseOver={() => setMainImage(image)}
              >
                <img
                  src={image}
                  alt={shoe?.name}
                  className="size-5/6 object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-start gap-4 mt-2">
          <h4 className="text-3xl font-bold text-slate-800">{shoe?.name}</h4>
          <p className="text-4xl text-slate-950">
            {formatCurrency(shoe.price)}
          </p>
          <div className="flex items-end gap-1">
            <StarIconOutline
              className={cn("size-6 text-slate-800", {
                "fill-slate-800": totalShoeRating >= 1,
              })}
            />
            <StarIconOutline
              className={cn("size-6 text-slate-800", {
                "fill-slate-800": totalShoeRating >= 2,
              })}
            />
            <StarIconOutline
              className={cn("size-6 text-slate-800", {
                "fill-slate-800": totalShoeRating >= 3,
              })}
            />
            <StarIconOutline
              className={cn("size-6 text-slate-800", {
                "fill-slate-800": totalShoeRating >= 4,
              })}
            />
            <StarIconOutline
              className={cn("size-6 text-slate-800", {
                "fill-slate-800": totalShoeRating >= 5,
              })}
            />
            {/* open modal to show shoe reviews */}
            {shoe.reviews.length > 0 ? (
              <Button variant={"link"} className="p-0 h-max">
                {shoe.reviews.length} reviews
              </Button>
            ) : null}
          </div>
          <p className="text-base text-slate-700 line-clamp-7">
            {shoe.description}
          </p>
          {shoe?.availableSizes ? (
            <div className="w-full flex flex-col items-start gap-2">
              <p className="text-base text-slate-700 font-medium">
                Available Sizes
              </p>
              <div className="w-full flex items-center gap-2">
                {shoe.availableSizes.map((size, index) => (
                  <Button
                    variant={"secondary"}
                    width={"full"}
                    size={"sm"}
                    key={index}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
          <div className="w-full flex items-center gap-3">
            <Button width={"full"} size={"lg"}>
              Add to Bag <ShoppingBagIcon className="text-current size-6" />
            </Button>
            <Button variant={"secondary"} size={"lg"} className="group">
              <HeartIcon className="text-current size-6 group-hover:fill-current" />
            </Button>
          </div>
          {/* open modal to show details */}
          <Button variant={"link"} className="p-0">
            View Shoe Details
          </Button>
          <div className="w-full flex flex-col items-start gap-2">
            <p className="text-base text-slate-700 font-medium">Delivery</p>
            <p className="text-base text-slate-600">
              You'll see our delivery options at checkout.
            </p>
          </div>
        </div>
      </div>
    );
  }
};
