import React from "react";
import { Outlet } from "react-router-dom";
import { LowerBar } from "@/components/navbar/lower.jsx";
import { UpperBar } from "@/components/navbar/upper.jsx";
import { ItemTypeSelection } from "@/components/category.jsx";

export const Component = () => {
  return (
    <div>
      <div className={` bg-gradient-to-b from-orange-500 to-orange-600`}>
        <UpperBar />
        <LowerBar />
      </div>
      <div className="mb-8">
        <ItemTypeSelection />
      </div>
      <Outlet />
    </div>
  );
};
