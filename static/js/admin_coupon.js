var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Coupon = function Coupon() {
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        name = _React$useState2[0],
        setName = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        number = _React$useState4[0],
        setNumber = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        coupons = _React$useState6[0],
        setCoupon = _React$useState6[1];

    var handle_upload = function handle_upload() {
        if (name === '' || number === '') return FailNotify('資料不可為空');
        fetch('/coupon/PublishFreeCarCoupon', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                minimum_consumption: number
            })
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            } else {
                FailNotify('新增優惠券失敗');
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                SuccessNotify('新增優惠券成功').then(function () {
                    location.href = location.href;
                });
            } else {
                FailNotify('新增優惠券失敗');
            }
        });
    };

    var render_coupon = function render_coupon() {
        return coupons.map(function (coupon) {
            var end = new Date(coupon.end_time);
            return React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'div',
                    { className: 'item_info' },
                    React.createElement(
                        'div',
                        { className: 'item_head item_head_shop' },
                        '\u514D\u904B\u8CBB'
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
                                coupon.name
                            ),
                            React.createElement(
                                'p',
                                { className: 'item_name' },
                                '\u514D\u904B\u8CBB'
                            ),
                            React.createElement(
                                'p',
                                { className: 'item_num' },
                                ' ',
                                '\u4F4E\u6D88$' + coupon.minimum_consumption
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u4F7F\u7528\u671F\u9650 ' + end.getFullYear() + '/' + (end.getMonth() + 1) + '/' + end.getDate()
                        )
                    )
                )
            );
        });
    };

    React.useEffect(function () {
        fetch('/coupon/GetAdminCoupons', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                setCoupon(data.data);
            }
        });
    }, []);

    return React.createElement(
        'div',
        { className: 'main-content' },
        React.createElement(
            'div',
            { className: 'content-container' },
            React.createElement(
                'div',
                { className: 'coupon-form table-row-border' },
                React.createElement(
                    'div',
                    { className: 'coupon-form-title' },
                    React.createElement(
                        'span',
                        null,
                        '\u65B0\u589E\u514D\u904B\u6D3B\u52D5'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'coupon-form-body' },
                    React.createElement(
                        'div',
                        { className: 'coupon-form-area' },
                        React.createElement(
                            'p',
                            { className: 'coupon-form-subtitle' },
                            '\u512A\u60E0\u5377\u540D\u7A31'
                        ),
                        React.createElement('input', { className: 'coupon-form-input', placeholder: '\u8ACB\u8F38\u5165\u65B0\u514D\u904B\u5377\u540D\u7A31', value: name, onInput: function onInput(e) {
                                return setName(e.target.value);
                            } })
                    ),
                    React.createElement(
                        'div',
                        { className: 'coupon-form-area' },
                        React.createElement(
                            'p',
                            { className: 'coupon-form-subtitle' },
                            '\u6700\u4F4E\u6D88\u8CBB'
                        ),
                        React.createElement('input', { className: 'coupon-form-input', placeholder: '\u8ACB\u8F38\u5165\u514D\u904B\u6700\u4F4E\u91D1\u984D', value: number, onInput: function onInput(e) {
                                return setNumber(e.target.value.replace(/[^0-9]/, '').replace(/\b(0+)/gi, ''));
                            } })
                    ),
                    React.createElement(
                        'div',
                        { className: 'coupon-form-footer' },
                        React.createElement(
                            'button',
                            { className: 'table-btn', onClick: handle_upload },
                            '\u65B0\u589E\u514D\u904B\u6D3B\u52D5'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'table-body' },
                coupons.length === 0 ? React.createElement(
                    'div',
                    { className: 'notification' },
                    React.createElement(
                        'p',
                        { className: 'notification-text' },
                        '\u73FE\u7121\u514D\u904B\u6D3B\u52D5'
                    )
                ) : render_coupon()
            )
        )
    );
};