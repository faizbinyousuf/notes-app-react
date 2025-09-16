/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "./ui/input";
import { ClockIcon, TagIcon, X } from "lucide-react";
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

function NoteArea() {
  const initialTags = [
    "Work",
    "Planning",
    "Personal",
    "Ideas",
    "Random",
    "lifestyle",
    "shopping",
    "learning",
  ];

  const [allTags, setAllTags] = React.useState(initialTags);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState("");

  const filteredTags = allTags.filter(
    (tag) =>
      tag.toLowerCase().includes(query.toLowerCase()) &&
      !selectedTags.includes(tag)
  );

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      if (!allTags.includes(tag)) setAllTags([...allTags, tag]); // add new tag
    }
    setQuery("");
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    console.log(selectedTags);
  };
  return (
    <div className="hidden lg:block bg-white  lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 w-full border border-gray-200 ">
      {/* Top area */}

      <div className=" mt-3 bg-white border-b border-gray-200 p-6">
        <div className="  w-full ">
          <Input
            type="text"
            placeholder="Enter a title..."
            style={{ width: "100%", fontSize: "1.5rem" }}
            className="font-bold  h-12   border-2 border-transparent    shadow-none focus-visible:ring-0 focus-visible:ring-offset-0   focus:border-gray-800  "
          />
        </div>
        <div className="space-y-4 mt-5  ">
          <div className="flex-1 relative    ">
            <div className="flex flex-wrap gap-2 mb-1 ">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTag(tag);
                    }}
                    className="ml-1 rounded hover:bg-gray-200 p-0.5"
                  >
                    <X className="h-3 w-3 pointer-events-none" />
                  </button>
                </Badge>
              ))}
            </div>

            <Command className=" rounded-md">
              <div className="flex items-center gap-3">
                <TagIcon className="size-4 text-gray-500" />
                <Label className="w-24 text-sm font-medium text-gray-700">
                  Tags
                </Label>

                <Input
                  type="text"
                  placeholder="Add tags..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-sm text-gray-400 border-2 border-transparent  shadow-none focus-visible:ring-0 focus-visible:ring-offset-0    focus:border-gray-800   flex-1 "
                />
              </div>
              {query && (
                <CommandList className="absolute z-50 w-full mt-9 bg-white border rounded-md shadow-md">
                  {filteredTags.length > 0 && (
                    <CommandGroup>
                      {filteredTags.map((tag) => (
                        <CommandItem key={tag} onSelect={() => addTag(tag)}>
                          {tag}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}
                </CommandList>
              )}
            </Command>
          </div>

          <div className="flex items-center gap-3">
            <ClockIcon className="size-4 text-gray-500" />
            <Label className="w-24 text-sm font-medium text-gray-700">
              Last Edited
            </Label>
            <span className="text-sm text-gray-500">Not yet saved.</span>
          </div>
        </div>
      </div>
      {/* Input area */}
      <div className="p-5 border-b border-gray-200 ">
        <Textarea
          placeholder="Start typing here..."
          minLength={1}
          rows={10}
          className="h-40 flex-1   border-2 border-transparent    shadow-none focus-visible:ring-0 focus-visible:ring-offset-0   focus:border-gray-800"
        />
        <div>
          <Button
            type="button"
            className="mt-5 bg-blue-600 hover:bg-blue-800 px-6 "
            variant="default"
            size="lg"
          >
            Save
          </Button>
          <Button
            type="button"
            className="mt-5 ml-3"
            variant="outline"
            size="lg"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoteArea;
