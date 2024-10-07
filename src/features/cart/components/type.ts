import { ShoeProps } from "@/components/ui/shoe/type";

export type CartItemProps = {
  orderId: string;
  quantity: number;
  order: ShoeProps;
};
