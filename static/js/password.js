var Interface = function Interface() {
    return React.createElement(
        "div",
        { className: "intercafe" },
        React.createElement(
            "div",
            { className: "interface_title" },
            React.createElement(
                "p",
                { className: "" },
                "\u5728\u6B64\u4FEE\u6539\u4F60\u7684\u500B\u4EBA\u8CC7\u6599"
            )
        ),
        React.createElement(
            "div",
            { className: "input_area" },
            React.createElement(
                "div",
                { className: "form_line" },
                React.createElement(
                    "p",
                    { className: "form_title" },
                    "\u820A\u5BC6\u78BC"
                ),
                React.createElement("input", { className: "form_input", type: "password" })
            ),
            React.createElement(
                "div",
                { className: "form_line" },
                React.createElement(
                    "p",
                    { className: "form_title" },
                    "\u65B0\u5BC6\u78BC"
                ),
                React.createElement("input", { className: "form_input", type: "password" })
            ),
            React.createElement(
                "div",
                { className: "form_line" },
                React.createElement(
                    "p",
                    { className: "form_title" },
                    "\u518D\u6B21\u8F38\u5165\u820A\u5BC6\u78BC"
                ),
                React.createElement("input", { className: "form_input", type: "password" })
            ),
            React.createElement(
                "div",
                { className: "form_submit" },
                React.createElement("p", { className: "form_title" }),
                React.createElement(
                    "button",
                    { className: "form_btn" },
                    "\u78BA\u8A8D\u8B8A\u66F4"
                )
            )
        )
    );
};

var Main = function Main() {
    return [React.createElement(ToolBar, null), React.createElement(
        "div",
        { className: "main_area" },
        React.createElement(UserInfo, null),
        React.createElement(Interface, null)
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));