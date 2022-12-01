var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var UserInfo = function UserInfo() {
    var _React$useState = React.useState("Unknow"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        username = _React$useState2[0],
        setusername = _React$useState2[1];

    var _React$useState3 = React.useState(['', '', '']),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        selectnum = _React$useState4[0],
        setselectnum = _React$useState4[1];

    React.useEffect(function () {
        var path = window.location.pathname;
        if (path == '/user/profile') setselectnum([" nowon_bar", '', '']);else if (path == '/user/purchase') setselectnum(['', " nowon_bar", '']);else setselectnum(['', '', "nowon_bar"]);
    }, []);
    var main = React.createElement(
        'aside',
        { className: 'side_bar' },
        React.createElement(
            'div',
            { className: 'info_area' },
            React.createElement('img', { className: 'user_img', src: '/static/img/logo1.png' }),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    { className: 'user_name' },
                    username
                ),
                React.createElement(
                    'a',
                    { className: 'edit_btn', href: '' },
                    React.createElement('img', { src: '/static/img/pencil.svg' }),
                    React.createElement(
                        'p',
                        null,
                        '\u4FEE\u6539\u500B\u4EBA\u8CC7\u8A0A'
                    )
                )
            )
        ),
        React.createElement(
            'a',
            { className: "normal_bar " + selectnum[0], href: '/user/profile' },
            React.createElement('img', { src: '/static/img/person-square.svg' }),
            React.createElement(
                'p',
                null,
                '\u6211\u7684\u5E33\u6236'
            )
        ),
        React.createElement(
            'a',
            { className: "normal_bar " + selectnum[1], href: '/user/purchase' },
            React.createElement('img', { src: '/static/img/card-list.svg' }),
            React.createElement(
                'p',
                null,
                '\u8CFC\u8CB7\u6E05\u55AE'
            )
        ),
        React.createElement(
            'a',
            { className: "normal_bar " + selectnum[2], href: '/user/coupon' },
            React.createElement('img', { src: '/static/img/ticket-detailed.svg' }),
            React.createElement(
                'p',
                null,
                '\u6211\u7684\u512A\u60E0\u5238'
            )
        )
    );
    return main;
};