import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Register = () => {
  const { register } = useForm();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <p className="text-slate-800 font-semibold text-lg">
        Create your account
      </p>
      <form className="w-full bg-white shadow-md rounded-lg border p-8 flex flex-col items-start gap-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Input name="firstName" label="First Name" register={register} />
          <Input name="lastName" label="Last Name" register={register} />
        </div>
        <Input name="phoneNumber" label="Phone Number" register={register} />
        <Input
          type="email"
          label="Email Address"
          name="email"
          register={register}
        />
        <Input
          type="password"
          label="Create Password"
          register={register}
          name="password"
        />

        <Button type="submit" width={"full"}>
          Register
        </Button>
      </form>
      <p className="text-slate-700 text-lg">
        Already a customer?{" "}
        <Link to={"/login"} className="font-semibold text-sm hover:underline">
          Login.
        </Link>
      </p>
    </div>
  );
};
