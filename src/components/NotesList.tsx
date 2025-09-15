import NoteItem from "./NoteItem";
import FloatingActionButton from "./Fab";

function NotesList() {
  return (
    <div className="bg-white overflow-y-scroll [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-300   h-full w-full lg:min-w-[300px] px-4 lg:flex-1 border border-gray-200">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <NoteItem key={index} />
        ))}
      <FloatingActionButton />
    </div>
  );
}

export default NotesList;
