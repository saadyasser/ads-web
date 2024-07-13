export const positionClasses = {
  right: "fixed inset-y-0 right-0 flex max-w-full pl-10",
  left: "fixed inset-y-0 left-0 flex max-w-full pr-10",
  bottom: "fixed inset-x-0 bottom-0 flex max-h-[80vh] pt-0", // Changed to max-h-[80vh]
  top: "fixed inset-x-0 top-0 flex max-h-[80vh] pb-0", // Changed to max-h-[80vh]
};

export const panelClasses = {
  right: "w-screen max-w-md",
  left: "w-screen max-w-md",
  bottom: "h-[80vh] w-full", // Changed to h-[80vh]
  top: "h-[80vh] w-full", // Changed to h-[80vh]
};

export const transitionClasses = {
  right: {
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full",
  },
  left: {
    enterFrom: "-translate-x-full",
    enterTo: "translate-x-0",
    leaveFrom: "translate-x-0",
    leaveTo: "-translate-x-full",
  },
  bottom: {
    enterFrom: "translate-y-full",
    enterTo: "translate-y-0",
    leaveFrom: "translate-y-0",
    leaveTo: "translate-y-full",
  },
  top: {
    enterFrom: "-translate-y-full",
    enterTo: "translate-y-0",
    leaveFrom: "translate-y-0",
    leaveTo: "-translate-y-full",
  },
};
