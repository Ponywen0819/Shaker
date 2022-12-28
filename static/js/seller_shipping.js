var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Selecter = function Selecter(_ref) {
    var now_on = _ref.now_on;

    var choise = ['全部', '待出貨', '運送中', '已完成'];
    return React.createElement(
        'div',
        { className: 'shipping_container mb-8 flex items-center' },
        choise.map(function (i) {
            return React.createElement(
                'button',
                { className: 'choise_btn ' + (i === choise[now_on] && 'choosen_btn') },
                React.createElement(
                    'p',
                    null,
                    i
                )
            );
        })
    );
};

var Item = function Item(_ref2) {
    var item = _ref2.item;

    var shipping_state = ['待出貨', '運送中', '已完成'];
    var payment_state = ['貨到付款', '信用卡', '轉帳'];

    return React.createElement(
        'div',
        { className: 'flex list_title mb-3 items-center' },
        React.createElement(
            'div',
            { className: 'flex flex-col w-[50%]' },
            item.items.map(function (item) {
                return React.createElement(
                    'div',
                    { className: 'flex mb-2  ' },
                    React.createElement('div', { className: 'item_img', style: { backgroundImage: 'url(' + item.img + ')' } }),
                    React.createElement(
                        'p',
                        { className: '' },
                        item.name
                    )
                );
            })
        ),
        React.createElement(
            'p',
            { className: 'w-[15%] text-center text-sm text-gray-500' },
            shipping_state[item.state]
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
    var item_list = _ref3.item_list;

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
        item_list.map(function (item) {
            return React.createElement(Item, { item: item });
        })
    );
};

var ShiipingArea = function ShiipingArea() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    React.useEffect(function () {
        setItems([{ items: [{ img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 0, state: 1 }, { items: [{ img: '/static/img/logo1.png', name: '12' }, { img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 1, state: 2 }, { items: [{ img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 2, state: 0 }, { items: [{ img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 2, state: 1 }, { items: [{ img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 1, state: 2 }, { items: [{ img: '/static/img/logo1.png', name: '12' }], price: 100, payment: 0, state: 0 }]);
    });

    return React.createElement(
        'div',
        { className: 'w-1/2 grow' },
        React.createElement(Selecter, { now_on: 1 }),
        React.createElement(ItemList, { item_list: items })
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