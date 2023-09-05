import React from "react";

export const Component = () => {
  return [
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <SellerBar />
      <div className="mainContext flex-1">
        <Sidebar />
        <SMContext />
      </div>
    </div>,
  ];
};
