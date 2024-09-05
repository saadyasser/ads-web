"use client";

import { forwardRef, Fragment, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { CheckIcon, ChevronUpDown } from "@/lib/@react-icons";
import clsx from "clsx";

type OptionType = {
  name: string;
  value: string;
};

interface SelectProps {
  options: OptionType[];
  name: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ options, name, label, error, errorMessage }, ref) => {
    const {
      register,
      setValue,
      formState: { errors },
    } = useFormContext();

    const [selected, setSelected] = useState<OptionType>(options[0]);

    const handleSelectChange = (value: OptionType) => {
      setSelected(value);
      setValue(name, value.value);
    };

    return (
      <div>
        {label && (
          <label className="text-black dark:text-white text-sm/6">
            {label}
            <span className="ml-2 text-primary dark:text-danger">*</span>
          </label>
        )}
        <Listbox value={selected} onChange={handleSelectChange}>
          {({ open }) => (
            <div className="relative mt-1">
              <ListboxButton
                className={clsx(
                  "relative text-left block w-full rounded-lg border p-4 px-3 dark:text-white font-medium",
                  error || errors[name] ? "border-red-500" : "border-gray-300"
                )}
              >
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDown
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <ListboxOption
                      key={option.value}
                      value={option}
                      className={({ selected }) =>
                        clsx(
                          selected ? "text-white bg-primary" : "text-gray-900",
                          "relative cursor-pointer select-none py-2 pl-8 pr-4"
                        )
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={clsx(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {option.name}
                          </span>
                          {selected && (
                            <span
                              className={clsx(
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          )}
        </Listbox>
        {error ||
          (errors[name] && (
            <p className="mt-2 text-sm text-red-600">
              {errorMessage || errors[name]?.message?.toString()}
            </p>
          ))}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
