import { H1, H2 } from "@/components";
import React from "react";
interface StatisticsResponse {
  statusCode: number;
  status: string;
  message: null | string;
  data: {
    numberOfPublishers: number;
    numberOfProducts: number;
    publisherAverageRatings: number;
    productAverageRatings: number;
  };
}
const StatisticsSection = async () => {
  const response = await fetch("https://api.azaiza.com/api/product/metrics");

  const data: StatisticsResponse = await response.json();
  const statistics = data.data;
  return (
    <section className="px-[120px] pt-10 pb-[60px] bg-white grid gird-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          {statistics.numberOfPublishers}M+
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          {statistics.publisherAverageRatings}%
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
      <div className="text-center">
        <H1 className=" font-bold mb-[10px] md:mb-[18px] tracking-[-2px] 2xl:text-5xl">
          {statistics.productAverageRatings}/5.0
        </H1>
        <p className=" 2xl:text-xl text-sm text-[#161c2d]">
          Customers visit Omega every month to get their service done.
        </p>
      </div>
    </section>
  );
};

export default StatisticsSection;
