import React from "react";
import { SellerBar } from "./_component/nav.jsx";
import { Sidebar } from "./_component/aside.jsx";
import { Outlet } from "react-router-dom";

export const Component = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <SellerBar />
      <div className="mainContext grow flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
