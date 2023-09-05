import React from "react";

export const Component = () => {
  React.useEffect(() => {
    fetch("/admin/getAdminInfo", {
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

  return (
    <div>
      <h1>首頁的拉</h1>
    </div>
  );
};
