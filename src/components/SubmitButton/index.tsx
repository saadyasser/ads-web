import { ArrowRightHiIcon } from "@/lib/@react-icons";
import { Button } from "../";
import React from "react";

export const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <Button
      icon={<ArrowRightHiIcon />}
      className="w-full mt-6"
      iconPosition="after"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default SubmitButton;
