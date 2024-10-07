import { ShoeContainer } from "./shoe-container";
import { ShoeForm } from "./shoe-form";

export const AddNewShoe = () => {
  return (
    <ShoeContainer>
      <ShoeContainer.Title>Add New Shoe</ShoeContainer.Title>
      <ShoeForm />
    </ShoeContainer>
  );
};
