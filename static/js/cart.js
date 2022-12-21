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
            { className: "", style: { width: '35%' } },
            "\u5546\u54C1"
        ),
        ['單價', '數量', '總計', '操作'].map(function (i) {
            return React.createElement(
                "p",
                { className: "title_text", style: { width: '15%' } },
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

var Product = function Product() {
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
            { className: "", style: { width: '35%' } },
            "\u5546\u54C1"
        ),
        ['單價', '數量', '總計', '操作'].map(function (i) {
            return React.createElement(
                "p",
                { className: "title_text", style: { width: '15%' } },
                i
            );
        })
    );
};

var Order = function Order(_ref2) {
    var products = _ref2.products;

    return React.createElement(
        Order_title,
        { shop_name: "\u6211\u8D85\u68D2" },
        products.map(function (i) {
            return React.createElement(Product, null);
        })
    );
};

var Main = function Main() {
    return [React.createElement(
        "div",
        { className: "mb-8" },
        React.createElement(UpperBar, null),
        React.createElement(CartLowerBar, null)
    ), React.createElement(
        "div",
        { className: "main" },
        React.createElement(ContentTitle, null),
        React.createElement(Order, { products: [] })
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));