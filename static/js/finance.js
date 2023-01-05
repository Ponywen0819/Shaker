var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Coupon = function Coupon(_ref) {
    var info = _ref.info;

    var start = new Date(info.start_time);
    var end = new Date(info.end_time);
    return React.createElement(
        'div',
        { className: 'item' },
        React.createElement(
            'div',
            { className: 'item_info' },
            React.createElement(
                'div',
                { className: 'item_head item_head_shop' },
                info.discount_type === 1 ? '季節折扣' : '特殊折扣'
            ),
            React.createElement(
                'div',
                { className: 'item_text_area' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        info.name
                    ),
                    info.discount_type === 1 ? React.createElement(
                        'p',
                        { className: 'item_name' },
                        '\u6253' + info.discount + '\u6298'
                    ) : [React.createElement(
                        'p',
                        { className: 'item_name' },
                        '\u6298$' + info.discount
                    ), React.createElement(
                        'p',
                        { className: 'item_num' },
                        ' ',
                        '\u4F4E\u6D88$' + info.minimum_consumption
                    )]
                ),
                React.createElement(
                    'p',
                    null,
                    '\u4F7F\u7528\u671F\u9650 ' + end.getFullYear() + '/' + (end.getMonth() + 1) + '/' + end.getDate()
                )
            )
        )
    );
};
var Main = function Main() {
    // 用於新增優惠券使用
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        coupon_type = _React$useState2[0],
        setType = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        coupon_name = _React$useState4[0],
        setName = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        fix_discount = _React$useState6[0],
        setFix = _React$useState6[1];

    var _React$useState7 = React.useState(''),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        per_discount = _React$useState8[0],
        setPer = _React$useState8[1];

    var _React$useState9 = React.useState(''),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        min = _React$useState10[0],
        setMin = _React$useState10[1];
    // 紀錄現有優惠券


    var _React$useState11 = React.useState([]),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        coupons = _React$useState12[0],
        setCoupons = _React$useState12[1];

    var handle_number = function handle_number(event, setter) {
        var value = event.target.value;
        if (value !== '0') {
            value = value.replace(/[^0-9]/, '');
            setter(value.replace(/\b(0+)/gi, ''));
        }
    };

    var create_coupon = function create_coupon() {
        var upload_data = {};
        if (coupon_name === '') {
            FailNotify('請輸入名稱');
            return;
        }
        upload_data.name = coupon_name;
        if (coupon_type === '') {
            FailNotify('請輸入優惠券種類');
            return;
        }
        upload_data.discount_type = parseInt(coupon_type);
        if (coupon_type === '1') {
            if (per_discount === '') {
                FailNotify('請輸入折價折數');
                return;
            }
            upload_data.discount = per_discount;
        } else {
            if (min === '') {
                FailNotify('請輸入最低消費金額');
                return;
            }
            upload_data.minimum_consumption = min;
            if (fix_discount === '') {
                FailNotify('請輸入折扣金額');
                return;
            }
            upload_data.discount = fix_discount;
        }

        fetch('/coupon/PublishShopCoupon', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upload_data)
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            } else {
                FailNotify('新增優惠券失敗');
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                SuccessNotify('新增優惠券成功');
                setType('');
                setName('');
                setFix('');
                setPer('');
                setMin('');
                get_coupons();
            } else {
                FailNotify('新增優惠券失敗');
            }
        });
    };

    var get_coupons = function get_coupons() {
        fetch('/coupon/GetShopCoupons', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                setCoupons(data.data);
            }
        });
    };

    React.useEffect(function () {
        get_coupons();
    }, []);

    return React.createElement(
        'div',
        null,
        React.createElement(SellerBar, null),
        React.createElement(
            'div',
            { className: 'flex' },
            React.createElement(Sidebar, null),
            React.createElement(
                'div',
                { className: 'shipping_container grow px-10 py-3' },
                React.createElement(
                    'p',
                    { className: 'interface_title' },
                    '\u65B0\u589E\u512A\u60E0\u5238'
                ),
                React.createElement(
                    'div',
                    { className: 'flex px-10 flex-wrap' },
                    React.createElement(
                        'div',
                        { className: 'w-1/2 p-3' },
                        React.createElement(
                            'p',
                            null,
                            '\u6298\u50F9\u5238\u540D\u7A31'
                        ),
                        React.createElement('input', { type: 'text', className: 'new_name_input w-full', value: coupon_name,
                            placeholder: '\u8ACB\u8F38\u5165\u512A\u60E0\u5238\u540D\u7A31', onInput: function onInput(e) {
                                return setName(e.target.value);
                            } })
                    ),
                    React.createElement(
                        'div',
                        { className: 'w-1/2 p-3' },
                        React.createElement(
                            'p',
                            null,
                            '\u6298\u50F9\u5238\u7A2E\u985E'
                        ),
                        React.createElement(
                            'select',
                            { value: coupon_type, className: 'new_name_input w-full',
                                onInput: function onInput(e) {
                                    return setType(e.target.value);
                                } },
                            React.createElement(
                                'option',
                                { value: '', disabled: true, selected: true },
                                '\u9078\u64C7\u6298\u50F9\u5238\u985E\u5225'
                            ),
                            React.createElement(
                                'option',
                                { value: '1' },
                                '\u5B63\u7BC0\u6298\u6263'
                            ),
                            React.createElement(
                                'option',
                                { value: '2' },
                                '\u7279\u6B8A\u6298\u6263'
                            )
                        )
                    ),
                    coupon_type === '1' ? React.createElement(
                        'div',
                        { className: 'w-1/2 p-3' },
                        React.createElement(
                            'p',
                            null,
                            '\u6253\u6298\u6298\u6578'
                        ),
                        React.createElement('input', { value: per_discount, className: 'new_name_input w-full',
                            onInput: function onInput(e) {
                                return handle_number(e, setPer);
                            }, placeholder: '\u8ACB\u8F38\u5165\u6253\u6298\u6298\u6578' })
                    ) : [React.createElement(
                        'div',
                        { className: 'w-1/2 p-3' },
                        React.createElement(
                            'p',
                            null,
                            '\u6700\u4F4E\u6D88\u8CBB'
                        ),
                        React.createElement('input', { type: 'text', value: min, className: 'new_name_input w-full',
                            onInput: function onInput(e) {
                                return handle_number(e, setMin);
                            },
                            placeholder: '\u8ACB\u8F38\u5165\u6700\u4F4E\u6D88\u8CBB\u91D1\u984D' })
                    ), React.createElement(
                        'div',
                        { className: 'w-1/2 p-3' },
                        React.createElement(
                            'p',
                            null,
                            '\u6298\u50F9\u91D1\u984D'
                        ),
                        React.createElement('input', { value: fix_discount, className: 'new_name_input w-full',
                            onInput: function onInput(e) {
                                return handle_number(e, setFix);
                            }, placeholder: '\u8ACB\u8F38\u5165\u6298\u50F9\u91D1\u984D' })
                    )]
                ),
                React.createElement(
                    'div',
                    { className: 'flex justify-end px-10' },
                    React.createElement(
                        'button',
                        { className: 'new_btn !h-8 !w-30', onClick: create_coupon },
                        '\u65B0\u589E\u512A\u60E0\u5238'
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'interface_title' },
                    '\u767C\u884C\u512A\u60E0\u5238'
                ),
                coupons.length === 0 ? React.createElement(
                    'div',
                    { className: 'h-36 flex justify-center items-center' },
                    React.createElement(
                        'p',
                        {
                            className: 'text-2xl font-extrabold ' },
                        '\u73FE\u7121\u767C\u884C\u4E4B\u512A\u60E0\u5238'
                    )
                ) : coupons.map(function (coupon) {
                    return React.createElement(Coupon, { info: coupon });
                })
            )
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));