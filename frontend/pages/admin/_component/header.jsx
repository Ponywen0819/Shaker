import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { SuccessNotify, FailNotify } from "@/components/notification.js";

export const AdminHeader = () => {
  const [admin_name, setName] = React.useState("測試用名稱");
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("/api/admin/getAdminInfo", {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          location.href = "/login";
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          setName(data.data.name);
        }
      });
  }, []);

  const handle_logoff = () => {
    fetch("/api/account/Logoff", {
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        SuccessNotify("登出成功").then(() => navigate("/"));
      }
    });
  };

  return (
    <div className={`bg-white w-full flex items-center justify-between p-2`}>
      <div className={`flex items-center relative`}>
        <Link className={`w-48`} to={"/admin"}>
          <img src={"/static/img/logobar_white.png"} />
        </Link>
        <div className="h-8 w-[3px] bg-orange-500 ml-[-18px]" />
        <span className={`text-orange-500 font-medium text-2xl`}>控制中心</span>
      </div>
      <div className={`flex items-center `}>
        <span className={`font-medium`}>您好！管理員 </span>
        <span className={`font-medium text-lg px-1`}>{admin_name}</span>
        <div className="h-4 w-[3px] bg-gray-200 mx-2" />
        <button className={`header-logoff`} onClick={handle_logoff}>
          登出
        </button>
      </div>
    </div>
  );
};
