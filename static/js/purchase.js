var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var SelectionItem = function SelectionItem(_ref) {
    var typename = _ref.typename,
        activate = _ref.activate,
        onclick = _ref.onclick;

    return React.createElement(
        'button',
        { className: 'section_btn ' + (activate ? 'selection_btn_on' : ''), onClick: function onClick() {
                return onclick(typename);
            } },
        React.createElement(
            'p',
            null,
            typename
        )
    );
};

var Selection = function Selection(_ref2) {
    var items = _ref2.items,
        state = _ref2.state,
        handleClick = _ref2.handleClick;
    return React.createElement(
        'div',
        { className: 'section' },
        items.map(function (i) {
            return React.createElement(SelectionItem, { typename: i, activate: state === i, onclick: handleClick });
        })
    );
};

var Item = function Item(_ref3) {
    var name = _ref3.name,
        img = _ref3.img,
        num = _ref3.num,
        price = _ref3.price;
    return React.createElement(
        'div',
        { className: 'item' },
        React.createElement(
            'div',
            { className: 'item_info' },
            React.createElement('div', { className: 'item_img', style: { 'backgroundImage': 'url(' + img + ')' } }),
            React.createElement(
                'div',
                { className: 'item_text' },
                React.createElement(
                    'p',
                    { className: 'item_name' },
                    name
                ),
                React.createElement(
                    'p',
                    { className: 'item_num' },
                    ' ',
                    'x ' + num
                )
            )
        ),
        React.createElement(
            'p',
            { className: 'item_price' },
            '$' + price * num
        )
    );
};

var ItemList = function ItemList(_ref4) {
    var state = _ref4.state,
        price = _ref4.price,
        products = _ref4.products,
        start = _ref4.start,
        end = _ref4.end;

    var stateName = ['已成立', '運送中', '已完成'];

    console.log(products);
    return React.createElement(
        'div',
        { className: 'order' },
        React.createElement(
            'div',
            { className: 'order_nav' },
            React.createElement(
                'p',
                { className: 'order_nav_title' },
                stateName[state]
            )
        ),
        React.createElement('div', { className: '' }),
        products !== undefined && products.map(function (p) {
            return React.createElement(Item, { name: p.name, img: p.photo.slice(1), price: p.price, num: p.number });
        }),
        React.createElement(
            'div',
            { className: 'order_tail' },
            React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    { className: 'order_time' },
                    'start time : ' + start.getFullYear() + '/' + (start.getMonth() + 1) + '/' + start.getDate()
                ),
                end > new Date() ? React.createElement(
                    'p',
                    { className: 'order_time' },
                    'end time : ' + end.getFullYear() + '/' + (end.getMonth() + 1) + '/' + end.getDate() + ' (maybe)'
                ) : React.createElement(
                    'p',
                    { className: 'order_time' },
                    'end time : ' + end.getFullYear() + '/' + (end.getMonth() + 1) + '/' + end.getDate() + ' '
                )
            ),
            React.createElement(
                'div',
                { className: 'order_price_area' },
                React.createElement(
                    'p',
                    null,
                    '\u8A02\u55AE\u91D1\u984D:'
                ),
                React.createElement(
                    'p',
                    { className: 'order_price' },
                    '$',
                    price
                )
            )
        )
    );
};

var Interface = function Interface() {
    var _React$useState = React.useState("全部"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        orders = _React$useState4[0],
        setOrders = _React$useState4[1];

    var handleClick = function handleClick(i) {
        setState(i);
    };

    React.useEffect(function () {
        fetch('/product/GetOrderList', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setOrders(data.data);
            }
        });
    }, []);

    return React.createElement(
        'div',
        { className: 'interface' },
        React.createElement(Selection, { items: ["全部", '已成立', '運送中', '已完成'], state: state,
            handleClick: handleClick }),
        orders.map(function (i) {
            var showing = ["全部", '已成立', '運送中', '已完成'].indexOf(state) - 1;
            if (showing < 0 || showing === i.status) return React.createElement(ItemList, { state: i.status, price: i.price, products: i.products,
                start: new Date(i.start_time), end: new Date(i.end_time) });
        })
    );
};

var Main = function Main() {
    return [React.createElement(ToolBar, null), React.createElement(
        'div',
        { className: 'main_area' },
        React.createElement(UserInfo, null),
        React.createElement(Interface, null)
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));