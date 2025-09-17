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
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        ),
        // If you want to also update the selectedNote if it's the one being updated
        selectedNote:
          state.selectedNote?.id === action.payload.id
            ? { ...state.selectedNote!, ...action.payload }
            : state.selectedNote,
        // Alternative approach if you want to replace the selectedNote entirely:
        // return {
        // ...state,
        // selectedNote: { ...action.payload },
        // // If you also want to update the note in the notes array:
        // notes: state.notes.map((note) =>
        //   note.id === action.payload.id ? { ...action.payload } : note
        // ),
      };
    case "SET_FOCUS":
      return { ...state, isFocused: action.payload };
    case "FILTER_NOTES_BY_TAG":
      return {
        ...state,
        notes: state.notes.filter((note) => note.tags.includes(action.payload)),
      };
    default:
      return state;
  }
}

const initialState: NoteState = {
  notes: sampleNotes,
  selectedNote: null,
  isFocused: false,
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
