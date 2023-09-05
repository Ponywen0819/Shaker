import React from "react";
import { useNavigate } from "react-router-dom";
import { SuccessNotify, FailNotify } from "@/components/notification.js";

export const Component = () => {
  const navigation = useNavigate();
  const [order_list, setList] = React.useState([]);
  const data_title = ["訂單編號", "商店名稱", "訂單狀態", "操作"];
  const order_state = ["已成立", "運送中", "已完成"];

  const getOrders = async () => {
    const res = await fetch("/api/product/getOrders", {
      method: "POST",
    });

    if (!res.ok) {
      navigation("/auth/login");
    }

    const json = await res.json();
    return json.data;
  };

  const updateOrder = () => {
    getOrders().then((data) => setList(data));
  };

  React.useEffect(() => {
    updateOrder();
  }, []);

  const handle_change = (id, state) => {
    fetch("/api/product/ModifyOrderState", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        order_id: id,
        status: state + 1,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.cause === 0) {
          SuccessNotify("更新成功").then(() => updateOrder());
        } else {
          FailNotify("更新失敗");
        }
      });
  };

  return (
    <div className={`w-[800px] mx-auto shadow-sm bg-white rounded-lg my-3`}>
      <div className={`border-b-2 h-12 py-2 px-4`}>
        <div className={`flex items-center`}>
          {data_title.map((title) => (
            <span className={`w-1/4`}>{title}</span>
          ))}
        </div>
      </div>
      <div className={`p-2 `}>
        {order_list.map((order, index) => (
          <div
            className={`flex py-3 ${
              index !== order_list.length - 1 ? "table-row-border" : ""
            }`}
            key={order.id}
          >
            <span className={`w-1/4`}>{order.id}</span>
            <span className={`w-1/4`}>{order.shop_name}</span>
            <span className={`w-1/4`}>{order_state[order.status]}</span>
            <span className={`w-1/4`}>
              <button
                className={`rounded-lg bg-orange-500 p-2 text-white`}
                onClick={() => handle_change(order.id, order.status)}
              >
                變更狀態
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
