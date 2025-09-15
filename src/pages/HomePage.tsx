import BottomNavigationBar from "@/components/BottomNavigationBar";
import Logo from "@/components/Logo";
import NoteArea from "@/components/NoteArea";
import NoteOptions from "@/components/NoteOptions";
import NotesList from "@/components/NotesList";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-[auto,1fr] bg-orange-100 h-screen w-full">
        <Logo />
        <SideBar />
        <TopBar />
        <NotesList />
        <NoteArea />
        <NoteOptions />
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default HomePage;
