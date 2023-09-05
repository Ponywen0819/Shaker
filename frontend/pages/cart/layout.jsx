import React from "react";
import { Outlet } from "react-router-dom";
import { UpperBar } from "@/components/navbar/upper.jsx";
import "@/css/cart.css";

export const Component = () => {
  return (
    <div className="h-screen">
      <div className="bg-orange-500">
        <UpperBar />
      </div>
      <Outlet />
    </div>
  );
};
