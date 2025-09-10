import React from "react";

function NoteItem() {
  return (
    <div className="bg-white p-3 m-3 border-b border-gray grid gap-2">
      <h2 className="font-bold text-lg    ">Title</h2>
      <span className="text-sm bg-gray-200 ">label</span>
      <p className="text-sm  text-gray-400">03 Sep 2025</p>
    </div>
  );
}

export default NoteItem;
