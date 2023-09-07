import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SuccessNotify, FailNotify } from "@/components/notification.js";
import "@/css/Toolbar.css";

const testLogin = async () => {
  const res = await fetch("/api/account/GetUserDetail", {
    body: JSON.stringify({
      require: ["file_path", "name"],
    }),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!res.ok) {
    return;
  }

  const json = await res.json();
  if (json.cause !== 0) {
    return;
  }

  return json;
};

const User_area = ({ img, name, logOut }) => {
  const [append, setappend] = React.useState(false);
  const navigation = useNavigate();

  const showappend = () => {
    setappend(true);
  };

  const hideappend = () => {
    setappend(false);
  };

  const handleLogout = () => {
    fetch("/api/account/Logoff", {
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        SuccessNotify("登出成功").then(() => {
          logOut();
          navigation("/");
        });
      }
    });
  };

  return (
    <div
      className={`user_area`}
      onMouseEnter={() => showappend()}
      onMouseLeave={() => hideappend()}
    >
      <Link className={`user_title`}>
        <div
          className={`Toolbar_user_img`}
          style={{
            backgroundImage: `url(${
              img == null ? "/static/img/logo1.png" : img.slice(1)
            })`,
          }}
        ></div>
        <p className={`text-white`}>{name}</p>
      </Link>
      {append && (
        <div className={`Toolbar_user_section_area z-20`}>
          <Link
            className={`font-bold Toolbar_user_section`}
            to={`/user/account/profile`}
          >
            我的帳號
          </Link>
          <Link
            className={`font-bold Toolbar_user_section`}
            to={`/user/purchase`}
          >
            購買清單
          </Link>
          <button
            className={`font-bold Toolbar_user_section`}
            onClick={handleLogout}
          >
            登出
          </button>
        </div>
      )}
    </div>
  );
};

export const UpperBar = () => {
  const [userinfo, setInfo] = React.useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    testLogin().then((data) => {
      if (data) {
        const { file_path: img, name } = data;
        setInfo({ img, name });
      }
    });
  }, []);

  return (
    <div className="py-1">
      <div className="max-w-[1200px] mx-auto h-full flex justify-between">
        <div className="w-1/5">
          <Link to={"/seller"} className="text-white">
            賣家中心
          </Link>
        </div>
        {userinfo ? (
          <User_area
            name={userinfo.name}
            img={userinfo.file_path}
            logOut={() => {
              setInfo(null);
            }}
          />
        ) : (
          <div className="">
            <Link to={"/auth/login"} className="text-white">
              登入
            </Link>
            <div className="inline h-2 border-[1px] border-white mx-2" />
            <Link to={"/auth/register"} className="text-white">
              註冊
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
