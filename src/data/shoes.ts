import { ShoeProps } from "@/components/ui/shoe/type";

import addidas from "@/assets/images/addidas.png";
import vans from "@/assets/images/vans.png";
import nike from "@/assets/images/nike.png";
import nikeLong from "@/assets/images/nike-long.png";

export const dummyShoesData: ShoeProps[] = [
  {
    name: "Addidas",
    slug: "addidas",
    description:
      "Step up your game with the latest Adidas performance sneakers, designed for ultimate comfort and agility. Featuring a sleek, modern design and advanced cushioning technology, these shoes provide superior support and durability, making them perfect for both intense workouts and everyday wear.",
    price: 30000,
    previewImage: addidas,
    images: [addidas, vans, nike],
    stock: 4,
    availableSizes: ["42", "44", "46"],
    reviews: [
      { rating: 5, comment: "Good" },
      { rating: 4, comment: "Good" },
      { rating: 3, comment: "Good" },
    ],
  },
  {
    name: "Vans",
    slug: "vans",
    description:
      "Step into timeless style and unmatched comfort with our Vans classic skate shoes, featuring a durable canvas upper, signature waffle outsole, and versatile design that seamlessly blends streetwear flair with everyday functionality.",
    price: 18000,
    previewImage: vans,
    images: [vans, addidas, nikeLong],
    stock: 4,
    availableSizes: ["42", "44", "46"],
    reviews: [
      { rating: 3, comment: "Good" },
      { rating: 3, comment: "Good" },
      { rating: 3, comment: "Good" },
    ],
  },
  {
    name: "Nike",
    slug: "nike",
    description:
      "Step up your style game with the Vans Nike collaboration sneakers, blending the classic Vans silhouette with Nike's innovative technology for unmatched comfort and durability. Perfect for any occasion, these kicks offer a sleek design and premium materials, making them a must-have for sneaker enthusiasts and fashion-forward individuals alike.",
    price: 15000,
    previewImage: nike,
    images: [nike, addidas, vans],
    stock: 4,
    availableSizes: ["42", "44", "46"],
    reviews: [
      { rating: 5, comment: "Good" },
      { rating: 5, comment: "Good" },
      { rating: 4, comment: "Good" },
    ],
  },
  {
    name: "Nike Heels",
    slug: "nike-heels",
    description:
      "Step up your style game with the Vans Nike collaboration sneakers, blending the classic Vans silhouette with Nike's innovative technology for unmatched comfort and durability. Perfect for any occasion, these kicks offer a sleek design and premium materials, making them a must-have for sneaker enthusiasts and fashion-forward individuals alike.",
    price: 25000,
    previewImage: nikeLong,
    images: [nikeLong, nike, addidas],
    stock: 0,
    availableSizes: ["42", "44", "46"],
    reviews: [
      { rating: 4, comment: "Good" },
      { rating: 4, comment: "Good" },
      { rating: 3, comment: "Good" },
    ],
  },
];
