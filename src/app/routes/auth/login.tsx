import { AuthLayout } from "@/components/layout/auth-layout";
import { Login } from "@/features/auth/login/components";

export const LoginRoute = () => {
  return (
    <AuthLayout title="Login">
      <Login />
    </AuthLayout>
  );
};
