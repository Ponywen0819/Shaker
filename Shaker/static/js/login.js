var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function renderToolBar() {
    var main = React.createElement(
        "a",
        { className: "logo_area", href: "/" },
        "\u767B\u5165LOGO"
    );
    return main;
}

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {
            var main = React.createElement(
                "div",
                { className: "main_area" },
                React.createElement(
                    "div",
                    { className: "login_area" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h1",
                            { className: "text-2xl font-bold" },
                            "\u767B\u5165"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "text_area" },
                        React.createElement(
                            "div",
                            { className: "input_area" },
                            React.createElement(
                                "p",
                                null,
                                "\u5E33\u865F"
                            ),
                            React.createElement("input", { className: "input_main", type: "email", name: "", id: "" })
                        ),
                        React.createElement(
                            "div",
                            { className: "input_area" },
                            React.createElement(
                                "p",
                                null,
                                "\u5BC6\u78BC"
                            ),
                            React.createElement("input", { className: "input_main", type: "password", name: "", id: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "help_area" },
                        React.createElement(
                            "a",
                            { className: "help_text", href: "" },
                            "\u5FD8\u8A18\u5BC6\u78BC"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "btn_area" },
                        React.createElement(
                            "button",
                            { className: "login_btn bg-orange-500" },
                            "\u767B\u5165"
                        )
                    ),
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
                    React.createElement("div", null),
                    React.createElement(
                        "div",
                        { className: "flex justify-center" },
                        React.createElement(
                            "p",
                            null,
                            "\u5C1A\u672A\u64C1\u6709\u5E33\u865F?"
                        ),
                        React.createElement(
                            "a",
                            { className: "text-[cadetblue]", href: "" },
                            "\u8A3B\u518A"
                        )
                    )
                )
            );

            return [renderToolBar(), main];
        }
    }]);

    return Login;
}(React.Component);

var mont = ReactDOM.createRoot(document.getElementById("main"));
mont.render(React.createElement(Login, null));