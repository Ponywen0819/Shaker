import React from "react";
import { SuccessNotify } from "@/components/notification.js";
const handle_text_change = (element, setter) => {
  setter(element.value);
};

export const Component = () => {
  const [old_pass, setOld] = React.useState("");
  const [new_pass, setNew] = React.useState("");
  const [check, setCheck] = React.useState("");

  const handle_update = () => {
    if (new_pass === check) {
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
          fetch("/api/account/ChangePassword", {
            method: "POST",
            body: JSON.stringify({
              old: forge.util.encode64(
                public_key.encrypt(
                  forge.util.encodeUtf8(old_pass),
                  "RSA-OAEP",
                  {
                    md: forge.md.sha256.create(),
                    mgf1: { md: forge.md.sha1.create() },
                  }
                )
              ),
              new: forge.util.encode64(
                public_key.encrypt(
                  forge.util.encodeUtf8(new_pass),
                  "RSA-OAEP",
                  {
                    md: forge.md.sha256.create(),
                    mgf1: { md: forge.md.sha1.create() },
                  }
                )
              ),
            }),
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              } else {
                FailNotify("密碼更新發生錯誤");
              }
            })
            .then((data) => {
              if (data.cause === 0) {
                SuccessNotify("密碼更新成功").then(
                  () => (location.href = location.href)
                );
              } else {
                FailNotify("密碼更新發生錯誤");
              }
            });
        });
    } else {
    }
  };

  return (
    <div className="bg-white w-[800px] mx-auto p-3 rounded-lg shadow-sm h-fit">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">在此修改你的密碼</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-3"></div>
      <div className="flex flex-col gap-3">
        <div className="form_line">
          <p className="text-gray-500">舊密碼</p>
          <input
            className="px-2 py-1 border-2 border-gray-300 rounded-lg w-full"
            type="password"
            onInput={(e) => handle_text_change(e.target, setOld)}
            value={old_pass}
          />
        </div>
        <div className="form_line">
          <p className="text-gray-500">新密碼</p>
          <input
            className="px-2 py-1 border-2 border-gray-300 rounded-lg w-full"
            type="password"
            onInput={(e) => handle_text_change(e.target, setNew)}
            value={new_pass}
          />
        </div>
        <div className="form_line">
          <p className="text-gray-500">再次輸入舊密碼</p>
          <input
            className="px-2 py-1 border-2 border-gray-300 rounded-lg w-full"
            type="password"
            onInput={(e) => handle_text_change(e.target, setCheck)}
            value={check}
          />
        </div>
        <button
          className="text-white bg-orange-500 rounded-lg py-1 px-2 block mx-auto"
          onClick={handle_update}
        >
          確認變更
        </button>
      </div>
    </div>
  );
};
