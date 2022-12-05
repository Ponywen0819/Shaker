var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Render_logo() {
    return React.createElement(
        "a",
        { href: "/index", className: "logo_area" },
        React.createElement("img", { src: "/static/img/logo2.png", alt: "" })
    );
}

function MainInterface() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    function toState(forward) {
        if (forward) {
            setState(state >= 1 ? state : state + 1);
        } else {
            setState(state <= 0 ? state : state - 1);
        }
    }

    function showInterface() {
        if (state == 0) {
            return [React.createElement("input", { className: "input_bar p-2", type: "email", name: "", id: "", placeholder: "E-mail" }), React.createElement(
                "button",
                { className: "btn login_btn", onClick: function onClick() {
                        return toState(true);
                    } },
                "\u4E0B\u4E00\u6B65"
            )];
        } else {
            var content = [React.createElement("input", { className: "input_bar p-2", type: "email", name: "", id: "", placeholder: "E-mail" }), React.createElement("input", { className: "input_bar p-2", type: "email", name: "", id: "", placeholder: "Password" }), React.createElement(
                "button",
                { className: "btn login_btn", onClick: function onClick() {
                        return toState(false);
                    } },
                "\u4E0A\u4E00\u6B65"
            ), React.createElement(
                "button",
                { className: "btn login_btn" },
                "\u8A3B\u518A"
            )];
            return content;
        }
    }

    var main = React.createElement(
        "div",
        { className: "main_area" },
        React.createElement(
            "div",
            { className: "interface_area" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { className: "text-2xl font-bold" },
                    "\u8A3B\u518A"
                )
            ),
            showInterface(),
            React.createElement(
                "div",
                { className: "or_area" },
                React.createElement("div", { className: "or_bar" }),
                React.createElement(
                    "div",
                    null,
                    "\u6216"
                ),
                React.createElement("div", { className: "or_bar" })
            ),
            React.createElement(
                "button",
                { className: "btn auth_btn" },
                React.createElement("img", { src: "/static/img/google_logo.svg", alt: "", className: "sm_logo" }),
                "Google"
            ),
            React.createElement(
                "button",
                { className: "btn auth_btn" },
                React.createElement("img", { src: "/static/img/github_black.svg", alt: "", className: "sm_logo" }),
                "Github"
            ),
            React.createElement(
                "div",
                { className: "flex justify-center flex-col" },
                React.createElement(
                    "p",
                    null,
                    "\u5DF2\u7D93\u6709\u5E33\u865F\u4E86\u55CE?"
                ),
                React.createElement(
                    "a",
                    { className: "text-[cadetblue]", href: "/login" },
                    "\u767B\u5165"
                )
            )
        )
    );
    return [main, Render_logo()];
}

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(MainInterface, null));
// ReactDOM.render(<MainInterface />, document.getElementById("main"));