var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ContentType = function ContentType(_ref) {
    var Type = _ref.Type,
        _onClick = _ref.onClick;

    var types = ['全部', '未上架', '上架商品'];

    return React.createElement(
        'div',
        { className: 'flex bg-white mb-8' },
        types.map(function (type, i) {
            return React.createElement(
                'button',
                { className: 'choise_btn ' + (i === Type ? 'choosen_btn' : ''), onClick: function onClick() {
                        return _onClick(i);
                    } },
                React.createElement(
                    'span',
                    null,
                    type
                )
            );
        })
    );
};

var Item = function Item(_ref2) {
    var item = _ref2.item;

    var handle_change = function handle_change(col, val) {
        var upload_data = Object.assign({}, item);
        upload_data[col] = val;
        console.log(upload_data);
        fetch('/product/ModifyProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upload_data)
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                location.href = location.href;
            }
        });
    };
    return React.createElement(
        'div',
        { className: 'flex list_title mb-3 items-center' },
        React.createElement(
            'div',
            { className: 'flex flex-col w-[50%]' },
            React.createElement(
                'div',
                { className: 'flex mb-2' },
                React.createElement('div', { className: 'item_img', style: { backgroundImage: 'url(' + item.file_path.slice(1) + ')' } }),
                React.createElement(
                    'div',
                    { className: 'flex flex-col' },
                    item.status === 0 ? React.createElement(
                        'div',
                        { className: 'bg-gray-500/[0.4] p-0.5 rounded-lg' },
                        React.createElement(
                            'span',
                            { className: 'text-gray-600 text-xs' },
                            '\u672A\u4E0A\u67B6'
                        )
                    ) : '',
                    React.createElement(
                        'span',
                        { className: '' },
                        item.name
                    )
                )
            )
        ),
        React.createElement(
            'p',
            { className: 'w-[15%] text-center text-sm text-gray-500' },
            item.price
        ),
        React.createElement(
            'p',
            { className: 'w-[15%] text-center text-sm text-gray-500' },
            item.number === 0 ? '已售完' : item.number
        ),
        React.createElement(
            'div',
            { className: 'flex justify-center grow' },
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return handle_change('status', item.status === 0 ? 1 : 0);
                    }, className: 'rounded-lg ' + (item.status === 0 ? "bg-orange-400 text-white" : "text-orange-400 border-orange-400 border border-solid") + ' w-28 h-10 font-semibold' },
                item.status === 0 ? '上架' : '下架'
            )
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

                if (now_on === 0 || item.status === now_on - 1) {
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
                '\u5546\u54C1\u540D\u7A31'
            ),
            React.createElement(
                'p',
                { className: 'w-[15%] text-center' },
                '\u50F9\u683C'
            ),
            React.createElement(
                'p',
                { className: 'w-[15%] text-center' },
                '\u6578\u91CF'
            ),
            React.createElement(
                'p',
                { className: 'w-[20%] text-center' },
                '\u64CD\u4F5C'
            )
        ),
        render_list()
    );
};

var MainContent = function MainContent() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        type = _React$useState2[0],
        setType = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        products = _React$useState4[0],
        setProduct = _React$useState4[1];

    React.useEffect(function () {
        fetch('/product/GetProductFromShop', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setProduct(data.data);
            }
        });
    }, []);

    return React.createElement(
        'div',
        { className: 'grow w-1/2 mt-5' },
        React.createElement(
            'div',
            { className: 'max-w-3xl mx-auto py-3' },
            React.createElement(ContentType, { Type: type, onClick: setType }),
            React.createElement(ItemList, { item_list: products, now_on: type })
        )
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
            React.createElement(MainContent, null)
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));