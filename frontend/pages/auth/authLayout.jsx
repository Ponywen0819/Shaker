import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "@/public/img/logo2.png";

export const Component = () => {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      <div className="p-3">
        <Link to={"/"} className="block w-fit">
          <img src={Logo} className="w-64 rounded-lg shadow-sm" alt="" />
        </Link>
        <div className="absolute bg-orange-500 h-[3000px] w-[3000px] rounded-full right-[-2000px] top-[50%] translate-y-[-50%]"></div>
        <div className="absolute w-[1000px] h-screen right-0 top-0 border-box pl-[150px] flex flex-col justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
