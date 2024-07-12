import React from "react";

import Navbar from "@/components/navbar";
import Controlbar from "@/components/controlbar";
import Sidebar from "@/components/sidebar/sidebar";
import { useApp } from "@/context/useApp";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useApp();
  return (
    <div className="fixed left-0 top-0 right-0  bottom-0 h-full grid grid-cols-12 grid-rows-12    ">
      <div className="col-span-12 min-h-16     ">
        <Navbar />
      </div>
      <div className="col-span-12 row-span-10  flex gap-2 p-2   ">
        <div
          className={`w-1/4  ${
            isOpen && "w-2/5"
          } flex flex-col  rounded-lg bg-[#131213] p-4`}
        >
          <Sidebar />
        </div>
        <div
          className={`w-3/4  ${isOpen && "w-3/5"} rounded-lg bg-[#202021] p-4`}
        >
          {children}
        </div>
      </div>
      <div className="col-span-12 row-span-1 h-16   ">
        <Controlbar />
      </div>
    </div>
  );
}
