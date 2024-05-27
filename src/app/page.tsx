"use client";

import Button from "@/components/Button";
import { SunIcon } from "@/lib/@react-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <p className="text-2xl font-georgia">font georgia !!!</p>
      <br />
      <p className="text-2xl font-bold font-georgia">font georgia bold!!!</p>
      <br />
      <p className="text-2xl font-inter">font inter !!!</p>
      <br />
      <p className="text-2xl font-bold font-inter">font inter bold!!!</p>
      primary buttons:
      <div className="flex gap-2">
        <Button className="font-medium">Primary</Button>
        <Button className="font-medium" variant="secondary">
          Secondary
        </Button>
        <Button className="font-medium" variant="danger">
          danger
        </Button>
        <Button className="font-medium" variant="success">
          success
        </Button>
        <Button className="font-medium" variant="alert">
          alert
        </Button>
      </div>
      <br />
      long text:
      <Button className="font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        minus!
      </Button>
      <br />
      with icon:
      <div className="flex gap-2">
        <Button
          className="font-medium"
          icon={<SunIcon height={20} width={20} className="w-7 h-7" />}
        >
          after icon
        </Button>
        <Button
          className="font-medium"
          icon={<SunIcon height={20} width={20} className="w-7 h-7" />}
          iconPosition="before"
        >
          after icon
        </Button>
      </div>
      <br />
      disabled:
      <div className="flex gap-2">
        <Button className="font-medium" disabled>
          primary disabled
        </Button>
        <Button className="font-medium" variant="secondary" disabled>
          secondary disabled
        </Button>
        <Button className="font-medium" variant="danger" disabled>
          danger disabled
        </Button>
        <Button className="font-medium" variant="success" disabled>
          success disabled
        </Button>
        <Button className="font-medium" variant="alert" disabled>
          alert disabled
        </Button>
      </div>
    </main>
  );
}
