import React from "react";
import forge from "node-forge";
import { SuccessNotify, FailNotify } from "@/components/notification.js";
import { Link } from "react-router-dom";

const handle_register = () => {
  fetch("/api/account/PublicKey", {
    method: "GET",
  })
    .then(function (respone) {
      if (respone.status === 200) {
        return respone.text();
      }
    })
    .then(function (data) {
      var public_key = forge.pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文
      let encode_password = forge.util.encode64(
        public_key.encrypt(
          forge.util.encodeUtf8(document.getElementById(`password`).value),
          "RSA-OAEP",
          { md: forge.md.sha256.create(), mgf1: { md: forge.md.sha1.create() } }
        )
      );

      fetch("/api/account/Register", {
        method: "POST",
        body: JSON.stringify({
          name: document.getElementById(`name`).value,
          account_id: document.getElementById(`account`).value,
          email: document.getElementById(`email`).value,
          phone: document.getElementById(`phone`).value,
          password: encode_password,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (respons) {
          if (respons.status === 200) {
            return respons.json();
          }
        })
        .then(function (json) {
          if (json.cause === 0) {
            SuccessNotify("註冊成功").then(() => {
              location.href = "/";
              console.log("success");
            });
          } else {
            // 登入失敗通知
            FailNotify("註冊出現錯誤");
            console.log(json.cause);
          }
        });
    });
};

const check_input = () => {
  const p_1 = document.getElementById(`password`).value;
  const p_2 = document.getElementById(`check`).value;

  if (p_1 === p_2) {
    handle_register();
  } else {
    document.getElementById(`check`).style = "border: 1px solid red";
    console.log("local");
  }
};

const handle_number_input = (e, setter) => {
  setter(e.target.value.replace(/[^0-9]/, ""));
};

const handle_text_input = (e, setter) => {
  setter(e.target.value);
};

const InputBox = ({ name, type, show, onInput }) => {
  const [val, setVal] = React.useState("");

  return (
    <input
      className="px-2 py-1 w-full"
      id={name}
      type={type}
      placeholder={show}
      onInput={(e) => onInput(e, setVal)}
      value={val}
      style={{ border: `1px solid gray` }}
    />
  );
};

const Registeform = () => {
  let FormSetting = [
    { name: "name", title: `Name`, type: "text", onInput: handle_text_input },
    {
      name: "account",
      title: `Account ID`,
      type: "text",
      onInput: handle_text_input,
    },
    { name: "email", title: `Email`, type: "text", onInput: handle_text_input },
    {
      name: "phone",
      title: `Phone`,
      type: "text",
      onInput: handle_number_input,
    },
    {
      name: "password",
      title: `Password`,
      type: "password",
      onInput: handle_text_input,
    },
    {
      name: "check",
      title: `Check Password`,
      type: "password",
      onInput: handle_text_input,
    },
  ];

  return (
    <form className={`flex flex-col gap-3`} id={`form`}>
      {FormSetting.map((i) => (
        <div>
          <p>{i.title}</p>
          <InputBox
            name={i.name}
            show={i.title}
            type={i.type}
            onInput={i.onInput}
          />
        </div>
      ))}
      <input
        name={"submit"}
        type={`button`}
        className="block w-fit px-3 py-2 mx-auto bg-orange-400 text-white rounded-lg"
        value={`註冊`}
        onClick={check_input}
      />
    </form>
  );
};

export const Component = () => (
  <div className="bg-white rounded-lg w-80 h-fit p-2 flex flex-col gap-3">
    <div>
      <h1 className="text-2xl font-bold">註冊</h1>
    </div>
    <Registeform />
    <div className="relative py-3">
      <div className="h-[1px] w-full bg-slate-500/30" />
      <p className="absolute inset-1/2 translate-y-[-50%] translate-x-[-50%] w-5 h-5">
        或
      </p>
    </div>
    <div className=" flex flex-col justify-center items-center">
      <p>
        已擁有帳號?
        <Link to={"/auth/login"} className="text-orange-400">
          登入
        </Link>
      </p>
    </div>
  </div>
);
