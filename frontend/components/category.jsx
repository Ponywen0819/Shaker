import React from "react";
import { useNavigate } from "react-router-dom";
import "@/css/index.css";

const TypeLink = ({ type, first, id }) => {
  const navigation = useNavigate();
  const handle_search = (val) => {
    let qur = new URLSearchParams({ category: val });
    navigation(`/product/search?${qur.toString()}`);
  };

  return (
    <button
      className={`type_link ${first ? "" : "type_bar"}`}
      onClick={() => handle_search(id)}
    >
      <span className={`type_text`}>{type}</span>
    </button>
  );
};

const getCategory = async () => {
  const res = await fetch("/api/product/GetAllCategory");

  if (!res.ok) {
    throw new Error("error on fetch category");
  }

  return res.json();
};

export const ItemTypeSelection = () => {
  const [item_types, setTypes] = React.useState([]);

  React.useEffect(() => {
    getCategory().then((category) => setTypes(category));
  }, []);

  return (
    <div className={`type_selection`}>
      <div className={`type_container`}>
        {item_types.map((i) => (
          <TypeLink type={i.name} first={i.id === 1} id={i.id}></TypeLink>
        ))}
      </div>
    </div>
  );
};
