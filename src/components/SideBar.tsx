import { ChevronRight, DownloadIcon, HomeIcon, TagIcon, X } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import clsx from "clsx";
import { useNotes } from "@/context/noteHook";

function SideBar() {
  const [selectedOption, setSelectedOption] = React.useState("allNotes");
  const [selectedTag, setSelectedTag] = React.useState("");
  const { state, dispatch } = useNotes();
  const tags = state.tags;
  return (
    <div className="  lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3  hidden lg:block   w-full   px-4  ">
      <div className="     hidden lg:block pt-3">
        <img
          src="/notes-logo.svg"
          alt="logo"
          className="  object-fill    h-[33px] dark:invert  "
        />
      </div>
      <button
        onClick={() => {
          setSelectedOption("allNotes");
          dispatch({ type: "SET_SHOW_ARCHIVED", payload: false });
        }}
        className={clsx(
          "  hover:bg-gray-200 dark:hover:bg-gray-800  flex gap-3 items-center text-sm w-full mt-8 p-1.5 rounded-sm pl-2",
          selectedOption === "allNotes" && "bg-gray-100 dark:bg-gray-800"
        )}
      >
        <HomeIcon className="size-4" />
        All Notes
        {selectedOption === "allNotes" && (
          <ChevronRight className="size-3 ml-auto" />
        )}
      </button>
      <button
        onClick={() => {
          setSelectedOption("archivedNotes");
          dispatch({ type: "SET_SHOW_ARCHIVED", payload: true });
        }}
        className={clsx(
          "hover:bg-gray-200 dark:hover:bg-gray-800   flex gap-3 items-center text-sm w-full mt-1.5 p-1.5 rounded-sm pl-2",
          selectedOption === "archivedNotes" && "bg-gray-100 dark:bg-gray-800"
        )}
      >
        <DownloadIcon className="size-4" />
        Archived Notes
        {selectedOption === "archivedNotes" && (
          <ChevronRight className="size-3 ml-auto" />
        )}
      </button>
      <Separator orientation="horizontal" className="  mt-5 " />
      <div className="flex justify-between items-center">
        <h3 className="text-base font-[500]  my-2">Tags</h3>
        <button
          className={clsx(
            "flex gap-1 items-center text-xs  mt-1.5 p-1.5 rounded-sm pl-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer",
            selectedTag === "" && "hidden"
          )}
          onClick={() => {
            setSelectedTag("");
            dispatch({ type: "CLEAR_FILTER_BY_TAGS" });
          }}
        >
          <X className="size-4" />
          Clear Tags
        </button>
      </div>

      <div className="grid gap-2 ml-6 mt-3 font-normal">
        {tags.map((tag) => (
          <button
            className={clsx(
              "flex gap-3 items-center text-sm w-full mt-1.5 p-1.5 rounded-sm pl-2 hover:bg-gray-200 dark:hover:bg-gray-800 ",
              selectedTag === tag && "bg-gray-100 dark:bg-gray-800"
            )}
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              dispatch({ type: "FILTER_NOTES_BY_TAG", payload: tag });
            }}
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
