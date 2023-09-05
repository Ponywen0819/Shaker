import React from "react";
import { FailNotify, SuccessNotify } from "@/components/notification.js";

const Coupon = ({ info }) => {
  let start = new Date(info.start_time);
  let end = new Date(info.end_time);
  return (
    <div className={`item`}>
      <div className={`item_info`}>
        <div className={`item_head item_head_shop`}>
          {info.discount_type === 1 ? "季節折扣" : "特殊折扣"}
        </div>
        <div className={`item_text_area`}>
          <div>
            <p>{info.name}</p>
            {info.discount_type === 1 ? (
              <p className={`item_name`}>{`打${info.discount}折`}</p>
            ) : (
              [
                <p className={`item_name`}>{`折$${info.discount}`}</p>,
                <p className={`item_num`}>
                  {" "}
                  {`低消$${info.minimum_consumption}`}
                </p>,
              ]
            )}
          </div>
          <p>{`使用期限 ${end.getFullYear()}/${
            end.getMonth() + 1
          }/${end.getDate()}`}</p>
        </div>
      </div>
    </div>
  );
};

export const Component = () => {
  // 用於新增優惠券使用
  const [coupon_type, setType] = React.useState("");
  const [coupon_name, setName] = React.useState("");
  const [fix_discount, setFix] = React.useState("");
  const [per_discount, setPer] = React.useState(``);
  const [min, setMin] = React.useState("");
  // 紀錄現有優惠券
  const [coupons, setCoupons] = React.useState([]);

  const handle_number = (event, setter) => {
    let value = event.target.value;
    if (value !== "0") {
      value = value.replace(/[^0-9]/, "");
      setter(value.replace(/\b(0+)/gi, ""));
    }
  };

  const create_coupon = () => {
    let upload_data = {};
    if (coupon_name === "") {
      FailNotify("請輸入名稱");
      return;
    }
    upload_data.name = coupon_name;
    if (coupon_type === "") {
      FailNotify("請輸入優惠券種類");
      return;
    }
    upload_data.discount_type = parseInt(coupon_type);
    if (coupon_type === "1") {
      if (per_discount === "") {
        FailNotify("請輸入折價折數");
        return;
      }
      upload_data.discount = per_discount;
    } else {
      if (min === "") {
        FailNotify("請輸入最低消費金額");
        return;
      }
      upload_data.minimum_consumption = min;
      if (fix_discount === "") {
        FailNotify("請輸入折扣金額");
        return;
      }
      upload_data.discount = fix_discount;
    }

    fetch("/api/coupon/PublishShopCoupon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upload_data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          FailNotify("新增優惠券失敗");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          SuccessNotify("新增優惠券成功");
          setType("");
          setName("");
          setFix("");
          setPer("");
          setMin("");
          get_coupons();
        } else {
          FailNotify("新增優惠券失敗");
        }
      });
  };

  const get_coupons = () => {
    fetch("/api/coupon/GetShopCoupons", {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.cause === 0) {
          setCoupons(data.data);
        }
      });
  };

  React.useEffect(() => {
    get_coupons();
  }, []);

  return (
    <div className={`grow`}>
      <div className={`bg-white w-[800px]  mx-auto px-10 py-3`}>
        <h1 className={`text-xl font-bold`}>新增優惠券</h1>
        <div className="h-[1px] w-full bg-gray-300 my-3" />
        <div className={`flex px-10 flex-wrap`}>
          <div className={`w-1/2 p-3`}>
            <p>折價券名稱</p>
            <input
              type={`text`}
              className={`w-full  h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
              value={coupon_name}
              placeholder={`請輸入優惠券名稱`}
              onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`w-1/2 p-3`}>
            <p>折價券種類</p>
            <select
              value={coupon_type}
              className="h-8 border-2 border-gray-300 rounded-lg px-2 py-1 text-gray-500"
              onInput={(e) => setType(e.target.value)}
            >
              <option value="" disabled selected>
                選擇折價券類別
              </option>
              <option value="1">季節折扣</option>
              <option value="2">特殊折扣</option>
            </select>
          </div>
          {coupon_type === "1" ? (
            <div className={`w-1/2 p-3`}>
              <p>打折折數</p>
              <input
                value={per_discount}
                className={`w-full  h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
                onInput={(e) => handle_number(e, setPer)}
                placeholder={`請輸入打折折數`}
              />
            </div>
          ) : (
            [
              <div className={`w-1/2 p-3`}>
                <p>最低消費</p>
                <input
                  type={`text`}
                  value={min}
                  className={`w-full  h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
                  onInput={(e) => handle_number(e, setMin)}
                  placeholder={`請輸入最低消費金額`}
                />
              </div>,
              <div className={`w-1/2 p-3`}>
                <p>折價金額</p>
                <input
                  value={fix_discount}
                  className={`w-full h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
                  onInput={(e) => handle_number(e, setFix)}
                  placeholder={`請輸入折價金額`}
                />
              </div>,
            ]
          )}
        </div>
        <div className={`flex justify-end px-10`}>
          <button
            className={`rounded-lg bg-orange-500 text-white px-2 py-1`}
            onClick={create_coupon}
          >
            新增優惠券
          </button>
        </div>
        <p className={`interface_title`}>發行優惠券</p>
        {coupons.length === 0 ? (
          <div className={`h-36 flex justify-center items-center`}>
            <p className={`text-2xl font-extrabold `}>現無發行之優惠券</p>
          </div>
        ) : (
          coupons.map((coupon) => <Coupon info={coupon}></Coupon>)
        )}
      </div>
    </div>
  );
};
