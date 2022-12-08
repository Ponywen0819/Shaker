var CartLowerBar = function CartLowerBar() {
    return React.createElement(
        "div",
        { className: " cart_lower" },
        React.createElement(
            "div",
            { className: "cart_lower_container" },
            React.createElement(
                "a",
                { className: "w-1/5 lower_img_area", href: "/" },
                React.createElement("img", { className: "lower_img", src: "/static/img/logobar_white.png", alt: "" })
            ),
            React.createElement(
                "div",
                { className: "cart_search_bar" },
                React.createElement("input", { type: "text", name: "", id: "", className: "cart_search_input" }),
                React.createElement(
                    "button",
                    { className: "search_btn" },
                    React.createElement("img", { src: "/static/img/search.svg", alt: "", className: "" })
                )
            )
        )
    );
};

var Main = function Main() {
    return [React.createElement(
        "nav",
        null,
        React.createElement(UpperBar, null),
        React.createElement(CartLowerBar, null)
    ), React.createElement("div", { className: "main_area" })];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));