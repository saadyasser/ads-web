"use client";
import { Button, Container, Input, TextArea } from "@/components";
import { H2 } from "@/components/theme";
import { ArrowRightHiIcon } from "@/lib/@react-icons";
import { ChangeEvent, useState } from "react";

export const ContactUs = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    email: "",
    messageTitle: "",
    message: "",
  });
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    setFormFields((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  return (
    <section className="bg-[#F8F9FA] dark:bg-black-active py-8 md:py-16">
      <Container className="flex items-center justify-center">
        <div className="flex justify-center p-6 border-[24px] border-white dark:border-black rounded-lg w-full lg:w-9/12">
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-center text-black dark:text-white font-georgia lg:text-4xl">
              Get in touch <br /> how can we help?
            </h2>
            <form action="" className="w-full">
              <Input
                name="fullName"
                label="Full Name"
                value={formFields?.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <Input
                name="email"
                label="Email Address"
                value={formFields?.email}
                type="email"
                onChange={handleChange}
                placeholder="example@example.com"
                required
              />
              <Input
                name="messageTitle"
                label="Message Title"
                value={formFields?.messageTitle}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <TextArea
                name="message"
                label="Your Message"
                value={formFields?.message}
                // rows={10}
                inputClassName="h-[159px] min-h-[159px]"
                onChange={handleChange}
                placeholder="Write your message clearly here.."
                required
              />
              <Button
                icon={<ArrowRightHiIcon />}
                className="w-full mt-6"
                iconPosition="after"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
