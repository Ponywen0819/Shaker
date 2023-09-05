import React from "react";
import { useNavigate } from "react-router-dom";
import { SuccessNotify, FailNotify } from "@/components/notification.js";

export const Component = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [coupons, setCoupon] = React.useState([]);
  const navigation = useNavigate();

  const getCoupon = async () => {
    const res = await fetch("/api/coupon/GetAdminCoupons", {
      method: "POST",
    });

    if (!res.ok) {
      navigation("/auth/login");
    }

    const json = await res.json();
    return json.data;
  };

  const updateCoupon = () => {
    getCoupon().then((data) => {
      if (data) {
        setCoupon(data);
      }
    });
  };

  const handle_upload = () => {
    if (name === "" || number === "") return FailNotify("資料不可為空");
    fetch("/api/coupon/PublishFreeCarCoupon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        minimum_consumption: number,
      }),
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
          SuccessNotify("新增優惠券成功").then(() => {
            updateCoupon();
          });
        } else {
          FailNotify("新增優惠券失敗");
        }
      });
  };

  const render_coupon = () => {
    return coupons.map((coupon) => {
      let end = new Date(coupon.end_time);
      return (
        <div className={` h-24 my-2`}>
          <div className={`shadow-sm flex rounded-lg`}>
            <div
              className={`w-24 h-24  flex justify-center items-center text-white bg-[#26cc91]`}
            >
              免運費
            </div>
            <div className={`flex justify-between p-2 grow items-center`}>
              <div>
                <p>{coupon.name}</p>
                <p className={`item_name`}>{`免運費`}</p>
                <p className={`text-gray-500`}>
                  {`低消$${coupon.minimum_consumption}`}
                </p>
              </div>
              <p>{`使用期限 ${end.getFullYear()}/${
                end.getMonth() + 1
              }/${end.getDate()}`}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  React.useEffect(() => {
    updateCoupon();
  }, []);

  return (
    <div className={`w-[800px] mx-auto shadow-sm bg-white rounded-lg my-3`}>
      <div className={`p-2 border-b-[1px] `}>
        <div className={`text-xl font-semibold border-b-[1px]`}>
          <span>新增免運活動</span>
        </div>
        <div className={`p-2 flex flex-wrap`}>
          <div className={`w-1/2 p-2`}>
            <p className={`text-md font-semibold mb-2`}>優惠卷名稱</p>
            <input
              className={`border-2 p-1 rounded-lg `}
              placeholder={`請輸入新免運卷名稱`}
              value={name}
              onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`w-1/2 p-2`}>
            <p className={`text-md font-semibold mb-2`}>最低消費</p>
            <input
              className={`border-2 p-1 rounded-lg `}
              placeholder={`請輸入免運最低金額`}
              value={number}
              onInput={(e) =>
                setNumber(
                  e.target.value.replace(/[^0-9]/, "").replace(/\b(0+)/gi, "")
                )
              }
            />
          </div>
          <div className={`flex grow justify-center p-2`}>
            <button
              className={`rounded-lg text-white bg-orange-500 p-2`}
              onClick={handle_upload}
            >
              新增免運活動
            </button>
          </div>
        </div>
      </div>
      <div className={`table-body`}>
        {coupons.length === 0 ? (
          <div className={`h-64 flex items-center justify-center`}>
            <p className={`text-2xl font-bold `}>現無免運活動</p>
          </div>
        ) : (
          render_coupon()
        )}
      </div>
    </div>
  );
};
