import React from "react";
import NoteItem from "./NoteItem";
import FloatingActionButton from "./Fab";

function NotesList() {
  return (
    <div className="bg-cyan-100 overflow-y-auto h-full w-full    lg:min-w-[250px] p-3 lg:flex-1">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <NoteItem key={index} />
        ))}
      <FloatingActionButton />
    </div>
  );
}

export default NotesList;
