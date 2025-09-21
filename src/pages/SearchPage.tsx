// import NotesList from "@/components/NotesList";
// import { Input } from "@/components/ui/input";
// import { useNotes } from "@/context/noteHook";
// import { SearchIcon } from "lucide-react";
// import React from "react";

// function SearchPage() {
//   const [query, setQuery] = React.useState("");
//   const { state, dispatch } = useNotes();
//   const notes = state.notes;
//   return (
//     <div className="p-5">
//       <h1 className="text-xl font-bold">Search Notes</h1>
//       <div className="flex w-full  items-center gap-2 relative mt-3">
//         <SearchIcon className="size-4 absolute left-3 " />
//         <Input
//           type="search"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             dispatch({ type: "SEARCH_NOTES", payload: e.target.value });
//           }}
//           placeholder="Search by title, content or tags..."
//           className="text-sm text-gray-400 pl-9 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border  border-gray-300 focus:border-gray-800  "
//         />
//       </div>
//       <NotesList />
//     </div>
//   );
// }

// export default SearchPage;
