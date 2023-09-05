import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoOrange from "@/public/img/logobar_orange.png";

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
};

const CartIcon = (prop) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#ffffff"
      class="bi bi-cart"
      viewBox="0 0 16 16"
      {...prop}
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
};
export const LowerBar = () => {
  const navigation = useNavigate();
  const [search, setText] = React.useState("");
  const handle_search = () => {
    const qur = new URLSearchParams({ search_word: search });
    navigation(`/product/search?${qur.toString()}`);
  };

  return (
    <div className="py-1">
      <div className="max-w-[1200px] mx-auto flex items-center">
        <Link to={"/"}>
          <img className={`w-64`} src={LogoOrange} alt="logo" />
        </Link>
        <div className="grow border-2 rounded-md flex py-1 px-2 bg-white h-10 gap-3">
          <input
            type="text"
            className="w-full px-1"
            value={search}
            onInput={(e) => setText(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-3 rounded-lg"
            onClick={() => handle_search()}
          >
            <SearchIcon />
          </button>
        </div>
        <div className="w-64 ">
          <Link to={"/cart"} className="w-fit block ml-auto">
            <CartIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};
