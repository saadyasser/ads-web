"use client";
import React, { useState } from "react";
import { Button, Card, Input, RadioGroup } from "../";
import { SearchIcon } from "@/lib/@react-icons";
import { formatOptions, paymentOptions } from "./filterOptions";

export const Filter = () => {
  const [filters, setFilters] = useState("");
  return (
    <Card className="!items-start !gap-4">
      <Input
        value={filters}
        containerClassName="font-medium text-base"
        onChange={(e) => setFilters(e.target.value)}
        placeholder="ex: Buttons .. "
        label="Component Name"
        withErrorPlace={false}
        inputClassName="bg-background-light dark:bg-background-dark !border-transparent"
        cta={
          <Button
            variant="custom"
            className="!p-3 border-none text-black bg-black dark:bg-white !rounded-xl !h-fit"
          >
            <SearchIcon
              width={24}
              height={24}
              className="text-white dark:text-black h-fit w-fit"
            />
          </Button>
        }
      />
      <RadioGroup label="Type" options={paymentOptions} />
      <RadioGroup label="Format" options={formatOptions} />
    </Card>
  );
};

export default Filter;
