import { useNotes } from "@/context/noteHook";
import React from "react";
import { useParams } from "react-router-dom";
import NoteArea from "./NoteArea";
import Logo from "./Logo";
import {
  ChevronLeft,
  DownloadIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

function NoteDetail() {
  const { id } = useParams();
  const { state, dispatch } = useNotes();
  const note = state.notes.find((note) => note.id === id);

  return (
    <div>
      <Logo />
      <div className="flex items-center md:mr-10 mt-3  ">
        <Button
          type="button"
          onClick={() => window.history.back()}
          variant="ghost"
          className="flex "
        >
          <ChevronLeft className="size-4" />
          <p className="text-xs">Go Back</p>
        </Button>
        <div className="flex ml-auto space-x-3">
          <Button
            onClick={() => {
              if (state.selectedNote && !state.selectedNote.isArchived) {
                dispatch({
                  type: "ARCHIVE_NOTE",
                  payload: state.selectedNote.id,
                });
              } else if (state.selectedNote && state.selectedNote.isArchived) {
                dispatch({
                  type: "UNARCHIVE_NOTE",
                  payload: state.selectedNote.id,
                });
              }
              window.history.back();
            }}
            className="flex justify-start items-center font-normal py-3"
            variant={"outline"}
            type="button"
          >
            {state.selectedNote?.isArchived ? (
              <UploadIcon className="size-4 text-blue-700" />
            ) : (
              <DownloadIcon className="size-4 text-gray-700" />
            )}
          </Button>
          <AlertDialog>
            <AlertDialogTrigger disabled={!state.selectedNote} asChild>
              <Button
                className="flex justify-start font-normal items-center text-rose-700  py-3"
                variant={"outline"}
                type="button"
              >
                <Trash2Icon className="size-4 " />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  note.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    if (state.selectedNote) {
                      dispatch({
                        type: "DELETE_NOTE",
                        payload: state.selectedNote.id,
                      });
                      dispatch({ type: "SET_SELECTED_NOTE", payload: null });
                      window.history.back();
                    }
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <NoteArea />
    </div>
  );
}

export default NoteDetail;
