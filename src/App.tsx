import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { NotesContextProvider } from "./context/notesContext";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoteDetail from "./components/NoteDetail";
import CreateNote from "./pages/CreateNote";
import Archived from "./pages/Archived";
import MainScreen from "./pages/MainScreen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      // {
      //   path: "/home",
      //   element: <HomePage />,
      // },
      {
        path: "/noteDetail/:id",
        element: <NoteDetail />,

        errorElement: <div>Note not found!</div>,
      },
      {
        path: "/createNote",
        element: <CreateNote />,
      },
      {
        path: "/archived",
        element: <Archived />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <React.StrictMode>
        <NotesContextProvider>
          <RouterProvider router={router} />
        </NotesContextProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
