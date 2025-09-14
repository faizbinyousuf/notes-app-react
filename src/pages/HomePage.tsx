import BottomNavigationBar from "@/components/BottomNavigationBar";
import Logo from "@/components/Logo";
import NoteArea from "@/components/NoteArea";
import NoteOptions from "@/components/NoteOptions";
import NotesList from "@/components/NotesList";
import SideBar from "@/components/SideBar";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-orange-100 h-screen ">
        <Logo />
        <SideBar />
        <NotesList />
        <NoteArea />
        <NoteOptions />
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default HomePage;
