import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "../ui/searchbar";
import { cn } from "@/utils/cn";
import { useAuthContext } from "@/store/authContext";

export const Nav = () => {
  const { user } = useAuthContext();
  return (
    <div>
      {!user ? (
        <div className="flex gap-3 items-center justify-end px-6 py-1">
          <Link to={"/login"} className="text-sm font-medium text-slate-800">
            Login
          </Link>
          <Link to={"/register"} className="text-sm font-medium text-slate-800">
            Register
          </Link>
        </div>
      ) : null}

      <nav className="w-full h-14 lg:h-16 bg-slate-900 text-slate-50 flex items-center justify-between px-4 lg:px-8">
        <Link to={"/"} className="uppercase text-2xl lg:text-4xl font-bold">
          m
        </Link>
        {user ? (
          user.isAdmin ? (
            <div className="flex items-center gap-4">
              <AdminLink text="Dashboard" to="/dashboard" />
              <AdminLink text="Shoes" to="/shoes/all" />
              <AdminLink text="Orders" to="/orders/all" />
              <AdminLink text="Delivery" to="/delivery" />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <AdminLink text="My Orders" to="/orders" />
            </div>
          )
        ) : null}

        <div className="flex items-center gap-3">
          <SearchBar />

          <HeartIcon className="size-6 text-slate-400 hover:text-slate-50" />
          <Link to={"/cart"} className="flex items-center gap-1">
            <ShoppingBagIcon className="size-6 text-slate-400 hover:text-slate-50" />
            <span className="text-xs text-slate-50">2</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const AdminLink = ({ text, to }: { text: string; to: string }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={to}
      className={cn(
        "text-base text-slate-400 hover:text-slate-200 font-medium",
        {
          "text-slate-200": pathname.includes(to),
        },
      )}
    >
      {text}
    </NavLink>
  );
};
