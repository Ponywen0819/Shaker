import React from "react";
import { Link } from "react-router-dom";

export const ItemCard = ({ id, file_path, name, price }) => (
  <li className={`w-1/5 box-border pb-2 px-2`}>
    <div className="bg-white rounded-md shadow-lg p-2 border-2 border-white hover:border-orange-400 ">
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
    </div>
  </li>
);
