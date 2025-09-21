import type { Note } from "@/types/Note";
import clsx from "clsx";
import React from "react";
interface NoteItemProps {
  note: Note;
  onClick: () => void;
  isSelected: boolean;
}
function NoteItem({ note, onClick, isSelected }: NoteItemProps) {
  const isMediumScreen = window.innerWidth <= 768;
  return (
    <div
      onClick={onClick}
      className={clsx(
        " rounded-sm p-2 m-2 border-b border-gray grid gap-2",
        isSelected && !isMediumScreen
          ? "border-l-4 border-blue-600  bg-gray-100"
          : "hover:bg-gray-50 bg-white"
      )}
    >
      <h2 className="font-bold text-base    ">{note.title}</h2>
      {note.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {note.tags.map((tag) => (
            // <span className="text-[.7rem] bg-gray-200 max-w-max px-2 py-0.5 rounded-sm font-normal ">
            //   label
            // </span>
            <span
              key={tag}
              className="text-[.7rem] bg-gray-200 max-w-max px-2 py-0.5 rounded-sm font-normal text-gray-600  p-1 "
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm font-semibold ">{note.content}</p>
      <p className="text-[.6rem]  text-gray-600 ">
        {note.createdAt.toLocaleDateString()}
      </p>
    </div>
  );
}

export default NoteItem;
