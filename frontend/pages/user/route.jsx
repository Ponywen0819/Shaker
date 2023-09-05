import React from "react";
import { Route } from "react-router-dom";
import { AccountRoute } from "./account/route.jsx";

export const UserRoute = (
  <Route path="user" lazy={() => import("./layout.jsx")}>
    {AccountRoute}
    <Route path="purchase" lazy={() => import("./purchase/purchase.jsx")} />
  </Route>
);
