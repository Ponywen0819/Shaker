import React from "react";
import { DailyProduct } from "./_component/daily.jsx";
import { ItemTypeSelection } from "@/components/category.jsx";
import { Discount } from "./_component/discount.jsx";
import { UpperBar } from "@/components/navbar/upper.jsx";
import { LowerBar } from "@/components/navbar/lower.jsx";
import { Link } from "react-router-dom";

export const Component = () => {
  return (
    <div>
      <header className={`bg-gradient-to-b from-orange-500 to-orange-600`}>
        <UpperBar></UpperBar>
        <LowerBar></LowerBar>
      </header>
      <div className="mb-8">
        <ItemTypeSelection />
      </div>
      <div className={`max-w-7xl mx-auto`}>
        <Discount />
        <div className={`bg-white shadow-sm mb-10 flex px-4 py-2 mt-10`}>
          <h2 className={`text-3xl font-semibold text-orange-500`}>其他商品</h2>
        </div>
        <div className={`flex flex-col justify-center mb-8`}>
          <DailyProduct />
          <Link
            className="mx-auto block w-32 py-3 bg-white border-2 border-black/20 rounded-md text-center"
            to={"/product/search"}
          >
            更多推薦
          </Link>
        </div>
      </div>
    </div>
  );
};
