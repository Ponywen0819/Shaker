var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var User_area = function User_area(_ref) {
    var img = _ref.img,
        name = _ref.name;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        append = _React$useState2[0],
        setappend = _React$useState2[1];

    var showappend = function showappend() {
        setappend(true);
    };

    var hideappend = function hideappend() {
        setappend(false);
    };

    var handleLogout = function handleLogout() {
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
        { className: 'user_area', onMouseEnter: function onMouseEnter() {
                return showappend();
            }, onMouseLeave: function onMouseLeave() {
                return hideappend();
            } },
        React.createElement(
            'a',
            { className: 'user_title' },
            React.createElement('div', { className: 'Toolbar_user_img', style: { backgroundImage: 'url(' + (img == null ? '/static/img/logo1.png' : img.slice(1)) + ')' } }),
            React.createElement(
                'p',
                { className: 'text-white' },
                name
            )
        ),
        append && React.createElement(
            'div',
            { className: 'Toolbar_user_section_area' },
            React.createElement(
                'a',
                { className: 'font-bold Toolbar_user_section', href: '/user/account/profile' },
                '\u6211\u7684\u5E33\u865F'
            ),
            React.createElement(
                'a',
                { className: 'font-bold Toolbar_user_section', href: '/user/purchase' },
                '\u8CFC\u8CB7\u6E05\u55AE'
            ),
            React.createElement(
                'button',
                { className: 'font-bold Toolbar_user_section', onClick: handleLogout },
                '\u767B\u51FA'
            )
        )
    );
};

var UpperBar = function UpperBar() {
    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isLogin = _React$useState4[0],
        setLog = _React$useState4[1];

    var _React$useState5 = React.useState({ name: '', img: '' }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        userinfo = _React$useState6[0],
        setinfo = _React$useState6[1];

    var testLogin = function testLogin() {
        fetch('/account/GetUserDetail', {
            body: JSON.stringify({
                require: ["file_path", "name"]
            }),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.status === 200) {
                return response.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                setLog(true);
                setinfo(data);
            }
        });
    };

    React.useEffect(function () {
        testLogin();
    }, []);

    return React.createElement(
        'div',
        { className: 'upper_container' },
        React.createElement(
            'div',
            { className: 'upper_main nav_container' },
            React.createElement(
                'div',
                { className: 'w-1/5 upper_selction' },
                React.createElement(
                    'div',
                    { className: 'upper_nobar' },
                    React.createElement(
                        'a',
                        { className: 'Toolbat_text', href: '/sellercenter/index' },
                        '\u8CE3\u5BB6\u4E2D\u5FC3'
                    )
                )
            ),
            isLogin ? React.createElement(User_area, { name: userinfo.name, img: userinfo.file_path }) : React.createElement(
                'div',
                { className: 'w-1/5 upper_selction justify-end' },
                React.createElement(
                    'div',
                    { className: 'upper_nobar' },
                    React.createElement(
                        'a',
                        { className: 'Toolbat_text', href: '/register' },
                        '\u8A3B\u518A'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'upper_bar' },
                    React.createElement(
                        'a',
                        { className: 'Toolbat_text', href: '/login' },
                        '\u767B\u5165'
                    )
                )
            )
        )
    );
};

var LowerBar = function LowerBar() {
    var _React$useState7 = React.useState(''),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        search = _React$useState8[0],
        setText = _React$useState8[1];

    var handle_search = function handle_search() {
        var qur = new URLSearchParams({ search_word: search });
        console.log(qur.toString());
        document.location = '/search?' + qur.toString();
    };

    return React.createElement(
        'div',
        { className: ' lower_container' },
        React.createElement(
            'div',
            { className: 'nav_container lower_main' },
            React.createElement(
                'a',
                { className: 'w-1/5 lower_img_area', href: '/' },
                React.createElement('img', { className: 'lower_img', src: '/static/img/logobar_orange.png', alt: '' })
            ),
            React.createElement(
                'div',
                { className: 'search_bar' },
                React.createElement('input', { type: 'text', name: '', id: '', className: 'search_text', value: search, onInput: function onInput(e) {
                        return setText(e.target.value);
                    } }),
                React.createElement(
                    'button',
                    { className: 'search_btn', onClick: function onClick() {
                            return handle_search();
                        } },
                    React.createElement('img', { src: '/static/img/search.svg', alt: '', className: '' })
                )
            ),
            React.createElement(
                'div',
                { className: 'cart_aera' },
                React.createElement(
                    'a',
                    { className: 'cart_link', href: '/cart' },
                    React.createElement('img', { src: '/static/img/cart.svg', alt: '', className: 'cart_icon' })
                )
            )
        )
    );
};

var ToolBar = function ToolBar() {
    return React.createElement(
        'nav',
        null,
        React.createElement(UpperBar, null),
        React.createElement(LowerBar, null)
    );
};