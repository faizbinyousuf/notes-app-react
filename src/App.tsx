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
import { FontProvider } from "./context/fontProvider";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "./context/themeProvider";
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
      // {
      //   path: "/settings",
      //   element: <SettingsPage />,
      // },

      {
        path: "*",
        element: <div>404 NOT FOUND</div>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme-2">
          <FontProvider>
            <NotesContextProvider>
              <RouterProvider router={router} />
            </NotesContextProvider>
          </FontProvider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
