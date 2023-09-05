import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { AuthRoute } from "./pages/auth/route.jsx";
import { CartRoute } from "./pages/cart/route.jsx";
import { ProductRoute } from "./pages/product/route.jsx";
import { SellerRoute } from "./pages/seller/route.jsx";
import { AdminRoute } from "./pages/admin/route.jsx";
import { UserRoute } from "./pages/user/route.jsx";
import "@/style.css";

const Root = () => {
  return (
    <div id="container" className="min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" lazy={() => import("./pages/index.jsx")} />
      {AuthRoute}
      {CartRoute}
      {ProductRoute}
      {SellerRoute}
      {AdminRoute}
      {UserRoute}
    </Route>
  )
);

const element = document.getElementById("main");
const root = createRoot(element);

root.render(<RouterProvider router={router} />);
