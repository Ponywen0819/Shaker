import React from "react";
import { Outlet } from "react-router-dom";
import { AdminASide } from "./_component/aside.jsx";
import { AdminHeader } from "./_component/header.jsx";

export const Component = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="grow flex">
        <AdminASide />
        <Outlet />
      </div>
    </div>
  );
};
