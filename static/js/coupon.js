var Interface = function Interface() {};

var Main = function Main() {
    return [React.createElement(ToolBar, null), React.createElement(
        "div",
        { className: "main_area" },
        React.createElement(UserInfo, null),
        React.createElement(Interface, null)
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));