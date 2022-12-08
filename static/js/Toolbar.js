var UpperBar = function UpperBar() {
    return React.createElement(
        "div",
        { className: "upper_container" },
        React.createElement(
            "div",
            { className: "upper_main nav_container" },
            React.createElement(
                "div",
                { className: "w-1/5 upper_selction" },
                React.createElement(
                    "div",
                    { className: "upper_nobar" },
                    React.createElement(
                        "a",
                        { className: "Toolbat_text", href: "" },
                        "\u8CE3\u5BB6\u4E2D\u5FC3"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "w-1/5 upper_selction justify-end" },
                React.createElement(
                    "div",
                    { className: "upper_nobar" },
                    React.createElement(
                        "a",
                        { className: "Toolbat_text", href: "/register" },
                        "\u8A3B\u518A"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "upper_bar" },
                    React.createElement(
                        "a",
                        { className: "Toolbat_text", href: "/login" },
                        "\u767B\u5165"
                    )
                )
            )
        )
    );
};

var LowerBar = function LowerBar() {
    return React.createElement(
        "div",
        { className: " lower_container" },
        React.createElement(
            "div",
            { className: "nav_container lower_main" },
            React.createElement(
                "a",
                { className: "w-1/5 lower_img_area", href: "/" },
                React.createElement("img", { className: "lower_img", src: "/static/img/logobar_orange.png", alt: "" })
            ),
            React.createElement(
                "div",
                { className: "search_bar" },
                React.createElement("input", { type: "text", name: "", id: "", className: "search_text" }),
                React.createElement(
                    "button",
                    { className: "search_btn" },
                    React.createElement("img", { src: "/static/img/search.svg", alt: "", className: "" })
                )
            ),
            React.createElement(
                "div",
                { className: "cart_aera" },
                React.createElement(
                    "a",
                    { className: "cart_link", href: "/cart" },
                    React.createElement("img", { src: "/static/img/cart.svg", alt: "", className: "cart_icon" })
                )
            )
        )
    );
};

var ToolBar = function ToolBar() {
    return React.createElement(
        "nav",
        null,
        React.createElement(UpperBar, null),
        React.createElement(LowerBar, null)
    );
};