import React from "react";
import { useLoaderData } from "react-router-dom";
import { ItemCard } from "@/components/itemCard.jsx";

export const Component = () => {
  const [item_list, setitems] = React.useState([]);
  const param = useLoaderData();

  React.useEffect(() => {
    let search_data = {};
    if (param.get("search_word") !== null)
      search_data.search_word = param.get("search_word");
    if (param.get("category") !== null)
      search_data.category = parseInt(param.get("category"));

    console.log(search_data);
    fetch("/api/product/SearchProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(search_data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          setitems(data.data);
        }
      });
  }, [param]);

  return (
    <>
      <div className={`max-w-7xl mx-auto`}>
        <div className={`bg-white shadow-sm mb-10 flex px-4 py-2 mt-10`}>
          <h1 className={`text-3xl font-semibold text-orange-500`}>搜尋結果</h1>
        </div>
        <ul className={`flex flex-wrap mb-8`}>
          {item_list.length ? (
            item_list.map((i) => {
              return <ItemCard {...i}></ItemCard>;
            })
          ) : (
            <h2
              className={`w-full text-3xl font-semibold text-orange-500 text-center`}
            >
              無搜尋結果
            </h2>
          )}
        </ul>
      </div>
    </>
  );
};
