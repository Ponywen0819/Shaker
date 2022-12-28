var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CheckBar = function CheckBar() {
    return React.createElement(
        "div",
        { className: " cart_lower" },
        React.createElement(
            "div",
            { className: "cart_lower_container" },
            React.createElement(
                "a",
                { className: "w-2/5 cart_lower_img_area", href: "/" },
                React.createElement("img", { className: "cart_lower_img", src: "/static/img/logobar_white.png", alt: "" }),
                React.createElement(
                    "p",
                    { className: "cart_logo_text" },
                    "\u7D50\u5E33"
                )
            )
        )
    );
};

var OrderRow = function OrderRow(_ref) {
    var img = _ref.img,
        name = _ref.name,
        price = _ref.price,
        num = _ref.num;

    return React.createElement(
        "div",
        { className: "title  !h-20" },
        React.createElement(
            "div",
            { className: "w-[60%]" },
            React.createElement("div", null),
            React.createElement(
                "p",
                null,
                name
            )
        ),
        React.createElement(
            "p",
            { className: "w-[10%] text-center" },
            "$" + price
        ),
        React.createElement(
            "p",
            { className: "w-[10%] text-center" },
            num
        ),
        React.createElement(
            "p",
            { className: "w-[20%] text-right" },
            "$" + num * price
        )
    );
};

var OrderArea = function OrderArea(_ref2) {
    var items = _ref2.items;

    return React.createElement(
        "div",
        { className: "order_container" },
        React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "p",
                { className: "w-[60%]" },
                "\u8A02\u55AE\u5167\u5BB9"
            ),
            ['單價', '數量'].map(function (i) {
                return React.createElement(
                    "p",
                    { className: "w-[10%] text-center" },
                    i
                );
            }),
            React.createElement(
                "p",
                { className: "w-[20%] text-right" },
                "\u7E3D\u50F9"
            )
        ),
        items.map(function (i) {
            return React.createElement(OrderRow, { name: i.name, img: i.img, num: i.num, price: i.price });
        })
    );
};

var CouponArea = function CouponArea() {
    return React.createElement(
        "div",
        { className: "title h-20 justify-end mb-5" },
        React.createElement(
            "p",
            { className: "pr-5" },
            "\u5C1A\u672A\u9078\u64C7\u512A\u60E0\u5238"
        ),
        React.createElement(
            "button",
            null,
            "\u9078\u64C7\u512A\u60E0\u5238"
        )
    );
};

var Summarize = function Summarize(_ref3) {
    var infos = _ref3.infos;

    var end = 0;
    Object.entries(infos).map(function (i) {
        end += i[1];
    });

    return React.createElement(
        "div",
        { className: "title !h-fit flex justify-end" },
        React.createElement(
            "div",
            { className: "w-[20%]" },
            React.createElement(
                "div",
                { className: "" },
                Object.entries(infos).map(function (info) {
                    if (info[1] !== 0) {
                        return React.createElement(
                            "div",
                            { className: "flex by-10 justify-between" },
                            React.createElement(
                                "p",
                                null,
                                info[0]
                            ),
                            React.createElement(
                                "p",
                                null,
                                "$" + info[1]
                            )
                        );
                    }
                }),
                React.createElement(
                    "div",
                    { className: "flex by-10 justify-between" },
                    React.createElement(
                        "p",
                        null,
                        "\u7E3D\u91D1\u984D"
                    ),
                    React.createElement(
                        "p",
                        null,
                        end
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "flex justify-end" },
                React.createElement(
                    "button",
                    { className: "create_order_btn" },
                    "\u4E0B\u8A02\u55AE"
                )
            )
        )
    );
};

var Main = function Main() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        OrderItem = _React$useState2[0],
        setItem = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        total = _React$useState4[0],
        setTotal = _React$useState4[1];

    React.useEffect(function () {
        var data = [{ name: '123', img: '/static/img/logo1.png', price: 100, num: 2 }, { name: '123', img: '/static/img/logo1.png', price: 300, num: 1 }, { name: '123', img: '/static/img/logo1.png', price: 400, num: 2 }, { name: '123', img: '/static/img/logo1.png', price: 500, num: 2 }, { name: '123', img: '/static/img/logo1.png', price: 600, num: 2 }, { name: '123', img: '/static/img/logo1.png', price: 100, num: 2 }, { name: '123', img: '/static/img/logo1.png', price: 10, num: 2 }];
        setItem(data);
        var temp = 0;
        data.map(function (i) {
            temp += i.price * i.num;
        });
        setTotal(temp);
    }, []);

    return React.createElement(
        "div",
        null,
        React.createElement(UpperBar, null),
        React.createElement(CheckBar, null),
        React.createElement(
            "div",
            { className: "main mb-10" },
            React.createElement(OrderArea, { items: OrderItem }),
            React.createElement(CouponArea, null),
            React.createElement(Summarize, { infos: { "商品總金額：": total, "運費總金額": 60, "折價券折扣": -20, "運費折扣": -60 } })
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));