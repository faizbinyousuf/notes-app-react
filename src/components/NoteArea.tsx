/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "./ui/input";
import { ClockIcon, PlusIcon, TagIcon, X } from "lucide-react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import React from "react";
import { Badge } from "./ui/badge";
import { clsx } from "clsx";
import { useNotes } from "@/context/noteHook";
import { v4 as uuidv4 } from "uuid";
import type { Note } from "@/types/Note";
import { useNavigate } from "react-router-dom";

function NoteArea({ className }: { className?: string }) {
  console.log("NoteArea rendered");
  const { state, dispatch } = useNotes();
  const navigate = useNavigate();
  const [allTags, setAllTags] = React.useState(state.tags);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const [noteText, setNoteText] = React.useState("");
  const [noteTitle, setNoteTitle] = React.useState("");

  const selectedNote = state.selectedNote;
  const isNoteFocused = state.isFocused;
  const titleRef = React.useRef<HTMLInputElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = React.useState<number>();

  React.useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.offsetWidth);
    }
  }, [query]);

  React.useEffect(() => {
    if (isNoteFocused && titleRef.current) {
      titleRef.current.focus();
    }
  }, [isNoteFocused]);

  React.useEffect(() => {
    if (selectedNote) {
      setNoteTitle(selectedNote.title);
      setNoteText(selectedNote.content);
      setSelectedTags(selectedNote.tags);
    }
  }, [selectedNote]);

  // React.useEffect(() => {
  //   if (!isFocused) {
  //     setQuery("");
  //   }
  // }, [isFocused]);

  React.useEffect(() => {
    if (!selectedNote) {
      setNoteTitle("");
      setNoteText("");
      setSelectedTags([]);
    }
  }, [selectedNote]);

  const filteredTags = allTags.filter(
    (tag) =>
      tag.toLowerCase().includes(query.toLowerCase()) &&
      !selectedTags.includes(tag)
  );

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      if (!allTags.includes(tag)) {
        setAllTags([...allTags, tag]);
      }
    }
    setQuery("");
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    console.log(selectedTags);
  };
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
  };

  return (
    <div
      className={clsx(
        className,
        " lg:block   lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 w-full lg:border border-gray-200 dark:border-gray-700 "
      )}
    >
      {/* Top area */}

      <div className=" mt-3   lg:border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="  w-full ">
          <Input
            ref={titleRef}
            type="text"
            placeholder="Enter a title..."
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            style={{ width: "100%", fontSize: "1.5rem" }}
            className="font-bold  h-12   border-2 border-transparent dark:border-gray-700   shadow-none focus-visible:ring-0 focus-visible:ring-offset-0   focus:border-gray-800  "
          />
        </div>
        <div className="space-y-4 mt-5    ">
          <div className="flex-1 relative    ">
            <div className="flex flex-wrap gap-2 mb-1 ">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(tag);
                    }}
                    className="ml-1 rounded hover:bg-gray-200 dark:hover:bg-brandDark p-0.5"
                  >
                    <X className="h-3 w-3 pointer-events-none" />
                  </button>
                </Badge>
              ))}
            </div>

            <Command className=" rounded-md">
              <div>
                <div className="flex items-center gap-3 relative   dark:bg-[#121212]">
                  <TagIcon className="size-4 text-gray-500" />
                  <Label className="w-24 text-sm font-medium text-gray-700">
                    Tags
                  </Label>
                  {isFocused && filteredTags.length === 0 && (
                    <button
                      type="button"
                      onClick={() => addTag(query)}
                      className="bg-blue-600 dark:bg-blue-900 text-sm text-white absolute right-0 top-0 p-2 px-4 font-bold h-full"
                    >
                      <PlusIcon className="size-4" />
                    </button>
                  )}
                  <Input
                    type="text"
                    id="tags"
                    ref={inputRef}
                    placeholder="Add tags..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    // onBlur={() => setIsFocused(false)}
                    className="text-sm w-full   text-gray-400 border-2 border-transparent dark:border-gray-700 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0    focus:border-gray-800   flex-1 "
                  />
                </div>
                {query && (
                  <CommandList
                    style={{ width: inputWidth }}
                    className={clsx(
                      "absolute right-0 top-full bg-white dark:bg-gray-800 border rounded-md shadow-md",
                      filteredTags.length === 0 && "border-0"
                    )}
                  >
                    {/* <CommandEmpty>No results found.</CommandEmpty> */}
                    {filteredTags.length > 0 && (
                      <CommandGroup>
                        {filteredTags.map((tag) => (
                          <CommandItem
                            className="  hover:bg-gray-100 dark:hover:bg-gray-700  "
                            key={tag}
                            onSelect={() => addTag(tag)}
                          >
                            {tag}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                )}
              </div>
            </Command>
          </div>

          <div className="flex items-center gap-3">
            <ClockIcon className="size-4 text-gray-500" />
            <Label className="w-24 text-sm font-medium text-gray-700">
              Last Edited
            </Label>
            <span className="text-sm text-gray-500">
              {selectedNote
                ? formatDate(selectedNote.updatedAt)
                : "Not yet saved."}
            </span>
          </div>
        </div>
      </div>
      {/* Input area */}
      <div className="p-5 border-b border-gray-200 dark:border-gray-700 ">
        <Textarea
          placeholder="Start typing here..."
          minLength={1}
          rows={10}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="h-40 flex-1   border-2 border-transparent dark:border-gray-700    shadow-none focus-visible:ring-0 focus-visible:ring-offset-0   focus:border-gray-800"
        />
        <div>
          <Button
            type="button"
            className="mt-5 bg-blue-600 dark:bg-blue-900  hover:bg-blue-800 dark:hover:bg-blue-700 px-6 dark:text-gray-300 "
            variant="default"
            size="lg"
            onClick={() => {
              const note: Note = {
                id: uuidv4(),
                title: noteTitle,
                content: noteText,
                tags: selectedTags,
                createdAt: new Date(),
                updatedAt: new Date(),
                isArchived: selectedNote ? selectedNote.isArchived : false,
              };
              if (!selectedNote) {
                dispatch({
                  type: "ADD_NOTE",
                  payload: note,
                });

                dispatch({ type: "SET_SELECTED_NOTE", payload: null });
              } else {
                const updatedNote = {
                  ...selectedNote,
                  title: noteTitle,
                  content: noteText,
                  tags: selectedTags,
                  createdAt: selectedNote.createdAt,
                  updatedAt: new Date(),
                  isArchived: selectedNote.isArchived,
                };
                // do nothing if none of the note properties changed
                if (
                  updatedNote.title === selectedNote.title &&
                  updatedNote.content === selectedNote.content &&
                  updatedNote.tags.length === selectedNote.tags.length
                ) {
                  console.log("no changes detected");
                  return;
                }

                dispatch({ type: "UPDATE_NOTE", payload: { ...updatedNote } });
                dispatch({ type: "SET_SELECTED_NOTE", payload: null });
              }
              setSelectedTags([]);
              setQuery("");
              setNoteText("");
              setNoteTitle("");
              setIsFocused(false);
              //on medium screens, go back to the previous page
              if (window.innerWidth < 1024) {
                navigate(-1);
              }
            }}
          >
            {selectedNote ? "Update" : "Save"}
          </Button>
          <Button
            type="button"
            className="mt-5 ml-3"
            variant="outline"
            size="lg"
            onClick={() => {
              setSelectedTags([]);
              setQuery("");
              setNoteText("");
              setNoteTitle("");
              // setIsFocused(false);
              dispatch({ type: "SET_SELECTED_NOTE", payload: null });
              //on medium screens, go back to the previous page
              if (window.innerWidth < 1024) {
                navigate(-1);
              }
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoteArea;
