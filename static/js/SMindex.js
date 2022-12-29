var Main = function Main() {
    return [React.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", height: "100vh" } },
        React.createElement(Nav, null),
        React.createElement(
            "div",
            { className: "mainContext flex-1" },
            React.createElement(Sidebar, null),
            React.createElement(SMContext, null)
        )
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));