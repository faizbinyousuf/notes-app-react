import React from "react";

function NoteItem() {
  return (
    <div className="bg-white p-3 m-3 border-b border-gray grid gap-2">
      <h2 className="font-bold text-base    ">Title</h2>
      <span className="text-[.7rem] bg-gray-200 max-w-max px-2 py-0.5 rounded-sm font-normal ">
        label
      </span>
      <p className="text-[.7rem]  text-gray-600 ">03 Sep 2025</p>
    </div>
  );
}

export default NoteItem;
