import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getDiscount = async () => {
  const res = await fetch("/api/product/SearchProduct", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!res.ok) {
    throw new Error("error on fetch product");
  }

  const json = await res.json();
  if (json.cause !== 0) {
    throw new Error("error on fetch product");
  }

  return json.data;
};

export const Card = ({ id, file_path, name, price, first }) => {
  return (
    <li
      className={`w-1/5 p-2 box-border border-2 border-white hover:border-orange-400 `}
    >
      <Link to={`/product/${id}`} className="block">
        <figure
          className={`h-64 bg-cover bg-center`}
          style={{ backgroundImage: `url(${file_path.slice(1)})` }}
        ></figure>
        <p className="text-gray-800 h-6">{name}</p>
        <div className="pt-3 ">
          <p className="text-orange-500">$ {price}</p>
        </div>
      </Link>
    </li>
  );
};

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="mx-auto h-full w-full"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="mx-auto h-full w-full"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export const Discount = () => {
  const [products, setProducts] = useState([]);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    getDiscount().then((discount) => setProducts(discount.slice()));
  }, []);

  const btnClass =
    "absolute  top-1/2 rounded-full bg-white border-2  translate-y-[-50%] w-8 h-8 hover:w-12 hover:h-12  transition-all";

  return (
    <div className="rounded-lg  bg-white shadow-lg py-3  relative">
      <div className="px-2 py-2 flex justify-between">
        <h1 className="text-orange-500 text-xl font-semibold">推薦商品</h1>
        <Link className="text-orange-500" to={`/product?type=recommend`}>
          全部商品 &gt;
        </Link>
      </div>
      <button
        className={btnClass + " translate-x-[-50%] left-0 p-1 z-10"}
        onClick={() => pos <= -1280 && setPos((old) => old + 1280)}
      >
        <ChevronLeft />
      </button>
      <button
        className={btnClass + " translate-x-[50%]  right-0 p-1 z-10"}
        onClick={() => pos >= -1280 && setPos((old) => old - 1280)}
      >
        <ChevronRight />
      </button>
      <div className="overflow-hidden">
        <ul
          className="flex h-fit w-[300%] transition-all ease-out duration-500"
          style={{ transform: `translate(${pos}px,0)` }}
        >
          {products.map((product, index) => (
            <Card {...product} first={index === 0} />
          ))}
        </ul>
      </div>
    </div>
  );
};
