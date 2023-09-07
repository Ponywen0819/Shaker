import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FailNotify } from "@/components/notification.js";

const CartLowerBar = () => (
  <div className=" cart_lower">
    <div className="cart_lower_container">
      <Link className="w-2/5 cart_lower_img_area" to={`/`}>
        <img
          className={`cart_lower_img`}
          src="/static/img/logobar_white.png"
          alt=""
        />
        <p className={`cart_logo_text`}>購物車</p>
      </Link>
      <div className="cart_search_bar">
        <input type="text" name="" id="" className="cart_search_input" />
        <button className="cart_search_btn">
          <img src="/static/img/search.svg" alt="" className="" />
        </button>
      </div>
    </div>
  </div>
);

const ContentTitle = () => (
  <div className={`cart_title title`}>
    <div className={`title_btn_area`}></div>
    <p className={``} style={{ width: "45%" }}>
      商品
    </p>
    {["單價", "數量", "總計", "操作"].map((i) => (
      <p
        className={`title_text`}
        style={{ width: i === "數量" ? "14%" : "12%" }}
      >
        {i}
      </p>
    ))}
  </div>
);

const Order_title = ({ shop_name, onClick, isChecked }) => {
  return (
    <div className={`order_title title`}>
      <div className={"title_btn_area"}>
        <input
          type={"checkbox"}
          className={`title_btn`}
          id={shop_name}
          onClick={() => onClick(shop_name)}
          checked={isChecked}
        />
      </div>
      <div className={`title_text`}>
        <a href={``}>{shop_name}</a>
      </div>
    </div>
  );
};

const Product = ({ item, onClick, isChecked, update }) => {
  const [disable, setable] = React.useState(false);

  const handle_update_num = (val) => {
    let next = item.count + val;
    if (next <= 0 || next > item.remain) {
      return;
    } else {
      setable(true);
      // 後端處理
      fetch("/api/product/UploadCartNum", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          new_count: next,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          if (data.cause === 0) {
            return true;
          }
        })
        .then((res) => {
          if (res === true) {
            update(item.id, next);
            setable(false);
          }
        });
    }
  };

  return (
    <div className={`product_container`}>
      <div className={`title_btn_area`}>
        <input
          type={"checkbox"}
          className={`title_btn`}
          name={item.id}
          onClick={() =>
            onClick({
              id: item.id,
              shop_name: item.shop_name,
              remain: item.remain,
            })
          }
          checked={isChecked}
        />
      </div>
      <div className={`product_info_container`}>
        <div
          className={`product_img !w-[100px] !h-[100px]`}
          style={{ backgroundImage: `url(${item.photo.slice(1)})` }}
        ></div>
        <p>{item.name}</p>
      </div>
      <p className={`w-[12%] flex justify-center`}>${item.price}</p>
      <div className={`w-[14%] flex justify-center`}>
        <div className={`product_number_container`}>
          <button
            className={`product_number_btn`}
            onClick={() => handle_update_num(-1)}
            disabled={disable}
          >
            -
          </button>
          <p className={`product_number !text-center`}>{item.count}</p>
          <button
            className={`product_number_btn`}
            onClick={() => handle_update_num(1)}
            disabled={disable}
          >
            +
          </button>
        </div>
      </div>
      <p className={`w-[12%] flex justify-center`}>
        ${item.count * item.price}
      </p>
      <div className={`w-[12%] flex justify-center`}>
        <button>X</button>
      </div>
    </div>
  );
};

const Footer = ({ price, num, onClick }) => {
  return (
    <div className={`creat_order`}>
      <p className={`text-lg`}>總金額</p>
      <p>{`(${num}個商品): `}</p>
      <p className={`create_order_price px-1`}>{`${price}`}</p>
      <button className={`create_order_btn`} onClick={onClick}>
        去買單
      </button>
    </div>
  );
};

export const Component = () => {
  const [products, setproduct] = React.useState([]);
  const [selection, setSelection] = React.useState([]);
  const navigation = useNavigate();

  const select_product = (product) => {
    let copy_select = selection.slice(0); // 複製
    // 做商品個別檢查
    // 檢查陣列中是否有重複的值

    let dup = false;
    for (const select of selection) {
      if (select.id === product.id) {
        dup = true;
        break;
      }
    }
    if (dup) {
      const index = selection.indexOf(product);
      copy_select.splice(index, 1);
    } else {
      // 若是選擇新的商品要檢查是否為別商片的物品
      if (selection.length === 0) {
        copy_select.push(product);
      } else {
        if (selection[0].shop_name !== product.shop_name) {
          copy_select = [product];
        } else {
          copy_select.push(product);
        }
      }
    }
    setSelection(copy_select);
  };

  const get_title_check = (shop_name) => {
    for (const product of products[shop_name]) {
      let dup = false;
      for (const select of selection) {
        if (select.id === product.id) {
          dup = true;
          break;
        }
      }
      if (!dup) {
        return false;
      }
    }
    return true;
  };

  const get_item_check = (id) => {
    for (const select of selection) {
      if (select.id === id) {
        return true;
      }
    }
    return false;
  };

  const select_shop = (name) => {
    for (const product of products[name]) {
      if (!selection.includes(product)) {
        setSelection(products[name]);
        return;
      }
    }
    setSelection([]);
  };

  const handle_change = (id, val) => {
    let new_list = {};
    for (const shop of Object.keys(products)) {
      console.log(shop);
      let temp = products[shop].slice(0);
      for (const [i, value] of products[shop].entries()) {
        console.log(value);
        if (value.id === id) {
          temp[i].count = val;
        }
      }
      console.log(temp);
      new_list[shop] = temp;
    }
    setproduct(new_list);
  };

  const calc_price = () => {
    let total = 0;
    for (const items of Object.values(products)) {
      for (const item of items) {
        // 檢查是否在列表中
        for (const s of selection) {
          if (s.id === item.id) {
            total += item.count * item.price;
            break;
          }
        }
      }
    }
    return total;
  };

  const handle_checkout = () => {
    if (selection.length > 0) {
      const id_list = selection.map((item) => item.id);
      console.log(id_list);
      document.cookie = `orders=${JSON.stringify(id_list)}`;
      navigation("/cart/checkout");
    } else {
      FailNotify("請選擇至少一項商品");
    }
  };

  React.useEffect(() => {
    if (products.length === 0) {
      fetch("/api/product/GetProductsToCart", {
        method: "POST",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          if (data.cause === 0) {
            let a = {};
            for (const i of data.products) {
              let order_keys = Object.keys(a);
              if (order_keys.includes(i.shop_name)) {
                a[i.shop_name].push(i);
              } else {
                a[i.shop_name] = [i];
              }
            }
            setproduct(a);
          }
        });
    }
  }, [selection]);

  return (
    <>
      <CartLowerBar />
      <div className="main main_content grow">
        <div>
          <ContentTitle></ContentTitle>
          <div className={``}>
            {Object.entries(products).map((order) => (
              <div className={`order_container`}>
                <Order_title
                  shop_name={order[0]}
                  onClick={select_shop}
                  isChecked={get_title_check(order[0])}
                ></Order_title>
                {order[1].map((i) => (
                  <Product
                    item={i}
                    onClick={select_product}
                    isChecked={get_item_check(i.id)}
                    update={handle_change}
                  ></Product>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Footer
          num={selection.length}
          price={calc_price()}
          onClick={handle_checkout}
        />
      </div>
    </>
  );
};
