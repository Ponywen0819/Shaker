var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var From = function From() {
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        img = _React$useState2[0],
        setImg = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        name = _React$useState4[0],
        setName = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        options = _React$useState6[0],
        setOptions = _React$useState6[1];

    var _React$useState7 = React.useState(''),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        intro = _React$useState8[0],
        setIntro = _React$useState8[1];

    React.useEffect(function () {
        setOptions(['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店']);
    }, []);

    return React.createElement(
        'div',
        { className: 'shipping_container grow px-10 py-3' },
        React.createElement(
            'p',
            { className: 'interface_title' },
            '\u65B0\u589E\u5546\u54C1'
        ),
        React.createElement(
            'form',
            { className: 'flex flex-col px-10' },
            React.createElement(
                'div',
                { className: 'flex mb-3' },
                React.createElement(
                    'p',
                    { className: 'w-[20%]' },
                    '\u5546\u54C1\u7167\u7247'
                ),
                img === '' ? React.createElement(
                    'button',
                    { className: 'new_img new_img_notact' },
                    '\u8A2D\u5B9A\u5546\u54C1\u7167\u7247'
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement('div', { className: 'new_img', style: { backgroundImage: 'url(' + img + ')' } }),
                    React.createElement(
                        'button',
                        { className: 'new_btn' },
                        '\u8A2D\u5B9A\u5546\u54C1\u7167\u7247'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'flex mb-3' },
                React.createElement(
                    'p',
                    { className: 'w-[20%]' },
                    '\u5546\u54C1\u540D\u7A31'
                ),
                React.createElement('input', { className: 'new_name_input', type: 'text', value: name, placeholder: '\u5728\u9019\u88E1\u65B0\u589E\u5546\u54C1\u540D\u7A31' })
            ),
            React.createElement(
                'div',
                { className: 'flex mb-3' },
                React.createElement(
                    'p',
                    { className: 'w-[20%]' },
                    '\u5546\u54C1\u985E\u5225'
                ),
                React.createElement(
                    'select',
                    { className: 'new_name_input' },
                    React.createElement(
                        'option',
                        { value: '', disabled: true, selected: true },
                        '\u9078\u64C7\u5546\u54C1\u985E\u5225'
                    ),
                    options.map(function (option) {
                        return React.createElement(
                            'option',
                            { value: option },
                            option
                        );
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'flex mb-3' },
                React.createElement(
                    'p',
                    { className: 'w-[20%]' },
                    '\u5546\u54C1\u6558\u8FF0'
                ),
                React.createElement('textarea', { className: 'new_intro_input', value: intro, placeholder: '\u5728\u9019\u88E1\u65B0\u589E\u5546\u54C1\u6558\u8FF0' })
            ),
            React.createElement(
                'div',
                { className: 'flex justify-end' },
                React.createElement(
                    'button',
                    { className: 'new_btn' },
                    '\u65B0\u589E\u5546\u54C1\u4E26\u4E0B\u67B6'
                ),
                React.createElement(
                    'button',
                    { className: 'new_btn' },
                    '\u65B0\u589E\u5546\u54C1\u4E26\u4E0A\u67B6'
                )
            )
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
            React.createElement(From, null)
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));