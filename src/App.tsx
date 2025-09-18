import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { NotesContextProvider } from "./context/notesContext";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoteDetail from "./components/NoteDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/noteDetail/:id",
        element: <NoteDetail />,

        errorElement: <div>Note not found!</div>,
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
