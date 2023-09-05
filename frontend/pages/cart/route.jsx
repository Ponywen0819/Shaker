import React from "react";
import { Route } from "react-router-dom";

export const CartRoute = (
  <Route path="cart" lazy={() => import("./layout.jsx")}>
    <Route path="" lazy={() => import("./cart.jsx")} />
    <Route path="checkout" lazy={() => import("./checkout.jsx")} />
  </Route>
);
