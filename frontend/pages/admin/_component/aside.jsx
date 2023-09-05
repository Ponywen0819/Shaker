import React from "react";
import { Link } from "react-router-dom";

const aside_options = [
  { name: "貨物管理", href: "/admin/shipping" },
  { name: "優惠券管理", href: "/admin/coupon" },
];

export const AdminASide = () => {
  return (
    <div className={`bg-white h-full w-48 shadow-sm flex flex-col gap-3 p-3`}>
      {aside_options.map((option) => (
        <Link
          key={option.name}
          className={`flex items-center`}
          to={option.href}
        >
          <div className={`w-5 h-5 m-0`}>
            <img className={``} src={`/static/img/box.png`} />
          </div>
          <span className={`nav-text`}>{option.name}</span>
        </Link>
      ))}
    </div>
  );
};
