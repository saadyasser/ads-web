import { H1, H2 } from "@/components";
import React from "react";

const StatisticsSection = () => {
  return (
    <section className="px-[120px] pt-10 pb-[60px] bg-white grid gird-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          1M+
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          92%
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          4.9/5.0
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
    </section>
  );
};

export default StatisticsSection;
