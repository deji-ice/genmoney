import React from "react";
import { Search} from "lucide-react";

const SearchBar = () => {
  return (
    <form action="" className="bg-[#EDEFF2] flex items-center px-4 py-1.5 rounded-lg w-[268px] gap-2 ">
      <Search className="h-6 w-6 text-[#5F576B]" />
      <input
        type="text"
        placeholder="Search"
        className="w-full font-family-open-sauce focus:outline-none focus:ring-2 rounded-md px-1 focus:ring-blue-500"
      />
    </form>
  );
};

export default SearchBar;
