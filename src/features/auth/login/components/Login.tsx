import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginFormData, loginSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

export const Login = () => {
  // const navigate = useNavigate();
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // const loginCustomer: SubmitHandler<LoginFormData> = async (
  //   data: LoginFormData,
  // ) => {
  //   try {
  //     console.log("raw data", data);
  //     const validData = loginSchema.parse(data);
  //     console.log("login Data", validData);
  //   } catch (error) {
  //     if (error instanceof ZodError) {
  //       error.issues.forEach((issue) => {
  //         setError(issue.path[0] as keyof LoginFormData, {
  //           message: issue.message,
  //         });
  //       });
  //     }
  //   }
  // };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <p className="text-slate-800 font-semibold text-lg">
        Sign in to your account
      </p>
      <form
        // onSubmit={handleSubmit(loginCustomer)}
        className="w-full bg-white shadow-md rounded-lg border p-8 flex flex-col items-start gap-4"
      >
        <Input
          // type="email"
          label="Email Address"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="Password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Link
          to={"/forgot-password"}
          className="w-full flex justify-end text-sm font-semibold text-slate-800 hover:underline"
        >
          Forgot Password?
        </Link>
        <Button type="submit" width={"full"}>
          Login
        </Button>
      </form>
      <p className="text-slate-700 text-lg">
        Not a customer?{" "}
        <Link
          to={"/register"}
          className="font-semibold text-sm hover:underline"
        >
          Register.
        </Link>
      </p>
    </div>
  );
};
