import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChevronDown, SearchIcon, SettingsIcon } from "lucide-react";
import { useNotes } from "@/context/noteHook";
import { useFont } from "@/context/fontHook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./themeToggle";

function TopBar() {
  console.log("TopBar rendered");

  const { state, dispatch } = useNotes();
  const [query, setQuery] = React.useState("");
  const { font, setFont } = useFont();
  const [isOpen, setIsOpen] = React.useState(false);
  const fonts = [
    "Montserrat",
    "Ubuntu",
    "Raleway",
    "Open Sans",
    "Saira",
    "SUSE Mono",
  ];

  return (
    <div
      className=" border-gray-200 dark:border-gray-700 lg:col-start-2 lg:col-end-6 hidden   h-16  w-full lg:flex items-center justify-between px-6 py-10
    border border-l-gray-200 dark:border-l-gray-700
    "
    >
      <h1 className=" text-3xl font-bold   ">
        {state.showArchived ? "Archived Notes" : "All Notes"}
      </h1>
      <div className="ml-auto mr-5">
        <ModeToggle />
      </div>
      <div className="flex w-full max-w-sm items-center gap-2 relative">
        <SearchIcon className="size-4 absolute left-3 " />
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch({ type: "SEARCH_NOTES", payload: e.target.value });
          }}
          placeholder="Search by title, content or tags..."
          className="text-sm text-gray-400 pl-9 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border  border-gray-300 dark:border-gray-700 focus:border-gray-800  "
        />

        <div className="mr-10 ml-3 mt-1">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger>
              <SettingsIcon className="size-6 mr-2" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 mr-3">
              <DropdownMenuLabel>Change Font</DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              <Select
                value={font}
                onValueChange={(value) => {
                  setFont(value as typeof font);
                  setIsOpen(false);
                }}
              >
                <SelectTrigger asChild className="w-full">
                  <Button
                    type="button"
                    variant="ghost"
                    className="justify-between"
                  >
                    <ChevronDown className="size-5 mr-2" />
                    <SelectValue placeholder="Select a font" />
                  </Button>
                </SelectTrigger>
                <SelectContent>
                  {fonts.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
