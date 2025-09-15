import NoteItem from "./NoteItem";
import FloatingActionButton from "./Fab";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

function NotesList() {
  return (
    <div className="bg-white overflow-y-scroll [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300   h-full w-full  xl:px-4 lg:px-1   border border-gray-200 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
      Notelist
      {/* <Button
        className="lg:hidden fixed bottom-20 right-4 rounded-full p-7 shadow-lg z-50 bg-blue-600"
        size="icon"
      >
        <PlusIcon className="size-6" />
        Create Note
      </Button> */}
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <NoteItem key={index} />
        ))}
      {/* <FloatingActionButton /> */}
    </div>
  );
}

export default NotesList;
