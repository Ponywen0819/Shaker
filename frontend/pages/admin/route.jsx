import React from "react";
import { Route } from "react-router-dom";

export const AdminRoute = (
  <Route path="admin" lazy={() => import("./layout.jsx")}>
    <Route path="" lazy={() => import("./admin_index.jsx")} />
    <Route
      path="shipping"
      lazy={() => import("./shipping/admin_shipping.jsx")}
    />
    <Route path="coupon" lazy={() => import("./coupon/admin_coupon.jsx")} />
  </Route>
);
