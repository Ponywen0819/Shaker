import React, { useState, useEffect } from "react";
import { ItemCard } from "@/components/itemCard.jsx";

const getDailyProduct = async () => {
  const res = await fetch("/api/product/SearchProduct", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error("error on fetch getting product");
  }

  return res.json();
};

export const DailyProduct = () => {
  const [products, setProduct] = useState();

  useEffect(() => {
    getDailyProduct().then((info) => {
      console.log(info);
      setProduct(info.data.slice(0, 20));
    });
  }, []);

  return (
    <ul className={`flex flex-wrap mb-8`}>
      {products?.map((product) => (
        <ItemCard {...product} />
      ))}
    </ul>
  );
};
