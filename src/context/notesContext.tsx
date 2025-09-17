import { sampleNotes, type NoteAction, type NoteState } from "@/types/Note";
import React, { useReducer } from "react";
import { NotesContext } from "./noteHook";

function notesReducer(state: NoteState, action: NoteAction): NoteState {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        selectedNote:
          state.selectedNote?.id === action.payload ? null : state.selectedNote,
      };
    case "SET_SELECTED_NOTE":
      return { ...state, selectedNote: action.payload };
    default:
      return state;
  }
}

const initialState: NoteState = {
  notes: sampleNotes,
  selectedNote: null,
};

export const NotesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
