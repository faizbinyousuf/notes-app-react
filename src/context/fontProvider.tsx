import { useEffect, useState } from "react";
import { FontProviderContext } from "./fontContext";

export type Font =
  | "Montserrat"
  | "Ubuntu"
  | "Raleway"
  | "Open Sans"
  | "Saira"
  | "SUSE Mono";
type FontProviderProps = {
  children: React.ReactNode;
  defaultFont?: Font;
  storageKey?: string;
};
export type FontProviderState = {
  font: Font;
  setFont: (font: Font) => void;
};

export function FontProvider({
  children,
  defaultFont = "Montserrat",
  storageKey = "app-font",
  ...props
}: FontProviderProps) {
  const [font, setFont] = useState<Font>(
    () => (localStorage.getItem(storageKey) as Font) || defaultFont
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty("--app-font-family", font);
  }, [font]);
  const value = {
    font,
    setFont: (font: Font) => {
      localStorage.setItem(storageKey, font);
      setFont(font);
    },
  };
  return (
    <FontProviderContext.Provider {...props} value={value}>
      {children}
    </FontProviderContext.Provider>
  );
}
