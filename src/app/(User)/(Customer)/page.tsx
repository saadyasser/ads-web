import React from "react";

import { Button, Container } from "@/components";
import { ChevronLeft } from "@/lib/@iconsax";

export default function LandingPage() {
  return (
    <>
      <Container className="flex w-full gap-2">
        <Button className="flex-1" intent="primary">
          test
        </Button>
        <Button className="flex-1" intent="primaryLight">
          test
        </Button>
        <Button className="flex-1" intent="secondary">
          test
        </Button>
        <Button className="flex-1" intent="secondaryLight">
          test
        </Button>
        <Button className="flex-1" intent="danger">
          test
        </Button>
        <Button className="flex-1" intent="dangerLight">
          test
        </Button>
        <Button className="flex-1" intent="alert">
          test
        </Button>
        <Button className="flex-1" intent="alertLight">
          test
        </Button>
        <Button className="flex-1" intent="success">
          test
        </Button>
        <Button className="flex-1" intent="successLight">
          test
        </Button>
        <Button
          className="flex-1"
          intent="primary"
          icon={<ChevronLeft />}
          iconPosition="before"
        >
          test
        </Button>
        <Button
          intent="primaryLight"
          icon={<ChevronLeft />}
          iconPosition="after"
          className="flex-1"
        >
          test
        </Button>
      </Container>
    </>
  );
}
