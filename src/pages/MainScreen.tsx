import React from "react";
import HomePage from "./HomePage";
import BottomNavigationBar from "@/components/BottomNavigationBar";

function MainScreen() {
  return (
    <div>
      <div className="hidden lg:block">
        <HomePage />
      </div>
      <div className="block lg:hidden">
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default MainScreen;
