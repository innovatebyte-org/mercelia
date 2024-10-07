import { dummyShoesData } from "@/data/shoes";
import { ShoeList } from "@/features/shoes/components/shoe-list";

export const ShoeRecommendations = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <h4 className="text-xl font-semibold text-slate-800">
        People also bought
      </h4>
      <ShoeList shoes={dummyShoesData.slice(0, 3)} />
    </div>
  );
};
