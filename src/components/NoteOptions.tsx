import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon, Trash2Icon, UploadIcon } from "lucide-react";
import { useNotes } from "@/context/noteHook";
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

function NoteOptions() {
  const { state, dispatch } = useNotes();
  console.log("NoteOptions rendered");
  return (
    <div className="hidden lg:block   border border-gray-200 dark:border-gray-700 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 w-full   ">
      <div className="flex flex-col gap-4 p-3 mt-3  ">
        <Button
          disabled={!state.selectedNote}
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
          }}
          className="flex justify-start items-center font-normal py-5   dark:bg-gray-900 dark:hover:bg-gray-800"
          variant={"outline"}
          type="button"
        >
          {state.selectedNote?.isArchived ? (
            <UploadIcon className="size-6 text-blue-700 dark:text-blue-900" />
          ) : (
            <DownloadIcon className="size-6 text-gray-700 dark:text-gray-400" />
          )}
          {state.selectedNote?.isArchived ? "Unarchive Note" : "Archive Note"}
        </Button>

        <AlertDialog>
          <AlertDialogTrigger disabled={!state.selectedNote} asChild>
            <Button
              className="flex justify-start font-normal items-center text-rose-700  py-5 dark:bg-gray-900 dark:hover:bg-gray-800"
              variant={"outline"}
              type="button"
            >
              <Trash2Icon className="size-6 " />
              Delete Note
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
  );
}

export default NoteOptions;
