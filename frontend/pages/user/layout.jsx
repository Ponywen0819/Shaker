import React from "react";
import { Outlet } from "react-router-dom";
import { LowerBar } from "@/components/navbar/lower.jsx";
import { UpperBar } from "@/components/navbar/upper.jsx";
import { Aside } from "./_component/aside.jsx";

export const Component = () => {
  return (
    <div>
      <header className={`bg-gradient-to-b from-orange-500 to-orange-600`}>
        <UpperBar></UpperBar>
        <LowerBar></LowerBar>
      </header>
      <div className="flex w-[1200px] mx-auto p-3">
        <Aside />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
