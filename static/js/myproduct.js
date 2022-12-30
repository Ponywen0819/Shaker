var Item = function Item() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement("div", null),
            React.createElement("p", null)
        )
    );
};

var Itemlist = function Itemlist() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "flex" },
            React.createElement(
                "p",
                null,
                "\u5546\u54C1\u540D\u7A31"
            ),
            React.createElement(
                "p",
                null,
                "\u50F9\u683C"
            ),
            React.createElement(
                "p",
                null,
                "\u5546\u54C1\u6578\u91CF"
            ),
            React.createElement(
                "p",
                null,
                "\u64CD\u4F5C"
            )
        )
    );
};

var Main = function Main() {
    return React.createElement(
        "div",
        null,
        React.createElement(SellerBar, null),
        React.createElement(
            "div",
            { className: "flex" },
            React.createElement(Sidebar, null),
            React.createElement(From, null)
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));