import { createContext } from "react";
import type { FontProviderState } from "./fontProvider";

const initialState: FontProviderState = {
  font: "Montserrat",
  setFont: () => null,
};
export const FontProviderContext =
  createContext<FontProviderState>(initialState);
