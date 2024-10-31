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

import { Container, Logo, Button, H3 } from "../";

import {
  panelClasses,
  positionClasses,
  transitionClasses,
} from "@/data/slideOver_data";
import { SlideOverProps } from "./SlideOver.types";
import { usePathname } from "next/navigation";
import { useSCrollY } from "@/hooks";
import { BagIcon, CloseIcon } from "../svg";

export const SlideOver = ({
  position = "bottom",
  footer,
  children,
  panelTitle,
  open,
  setOpen,
}: SlideOverProps) => {
  const pathname = usePathname();
  const { isScrollY } = useSCrollY();

  const navClassName =
    isScrollY || pathname !== "/" ? "bg-white" : "bg-accent-dark";
  const buttonsClassName =
    (isScrollY && pathname === "/") || pathname !== "/"
      ? "!bg-primary-light hover:!bg-primary-light-hover"
      : "!bg-accent-dark-hover hover:!bg-accent-dark-hover";
  const iconColor =
    (isScrollY && pathname === "/") || pathname !== "/" ? "#0E2841" : "white";
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
              className={clsx(
                positionClasses[position],
                "pointer-events-non" + navClassName
              )}
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
                    "pointer-events-auto" + navClassName,
                    panelClasses[position]
                  )}
                >
                  {/* body content */}
                  <div
                    className={`flex flex-col h-full pt-8  shadow-xl ${navClassName}`}
                  >
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          {pathname === "/" && !isScrollY && (
                            <Logo
                              withBadge={false}
                              width={196}
                              height={47}
                              src="/images/logos/home_ads_logo.svg"
                            />
                          )}
                          {pathname === "/" && isScrollY && (
                            <Logo
                              withBadge={false}
                              width={196}
                              height={47}
                              src="/images/logos/home_scrollable_ads_logo.svg"
                            />
                          )}
                          {pathname !== "/" && (
                            <Logo withBadge={false} width={196} height={47} />
                          )}
                        </DialogTitle>
                        {panelTitle && (
                          <H3 className="truncate">{panelTitle}</H3>
                        )}
                        <div className="flex gap-1 items-center ml-3 h-7">
                          <Button
                            className={buttonsClassName}
                            aria-label="Bag button"
                          >
                            <BagIcon aria-label="Bag Icon" color={iconColor} />
                          </Button>
                          <Button
                            className={buttonsClassName}
                            onClick={() => setOpen(false)}
                            aria-label="Close button"
                          >
                            <CloseIcon
                              aria-label="Close Icon"
                              color={iconColor}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 py-6 mt-6 overflow-y-auto sm:px-6">
                      <div className="absolute inset-0 w-full max-w-full px-4 sm:px-6">
                        <div className="pt-3 ">{children}</div>
                      </div>
                      {/* footer */}
                      {footer && (
                        <div
                          className={`fixed bottom-0 right-0 w-full py-6 ${navClassName}`}
                        >
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
