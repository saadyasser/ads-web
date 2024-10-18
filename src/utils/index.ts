/*
    To export all the utils from one single source of truth
    example :
    export { getHelper } from "helpers";
*/
// export { getVariant } from "./getVariant";
export { cleanPath } from "./cleanPaths";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
