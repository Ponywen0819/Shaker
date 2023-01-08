var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var AdminHeader = function AdminHeader(_ref) {
    var user_name = _ref.user_name;

    var handle_logoff = function handle_logoff() {
        fetch('/account/Logoff', {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                SuccessNotify('登出成功').then(function () {
                    return location.href = location.href;
                });
            }
        });
    };

    return React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
            'div',
            { className: 'header-div-container' },
            React.createElement(
                'div',
                { className: 'logo-container' },
                React.createElement('img', { src: "/static/img/logobar_white.png" })
            ),
            React.createElement(
                'span',
                { className: 'sublogo' },
                '\u63A7\u5236\u4E2D\u5FC3'
            )
        ),
        React.createElement(
            'div',
            { className: 'header-div-container', onMouseEnter: function onMouseEnter() {
                    return setDrop(true);
                }, onMouseLeave: function onMouseLeave() {
                    return setDrop(false);
                } },
            React.createElement(
                'span',
                { className: 'header-user-info' },
                '\u60A8\u597D\uFF01\u7BA1\u7406\u54E1 '
            ),
            React.createElement(
                'span',
                { className: 'header-user-name' },
                user_name
            ),
            React.createElement(
                'button',
                { className: 'header-logoff', onClick: handle_logoff },
                '\u767B\u51FA'
            )
        )
    );
};

var AdminASide = function AdminASide(_ref2) {
    var options = _ref2.options;

    return React.createElement(
        'aside',
        { className: 'aside' },
        React.createElement(
            'div',
            { className: 'aside-column' },
            options.map(function (option) {
                return React.createElement(
                    'a',
                    { key: option.name, className: 'aside-nav', href: option.href },
                    React.createElement(
                        'div',
                        { className: 'nav-img-container' },
                        React.createElement('img', { className: 'header-user-photo', src: '/static/img/box.png' })
                    ),
                    React.createElement(
                        'span',
                        { className: 'nav-text' },
                        option.name
                    )
                );
            })
        )
    );
};

var Main = function Main() {
    var _React$useState = React.useState('測試用名稱'),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        admin_name = _React$useState2[0],
        setName = _React$useState2[1];

    var aside_options = [{ name: '貨物管理', href: '/admin/shipping' }, { name: '優惠券管理', href: '/admin/coupon' }];

    React.useEffect(function () {
        fetch('/admin/getAdminInfo', {
            method: 'GET'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
            if (res.status === 401) {
                location.href = '/login';
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setName(data.data.name);
            }
        });
    }, []);

    var renderContent = function renderContent() {
        var contentType = location.pathname.slice(1).split('/')[1];
        console.log(contentType);
        if (contentType === 'shipping') {
            return React.createElement(Shipping, null);
        } else if (contentType === 'coupon') {
            return React.createElement(Coupon, null);
        }
    };

    return React.createElement(
        'div',
        null,
        React.createElement(AdminHeader, { user_name: admin_name }),
        React.createElement(AdminASide, { options: aside_options }),
        renderContent()
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));