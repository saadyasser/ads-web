import { ButtonVariant } from "@/components/Button/Button.types";

export const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "danger":
      return "btn-danger";
    case "success":
      return "btn-success";
    case "alert":
      return "btn-alert";
    case "custom":
      return "active:!shadow-none";
    default:
      return undefined;
  }
};
