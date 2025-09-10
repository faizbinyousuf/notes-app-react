import React from "react";
import NoteItem from "./NoteItem";

function NotesList() {
  return (
    <div className="overflow-y-auto h-full ">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <NoteItem key={index} />
        ))}
    </div>
  );
}

export default NotesList;
