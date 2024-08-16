"use client";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import clsx from "clsx";
import { BarsIcon } from "@/lib/@react-icons";
import { Container, Logo, NavLink, ThemeSwitcher } from "@/components";

import { childrenType } from "@/types";
import { adminNavigation } from "@/data/admin_navigation";

type AdminSidebarProps = {
  children: childrenType;
};
export default function AdminSidebar({ children }: AdminSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const path = usePathname();
  return (
    <div>
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex flex-col flex-1 w-full max-w-xs bg-primary">
                <TransitionChild
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>X
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center justify-center flex-shrink-0 gap-4 px-4">
                    <Logo
                      src="/images/logos/ads_logo_white.svg"
                      className="!w-[300px] !h-[50px]"
                    />
                    <ThemeSwitcher />
                  </div>
                  <nav className="px-2 mt-5 space-y-1">
                    {adminNavigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          path === item.href &&
                            "bg-primary-active font-medium !text-white",
                          "group flex items-center px-2 py-2 text-base  rounded-md !w-full !border-none !text-white hover:bg-primary-hover hover:!text-white"
                        )}
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 p-4 border-t border-primary">
                  <a href="#" className="flex-shrink-0 block group">
                    <div className="flex items-center">
                      {/* <div>
                        <Image
                          className="inline-block w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                          View profile
                        </p>
                      </div> */}
                    </div>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-1 min-h-0 bg-primary">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-center flex-shrink-0 gap-4 px-4">
              <Logo
                src="/images/logos/ads_logo_white.svg"
                className="!w-[300px] !h-[50px]"
              />
              <ThemeSwitcher />
            </div>
            <nav className="flex-1 px-4 mt-10 space-y-1">
              {adminNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  exact={item.current}
                  className={clsx(
                    path === item.href && "bg-primary-active font-medium",
                    "group flex items-center px-2 py-2 text-base rounded-md !w-full !border-none text-white hover:bg-primary-hover hover:!text-white"
                  )}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 border-t border-primary">
            <a href="#" className="flex-shrink-0 block w-full group">
              <div className="flex items-center">
                {/* <div>
                    <Image
                      height={100}
                      width={100}
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                      View profile
                    </p>
                  </div> */}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 md:pl-64">
        <div className="sticky top-0 z-10 pt-1 pl-1 bg-background-light dark:bg-background-dark sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md dark:text-white text-black-dark hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>

            <BarsIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
}
