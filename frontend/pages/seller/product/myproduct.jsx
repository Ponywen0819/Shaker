import React from "react";

const ContentType = ({ Type, onClick }) => {
  const types = ["全部", "未上架", "上架商品"];

  return (
    <div className={`flex bg-white mb-8 `}>
      {types.map((type, i) => (
        <button
          className={`w-24 h-12 box-border border-b-2 border-white ${
            i === Type ? "text-orange-500 border-orange-500" : ""
          }`}
          onClick={() => onClick(i)}
        >
          <span>{type}</span>
        </button>
      ))}
    </div>
  );
};

const Item = ({ item }) => {
  const handle_change = (col, val) => {
    let upload_data = { ...item };
    upload_data[col] = val;
    console.log(upload_data);
    fetch("/api/product/ModifyProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upload_data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          location.href = location.href;
        }
      });
  };
  return (
    <div className={`flex list_title mb-3 items-center`}>
      <div className={`flex flex-col w-[50%]`}>
        <div className={`flex mb-2`}>
          <img
            src={`${item.file_path.slice(1)}`}
            className="w-24 h-24 object-cover mr-3"
          />
          <div className={`flex flex-col`}>
            {item.status === 0 ? (
              <div className={`bg-gray-200 p-0.5 rounded-lg`}>
                <span className={`text-gray-500 text-xs`}>未上架</span>
              </div>
            ) : (
              ""
            )}
            <span className={``}>{item.name}</span>
          </div>
        </div>
      </div>
      <p className={`w-[15%] text-center text-sm text-gray-500`}>
        {item.price}
      </p>
      <p className={`w-[15%] text-center text-sm text-gray-500`}>
        {item.number === 0 ? "已售完" : item.number}
      </p>
      <div className={`flex justify-center grow`}>
        <button
          onClick={() => handle_change("status", item.status === 0 ? 1 : 0)}
          className={`rounded-lg ${
            item.status === 0
              ? "bg-orange-400 text-white"
              : "text-orange-400 border-orange-400 border border-solid"
          } w-28 h-10 font-semibold`}
        >
          {item.status === 0 ? "上架" : "下架"}
        </button>
      </div>
    </div>
  );
};

const ItemList = ({ item_list, now_on }) => {
  const render_list = () => {
    let list = [];
    for (const item of item_list) {
      if (now_on === 0 || item.status === now_on - 1) {
        list.push(<Item item={item}></Item>);
      }
    }

    if (list.length === 0) {
      return (
        <div className={`h-36 flex justify-center items-center`}>
          <p className={`text-2xl font-extrabold `}>尚無資料</p>
        </div>
      );
    } else {
      return list;
    }
  };

  return (
    <div className={`bg-white shadow-md mb-8 px-6 py-3`}>
      <div className={`flex border-b-[1px] border-gray-300 mb-3`}>
        <p className={`w-[50%]`}>商品名稱</p>
        <p className={`w-[15%] text-center`}>價格</p>
        <p className={`w-[15%] text-center`}>數量</p>
        <p className={`w-[20%] text-center`}>操作</p>
      </div>
      {render_list()}
    </div>
  );
};

export const Component = () => {
  const [type, setType] = React.useState(0);
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/product/GetProductFromShop", {
      method: "POST",
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.cause === 0) {
          setProduct(data.data);
        }
      });
  }, []);

  return (
    <div className={`grow mt-5`}>
      <div className={`max-w-3xl mx-auto py-3`}>
        <ContentType Type={type} onClick={setType}></ContentType>
        <ItemList item_list={products} now_on={type}></ItemList>
      </div>
    </div>
  );
};
