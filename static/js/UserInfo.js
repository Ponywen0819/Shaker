var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Navbutton = function Navbutton(_ref) {
    var img = _ref.img,
        url = _ref.url,
        title = _ref.title,
        activate = _ref.activate;
    return React.createElement(
        'a',
        { className: 'header ' + (activate ? 'now_on' : ''), href: url },
        img ? React.createElement('img', { src: '/static/img/' + img }) : '',
        React.createElement(
            'p',
            null,
            title
        )
    );
};

var Standerbar = function Standerbar(_ref2) {
    var title = _ref2.title,
        url = _ref2.url,
        items = _ref2.items,
        img = _ref2.img;


    var isOpened = items ? items.some(function (i) {
        return i.url == window.location.pathname;
    }) : false;

    return React.createElement(
        'div',
        { className: 'normal_bar' },
        React.createElement(Navbutton, {
            title: title,
            url: url,
            img: img,
            activate: items ? false : window.location.pathname == url }),
        isOpened && React.createElement(
            'div',
            { className: 'submenu' },
            items ? items.map(function (subItem) {
                return React.createElement(Navbutton, { title: subItem.title, url: subItem.url,
                    activate: window.location.pathname == subItem.url });
            }) : ''
        )
    );
};

var UserInfo = function UserInfo() {
    var _React$useState = React.useState("Unknow"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        username = _React$useState2[0],
        setusername = _React$useState2[1];

    React.useEffect(function () {}, []);
    var obj = [{ title: '我的帳戶',
        url: '/user/account/profile',
        img: 'person-square.svg',
        item: [{ title: "更改個人資訊", url: '/user/account/profile' }, { title: "更改密碼", url: '/user/account/password' }] }, { title: '購買清單', url: '/user/purchase', img: 'card-list.svg' }, { title: '我的優惠券', url: '/user/coupon', img: 'ticket-detailed.svg' }];

    return React.createElement(
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
                    { className: 'edit_btn', href: '/user/account/profile' },
                    React.createElement('img', { src: '/static/img/pencil.svg' }),
                    React.createElement(
                        'p',
                        null,
                        '\u4FEE\u6539\u500B\u4EBA\u8CC7\u8A0A'
                    )
                )
            )
        ),
        obj.map(function (i) {
            return React.createElement(Standerbar, {
                title: i.title,
                url: i.url,
                type: i.type,
                img: i.img,
                items: i.item });
        })
    );
};
