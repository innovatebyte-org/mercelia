import { ContentLayout } from "@/components/layout/content-layout";
import { AllShoes } from "@/features/shoes/components/all-shoes";

export const ShoesListRoute = () => {
  return (
    <ContentLayout title="Top Selling Shoes" description="Top selling shoes">
      <AllShoes />
    </ContentLayout>
  );
};
