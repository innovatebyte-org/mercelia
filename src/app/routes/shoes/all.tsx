import { ContentLayout } from "@/components/layout/content-layout";
import { ListAllShoes } from "@/features/shoes/components/admin-all-shoe";

export const AllShoesRoute = () => {
  return (
    <ContentLayout title="All Shoes">
      <ListAllShoes />
    </ContentLayout>
  );
};
