import { Link, useNavigate } from "react-router-dom";
import { ShoeContainer } from "./shoe-container";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { dummyShoesData } from "@/data/shoes";
// import { ColumnDef } from "@tanstack/react-table";
// import { ShoeProps } from "@/components/ui/shoe/type";

export const ListAllShoes = () => {
  const navigate = useNavigate();
  // const shoeListData = dummyShoesData;
  // const shoeColumns: ColumnDef<ShoeProps>[] = [
  //   { header: "Name", accessorKey: "name" },
  //   { header: "Status", accessorKey: "stock" },
  //   { header: "Price", accessorKey: "price" },
  // ];
  return (
    <ShoeContainer>
      <ShoeContainer.Title>Shoe List</ShoeContainer.Title>
      <div className="w-full flex flex-col items-start gap-6">
        <div className="w-full flex items-center justify-between">
          <div className="w-96 h-10 relative">
            <MagnifyingGlassIcon className="size-5 text-slate-600 absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="w-full h-full bg-white rounded border border-slate-400 hover:border-slate-700 pl-8 focus:ring-0 focus:border focus:border-slate-800"
            />
          </div>
          <Button onClick={() => navigate("/shoes/add")} className="group">
            <PlusIcon className="text-current size-6" />
            <span className="hidden group-hover:flex">Add New Shoe</span>
          </Button>
        </div>
        <div className="w-full grid grid-cols-1 divide-y divide-slate-300">
          {dummyShoesData.map((shoe) => (
            <Link
              to={`/shoes/${shoe.slug}`}
              className="w-full py-3 px-2 flex items-center"
              key={shoe.slug}
            >
              <p>{shoe.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </ShoeContainer>
  );
};
