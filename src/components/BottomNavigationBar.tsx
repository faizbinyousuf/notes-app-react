import {
  DownloadIcon,
  HomeIcon,
  LucideTag,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import React from "react";
import { clsx } from "clsx";

function BottomNavigationBar() {
  const [activeTab, setActiveTab] = React.useState("home");
  return (
    <div className="block md:hidden  fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full  grid-cols-5 mx-auto font-medium">
        <button
          onClick={() => setActiveTab("home")}
          type="button"
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5   dark:hover:bg-gray-800 group",
            activeTab === "home"
              ? "text-blue-600 dark:text-blue-500 bg-[#E9F1FE] dark:bg-[#172554]"
              : "text-gray-500 dark:text-gray-400"
          )}
        >
          <HomeIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 " />
          <span className="text-sm text-gray-500 dark:text-gray-400 ">
            Home
          </span>
        </button>
        <button
          onClick={() => setActiveTab("search")}
          type="button"
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5   dark:hover:bg-gray-800 group",
            activeTab === "search"
              ? "text-blue-600 dark:text-blue-500 bg-[#E9F1FE] dark:bg-[#172554]"
              : "text-gray-500 dark:text-gray-400"
          )}
        >
          <SearchIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 " />
          <span className="text-sm text-gray-500 dark:text-gray-400 ">
            Search
          </span>
        </button>
        <button
          type="button"
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5   dark:hover:bg-gray-800 group",
            activeTab === "archived"
              ? "text-blue-600 dark:text-blue-500 bg-[#E9F1FE] dark:bg-[#172554]"
              : "text-gray-500 dark:text-gray-400"
          )}
          onClick={() => setActiveTab("archived")}
        >
          <DownloadIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 " />
          <span className="text-sm text-gray-500 dark:text-gray-400 ">
            Archived
          </span>
        </button>
        <button
          onClick={() => setActiveTab("tags")}
          type="button"
          className={clsx(
            "inline-flex flex-col items-center justify-center px-5   dark:hover:bg-gray-800 group",
            activeTab === "tags"
              ? "text-blue-600 dark:text-blue-500 bg-[#E9F1FE] dark:bg-[#172554]  "
              : "text-gray-500 dark:text-gray-400"
          )}
        >
          <LucideTag className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 " />
          <span className="text-sm text-gray-500 dark:text-gray-400">Tags</span>
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          type="button"
          className={clsx(
            " inline-flex flex-col items-center justify-center px-5   dark:hover:bg-gray-800 group",
            activeTab === "settings"
              ? "text-blue-600 dark:text-blue-500 bg-[#E9F1FE] dark:bg-[#172554]"
              : "text-gray-500 dark:text-gray-400"
          )}
        >
          <SettingsIcon className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 " />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Settings
          </span>
        </button>
      </div>
    </div>
  );
}

export default BottomNavigationBar;
