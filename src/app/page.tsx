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
      <p className="text-2xl font-georgia">font georgia !!!</p>
      <br />
      <p className="text-2xl font-bold font-georgia">font georgia bold!!!</p>
      <br />
      <p className="text-2xl font-inter">font inter !!!</p>
      <br />
      <p className="text-2xl font-bold font-inter">font inter bold!!!</p>
      <DropDown />
      <ThemeSwitcher />
    </main>
  );
}
