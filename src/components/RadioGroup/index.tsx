"use client";
import { useEffect, useState } from "react";
import {
  RadioGroup as HeadlessRadioGroup,
  Label,
  Radio,
} from "@headlessui/react";
import { OptionType, RadioGroupType } from "./RadioGroup.types";
import clsx from "clsx";

export const RadioGroup = ({
  options,
  label,
  containerClasses,
}: RadioGroupType) => {
  const [selected, setSelected] = useState(options[0].value);
  const containerClassNames = clsx(containerClasses, "w-full transition-all");
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className={containerClassNames}>
      <HeadlessRadioGroup
        value={selected}
        onChange={(value) => setSelected(value)}
      >
        {label && (
          <Label className="text-sm font-medium text-black dark:text-white">
            {label}
          </Label>
        )}
        <Label className="sr-only"> Choose an option </Label>
        <div className="grid gap-3 mt-3 sm:grid-cols-3">
          {options.map((option: OptionType, index) => (
            <Radio
              key={option.value}
              value={option.value}
              defaultChecked={index === 0}
              className={({ active, checked }: any) =>
                clsx(
                  option.isAvailable
                    ? "cursor-pointer focus:outline-none border-none"
                    : "opacity-25 cursor-default",
                  active && "!ring-none !border-none",
                  " border-none rounded-full py-[10px] px-4 flex items-center justify-center text-sm uppercase transition-all",
                  checked
                    ? "!bg-[#010A18] dark:!bg-white dark:!text-black font-bold !text-white hover:!bg-black-hover dark:hover:!bg-black-light-hover"
                    : "bg-[#F4F4F4] !text-black dark:!text-white hover:bg-white-hover dark:!bg-background-dark dark:hover:!bg-black-hover"
                )
              }
              disabled={!option.isAvailable}
            >
              <Label as="span">{option.name}</Label>
            </Radio>
          ))}
        </div>
      </HeadlessRadioGroup>
    </div>
  );
};
