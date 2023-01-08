var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Shipping = function Shipping() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        order_list = _React$useState2[0],
        setList = _React$useState2[1];

    var data_title = ['訂單編號', '商店名稱', '訂單狀態', '操作'];
    var order_state = ['已成立', '運送中', '已完成'];

    React.useEffect(function () {
        fetch('/product/getOrders', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setList(data.data);
            }
        });
    }, []);

    var handle_change = function handle_change(id, state) {
        fetch('/product/ModifyOrderState', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                order_id: id,
                status: state + 1
            })
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                SuccessNotify('更新成功').then(function () {
                    return location.href = location.href;
                });
            } else {
                FailNotify('更新失敗');
            }
        });
    };

    return React.createElement(
        'div',
        { className: 'main-content' },
        React.createElement(
            'div',
            { className: 'content-container' },
            React.createElement(
                'div',
                { className: 'table-header' },
                React.createElement(
                    'div',
                    { className: 'table-header-row' },
                    data_title.map(function (title) {
                        return React.createElement(
                            'span',
                            { className: 'table-col w-1/4' },
                            title
                        );
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'table-body' },
                order_list.map(function (order) {
                    return React.createElement(
                        'div',
                        { className: 'table-body-row', key: order.id },
                        React.createElement(
                            'span',
                            { className: 'w-1/4' },
                            order.id
                        ),
                        React.createElement(
                            'span',
                            { className: 'w-1/4' },
                            order.shop_name
                        ),
                        React.createElement(
                            'span',
                            { className: 'w-1/4' },
                            order_state[order.status]
                        ),
                        React.createElement(
                            'span',
                            { className: 'w-1/4' },
                            React.createElement(
                                'button',
                                { className: 'table-btn', onClick: function onClick() {
                                        return handle_change(order.id, order.status);
                                    } },
                                '\u8B8A\u66F4\u72C0\u614B'
                            )
                        )
                    );
                })
            )
        )
    );
};