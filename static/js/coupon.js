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
            return React.createElement(SelectionItem, { typename: i, activate: state == i, onclick: handleClick });
        })
    );
};

var Item = function Item(_ref3) {
    var type = _ref3.type,
        end = _ref3.end,
        min = _ref3.min,
        discount = _ref3.discount;
    return React.createElement(
        'div',
        { className: 'item' },
        React.createElement(
            'div',
            { className: 'item_info' },
            React.createElement(
                'div',
                { className: 'item_head ' + (type == 0 ? 'item_head_all' : 'item_head_shop') },
                type == 0 ? '蟹殼折價' : '商場折價'
            ),
            React.createElement(
                'div',
                { className: 'item_text_area' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        { className: 'item_name' },
                        discount < 1 ? '\u6253' + discount * 10 + '\u6298' : '\u6298$' + discount
                    ),
                    React.createElement(
                        'p',
                        { className: 'item_num' },
                        ' ',
                        '\u4F4E\u6D88$' + min
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    '\u4F7F\u7528\u671F\u9650 ' + end
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

    var handleClick = function handleClick(i) {
        setState(i);
    };

    var items = [{
        "type": 0, // 優惠券的種類
        "start": '22-08-19', // 優惠券開始時間
        "end": '23-05-28', // 優惠券到期時間
        "min": 288, // 優惠券適用條件
        "discount": 0.8 // 大於1就是單純折價，小數點則是百分比
    }, {
        "type": 1, // 優惠券的種類
        "start": '22-08-19', // 優惠券開始時間
        "end": '23-05-28', // 優惠券到期時間
        "min": 288, // 優惠券適用條件
        "discount": 0.9 // 大於1就是單純折價，小數點則是百分比
    }, {
        "type": 0, // 優惠券的種類
        "start": '22-08-19', // 優惠券開始時間
        "end": '23-05-28', // 優惠券到期時間
        "min": 288, // 優惠券適用條件
        "discount": 200 // 大於1就是單純折價，小數點則是百分比
    }];

    return React.createElement(
        'div',
        { className: 'interface' },
        React.createElement(Selection, { items: ["全部", '蟹殼折價券', '商場折價券'], state: state, handleClick: handleClick }),
        React.createElement(
            'div',
            { className: 'display_area' },
            items.map(function (i) {
                var showing = ["全部", '蟹殼折價券', '商場折價券'].indexOf(state) - 1;
                if (showing < 0 || showing == i.type) return React.createElement(Item, { type: i.type, end: i.end, min: i.min, discount: i.discount });
            })
        )
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