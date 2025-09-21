import { useContext } from "react";
import { FontProviderContext } from "./fontContext";

export const useFont = () => {
  const context = useContext(FontProviderContext);
  if (context === undefined)
    throw new Error("useFont must be used within a FontProvider");
  return context;
};
