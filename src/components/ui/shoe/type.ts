export type ShoeProps = {
  name: string;
  slug: string;
  previewImage: string;
  description: string;
  images: [string, string, string];
  price: number;
  stock: number;
  availableSizes?: [string, string, string];
  isLiked?: boolean;
  reviews: ShoeReviewProps[];
};

export type ShoeReviewProps = {
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
};
