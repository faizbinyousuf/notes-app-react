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
        " rounded-sm p-2 m-2 border-b border-gray-600 grid gap-2  ",
        isSelected && !isMediumScreen
          ? "border-l-4 border-blue-200 dark:border-blue-700  bg-gray-200 dark:bg-brandDark"
          : "hover:bg-gray-50 bg-gray-100 dark:bg-gray-700"
      )}
    >
      <h2 className="font-bold text-base dark:text-gray-300   ">
        {note.title}
      </h2>
      {note.tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {note.tags.map((tag) => (
            // <span className="text-[.7rem] bg-gray-200 max-w-max px-2 py-0.5 rounded-sm font-normal ">
            //   label
            // </span>
            <span
              key={tag}
              className="text-[.7rem] bg-gray-200 dark:bg-gray-600 max-w-max px-2 py-0.5 rounded-sm font-normal text-gray-600 dark:text-gray-400  p-1 "
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm font-semibold dark:text-gray-300">{note.content}</p>
      <p className="text-xs  text-gray-600 dark:text-gray-400 ">
        {note.createdAt.toLocaleDateString()}
      </p>
    </div>
  );
}

export default NoteItem;
