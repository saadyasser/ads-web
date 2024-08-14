"use client";
import { forwardRef, Fragment, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDown } from "@/lib/@react-icons";
import clsx from "clsx";

type optionType = {
  name: string;
  value: string;
};
interface SelectProps {
  options: optionType[];
  label?: string;
  error?: boolean;
  errorMessage?: string;
  withErrorPlace?: boolean;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    { options, label, error, errorMessage, withErrorPlace = true, ...props },
    ref
  ) => {
    const selectClasses = clsx(
      "relative text-left mt-2 block w-full rounded-lg border-[1px] border-[#303030] dark:border-black p-4 px-3 dark:text-white placeholder:text-[#9F9CB4] placeholder:dark:text-[#595959] font-medium",
      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary"
    );

    const [selected, setSelected] = useState(options[0]);

    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {label && (
              <Label className="text-black dark:text-white text-sm/6">
                {label}
                <span className="ml-2 text-primary dark:text-danger">*</span>
              </Label>
            )}
            <div className="relative mt-1">
              <ListboxButton className={selectClasses}>
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
                      className={({ selected }) =>
                        clsx(
                          selected ? "text-white bg-primary" : "text-gray-900",
                          "relative cursor-pointer select-none py-2 pl-8 pr-4 "
                        )
                      }
                      value={option}
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

                          {selected ? (
                            <span
                              className={clsx(
                                selected ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
  }
);
Select.displayName = "Select";

export default Select;
