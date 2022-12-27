var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CartLowerBar = function CartLowerBar() {
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
                    "\u8CFC\u7269\u8ECA"
                )
            ),
            React.createElement(
                "div",
                { className: "cart_search_bar" },
                React.createElement("input", { type: "text", name: "", id: "", className: "cart_search_input" }),
                React.createElement(
                    "button",
                    { className: "cart_search_btn" },
                    React.createElement("img", { src: "/static/img/search.svg", alt: "", className: "" })
                )
            )
        )
    );
};

var ContentTitle = function ContentTitle() {
    return React.createElement(
        "div",
        { className: "cart_title title" },
        React.createElement(
            "div",
            { className: "title_btn_area" },
            React.createElement("button", { className: 'title_btn' })
        ),
        React.createElement(
            "p",
            { className: "", style: { width: '45%' } },
            "\u5546\u54C1"
        ),
        ['單價', '數量', '總計', '操作'].map(function (i) {
            return React.createElement(
                "p",
                { className: "title_text", style: { width: i === '數量' ? '14%' : '12%' } },
                i
            );
        })
    );
};

var Order_title = function Order_title(_ref) {
    var shop_name = _ref.shop_name;

    return React.createElement(
        "div",
        { className: "order_title title" },
        React.createElement(
            "div",
            { className: 'title_btn_area' },
            React.createElement("button", { className: "title_btn" })
        ),
        React.createElement(
            "div",
            { className: "title_text" },
            React.createElement(
                "a",
                { href: "" },
                shop_name
            )
        )
    );
};

var Product = function Product(_ref2) {
    var item = _ref2.item;
    return React.createElement(
        "div",
        { className: "product_container" },
        React.createElement(
            "div",
            { className: "title_btn_area" },
            React.createElement("button", { className: 'title_btn' })
        ),
        React.createElement(
            "div",
            { className: "product_info_container" },
            React.createElement("div", { className: "product_img", style: { backgroundImage: "url(" + item.img + ")" } }),
            React.createElement(
                "p",
                null,
                item.name
            )
        ),
        React.createElement(
            "p",
            { className: "w-[12%] flex justify-center" },
            "$",
            item.origin
        ),
        React.createElement(
            "div",
            { className: "w-[14%] flex justify-center" },
            React.createElement(
                "div",
                { className: "product_number_container" },
                React.createElement(
                    "button",
                    { className: "product_number_btn" },
                    "-"
                ),
                React.createElement("input", { type: "text", className: "product_number", value: item.number }),
                React.createElement(
                    "button",
                    { className: "product_number_btn" },
                    "+"
                )
            )
        ),
        React.createElement(
            "p",
            { className: "w-[12%] flex justify-center" },
            "$",
            item.number * item.origin
        ),
        React.createElement(
            "div",
            { className: "w-[12%] flex justify-center" },
            React.createElement(
                "button",
                null,
                "X"
            )
        )
    );
};

var Order = function Order(_ref3) {
    var products = _ref3.products;

    var _React$useState = React.useState({}),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        orders = _React$useState2[0],
        setOrder = _React$useState2[1];

    React.useEffect(function () {
        var a = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                i = _step.value;

                var order_keys = Object.keys(a);
                if (order_keys.includes(i.shop.toString())) {
                    console.log(a[i.shop]);
                    a[i.shop].push(i);
                    console.log(a[i.shop]);
                } else {
                    a[i.shop] = [i];
                }
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

        setOrder(a);
    }, []);

    return React.createElement(
        "div",
        { className: "" },
        Object.entries(orders).map(function (order) {
            return React.createElement(
                "div",
                { className: "order_container" },
                React.createElement(Order_title, { shop_name: order[0] }),
                order[1].map(function (i) {
                    return React.createElement(Product, { item: i });
                })
            );
        })
    );
};

var Main = function Main() {
    var products = [{ no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 2 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 2 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 2 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', number: 1, origin: 123, shop: 1 }];

    return [React.createElement(
        "div",
        { className: "mb-8" },
        React.createElement(UpperBar, null),
        React.createElement(CartLowerBar, null)
    ), React.createElement(
        "div",
        { className: "main" },
        React.createElement(ContentTitle, null),
        React.createElement(Order, { products: products })
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));