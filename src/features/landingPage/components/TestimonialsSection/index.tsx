import React from "react";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section className="py-6 px-4 md:py-10 md:px-8 2xl:px-[120px] bg-[url(/images/bg-testimonial.png)] bg-primary">
      <div className="max-w-[655px] mx-auto flex flex-col justify-center gap-4 md:gap-6 2xl:gap-10">
        <h2 className="text-sm text-[#01c38d] font-bold text-center">
          Testimonial
        </h2>
        <p className="text-center text-2xl text-white font-bold">
          “Simply the best. Better than all the rest. I’d recommend this product
          to beginners and advanced users.”
        </p>
        <div className="flex flex-col gap-[2px] md:gap-1">
          <Image
            src="/images/Oval.png"
            width={76}
            height={76}
            className="mx-auto w-10 h-10 md:w-[42px] md:h-[42px] 2xl:w-[76px] 2xl:h-[76px]"
            alt="Oval Image"
          />
          <h4 className="text-white text-base 2xl:text-lg text-center font-bold ">
            Ian Klein
          </h4>
          <p className="text-white text-xs text-center">Digital Marketer</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
