"use client";
import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";

import { CloseIcon } from "@/lib/@react-icons";

import { Container, Logo, Button, H3 } from "../";

import {
  panelClasses,
  positionClasses,
  transitionClasses,
} from "@/data/slideOver_data";
import { SlideOverProps } from "./SlideOver.types";

export const SlideOver = ({
  position = "bottom",
  footer,
  children,
  panelTitle,
  open,
  setOpen,
}: SlideOverProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setOpen}>
        {/* overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </TransitionChild>

        {/* body */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={clsx(positionClasses[position], "pointer-events-none")}
            >
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom={transitionClasses[position].enterFrom}
                enterTo={transitionClasses[position].enterTo}
                leave="transform transition ease-in-out duration-500"
                leaveFrom={transitionClasses[position].leaveFrom}
                leaveTo={transitionClasses[position].leaveTo}
              >
                <DialogPanel
                  className={clsx(
                    "pointer-events-auto",
                    panelClasses[position]
                  )}
                >
                  {/* body content */}
                  <div className="flex flex-col h-full pt-8 bg-white shadow-xl dark:bg-black-active">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          <Logo width={196} height={47} withBadge />
                        </DialogTitle>
                        {panelTitle && (
                          <H3 className="truncate">{panelTitle}</H3>
                        )}
                        <div className="flex items-center ml-3 h-7">
                          <Button
                            variant="secondary"
                            className="!h-fit !py-3 !px-3 !rounded-full dark:bg-black-hover dark:text-white border-none shadow-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <CloseIcon className="w-4 h-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 py-6 mt-6 overflow-y-auto sm:px-6">
                      <div className="absolute inset-0 w-full max-w-full px-4 sm:px-6">
                        <div className="pt-3 pb-24">{children}</div>
                      </div>
                      {/* footer */}
                      {footer && (
                        <div className="fixed bottom-0 right-0 w-full py-6 bg-background-light dark:bg-background-dark">
                          <Container className="w-full px-4">
                            {footer}
                          </Container>
                        </div>
                      )}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default SlideOver;
