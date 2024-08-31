"use client";
import React from "react";
import { toast, TypeOptions } from "react-toastify";
import { useTheme } from "next-themes";

const Toast = ({ message }: { message: string }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
      <p className="text-lg text-gray-900 dark:text-gray-100">{message}</p>
    </div>
  );
};

export const useShowToast = () => {
  const { theme } = useTheme();
  return (message: string, type?: TypeOptions) =>
    toast(message, {
      theme: theme === "dark" ? "dark" : "light" || "light",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: (type ||= "default"),
    });
};

export const defaultToast = (message: string, theme: string) =>
  toast(<Toast message={message} />, {
    theme: theme === "dark" ? "dark" : "light" || "light",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export default Toast;
