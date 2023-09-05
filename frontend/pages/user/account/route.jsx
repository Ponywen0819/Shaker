import React from "react";
import { Route, Outlet } from "react-router-dom";

export const AccountRoute = (
  <Route path="account" element={<Outlet />}>
    <Route path="profile" lazy={() => import("./profile.jsx")} />
    <Route path="password" lazy={() => import("./password.jsx")} />
  </Route>
);
