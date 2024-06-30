import React from "react";

const page = ({ params }: { params: { itemId: string } }) => {
  return <div>item : {params.itemId}</div>;
};

export default page;
