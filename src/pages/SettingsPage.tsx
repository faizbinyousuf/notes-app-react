import { useFont } from "@/context/fontHook";
import type { Font } from "@/context/fontProvider";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/themeToggle";

export function FontSelectorNormal() {
  const { font, setFont } = useFont();
  const fonts = [
    "Montserrat",
    "Ubuntu",
    "Raleway",
    "Open Sans",
    "Saira",
    "SUSE Mono",
  ];

  return (
    <div>
      <h3 className="my-3">Current Font: {font}</h3>
      <select
        className="border border-gray-400 rounded-sm"
        value={font}
        onChange={(e) => setFont(e.target.value as Font)}
      >
        {fonts.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
}

export function FontSelector() {
  const { font, setFont } = useFont();
  const fonts = [
    "Montserrat",
    "Ubuntu",
    "Raleway",
    "Open Sans",
    "Saira",
    "SUSE Mono",
  ];

  return (
    <div className="space-y-3 mt-5">
      <h3 className="text-lg font-semibold">Current Font: {font}</h3>

      <Select
        value={font}
        onValueChange={(value) => setFont(value as typeof font)}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a font" />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((f) => (
            <SelectItem key={f} value={f}>
              {f}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
function SettingsPage() {
  return (
    <div className="p-5">
      <div className="grid gap-3   place-items-start   w-full">
        <h1 className="text-xl font-bold">Change Font</h1>
        {/* <Button variant="outline">Logout</Button>
        <Button variant="outline">Delete Account</Button> */}
        {/* dropdown to changes font */}
        {/* <Button variant="outline">Change Font</Button> */}
        <FontSelector />
        <div className="flex gap-5 items-center mt-3">
          <h1 className="text-xl font-bold">Change Theme</h1>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
