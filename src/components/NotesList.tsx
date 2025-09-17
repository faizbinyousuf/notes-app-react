import { PlusIcon } from "lucide-react";
import FloatingActionButton from "./Fab";
import NoteItem from "./NoteItem";
import { Button } from "./ui/button";
import { type Note } from "@/types/Note";
import { useNotes } from "@/context/noteHook";

function NotesList() {
  console.log("NotesList rendered");
  const { state } = useNotes();
  const notes: Note[] = state.notes;

  return (
    <div className="bg-white overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300  w-full  xl:px-4 lg:px-1   border border-gray-200 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3  ">
      <div className="sticky top-0 z-50 bg-white py-3 px-3 hidden lg:block">
        <Button className=" bg-blue-600 rounded-sm w-full text-white hover:bg-blue-800">
          <PlusIcon className="" />
          Add Note
        </Button>
      </div>
      <div className="px-3 pb-24 space-y-3 flex flex-col h-screen">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <FloatingActionButton />

      {/* <div className="flex flex-col h-screen  ">
        <div className="flex-1 ">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <NoteItem key={index} />
            ))}
        </div>
        <FloatingActionButton />
      </div> */}
    </div>
  );
}

export default NotesList;
