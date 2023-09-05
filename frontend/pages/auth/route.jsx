import React from "react";
import { Route } from "react-router-dom";

export const AuthRoute = (
  <Route path="auth" lazy={() => import("./authLayout.jsx")}>
    <Route path="login" lazy={() => import("./login.jsx")} />
    <Route path="register" lazy={() => import("./register.jsx")} />
  </Route>
);
