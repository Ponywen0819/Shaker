import React from "react";
import "@/css/seller_shipping.css";

const Selecter = ({ now_on, onclick }) => {
  const choise = ["全部", "待出貨", "運送中", "已完成"];
  return (
    <div className={`shipping_container mb-8 flex items-center`}>
      {choise.map((val, index) => (
        <button
          className={`choise_btn ${index === now_on && "choosen_btn"}`}
          onClick={() => onclick(index)}
        >
          <p>{val}</p>
        </button>
      ))}
    </div>
  );
};

const Item = ({ item }) => {
  const shipping_state = ["待出貨", "運送中", "已完成"];
  const payment_state = ["貨到付款", "信用卡", "轉帳"];
  console.log(item);
  return (
    <div className={`flex list_title mb-3 items-center`}>
      <div className={`flex flex-col w-[50%]`}>
        {item.products.map((i) => (
          <div className={`flex mb-2`}>
            <div
              className={`item_img`}
              style={{ backgroundImage: `url(${i.photo.slice(1)})` }}
            ></div>
            <p className={`grow`}>{i.name}</p>
          </div>
        ))}
      </div>
      <p className={`w-[15%] text-center text-sm text-gray-500`}>
        {shipping_state[item.status]}
      </p>
      <p className={`w-[15%] text-center text-sm text-gray-500`}>
        {payment_state[item.payment]}
      </p>
      <p
        className={`w-[20%] text-right text-xl text-[#fc753e]`}
      >{`$${item.price}`}</p>
    </div>
  );
};

const ItemList = ({ item_list, now_on }) => {
  const render_list = () => {
    let list = [];
    for (const item of item_list) {
      if (now_on === 0 || item.status === now_on - 1) {
        list.push(<Item item={item}></Item>);
      }
    }

    if (list.length === 0) {
      return (
        <div className={`h-36 flex justify-center items-center`}>
          <p className={`text-2xl font-extrabold `}>尚無資料</p>
        </div>
      );
    } else {
      return list;
    }
  };

  return (
    <div className={`shipping_container mb-8 px-6 py-3`}>
      <div className={`flex list_title mb-3`}>
        <p className={`w-[50%]`}>商品</p>
        <p className={`w-[15%] text-center`}>狀態</p>
        <p className={`w-[15%] text-center`}>付款方式</p>
        <p className={`w-[20%] text-right`}>金額</p>
      </div>
      {render_list()}
    </div>
  );
};

const getShopOrders = async () => {
  const res = await fetch("/api/product/GetShopOrders", {
    method: "POST",
  });

  if (!res.ok) {
    throw res;
  }

  const json = await res.json();
  console.log(json);
  if (json.cause === 0) {
    return json.data;
  }
};

export const Component = () => {
  const [items, setItems] = React.useState([]);
  const [now_on, setContent] = React.useState(0);

  React.useEffect(() => {
    getShopOrders().then((data) => {
      if (data) {
        setItems(data);
      }
    });
  }, []);

  return (
    <div className={`grow p-3`}>
      <Selecter now_on={now_on} onclick={setContent}></Selecter>
      <ItemList item_list={items} now_on={now_on}></ItemList>
    </div>
  );
};
