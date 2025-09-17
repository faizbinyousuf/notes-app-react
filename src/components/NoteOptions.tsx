import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon, Trash2Icon } from "lucide-react";

function NoteOptions() {
  console.log("NoteOptions rendered");
  return (
    <div className="hidden lg:block bg-white border border-gray-200 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 w-full   ">
      <div className="flex flex-col gap-4 p-3 mt-3  ">
        <Button
          className="flex justify-start items-center font-normal py-5"
          variant={"outline"}
          type="button"
        >
          <DownloadIcon className="size-6 text-gray-600 " />
          Archive Note
        </Button>
        <Button
          className="flex justify-start font-normal items-center text-rose-700  py-5"
          variant={"outline"}
          type="button"
        >
          <Trash2Icon className="size-6 " />
          Delete Note
        </Button>
      </div>
    </div>
  );
}

export default NoteOptions;
