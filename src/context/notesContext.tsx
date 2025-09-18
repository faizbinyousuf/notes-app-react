import {
  initialTags,
  sampleNotes,
  type NoteAction,
  type NoteState,
} from "@/types/Note";
import React, { useReducer } from "react";
import { NotesContext } from "./noteHook";

function notesReducer(state: NoteState, action: NoteAction): NoteState {
  switch (action.type) {
    case "ADD_NOTE": {
      const tags = action.payload.tags;
      const newTags: string[] = [];
      tags.forEach((tag) => {
        if (!state.tags.includes(tag)) {
          newTags.push(tag);
        }
      });
      return {
        ...state,
        notes: [...state.notes, action.payload],
        tags: [...state.tags, ...newTags],
        allNotes: [...state.allNotes, action.payload],
      };
    }

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        selectedNote:
          state.selectedNote?.id === action.payload ? null : state.selectedNote,
        allNotes: state.allNotes.filter((note) => note.id !== action.payload),
      };
    case "SET_SELECTED_NOTE":
      return { ...state, selectedNote: action.payload };
    case "UPDATE_NOTE": {
      const tags = action.payload.tags ?? [];
      const newTags: string[] = [];
      tags.forEach((tag) => {
        if (!state.tags.includes(tag)) {
          newTags.push(tag);
        }
      });
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        ),
        allNotes: state.allNotes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        ),
        // If you want to also update the selectedNote if it's the one being updated
        selectedNote:
          state.selectedNote?.id === action.payload.id
            ? { ...state.selectedNote!, ...action.payload }
            : state.selectedNote,
        tags: [...state.tags, ...newTags],
      };
    }
    case "SET_FOCUS":
      return { ...state, isFocused: action.payload };
    case "FILTER_NOTES_BY_TAG": {
      return {
        ...state,
        notes: state.allNotes.filter((note) =>
          note.tags.includes(action.payload)
        ),
      };
    }
    case "UPDATE_TAGS":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };

    case "CLEAR_FILTER_BY_TAGS":
      return {
        ...state,
        notes: state.allNotes,
      };
    case "ARCHIVE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, isArchived: true } : note
        ),
        allNotes: state.allNotes.map((note) =>
          note.id === action.payload ? { ...note, isArchived: true } : note
        ),
        selectedNote: null,
      };

    case "SET_SHOW_ARCHIVED":
      return {
        ...state,
        showArchived: action.payload,
      };

    case "SEARCH_NOTES":
      return {
        ...state,
        notes: state.allNotes.filter(
          (note) =>
            note.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            note.content.toLowerCase().includes(action.payload.toLowerCase()) ||
            note.tags.some((tag) =>
              tag.toLowerCase().includes(action.payload.toLowerCase())
            )
        ),
      };

    default:
      return state;
  }
}

const initialState: NoteState = {
  notes: sampleNotes,
  allNotes: sampleNotes,
  selectedNote: null,
  isFocused: false,
  tags: initialTags,
  showArchived: false,
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
