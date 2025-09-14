import { ChevronRight, DownloadIcon, HomeIcon } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import clsx from "clsx";

function SideBar() {
  const [selectedOption, setSelectedOption] = React.useState("allNotes");
  return (
    <div className="lg:flex-1 hidden lg:block bg-white w-full    lg:min-w-[250px] p-4">
      <div className="     hidden lg:block pt-4">
        <img
          src="/notes-logo.svg"
          alt="logo"
          className="  object-fill    h-[35px]   "
        />
      </div>
      <button
        onClick={() => setSelectedOption("allNotes")}
        className={clsx(
          "bg-gray-100 hover:bg-gray-200  flex gap-3 items-center text-base w-full mt-8 p-1.5 rounded-sm pl-2",
          selectedOption === "allNotes" && "bg-gray-100"
        )}
      >
        <HomeIcon className="size-4" />
        All Notes
        {selectedOption === "allNotes" && (
          <ChevronRight className="size-3 ml-auto" />
        )}
      </button>
      <button
        onClick={() => setSelectedOption("archivedNotes")}
        className={clsx(
          "hover:bg-gray-200   flex gap-3 items-center text-base w-full mt-1.5 p-1.5 rounded-sm pl-2",
          selectedOption === "archivedNotes" && "bg-gray-100"
        )}
      >
        <DownloadIcon className="size-4" />
        Archived Notes
        {selectedOption === "archivedNotes" && (
          <ChevronRight className="size-3 ml-auto" />
        )}
      </button>
      <Separator orientation="horizontal" className="bg-gray-200  mt-5 " />
    </div>
  );
}

export default SideBar;
