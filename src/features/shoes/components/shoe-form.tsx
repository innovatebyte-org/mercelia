import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form";
import { ShoeProps } from "@/components/ui/shoe/type";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

export const ShoeForm = ({ shoe }: { shoe?: ShoeProps }) => {
  const { register } = useForm();
  return (
    <form className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="w-full flex flex-col gap-6 items-start lg:col-span-2">
        <Input
          name="ShoeName"
          label="Shoe Name"
          register={register}
          placeholder="Shoe Name"
          defaultValue={shoe?.name}
        />
        <Input
          name="ShoeDescription"
          label="Shoe Description"
          register={register}
          placeholder="Shoe Description"
          defaultValue={shoe?.description}
        />
        <div className="w-full flex flex-col items-start gap-2">
          <label
            htmlFor={"shoeImages"}
            className="w-full flex flex-col items-start gap-2"
          >
            <span className="text-sm font-semibold text-slate-700">
              Shoe Images
            </span>
            <div className="w-full h-52 border border-slate-500 hover:border-slate-800 rounded-lg border-dashed flex items-center gap-4 justify-center">
              <ArrowUpTrayIcon className="size-10 text-slate-700 hover:text-slate-900" />
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-bold text-slate-900">
                  Add Shoe Images
                </h5>
                <p className="text-base text-slate-600">
                  Select images for the shoe
                </p>
              </div>
            </div>
          </label>
          {shoe ? (
            <div className="flex items-start gap-4 mt-1">
              {shoe.images.map((image, index) => (
                <div
                  key={index}
                  className="size-24 rounded overflow-hidden bg-slate-100 flex items-center justify-center"
                >
                  <img
                    key={index}
                    alt="shoe preview"
                    src={image}
                    className="size-5/6 object-cover object-center"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <input
            type="file"
            name="shoeImages"
            id="shoeImages"
            className="hidden"
            accept="image/*"
            multiple
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-6">
        <div className="flex w-full items-start gap-6">
          <Input
            name="ShoePrice"
            label="Shoe Price"
            register={register}
            placeholder="0.00"
            extraContent="₦"
            defaultValue={shoe?.price}
          />
          <Input
            name="ShoeStock"
            label="Shoe Stock"
            register={register}
            placeholder="0"
            inputMode="numeric"
            type="number"
            defaultValue={shoe?.stock}
          />
        </div>
        <Button size={"lg"} width={"full"}>
          {shoe ? "Update Shoe" : "Add New Shoe"}
        </Button>
      </div>
    </form>
  );
};
