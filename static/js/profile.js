var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var InputList = function InputList(_ref) {
    var info = _ref.info;

    var translate = { name: "使用者名稱", email: "電子郵件", phone: "電話號碼" };
    var list = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(info)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref2 = _step.value;

            var _ref3 = _slicedToArray(_ref2, 2);

            var title = _ref3[0];
            var value = _ref3[1];

            if (title == "img") continue;
            var row = React.createElement(
                "div",
                { className: "form_line" },
                React.createElement(
                    "p",
                    { className: "form_title" },
                    translate[title]
                ),
                React.createElement("input", { className: "form_input", type: "text", value: value, name: title })
            );
            list.push(row);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return list;
};

var Interface = function Interface() {
    var _React$useState = React.useState({
        name: "PonyWen",
        email: "pony076152340@gmail.com",
        phone: "0916781375",
        img: "/static/img/logo1.png"
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        userinfo = _React$useState2[0],
        setinfo = _React$useState2[1];

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
                "form",
                { className: "form" },
                React.createElement(InputList, { info: userinfo }),
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
            ),
            React.createElement(
                "div",
                { className: "img_form" },
                React.createElement(
                    "div",
                    { className: "img_form_container" },
                    React.createElement("img", { className: "from_img", src: userinfo.img }),
                    React.createElement(
                        "div",
                        { className: "img_form_btn_area" },
                        React.createElement(
                            "button",
                            { className: "img_form_btn" },
                            "\u66F4\u6539\u7167\u7247"
                        )
                    ),
                    React.createElement(
                        "p",
                        { className: "img_form_text" },
                        "\u6211\u53EA\u5403png :P"
                    )
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