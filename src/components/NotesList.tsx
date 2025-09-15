import { PlusIcon } from "lucide-react";
import FloatingActionButton from "./Fab";
import NoteItem from "./NoteItem";
import { Button } from "./ui/button";

function NotesList() {
  return (
    <div className="bg-white overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300  w-full  xl:px-4 lg:px-1   border border-gray-200 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 ">
      <div className="flex flex-col h-screen">
        <Button className=" bg-blue-600 mx-3 mt-4 rounded-sm text-white hover:bg-blue-800">
          <PlusIcon className="" />
          Add Note
        </Button>
        <div className="flex-1 ">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <NoteItem key={index} />
            ))}
        </div>
        <FloatingActionButton />
      </div>
    </div>
  );
}

export default NotesList;
