import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchBar = () => {
  return (
    <MagnifyingGlassIcon className="text-slate-400 hover:text-slate-50 size-6" />
  );
  return (
    <div className="w-max h-10 relative">
      <input
        name="search"
        type="search"
        className="size-full bg-slate-500/50 relative rounded-full overflow-hidden pl-10 placeholder:capitalize hidden"
        placeholder="search..."
      />
    </div>
  );
};
