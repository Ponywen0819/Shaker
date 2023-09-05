import React from "react";

const SelectionItem = ({ typename, activate, onclick }) => {
  return (
    <button
      className={`w-36 h-16 transition-all border-b-2 border-white  ${
        activate ? "text-orange-500 border-orange-500" : ""
      }`}
      onClick={() => onclick(typename)}
    >
      <p>{typename}</p>
    </button>
  );
};

const Selection = ({ items, state, handleClick }) => (
  <div className={`flex mb-12 bg-white shadow-sm`}>
    {items.map((i) => (
      <SelectionItem
        typename={i}
        activate={state === i}
        onclick={handleClick}
      ></SelectionItem>
    ))}
  </div>
);

const Item = ({ name, img, num, price }) => (
  <div className={`py-3 border-b-[1px] border-gray-300 flex justify-start`}>
    <div className={`flex gap-3 mr-2 px-2 grow`}>
      <img src={img} className="w-16 h-16 object-cover" />
      <div className={`flex gap-3`}>
        <p className={`item_name`}>{name}</p>
        <p className={`item_num`}> {`x ${num}`}</p>
      </div>
    </div>
    <p className={`item_price`}>{`$${price * num}`}</p>
  </div>
);

const ItemList = ({ state, price, products, start, end }) => {
  const stateName = ["已成立", "運送中", "已完成"];

  console.log(products);
  return (
    <div className={`bg-white shadow-sm mb-12 p-3 rounded-lg`}>
      <p className={`text-orange-500`}>{stateName[state]}</p>
      {products !== undefined &&
        products.map((p) => (
          <Item
            name={p.name}
            img={`${p.photo.slice(1)}`}
            price={p.price}
            num={p.number}
          ></Item>
        ))}
      <div className={`flex justify-between`}>
        <div>
          <p className={`order_time`}>{`start time : ${start.getFullYear()}/${
            start.getMonth() + 1
          }/${start.getDate()}`}</p>
          {end > new Date() ? (
            <p className={`order_time`}>{`end time : ${end.getFullYear()}/${
              end.getMonth() + 1
            }/${end.getDate()} (maybe)`}</p>
          ) : (
            <p className={`order_time`}>{`end time : ${end.getFullYear()}/${
              end.getMonth() + 1
            }/${end.getDate()} `}</p>
          )}
        </div>
        <div className={`flex items-end`}>
          <p>訂單金額:</p>
          <p className={`text-orange-500 text-xl`}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export const Component = () => {
  const [state, setState] = React.useState("全部");
  const [orders, setOrders] = React.useState([]);

  const handleClick = (i) => {
    setState(i);
  };

  React.useEffect(() => {
    fetch("/api/product/GetOrderList", {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          setOrders(data.data);
        }
      });
  }, []);

  return (
    <div className=" w-[800px] mx-auto p-3  h-fit">
      <Selection
        items={["全部", "已成立", "運送中", "已完成"]}
        state={state}
        handleClick={handleClick}
      ></Selection>
      {orders.map((i) => {
        const showing =
          ["全部", "已成立", "運送中", "已完成"].indexOf(state) - 1;
        if (showing < 0 || showing === i.status)
          return (
            <ItemList
              state={i.status}
              price={i.price}
              products={i.products}
              start={new Date(i.start_time)}
              end={new Date(i.end_time)}
            ></ItemList>
          );
      })}
    </div>
  );
};
