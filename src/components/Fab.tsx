import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react"; // Assuming you have Lucide React installed

function FloatingActionButton() {
  return (
    <Button
      className="lg:hidden flex fixed bottom-20 right-4 rounded-full p-7 shadow-lg z-50 bg-blue-600"
      size="icon" // Makes the button square with padding for the icon
      onClick={() => console.log("FAB clicked!")}
    >
      <PlusIcon className="size-6" />
    </Button>
  );
}

export default FloatingActionButton;
