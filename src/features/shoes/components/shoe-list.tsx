import { Shoe } from "@/components/ui/shoe";
import { ShoeProps } from "@/components/ui/shoe/type";

export const ShoeList = ({ shoes }: { shoes: ShoeProps[] }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {shoes.map((shoe, index) => (
        <Shoe key={index} {...shoe} />
      ))}
    </div>
  );
};
