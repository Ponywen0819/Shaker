import React from "react";
import { SuccessNotify, FailNotify } from "@/components/notification.js";
import { useNavigate } from "react-router-dom";

const UserInput = ({ type, orgin, change, title }) => {
  const [val, setval] = React.useState("");

  const handle_number_input = (e) => {
    setval(e.target.value.replace(/[^0-9]/, ""));
    change(e.target.name, e.target.value.replace(/[^0-9]/, ""));
  };

  const handle_text_input = (e) => {
    setval(e.target.value);
    change(e.target.name, e.target.value);
  };

  React.useEffect(() => {
    setval(orgin);
  }, [orgin]);

  return (
    <div className="form_line">
      <p className="text-gray-500">{title}</p>
      <input
        className="px-2 py-1 border-2 border-gray-300 rounded-lg w-full"
        name={title}
        type={type}
        value={val}
        onInput={title !== "phone" ? handle_text_input : handle_number_input}
      />
    </div>
  );
};

const UserImgInput = ({ orgin }) => {
  const [img, setImg] = React.useState("");
  const [img_change, setChange] = React.useState(false);

  const triggerImageChange = () => {
    let file_input = document.createElement("input");
    file_input.type = "file";
    file_input.accept = "image/*";
    file_input.onchange = (e) => {
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (readerEvent) => {
        let content = readerEvent.target.result;
        console.log(content);
        setImg(content);
      };
    };
    file_input.click();
  };

  const triggerImageUpload = () => {
    fetch("/api/account/ChangeProfile", {
      body: JSON.stringify({ photo: img }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          FailNotify("上傳圖片出現錯誤");
        }
      })
      .then((data) => {
        if (data.cause !== 0) {
          FailNotify("上傳圖片出現錯誤");
        } else {
          SuccessNotify("圖片上傳成功").then(
            () => (location.href = location.href)
          );
        }
      });
  };

  React.useEffect(() => {
    if (img === "") {
      setImg(orgin);
    }
    if (orgin !== img) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [orgin, img]);

  return (
    <div className="flex flex-col gap-3 max-w-[150px] mx-auto">
      <img
        className="w-36 h-36 rounded-full object-cover bg-white border-[1px] "
        src={img}
      ></img>
      <div className="flex justify-center">
        {img_change ? (
          <>
            <button
              className="text-white bg-orange-500 rounded-lg py-1 px-2 block mx-auto"
              onClick={triggerImageUpload}
            >
              確認修改
            </button>
            <button
              className="text-gray-400 bg-white border-gray-400 border-2  box-border rounded-lg py-1 px-2 block mx-auto"
              onClick={() => setImg(orgin)}
            >
              取消
            </button>
          </>
        ) : (
          <div>
            <button
              className="text-white bg-orange-500 rounded-lg py-1 px-2 block mx-auto"
              onClick={triggerImageChange}
            >
              更改照片
            </button>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 text-center">我只吃png :P</p>
    </div>
  );
};

export const Component = () => {
  const [userinfo, setInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    photo: "",
    file_path: "",
  });
  const navigate = useNavigate();

  const [user_img, setImg] = React.useState("");

  const [change, setChange] = React.useState({});

  React.useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch("/api/account/GetUserDetail", {
      body: JSON.stringify({
        require: ["photo", "name", "email", "phone", "file_path"],
      }),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          FailNotify("請先登入").then(() => navigate("/auth/login"));
        }
      })
      .then((data) => {
        if (data.cause === 0) {
          setInfo({
            name: data.name,
            email: data.email,
            phone: data.phone,
            photo: data.file_path,
          });
          setImg(
            data.file_path == null
              ? "/static/img/logo1.png"
              : `${data.file_path.slice(1)}`
          );
        } else {
          FailNotify("請先登入").then(() => navigate("/auth/login"));
        }
      });
  };

  const handle_change = (name, val) => {
    change[name] = val;
    // console.log(name, change)
    setChange(change);
  };

  const handle_upload = () => {
    let need2upload = false;
    for (const i of Object.entries(change)) {
      if (userinfo[i[0]] !== i[1]) {
        need2upload = true;
      }
    }
    if (need2upload) {
      fetch("/api/account/ChangeProfile", {
        body: JSON.stringify(change),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            FailNotify("資訊更新出現錯誤").then(() => {
              getInfo();
            });
          }
        })
        .then((data) => {
          console.log(data);
          if (data.cause !== 0) {
            FailNotify("資訊更新出現錯誤").then(() => {
              getInfo();
            });
          } else {
            SuccessNotify("資料更新成功").then(() => {
              getInfo();
            });
          }
        });
    } else {
      SuccessNotify("資料並未變動");
    }
  };

  const name2type = { name: "text", email: "email", phone: "text" };

  return (
    <div className="bg-white w-[800px] mx-auto p-3 rounded-lg shadow-sm h-fit">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">在此修改你的個人資料</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-3"></div>
      <div className="flex gap-3">
        <div className=" grow flex flex-col gap-3">
          {Object.entries(userinfo).map((i) => {
            // console.log(i[1])
            if (i[0] !== "photo") {
              return (
                <UserInput
                  orgin={i[1]}
                  type={name2type[i[0]]}
                  title={i[0]}
                  change={handle_change}
                ></UserInput>
              );
            }
          })}
          <div className="flex">
            <button
              className="text-white bg-orange-500 rounded-lg py-1 px-2 block mx-auto"
              onClick={handle_upload}
            >
              確認變更
            </button>
          </div>
        </div>
        <div className="w-[1px] bg-gray-300" />
        <div className="w-48">
          <UserImgInput orgin={user_img}></UserImgInput>
        </div>
      </div>
    </div>
  );
};
