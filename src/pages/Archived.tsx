import NotesList from "@/components/NotesList";
import { useNotes } from "@/context/noteHook";
import React from "react";

function Archived() {
  const { dispatch } = useNotes();
  React.useEffect(() => {
    dispatch({ type: "SET_SHOW_ARCHIVED", payload: true });

    return () => {
      dispatch({ type: "SET_SHOW_ARCHIVED", payload: false });
    };
  }, [dispatch]);
  return (
    <>
      <NotesList />
    </>
  );
}

export default Archived;
