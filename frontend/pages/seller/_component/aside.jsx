import React from "react";
import { Link } from "react-router-dom";
import "@/css/Sidebar.css";

const Section = ({ title, href, subtitles }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="sidebar-menu-item mb-5 !flex-col">
      <div
        className={`flex w-[100%] items-center`}
        onClick={() => setOpen(!isOpen)}
      >
        <img
          src="https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511"
          className="sidebar-menu-item-icon"
        ></img>
        {subtitles.length === 0 ? (
          <Link className="grow" to={href}>
            {title}
          </Link>
        ) : (
          <span className="grow">{title}</span>
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
              <Link className={`sidebar-submenu-item-link`} to={i.href}>
                {i.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const Sidebar = () => {
  const titles = [
    {
      title: "訂單中心",
      href: "/seller/shipping",
      subtitles: [],
    },
    {
      title: "商品管理",
      subtitles: [
        { title: "我的商品", href: "/seller/product/list" },
        { title: "新增商品", href: "/seller/product/add" },
      ],
    },
    // {
    //   title: "行銷活動",
    //   href: "/seller/finance",
    //   subtitles: [],
    // },
  ];

  return (
    <ul className="shadow-sm w-64 bg-white p-3">
      {titles.map((title) => (
        <Section
          title={title.title}
          href={title.href}
          subtitles={title.subtitles}
        ></Section>
      ))}
    </ul>
  );
};
