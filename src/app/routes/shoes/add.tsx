import { ContentLayout } from "@/components/layout/content-layout";
import { AddNewShoe } from "@/features/shoes/components/add-shoe";

export const AddNewShoeRoute = () => {
  return (
    <ContentLayout title="Add New Shoe">
      <AddNewShoe />
    </ContentLayout>
  );
};
