import { ChevronRight, DownloadIcon, HomeIcon, TagIcon } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import clsx from "clsx";

function SideBar() {
  const [selectedOption, setSelectedOption] = React.useState("allNotes");
  const [selectedTag, setSelectedTag] = React.useState("Work");
  const tags = ["Work", "Personal", "Important", "Random"];
  return (
    <div className=" lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3  hidden lg:block bg-white w-full   pl-4  ">
      <div className="     hidden lg:block pt-3">
        <img
          src="/notes-logo.svg"
          alt="logo"
          className="  object-fill    h-[33px]   "
        />
      </div>
      <button
        onClick={() => setSelectedOption("allNotes")}
        className={clsx(
          "hiver:bg-gray-100 hover:bg-gray-200  flex gap-3 items-center text-sm w-full mt-8 p-1.5 rounded-sm pl-2",
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
          "hover:bg-gray-200   flex gap-3 items-center text-sm w-full mt-1.5 p-1.5 rounded-sm pl-2",
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
      <h3 className="text-base font-[500]  my-2">Tags</h3>
      <div className="grid gap-2 ml-6 mt-3 font-normal">
        {tags.map((tag) => (
          <button
            className={clsx(
              "flex gap-3 items-center text-sm w-full mt-1.5 p-1.5 rounded-sm pl-2 hover:bg-gray-200",
              selectedTag === tag && "bg-gray-100"
            )}
            key={tag}
            onClick={() => setSelectedTag(tag)}
          >
            <TagIcon className="size-4" />
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
