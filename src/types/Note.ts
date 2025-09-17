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
};
export type NotesContextType = {
  state: NoteState;
  dispatch: React.Dispatch<NoteAction>;
};

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: string }
  | { type: "SET_SELECTED_NOTE"; payload: Note | null };
export const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Note 1",
    content: "Content of note 1",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Note 2",
    content: "Content of note 2",
    tags: ["tag3", "tag4"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Note 3",
    content: "Content of note 3",
    tags: ["tag5", "tag6"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Note 4",
    content: "Content of note 4",
    tags: ["tag7", "tag8"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Note 5",
    content: "Content of note 5",
    tags: ["tag9", "tag10"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Note 6",
    content: "Content of note 6",
    tags: ["tag11", "tag12"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "Note 7",
    content: "Content of note 7",
    tags: ["tag13", "tag14"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: "Note 8",
    content: "Content of note 8",
    tags: ["tag15", "tag16"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
