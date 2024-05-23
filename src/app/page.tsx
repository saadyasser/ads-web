"use client";

import DropDown from "@/components/Dropdown";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <p>
        <code className="text-red-100 dark:text-gray-700">
          testing dark mode{" "}
        </code>
      </p>
      <p className="font-georgia">ssssssssssssslakdfms;dmf</p>
      <br />
      <br />
      <DropDown />
      <ThemeSwitcher />
    </main>
  );
}
