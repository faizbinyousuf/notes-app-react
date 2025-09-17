export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type NoteState = {
  notes: Note[];
  selectedNote: Note | null;
  isFocused: boolean;
};
export type NotesContextType = {
  state: NoteState;
  dispatch: React.Dispatch<NoteAction>;
};

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: string }
  | { type: "SET_SELECTED_NOTE"; payload: Note | null }
  | { type: "UPDATE_NOTE"; payload: Partial<Note> }
  | { type: "SET_FOCUS"; payload: boolean }
  | { type: "FILTER_NOTES_BY_TAG"; payload: string };
export const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Note 1",
    content: "Content of note 1",
    tags: ["Personal", "Work"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Note 2",
    content: "Content of note 2",
    tags: ["lifestyle"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Note 3",
    content: "Content of note 3",
    tags: ["Random", "Ideas"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Note 4",
    content: "Content of note 4",
    tags: ["shopping"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Note 5",
    content: "Content of note 5",
    tags: ["learning", "lifestyle"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Note 6",
    content: "Content of note 6",
    tags: ["Planning", "Work"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "Note 7",
    content: "Content of note 7",
    tags: ["Personal", "Ideas"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: "Note 8",
    content: "Content of note 8",
    tags: ["learning", "Work"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
