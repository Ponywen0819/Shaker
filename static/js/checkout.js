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
        { className: "title  !h-28" },
        React.createElement(
            "div",
            { className: "w-[60%] flex gap-2" },
            React.createElement("div", { className: "product_img bg_img", style: { backgroundImage: "url(" + (img == null ? '/static/img/logo1.png' : img.slice(1)) + ")" } }),
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
                { className: "w-[60%] text-xl font-extrabold" },
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
            return React.createElement(OrderRow, { name: i.name, img: i.photo, num: i.count, price: i.price });
        })
    );
};

var Summarize = function Summarize(_ref3) {
    var infos = _ref3.infos,
        onclick = _ref3.onclick;

    var end = 0;
    Object.entries(infos).map(function (i) {
        end += i[1];
    });

    return React.createElement(
        "div",
        { className: "title !h-fit flex justify-end p-5" },
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
                    { className: "create_order_btn", onClick: onclick },
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

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        couponlist = _React$useState6[0],
        setList = _React$useState6[1];

    var _React$useState7 = React.useState(''),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        coupon = _React$useState8[0],
        setcoupon = _React$useState8[1];

    var _React$useState9 = React.useState({ "商品總金額：": 0, "運費總金額": 60 }),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        info = _React$useState10[0],
        setInfo = _React$useState10[1];

    var _React$useState11 = React.useState(''),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        payment = _React$useState12[0],
        setPay = _React$useState12[1];

    var _React$useState13 = React.useState(''),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        addr = _React$useState14[0],
        setAddr = _React$useState14[1];

    var coupon_change = function coupon_change(e) {
        var index = parseInt(e.target.value);
        setcoupon(e.target.value);
        var chosen = couponlist[index];
        console.log(chosen);
        if (chosen.discount_type === 0) {
            setInfo({
                "商品總金額：": total,
                "運費總金額": 60,
                "運費折抵": -60
            });
        } else if (chosen.discount_type === 1) {
            setInfo({
                "商品總金額：": total,
                "優惠券折價: ": -parseInt(total * (1 - parseInt(chosen.discount) / 100)),
                "運費總金額": 60
            });
        } else {
            setInfo({
                "商品總金額：": total,
                "優惠券折價: ": -parseInt(chosen.discount),
                "運費總金額": 60
            });
        }
    };

    var handle_upload = function handle_upload() {
        var data = {};
        data.product = OrderItem;
        data.address = addr;
        data.payment = payment;
        if (coupon !== '') {
            data.coupon_id = couponlist[coupon].id;
        }
        fetch('/product/CreateOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                SuccessNotify('上船訂單成功').then(function () {
                    location.href = '/';
                });
            } else {
                FailNotify('上船訂單發生錯誤');
            }
        });
    };

    React.useEffect(function () {
        var value = "; " + document.cookie;
        var parts = value.split("; orders=");
        console.log(parts);
        var product_ids = '';
        if (parts.length === 2) {
            product_ids = parts.pop().split(';').shift();
        }

        fetch('/product/GetCartProducctsById', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: product_ids
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                console.log(data.data);
                setItem(data.data);
                var temp = 0;
                data.data.map(function (i) {
                    temp += i.price * i.count;
                });
                setTotal(temp);
                info['商品總金額'] = temp;
                setInfo(info);
                return data.data;
            }
        }).then(function (data) {
            fetch('/coupon/GetCoupons', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    shop_id: data[0].shop_id
                })
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
            }).then(function (data) {
                console.log(data);
                setList(data);
            });
        });
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
            React.createElement(
                "div",
                { className: "title h-20 justify-end mb-5" },
                React.createElement(
                    "select",
                    { value: coupon, className: "new_name_input w-full px-5 py-1", onInput: coupon_change },
                    React.createElement(
                        "option",
                        { value: "", disabled: true, selected: true },
                        "\u8ACB\u9078\u64C7\u512A\u60E0\u5377"
                    ),
                    couponlist.map(function (c, i) {
                        return React.createElement(
                            "option",
                            { value: i },
                            c.name
                        );
                    })
                )
            ),
            React.createElement(
                "div",
                { className: "title h-20 justify-end mb-5" },
                React.createElement(
                    "select",
                    { value: payment, className: "new_name_input w-full px-5 py-1", onInput: function onInput(e) {
                            return setPay(e.target.value);
                        } },
                    React.createElement(
                        "option",
                        { value: "", disabled: true, selected: true },
                        "\u8ACB\u9078\u64C7\u4ED8\u6B3E\u65B9\u5F0F"
                    ),
                    React.createElement(
                        "option",
                        { value: "0" },
                        "\u8CA8\u5230\u4ED8\u6B3E"
                    ),
                    React.createElement(
                        "option",
                        { value: "1" },
                        "\u4FE1\u7528\u5361"
                    ),
                    React.createElement(
                        "option",
                        { value: "2" },
                        "ATM\u8F49\u5E33"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "title h-20 justify-end mb-5" },
                React.createElement("input", { className: "new_name_input w-full px-5 py-1", value: addr, onInput: function onInput(e) {
                        return setAddr(e.target.value);
                    }, placeholder: "\u8ACB\u8F38\u5165\u5730\u5740" })
            ),
            React.createElement(Summarize, { infos: info, onclick: handle_upload })
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));