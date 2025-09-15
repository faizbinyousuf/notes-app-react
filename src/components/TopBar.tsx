import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon, SettingsIcon } from "lucide-react";

function TopBar() {
  return (
    <div
      className="bg-white border-gray-200 lg:col-start-2 lg:col-end-6 hidden    h-16 w-full lg:flex items-center justify-between px-6 py-10
    border border-l-gray-200
    "
    >
      <h1 className=" text-3xl font-bold ">All Notes</h1>
      <div className="flex w-full max-w-sm items-center gap-2 relative">
        <SearchIcon className="size-4 absolute left-3 " />
        <Input
          type="search"
          placeholder="Search by title, content or tags..."
          className="text-sm text-gray-400 pl-9 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border  border-gray-300 focus:border-gray-800  "
        />
        <Button type="button" variant="ghost">
          <SettingsIcon className="size-6" />
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
