import React from "react";
import forge from "node-forge";
import { SuccessNotify, FailNotify } from "@/components/notification.js";
import { Link, useNavigate } from "react-router-dom";

export const Component = () => {
  const navigation = useNavigate();
  const [acc_emp, setacc] = React.useState(false);
  const [pas_emp, setpas] = React.useState(false);

  const handle_login = () => {
    fetch("/api/account/PublicKey", {
      method: "GET",
    })
      .then(function (respone) {
        if (respone.status === 200) {
          return respone.text();
        }
      })
      .then(function (data) {
        const account = document.getElementById(`account`).value;
        const password = document.getElementById("password").value;

        var public_key = forge.pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文
        const encode_password = forge.util.encode64(
          public_key.encrypt(forge.util.encodeUtf8(password), "RSA-OAEP", {
            md: forge.md.sha256.create(),
            mgf1: { md: forge.md.sha1.create() },
          })
        );
        console.log("success");

        fetch("/api/account/Login", {
          method: "POST",
          body: JSON.stringify({
            account: account,
            password: encode_password,
          }),
          headers: { "content-type": "application/json" },
        })
          .then(function (respons) {
            if (respons.status === 200) {
              return respons.json();
            }
          })
          .then(function (json) {
            if (json.cause === 0) {
              SuccessNotify("登入成功").then(() => {
                navigation("/");
              });
            } else {
              fetch("/api/admin/Login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  account: account,
                  password: encode_password,
                }),
              })
                .then((res) => {
                  if (res.status === 200) {
                    return res.json();
                  }
                })
                .then((data) => {
                  if (data.cause === 0) {
                    SuccessNotify("管理員登入成功").then(() => {
                      navigation("/admin");
                    });
                  } else {
                    FailNotify("帳號或密碼錯誤");
                  }
                });
            }
          });
      });
  };

  const InputBox = ({ id, type, show, empty }) => {
    return (
      <div className={"w-full"}>
        <input
          className="px-2 py-1 w-full"
          type={type}
          id={id}
          placeholder={show}
          style={{ border: `1px solid ${empty ? "red" : "gray"}` }}
        />
      </div>
    );
  };

  const CheckForm = (seta, setp) => {
    let vaild = true;
    if (document.getElementById("account").value === "") {
      seta(true);
      vaild = false;
    } else {
      seta(false);
    }
    if (document.getElementById("password").value === "") {
      setp(true);
      vaild = false;
    } else {
      setp(false);
    }
    if (vaild) handle_login();
  };

  return (
    <div className="bg-white rounded-lg w-80 h-fit p-2 flex flex-col gap-3">
      <div>
        <h1 className="text-2xl font-bold">登入</h1>
      </div>
      <div className="grow flex flex-col gap-3">
        <div>
          <p>帳號</p>
          <InputBox
            id={`account`}
            type={`email`}
            show={`帳號`}
            empty={acc_emp}
          />
        </div>
        <div>
          <p>密碼</p>
          <InputBox
            id={`password`}
            type={`password`}
            show={`密碼`}
            empty={pas_emp}
          />
        </div>
        {acc_emp || pas_emp ? (
          <p style={{ color: "red", "font-size": "10px" }}>必須入帳號密碼</p>
        ) : (
          ""
        )}
        <button
          id={`login`}
          className="block w-fit px-3 py-2 mx-auto bg-orange-400 text-white rounded-lg"
          onClick={() => CheckForm(setacc, setpas)}
        >
          登入
        </button>
      </div>

      <div className="relative py-3">
        <div className="h-[1px] w-full bg-slate-500/30" />
        <p className="absolute inset-1/2 translate-y-[-50%] translate-x-[-50%] w-5 h-5">
          或
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <p>
          尚未擁有帳號?
          <Link to={"/auth/register"} className="text-orange-400">
            註冊
          </Link>
        </p>
      </div>
    </div>
  );
};
