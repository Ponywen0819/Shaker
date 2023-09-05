import React from "react";
import { SuccessNotify, FailNotify } from "@/components/notification.js";

export const Component = () => {
  const [img, setImg] = React.useState("");
  const [name, setName] = React.useState("");
  const [choosen, setChoosen] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [price, setPrice] = React.useState("");
  const [num, setNum] = React.useState("");
  const [intro, setIntro] = React.useState("");

  const triggerImageChange = () => {
    console.log("qw12");
    let file_input = document.createElement("input");
    file_input.type = "file";
    file_input.accept = "image/*";
    file_input.onchange = (e) => {
      console.log("qwe");
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (readerEvent) => {
        let content = readerEvent.target.result;
        setImg(content);
      };
    };
    console.log("q12112");
    file_input.click();
  };

  const handle_change = (event, setter) => {
    const element = event.target;
    setter(element.value);
  };

  const handle_number = (event, setter) => {
    let value = event.target.value;
    if (value !== "0") {
      value = value.replace(/[^0-9]/, "");
      setter(value.replace(/\b(0+)/gi, ""));
    }
  };

  const triggerImageUpload = (status) => {
    if (img === "") {
      FailNotify("請上傳商品圖片");
      return;
    }
    if (name === "") {
      FailNotify("請輸入商品名稱");
      return;
    }
    if (choosen === "") {
      FailNotify("請選擇商品類別");
      return;
    }
    if (price === "") {
      FailNotify("請輸入商品價格");
      return;
    }
    if (num === "") {
      FailNotify("請輸入商品數量");
      return;
    }

    fetch("/api/product/UploadProduct", {
      body: JSON.stringify({
        photo: img,
        name: name,
        category: choosen,
        price: parseInt(price),
        number: parseInt(num),
        intro: intro,
        status: status,
      }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          FailNotify("新增商品失敗");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause !== 0) {
          FailNotify("新增商品出現錯誤");
        } else {
          setIntro("");
          setName("");
          setChoosen("");
          setNum("");
          setPrice("");
          setImg("");
          SuccessNotify("新增商品成功");
        }
      });
  };

  React.useEffect(() => {
    fetch("/api/product/GetAllCategory", {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        setOptions(data);
      });
    // setOptions(['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店'])
  }, []);

  return (
    <div className="grow mt-5">
      <div
        className={`mx-auto w-[800px] bg-white shadow-sm rounded-lg grow p-3`}
      >
        <h1 className={`text-xl font-bold`}>新增商品</h1>
        <div className="h-[1px] w-full bg-gray-300 my-3" />
        <div className={`flex flex-col px-10`}>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品照片</p>
            {img === "" ? (
              <button
                className={`w-24 h-24 object-cover  object-center  border-2 border-dashed border-gray-300 text-gray-300 text-sm`}
                onClick={triggerImageChange}
              >
                設定商品照片
              </button>
            ) : (
              <div className={`flex flex-col gap-2`}>
                <img className={`w-24 h-24 object-cover `} src={img}></img>
                <button
                  className={`rounded-lg bg-orange-500 text-white px-2 py-1`}
                  onClick={triggerImageChange}
                >
                  設定商品照片
                </button>
              </div>
            )}
          </div>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品價格</p>
            <input
              className={`grow h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
              type={`number`}
              value={price}
              placeholder={`在這裡輸入商品價格`}
              onInput={(e) => handle_number(e, setPrice)}
            />
          </div>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品數量</p>
            <input
              className={`grow h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
              type={`number`}
              value={num}
              placeholder={`在這裡輸入商品數量`}
              onInput={(e) => handle_number(e, setNum)}
            />
          </div>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品名稱</p>
            <input
              className={`grow h-8 border-2 border-gray-300 rounded-lg px-2 py-1`}
              type={`text`}
              value={name}
              placeholder={`在這裡新增商品名稱`}
              onInput={(e) => handle_change(e, setName)}
            />
          </div>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品類別</p>
            <select
              className="h-8 border-2 border-gray-300 rounded-lg px-2 py-1 text-gray-500"
              value={choosen}
              onInput={(e) => handle_change(e, setChoosen)}
            >
              <option value="" disabled selected>
                選擇商品類別
              </option>
              {options.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className={`flex mb-3`}>
            <p className={`w-[20%]`}>商品敘述</p>
            <textarea
              className={`grow h-32 border-2 border-gray-300 rounded-lg px-2 py-1 text-gray-500`}
              value={intro}
              placeholder={`在這裡新增商品敘述`}
              onInput={(e) => handle_change(e, setIntro)}
            />
          </div>
          <div className={`flex justify-end gap-3`}>
            <button
              className={`rounded-lg bg-orange-500 text-white px-2 py-1`}
              onClick={() => triggerImageUpload(0)}
            >
              新增商品並下架
            </button>
            <button
              className={`rounded-lg bg-orange-500 text-white px-2 py-1`}
              onClick={() => triggerImageUpload(1)}
            >
              新增商品並上架
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
