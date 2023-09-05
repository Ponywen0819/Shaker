const SellerBar = () => {
  const [accInfoIsTouched, setaccIsTouched] = React.useState(false);

  function pullDownMenu() {
    setaccIsTouched(!accInfoIsTouched);
  }

  return (
    <div className="nav-container">
      <div className="nav-content">
        <a href="/" className="nav-logo">
          <img src="/static/img/logo2.png"></img>
        </a>
        <div
          className="nav-logo-content"
          onMouseEnter={accInfoIsTouched ? pullDownMenu : ""}
        >
          <a href="/sellercenter/index" className="nav-text">
            {" "}
            賣家中心
          </a>
        </div>
        <div style={{ position: "relative" }}>
          <div className="pop-over">
            <div className="pop-over _ref">
              <div className="account-info-box">
                <div className="account-info" onClick={pullDownMenu}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII="
                    className="account-avatar"
                  ></img>
                  <span className="account-name">account name</span>
                </div>
              </div>
            </div>
            <div
              className="pulldown-container"
              style={{ display: `${accInfoIsTouched ? "block" : "none"}` }}
            >
              <div className="menu" onMouseLeave={pullDownMenu}>
                <ul>
                  <li className="account-dropdown-item">
                    <span className="pull-down-menu text">賣場中心</span>
                  </li>
                </ul>

                <ul>
                  <li className="account-dropdown-item">
                    <span className="pull-down-menu text">登出</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, href, subtitles }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="sidebar-menu-item mb-5 !flex-col">
      <div className={`flex w-[100%]`} onClick={() => setOpen(!isOpen)}>
        <img
          src="https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511"
          className="sidebar-menu-item-icon"
        ></img>
        {subtitles.length === 0 ? (
          <a className="sidebar-menu-item-text grow" href={href}>
            {title}
          </a>
        ) : (
          <span className="sidebar-menu-item-text grow">{title}</span>
        )}
        {subtitles.length !== 0 && (
          <i
            className={`sidebar-menu-item-icon shopee-icon sidebar-menu-item-collapse`}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
            </svg>
          </i>
        )}
      </div>
      <ul className={`sidebar-submenu`}>
        {isOpen &&
          subtitles.map((i) => (
            <li className={`sidebar-submenu-item`}>
              <a className={`sidebar-submenu-item-link`} href={i.href}>
                {i.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const titles = [
    {
      title: "訂單中心",
      href: "/sellercenter/shipping",
      subtitles: [],
    },
    {
      title: "商品管理",
      subtitles: [
        { title: "我的商品", href: "/sellercenter/myproduct" },
        { title: "新增商品", href: "/sellercenter/newproduct" },
      ],
    },
    {
      title: "行銷活動",
      href: "/sellercenter/marketing",
      subtitles: [],
    },
  ];

  return (
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        {titles.map((title) => (
          <Section
            title={title.title}
            href={title.href}
            subtitles={title.subtitles}
          ></Section>
        ))}
      </ul>
    </div>
  );
};
