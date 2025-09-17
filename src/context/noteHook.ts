import { createContext, useContext } from "react";
import type { NotesContextType } from "@/types/Note";

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesContextProvider");
  }
  return context;
};

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
);
