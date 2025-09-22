import { PlusIcon, SearchIcon, SettingsIcon } from "lucide-react";
import FloatingActionButton from "./Fab";
import NoteItem from "./NoteItem";
import { Button } from "./ui/button";
import { type Note } from "@/types/Note";
import { useNotes } from "@/context/noteHook";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import React from "react";

function NotesList() {
  console.log("NotesList rendered");
  const { state, dispatch } = useNotes();
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    setQuery("");
    if (state.selelctedTag) {
      dispatch({ type: "FILTER_NOTES_BY_TAG", payload: state.selelctedTag });
    } else {
      dispatch({ type: "SEARCH_NOTES", payload: "" });
    }
  }, []);

  const notes: Note[] = state.notes.filter((note) => !note.isArchived);
  const archivedNotes: Note[] = state.notes.filter((note) => note.isArchived);
  const notesToDisplay = state.showArchived ? archivedNotes : notes;

  return (
    <div className="bg-white overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300  w-full  xl:px-4 lg:px-1   lg:border border-gray-200 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3  ">
      <div
        onClick={() => dispatch({ type: "SET_FOCUS", payload: true })}
        className="sticky top-0 z-50 bg-white py-3 px-3 hidden lg:block"
      >
        <Button className=" bg-blue-600 rounded-sm w-full text-white hover:bg-blue-800">
          <PlusIcon className="" />
          Add Note
        </Button>
      </div>
      <div className="lg:hidden flex w-full items-center gap-2 relative px-5 mt-5">
        <SearchIcon className="size-4 absolute left-8 " />
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch({ type: "SEARCH_NOTES", payload: e.target.value });
          }}
          placeholder="Search by title, content or tags..."
          className="text-sm text-gray-400 pl-9 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border  border-gray-300 focus:border-gray-800  "
        />
      </div>
      <div className="px-2 pb-24 lg:pb-10  space-y-3 flex flex-col min-h-screen ">
        {notesToDisplay.length === 0 && (
          <p className="text-gray-500 text-center mt-10">No notes available.</p>
        )}
        {notesToDisplay
          .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
          .map((note) => (
            <NoteItem
              isSelected={note.id === state.selectedNote?.id}
              key={note.id}
              note={note}
              onClick={() => {
                dispatch({ type: "SET_SELECTED_NOTE", payload: note });
                if (window.innerWidth <= 768) {
                  navigate(`/noteDetail/${note.id}`);
                }
              }}
            />
          ))}
      </div>
      <FloatingActionButton hide={state.showArchived ? true : false} />

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
