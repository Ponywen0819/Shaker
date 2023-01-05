var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Selecter = function Selecter(_ref) {
    var now_on = _ref.now_on,
        onclick = _ref.onclick;

    var choise = ['全部', '待出貨', '運送中', '已完成'];
    return React.createElement(
        'div',
        { className: 'shipping_container mb-8 flex items-center' },
        choise.map(function (val, index) {
            return React.createElement(
                'button',
                { className: 'choise_btn ' + (index === now_on && 'choosen_btn'), onClick: function onClick() {
                        return onclick(index);
                    } },
                React.createElement(
                    'p',
                    null,
                    val
                )
            );
        })
    );
};

var Item = function Item(_ref2) {
    var item = _ref2.item;

    var shipping_state = ['待出貨', '運送中', '已完成'];
    var payment_state = ['貨到付款', '信用卡', '轉帳'];
    console.log(item);
    return React.createElement(
        'div',
        { className: 'flex list_title mb-3 items-center' },
        React.createElement(
            'div',
            { className: 'flex flex-col w-[50%]' },
            item.products.map(function (i) {
                return React.createElement(
                    'div',
                    { className: 'flex mb-2' },
                    React.createElement('div', { className: 'item_img', style: { backgroundImage: 'url(' + i.photo.slice(1) + ')' } }),
                    React.createElement(
                        'p',
                        { className: '' },
                        i.name
                    )
                );
            })
        ),
        React.createElement(
            'p',
            { className: 'w-[15%] text-center text-sm text-gray-500' },
            shipping_state[item.status]
        ),
        React.createElement(
            'p',
            { className: 'w-[15%] text-center text-sm text-gray-500' },
            payment_state[item.payment]
        ),
        React.createElement(
            'p',
            { className: 'w-[20%] text-right text-xl text-[#fc753e]' },
            '$' + item.price
        )
    );
};

var ItemList = function ItemList(_ref3) {
    var item_list = _ref3.item_list,
        now_on = _ref3.now_on;

    var render_list = function render_list() {
        var list = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = item_list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                if (now_on === 0 || item.status === now_on) {
                    list.push(React.createElement(Item, { item: item }));
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

        if (list.length === 0) {
            return React.createElement(
                'div',
                { className: 'h-36 flex justify-center items-center' },
                React.createElement(
                    'p',
                    { className: 'text-2xl font-extrabold ' },
                    '\u5C1A\u7121\u8CC7\u6599'
                )
            );
        } else {
            return list;
        }
    };

    return React.createElement(
        'div',
        { className: 'shipping_container mb-8 px-6 py-3' },
        React.createElement(
            'div',
            { className: 'flex list_title mb-3' },
            React.createElement(
                'p',
                { className: 'w-[50%]' },
                '\u5546\u54C1'
            ),
            React.createElement(
                'p',
                { className: 'w-[15%] text-center' },
                '\u72C0\u614B'
            ),
            React.createElement(
                'p',
                { className: 'w-[15%] text-center' },
                '\u4ED8\u6B3E\u65B9\u5F0F'
            ),
            React.createElement(
                'p',
                { className: 'w-[20%] text-right' },
                '\u91D1\u984D'
            )
        ),
        render_list()
    );
};

var ShiipingArea = function ShiipingArea() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        now_on = _React$useState4[0],
        setContent = _React$useState4[1];

    React.useEffect(function () {
        fetch('/product/GetShopOrders', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setItems(data.data);
            }
        });
    }, []);

    return React.createElement(
        'div',
        { className: 'w-1/2 grow' },
        React.createElement(Selecter, { now_on: now_on, onclick: setContent }),
        React.createElement(ItemList, { item_list: items, now_on: now_on })
    );
};

var Main = function Main() {
    return React.createElement(
        'div',
        null,
        React.createElement(SellerBar, null),
        React.createElement(
            'div',
            { className: 'flex' },
            React.createElement(Sidebar, null),
            React.createElement(ShiipingArea, null)
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));