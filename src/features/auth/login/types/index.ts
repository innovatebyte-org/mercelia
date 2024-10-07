import { MyFormData } from "@/types";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginFormData = MyFormData<z.infer<typeof loginSchema>>;
