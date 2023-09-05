import React from "react";
import { Route } from "react-router-dom";

export const ProductRoute = (
  <Route path="product" lazy={() => import("./layout.jsx")}>
    <Route
      path=":id"
      loader={({ params }) => {
        const { id } = params;
        return id;
      }}
      lazy={() => import("./product.jsx")}
    />
    <Route
      path="search"
      loader={({ request }) => {
        const url = new URL(request.url);
        return url.searchParams;
      }}
      lazy={() => import("./search.jsx")}
    />
  </Route>
);
