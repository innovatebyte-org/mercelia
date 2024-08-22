import { dummyShoesData } from "@/data/shoes";
import { ShoeList } from "./shoe-list";

export const AllShoes = () => {
  return (
    <div className="w-full lg:max-w-7xl mx-auto flex flex-col items-start gap-10 py-10 lg:py-16 px-6">
      <ShoeList shoes={dummyShoesData} />
      <ShoeList shoes={dummyShoesData} />
      <ShoeList shoes={dummyShoesData} />
    </div>
  );
};
