var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBar = function (_React$Component) {
    _inherits(ToolBar, _React$Component);

    function ToolBar() {
        _classCallCheck(this, ToolBar);

        return _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).apply(this, arguments));
    }

    _createClass(ToolBar, [{
        key: "render_upper",
        value: function render_upper() {
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
        }
    }, {
        key: "render_lower",
        value: function render_lower() {
            return React.createElement(
                "div",
                { className: " lower_container" },
                React.createElement(
                    "div",
                    { className: "nav_container lower_main" },
                    React.createElement(
                        "div",
                        { className: "w-1/5" },
                        React.createElement("img", { src: "/static/img/logo2.png", alt: "" })
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
                            { className: "cart_link", href: "" },
                            React.createElement("img", { src: "/static/img/cart.svg", alt: "", className: "cart_icon" })
                        )
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "toolbar" },
                React.createElement(this.render_upper, null),
                React.createElement(this.render_lower, null)
            );
        }
    }]);

    return ToolBar;
}(React.Component);