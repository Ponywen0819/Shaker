import React from "react";
import { Route } from "react-router-dom";
import { ProductRoute } from "./product/route.jsx";

export const SellerRoute = (
  <Route path="seller" lazy={() => import("./layout.jsx")}>
    <Route path="" lazy={() => import("./index.jsx")} />
    <Route path="shipping" lazy={() => import("./shipping/shipping.jsx")} />
    {ProductRoute}
    {/* <Route path="finance" lazy={() => import("./finance/finance.jsx")} /> */}
  </Route>
);
