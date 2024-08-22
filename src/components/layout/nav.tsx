import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-full h-14 lg:h-16 bg-slate-900 text-slate-50 flex items-center justify-between px-4 lg:px-8">
      <Link to={"/"} className="uppercase text-2xl lg:text-4xl font-bold">
        m
      </Link>
      <Link to={"/cart"}>
        <ShoppingBagIcon className="size-6 text-current" />
      </Link>
    </nav>
  );
};
