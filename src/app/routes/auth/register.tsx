import { AuthLayout } from "@/components/layout/auth-layout";
import { Register } from "@/features/auth/register/components";

export const RegisterRoute = () => {
  return (
    <AuthLayout title="Register">
      <Register />
    </AuthLayout>
  );
};
