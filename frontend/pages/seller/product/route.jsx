import React from "react";
import { Route, Outlet } from "react-router-dom";

export const ProductRoute = (
  <Route path="product" element={<Outlet />}>
    <Route path="list" lazy={() => import("./myproduct.jsx")} />
    <Route path="add" lazy={() => import("./newproduct.jsx")} />
  </Route>
);
