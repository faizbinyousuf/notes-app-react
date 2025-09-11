import BottomNavigationBar from "@/components/BottomNavigationBar";
import Logo from "@/components/Logo";
import NotesList from "@/components/NotesList";

function HomePage() {
  return (
    <div>
      <div className="grid lg:grid-cols-6">
        <Logo />
        <NotesList />
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default HomePage;
