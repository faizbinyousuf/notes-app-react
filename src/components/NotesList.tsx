import React from "react";
import NoteItem from "./NoteItem";

function NotesList() {
  return (
    <div>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <NoteItem key={index} />
        ))}
    </div>
  );
}

export default NotesList;
