import { createCategory } from "@/lib/actions/categories.actions";
import React from "react";

const testPage = async () => {
  const response = await createCategory();
  console.log("🚀 ~ testPage ~ response:", response);
  return <div>{JSON.stringify(response)}</div>;
};

export default testPage;
