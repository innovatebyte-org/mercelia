import { ShoeReviewProps } from "@/components/ui/shoe/type";

export const shoeRating = (reviews: ShoeReviewProps[]) => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  return totalRating / reviews.length;
};
