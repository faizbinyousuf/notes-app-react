import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { NotesContextProvider } from "./context/notesContext";

function App() {
  return (
    <>
      <React.StrictMode>
        <NotesContextProvider>
          <HomePage />
        </NotesContextProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
