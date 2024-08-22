import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const HomepageHero = () => {
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-hero bg-cover bg-center bg-fixed">
      <div className="w-full h-full flex flex-col gap-4 items-start lg:items-center justify-center bg-slate-950/50 px-5 sm:px-10">
        <h1 className="text-5xl lg:text-7xl lg:w-3/4 lg:text-center font-bold text-slate-50">
          New Bestselling Shoes
        </h1>
        <p className="text-base text-slate-200 font-medium">
          This few weeks, our new summer collection will shelter you from the
          harsh elements of a world that doesn't care if you live or die.
        </p>
        <Link to={"/shoes"}>
          <Button size={"lg"}>
            <ShoppingBagIcon className="size-6 text-current" />
            shop collection{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};
