import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbutton = ({ img, url, title, activate }) => (
  <Link
    className={`flex gap-3 items-center ${activate ? "text-orange-500" : ""}`}
    to={url}
  >
    <div className="w-4 h-4">{img && <img src={`/static/img/${img}`} />}</div>
    <p>{title}</p>
  </Link>
);

const Standerbar = ({ title, url, items, img }) => {
  const location = useLocation();
  const isOpened = items
    ? items.some((i) => i.url == location.pathname)
    : false;
  return (
    <div className={`normal_bar`}>
      <Navbutton
        title={title}
        url={url}
        img={img}
        activate={items ? false : location.pathname == url}
      ></Navbutton>
      {isOpened && (
        <div className={"mt-1"}>
          {items
            ? items.map((subItem) => (
                <Navbutton
                  title={subItem.title}
                  url={subItem.url}
                  activate={location.pathname == subItem.url}
                ></Navbutton>
              ))
            : ""}
        </div>
      )}
    </div>
  );
};

export const Aside = () => {
  const [username, setusername] = React.useState("");
  const [user_photo, setPhoto] = React.useState("");
  React.useEffect(() => {}, []);
  const obj = [
    {
      title: "我的帳戶",
      url: "/user/account/profile",
      img: "person-square.svg",
      item: [
        { title: "更改個人資訊", url: "/user/account/profile" },
        { title: "更改密碼", url: "/user/account/password" },
      ],
    },
    { title: "購買清單", url: "/user/purchase", img: "card-list.svg" },
  ];

  React.useState(() => {
    fetch("/api/account/GetUserDetail", {
      method: "POST",
      body: JSON.stringify({
        require: ["file_path", "name"],
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        const status_code = res.status;
        if (status_code === 200) {
          return res.json();
        } else if (status_code === 401) {
          FailNotify("請先登入").then(() => (location.herf = location.href));
        }
      })
      .then((data) => {
        const return_coode = data.cause;
        if (return_coode === 0) {
          setusername(data.name);
          setPhoto(`${data.file_path.slice(1)}`);
        } else {
          FailNotify("取得使用者資料發生錯誤");
        }
      }, []);
  });

  return (
    <aside className="w-64 h-96 bg-white rounded-lg shadow-sm p-3 flex flex-col gap-3">
      <div className="flex items-center">
        <img
          className="w-16 h-16 p-1 rounded-full object-cover"
          src={user_photo || "/static/img/logo1.png"}
        />
        <div className="mt-2">
          <p className="user_name">{username}</p>
          <Link className="flex gap-3" href="/user/account/profile">
            <img src="/static/img/pencil.svg"></img>
            <p>修改個人資訊</p>
          </Link>
        </div>
      </div>
      {obj.map((i) => (
        <Standerbar
          title={i.title}
          url={i.url}
          type={i.type}
          img={i.img}
          items={i.item}
        ></Standerbar>
      ))}
    </aside>
  );
};
