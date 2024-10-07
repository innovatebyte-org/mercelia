import { CartItemProps } from "@/features/cart/components/type";
import { dummyShoesData } from "./shoes";

export const dummyCart: CartItemProps[] = [
  {
    orderId: "#001",
    quantity: 1,
    order: dummyShoesData[0],
  },
  {
    orderId: "#002",
    quantity: 1,
    order: dummyShoesData[1],
  },
  {
    orderId: "#003",
    quantity: 1,
    order: dummyShoesData[2],
  },
];
