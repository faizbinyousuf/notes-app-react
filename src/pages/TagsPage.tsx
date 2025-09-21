import { useNotes } from "@/context/noteHook";
import clsx from "clsx";
import { TagIcon, X } from "lucide-react";
import React from "react";

function TagsPage() {
  const { state, dispatch } = useNotes();
  const tags = state.tags;

  const [selectedTag, setSelectedTag] = React.useState<string | null>(
    state.selelctedTag ?? ""
  );
  React.useEffect(() => {}, []);

  return (
    <div className="p-3">
      <div className="grid gap-2 font-normal">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-[500]  my-2">Tags</h3>
          <button
            className={clsx(
              "flex gap-1 items-center text-xs  mt-1.5 p-1.5 rounded-sm pl-2 hover:bg-gray-200 cursor-pointer",
              selectedTag === "" && "hidden"
            )}
            onClick={() => {
              setSelectedTag("");
              dispatch({ type: "CLEAR_FILTER_BY_TAGS" });
            }}
          >
            <X className="size-4" />
            Clear Tag
          </button>
        </div>

        {tags.map((tag) => (
          <button
            className={clsx(
              "flex gap-3 ml-1.5 items-center text-sm w-full p-1.5 rounded-sm  hover:bg-gray-200",
              selectedTag === tag && "bg-gray-100"
            )}
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              dispatch({ type: "FILTER_NOTES_BY_TAG", payload: tag });
            }}
          >
            <TagIcon className="size-4" />
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagsPage;
