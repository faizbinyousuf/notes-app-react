import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PlusIcon } from "lucide-react"; // Assuming you have Lucide React installed
import { useNavigate } from "react-router-dom";

function FloatingActionButton({ hide }: { hide?: boolean }) {
  const navigate = useNavigate();
  return (
    <Button
      className={clsx(
        "lg:hidden fixed bottom-20 right-4 rounded-full p-7 shadow-lg z-50 bg-blue-600",
        hide ? "hidden" : "flex"
      )}
      size="icon" // Makes the button square with padding for the icon
      onClick={() => {
        navigate("/createNote");
      }}
    >
      <PlusIcon className="size-6" />
    </Button>
  );
}

export default FloatingActionButton;
