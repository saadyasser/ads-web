"use client";
import { Button, Container, Input, TextArea } from "@/components";
import { ArrowRightHiIcon } from "@/lib/@react-icons";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormValues = {
  fullName: string;
  email: string;
  messageTitle: string;
  message: string;
};
export const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      messageTitle: "",
      message: "",
    },
    mode: "all",
    shouldFocusError: true,
  });
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    alert(JSON.stringify(data));
    console.log(errors);
  };

  return (
    <section className="bg-[#F8F9FA] dark:bg-black-active py-8 md:py-16">
      <Container className="flex items-center justify-center max-xl:px-4">
        <div className="flex justify-center p-6 border-[24px] border-white dark:border-black rounded-lg w-full xl:w-9/12">
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-center text-black dark:text-white font-georgia lg:text-4xl">
              Get in touch <br /> how can we help?
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-4"
              noValidate
            >
              <Input
                {...register("fullName", { required: "Full Name is required" })}
                label="Full Name"
                placeholder="John Doe"
                errorMessage={errors.fullName?.message}
                error={!!errors.fullName}
                required
              />
              <Input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                label="Email Address"
                errorMessage={errors.email?.message}
                error={!!errors.email}
                placeholder="example@example.com"
                required
              />
              <Input
                {...register("messageTitle", {
                  required: "Message Title is required",
                })}
                label="Message Title"
                errorMessage={errors.messageTitle?.message}
                error={!!errors.messageTitle}
                placeholder="Message title"
                required
              />
              <TextArea
                {...register("message", {
                  required: "Your Message is required",
                })}
                label="Your Message"
                errorMessage={errors.message?.message}
                error={!!errors.message}
                inputClassName="h-[159px] min-h-[159px]"
                placeholder="Write your message clearly here.."
                required
              />
              <Button
                icon={<ArrowRightHiIcon />}
                className="w-full mt-6"
                iconPosition="after"
                type="submit"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
