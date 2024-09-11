"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components";

import clsx from "clsx";
import { ArrowRight } from "iconsax-react";

const ImageGroup = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex p-2 -space-x-4 overflow-hidden">
        <Image
          priority={false}
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          priority={false}
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          priority={false}
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <Image
          priority={false}
          className="inline-block w-8 h-8 rounded-full md:w-10 md:h-10 ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={50}
          height={50}
        />
        <div className="flex items-center justify-center w-8 h-8 font-bold text-center rounded-full md:w-10 md:h-10 ring-2 ring-white text-primary-dark bg-primary-light">
          +2
        </div>
      </div>
      <p className="font-bold">Designers !</p>
    </div>
  );
};

export const ButtonGroup = ({ className }: { className?: string }) => {
  const { push } = useRouter();

  const classes = clsx("flex flex-col justify-center my-6", className);
  return (
    <div className={classes}>
      <div className="flex flex-col items-center w-full gap-4 my-6 lg:flex-row md:my-10">
        <Button
          onClick={() => push("/ui-components")}
          className=" w-full max-xl:!text-sm truncate"
          icon={<ArrowRight size="24" />}
        >
          Discover our UI Components
        </Button>
        <Button
          variant="secondary"
          className="w-full max-xl:!text-sm dark:!text-black"
        >
          Full Access for Figma Library!
        </Button>
      </div>
      <ImageGroup />
    </div>
  );
};

export default ButtonGroup;
