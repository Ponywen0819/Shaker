import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SuccessNotify, FailNotify } from "@/components/notification.js";

const CheckBar = () => {
  return (
    <div className="cart_lower">
      <div className="cart_lower_container">
        <Link className="w-2/5 cart_lower_img_area" to={`/`}>
          <img
            className={`cart_lower_img`}
            src="/static/img/logobar_white.png"
            alt=""
          />
          <p className={`cart_logo_text`}>結帳</p>
        </Link>
      </div>
    </div>
  );
};

const OrderRow = ({ img, name, price, num }) => {
  return (
    <div className={`title  !h-28`}>
      <div className={`w-[60%] flex gap-2`}>
        <div
          className={`product_img bg_img`}
          style={{
            backgroundImage: `url(${
              img == null ? "/static/img/logo1.png" : `${img.slice(1)}`
            })`,
          }}
        ></div>
        <p>{name}</p>
      </div>
      <p className={`w-[10%] text-center`}>{`$${price}`}</p>
      <p className={`w-[10%] text-center`}>{num}</p>
      <p className={`w-[20%] text-right`}>{`$${num * price}`}</p>
    </div>
  );
};

const OrderArea = ({ items }) => {
  return (
    <div className={`order_container`}>
      <div className={`title`}>
        <p className={`w-[60%] text-xl font-extrabold`}>訂單內容</p>
        {["單價", "數量"].map((i) => (
          <p className={`w-[10%] text-center`}>{i}</p>
        ))}
        <p className={`w-[20%] text-right`}>總價</p>
      </div>
      {items.map((i) => (
        <OrderRow
          name={i.name}
          img={i.photo}
          num={i.count}
          price={i.price}
        ></OrderRow>
      ))}
    </div>
  );
};

const Summarize = ({ infos, onclick }) => {
  let end = 0;
  Object.entries(infos).map((i) => {
    end += i[1];
  });

  return (
    <div className={`title !h-fit flex justify-end p-5`}>
      <div className={`w-[20%]`}>
        <div className={``}>
          {Object.entries(infos).map((info) => {
            if (info[1] !== 0) {
              return (
                <div className={`flex by-10 justify-between`}>
                  <p>{info[0]}</p>
                  <p>{`$${info[1]}`}</p>
                </div>
              );
            }
          })}
          <div className={`flex by-10 justify-between`}>
            <p>總金額</p>
            <p>{end}</p>
          </div>
        </div>
        <div className={`flex justify-end`}>
          <button className={`create_order_btn`} onClick={onclick}>
            下訂單
          </button>
        </div>
      </div>
    </div>
  );
};

export const Component = () => {
  const [OrderItem, setItem] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [couponlist, setList] = React.useState([]);
  const [coupon, setcoupon] = React.useState("");
  const [info, setInfo] = React.useState({ "商品總金額：": 0, 運費總金額: 60 });
  const [payment, setPay] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const navigation = useNavigate();

  const coupon_change = (e) => {
    const index = parseInt(e.target.value);
    setcoupon(e.target.value);
    const chosen = couponlist[index];
    console.log(chosen);
    if (chosen.discount_type === 0) {
      setInfo({
        "商品總金額：": total,
        運費總金額: 60,
        運費折抵: -60,
      });
    } else if (chosen.discount_type === 1) {
      setInfo({
        "商品總金額：": total,
        "優惠券折價: ": -parseInt(
          total * (1 - parseInt(chosen.discount) / 100)
        ),
        運費總金額: 60,
      });
    } else {
      setInfo({
        "商品總金額：": total,
        "優惠券折價: ": -parseInt(chosen.discount),
        運費總金額: 60,
      });
    }
  };

  const handle_upload = () => {
    let data = {};
    data.product = OrderItem;
    data.address = addr;
    data.payment = payment;
    if (coupon !== "") {
      data.coupon_id = couponlist[coupon].id;
    }
    fetch("/api/product/CreateOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.cause === 0) {
          SuccessNotify("上傳訂單成功").then(() => {
            navigation("/");
          });
        } else {
          FailNotify("上傳訂單發生錯誤");
        }
      });
  };

  React.useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; orders=`);
    console.log(parts);
    let product_ids = "";
    if (parts.length === 2) {
      product_ids = parts.pop().split(";").shift();
    }

    fetch("/api/product/GetCartProducctsById", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: product_ids,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.cause === 0) {
          console.log(data.data);
          setItem(data.data);
          let temp = 0;
          data.data.map((i) => {
            temp += i.price * i.count;
          });
          setTotal(temp);
          info["商品總金額"] = temp;
          setInfo(info);
          return data.data;
        }
      })
      .then((data) => {
        fetch("/api/coupon/GetCoupons", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            shop_id: data[0].shop_id,
          }),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            console.log(data);
            if (!data["no coupon"]) {
              setList(data);
            }
          });
      });
  }, []);

  return (
    <>
      <CheckBar></CheckBar>
      <div className={`main mb-10`}>
        <OrderArea items={OrderItem}></OrderArea>
        <div className={`title h-20 justify-end mb-5`}>
          {/*<p className={`pr-5`}>{`尚未選擇優惠券`}</p>*/}
          {/*<button>選擇優惠券</button>*/}
          <select
            value={coupon}
            className={`new_name_input w-full px-5 py-1`}
            onInput={coupon_change}
          >
            <option value="" disabled selected>
              請選擇優惠卷
            </option>
            {couponlist?.map((c, i) => (
              <option value={i}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className={`title h-20 justify-end mb-5`}>
          <select
            value={payment}
            className={`new_name_input w-full px-5 py-1`}
            onInput={(e) => setPay(e.target.value)}
          >
            <option value="" disabled selected>
              請選擇付款方式
            </option>
            <option value={`0`}>貨到付款</option>
            <option value={`1`}>信用卡</option>
            <option value={`2`}>ATM轉帳</option>
          </select>
        </div>
        <div className={`title h-20 justify-end mb-5`}>
          <input
            className={`new_name_input w-full px-5 py-1`}
            value={addr}
            onInput={(e) => setAddr(e.target.value)}
            placeholder={`請輸入地址`}
          />
        </div>
        <Summarize infos={info} onclick={handle_upload}></Summarize>
      </div>
    </>
  );
};
