import { Link } from "@/components";
import React from "react";

export default function Page({ params }: { params: { category: string } }) {
  return (
    <div className="">
      <h1>category : {params.category}</h1>
      <div className="grid w-full grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 bg-red-400 divide-y divide-gray-200 rounded-lg shadow max-md:hidden">
          filter
        </div>
        <ul
          role="list"
          className="grid grid-cols-2 col-span-3 gap-4 lg:grid-cols-3 max-md:col-span-4"
        >
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
          <li className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow">
            <Link href="/design-system/1"> component</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
