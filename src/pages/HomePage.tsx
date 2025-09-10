import BottomNavigationBar from "@/components/BottomNavigationBar";
import Logo from "@/components/Logo";
import NotesList from "@/components/NotesList";
import React from "react";

function HomePage() {
  return (
    <div>
      <Logo />
      <NotesList />
      <BottomNavigationBar />
    </div>
  );
}

export default HomePage;
