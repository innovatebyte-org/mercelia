import { ShoeProps } from "@/components/ui/shoe/type";
import { ShoeForm } from "./shoe-form";
import { ShoeContainer } from "./shoe-container";

export const EditShoe = ({ shoe }: { shoe: ShoeProps }) => {
  return (
    <ShoeContainer>
      <ShoeContainer.Title>Edit {shoe.name}</ShoeContainer.Title>
      <ShoeForm shoe={shoe} />
    </ShoeContainer>
  );
};
