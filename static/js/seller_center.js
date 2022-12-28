var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var SellerBar = function SellerBar() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        accInfoIsTouched = _React$useState2[0],
        setaccIsTouched = _React$useState2[1];

    function pullDownMenu() {
        setaccIsTouched(!accInfoIsTouched);
    }

    return React.createElement(
        'div',
        { className: 'nav-container' },
        React.createElement(
            'div',
            { className: 'nav-content' },
            React.createElement(
                'a',
                { href: './test', className: 'nav-logo' },
                React.createElement('img', { src: '/static/img/logo2.png' })
            ),
            React.createElement(
                'div',
                { className: 'nav-logo-content', onMouseEnter: accInfoIsTouched ? pullDownMenu : "" },
                React.createElement(
                    'a',
                    { href: 'this para. should be filled the anchor link', className: 'nav-text' },
                    ' \u8CE3\u5BB6\u4E2D\u5FC3'
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'relative' } },
                React.createElement(
                    'div',
                    { className: 'pop-over' },
                    React.createElement(
                        'div',
                        { className: 'pop-over _ref' },
                        React.createElement(
                            'div',
                            { className: 'account-info-box' },
                            React.createElement(
                                'div',
                                { className: 'account-info', onClick: pullDownMenu },
                                React.createElement('img', {
                                    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII=',
                                    className: 'account-avatar' }),
                                React.createElement(
                                    'span',
                                    { className: 'account-name' },
                                    'account name'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'pulldown-container', style: { display: '' + (accInfoIsTouched ? 'block' : 'none') } },
                        React.createElement(
                            'div',
                            { className: 'menu', onMouseLeave: pullDownMenu },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    { className: 'account-dropdown-item' },
                                    React.createElement(
                                        'span',
                                        { className: 'pull-down-menu text' },
                                        '\u8CE3\u5834\u4E2D\u5FC3'
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    { className: 'account-dropdown-item' },
                                    React.createElement(
                                        'span',
                                        { className: 'pull-down-menu text' },
                                        '\u767B\u51FA'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

var Sidebar = function Sidebar() {
    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        shipmentIsOpen = _React$useState4[0],
        setIsOpenS = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        orderIsOpen = _React$useState6[0],
        setIsOpenO = _React$useState6[1];

    var _React$useState7 = React.useState(false),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        productIsOpen = _React$useState8[0],
        setIsOpenP = _React$useState8[1];

    var _React$useState9 = React.useState(false),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        financeIsOpen = _React$useState10[0],
        setIsOpenF = _React$useState10[1];

    var _React$useState11 = React.useState(false),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        eventIsOpen = _React$useState12[0],
        setIsOpenE = _React$useState12[1];

    function shipmentClose() {
        setIsOpenS(!shipmentIsOpen);
    }

    function orderClose() {
        setIsOpenO(!orderIsOpen);
    }

    function productClose() {
        setIsOpenP(!productIsOpen);
    }

    function financeClose() {
        setIsOpenF(!financeIsOpen);
    }

    function eventClose() {
        setIsOpenE(!eventIsOpen);
    }

    return React.createElement(
        'div',
        { className: 'sidebar-container' },
        React.createElement(
            'ul',
            { className: 'sidebar-menu' },
            React.createElement(
                'li',
                { className: 'shipment' },
                React.createElement(
                    'div',
                    { className: 'sidebar-menu-item' },
                    React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511',
                        className: 'sidebar-menu-item-icon' }),
                    React.createElement(
                        'span',
                        { className: 'sidebar-menu-item-text', onClick: shipmentClose },
                        '\u7269\u6D41\u4E2D\u5FC3'
                    ),
                    React.createElement('span', { className: 'sidebar-menu-item-space' }),
                    React.createElement(
                        'i',
                        { className: 'sidebar-menu-item-collapse shopee-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                            React.createElement('path', {
                                d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'sidebar-submenu', style: { display: '' + (shipmentIsOpen ? 'block' : 'none') } },
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u5F85\u51FA\u8CA8'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u6279\u6B21\u51FA\u8CA8'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u7269\u6D41\u8A2D\u5B9A'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'order' },
                React.createElement(
                    'div',
                    { className: 'sidebar-menu-item' },
                    React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511',
                        className: 'sidebar-menu-item-icon' }),
                    React.createElement(
                        'span',
                        { className: 'sidebar-menu-item-text', onClick: orderClose },
                        '\u8A02\u55AE\u7BA1\u7406'
                    ),
                    React.createElement('span', { className: 'sidebar-menu-item-space' }),
                    React.createElement(
                        'i',
                        { className: 'sidebar-menu-item-collapse shopee-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                            React.createElement('path', {
                                d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'sidebar-submenu', style: { display: '' + (orderIsOpen ? 'block' : 'none') } },
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u6211\u7684\u92B7\u552E'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u4E0D\u6210\u7ACB'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u9000\u6B3E & \u9000\u8CA8'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'product' },
                React.createElement(
                    'div',
                    { className: 'sidebar-menu-item' },
                    React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511',
                        className: 'sidebar-menu-item-icon' }),
                    React.createElement(
                        'span',
                        { className: 'sidebar-menu-item-text', onClick: productClose },
                        '\u5546\u54C1\u7BA1\u7406'
                    ),
                    React.createElement('span', { className: 'sidebar-menu-item-space' }),
                    React.createElement(
                        'i',
                        { className: 'sidebar-menu-item-collapse shopee-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                            React.createElement('path', {
                                d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'sidebar-submenu', style: { display: '' + (productIsOpen ? 'block' : 'none') } },
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u6211\u7684\u5546\u54C1'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u65B0\u589E\u5546\u54C1'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u5546\u54C1\u8A2D\u5B9A'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u5C3A\u5BF8\u8868\u7BA1\u7406'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'finance' },
                React.createElement(
                    'div',
                    { className: 'sidebar-menu-item' },
                    React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511',
                        className: 'sidebar-menu-item-icon' }),
                    React.createElement(
                        'span',
                        { className: 'sidebar-menu-item-text', onClick: financeClose },
                        '\u8CA1\u52D9\u7BA1\u7406'
                    ),
                    React.createElement('span', { className: 'sidebar-menu-item-space' }),
                    React.createElement(
                        'i',
                        { className: 'sidebar-menu-item-collapse shopee-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                            React.createElement('path', {
                                d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'sidebar-submenu', style: { display: '' + (financeIsOpen ? 'block' : 'none') } },
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u6211\u7684\u9032\u5E33'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u9280\u884C\u5E33\u865F'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u4ED8\u6B3E\u8A2D\u5B9A'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'event' },
                React.createElement(
                    'div',
                    { className: 'sidebar-menu-item' },
                    React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511',
                        className: 'sidebar-menu-item-icon' }),
                    React.createElement(
                        'span',
                        { className: 'sidebar-menu-item-text', onClick: eventClose },
                        '\u7BA1\u7406\u884C\u92B7\u6D3B\u52D5'
                    ),
                    React.createElement('span', { className: 'sidebar-menu-item-space' }),
                    React.createElement(
                        'i',
                        { className: 'sidebar-menu-item-collapse shopee-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                            React.createElement('path', {
                                d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'sidebar-submenu', style: { display: '' + (eventIsOpen ? 'block' : 'none') } },
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u6211\u7684\u884C\u92B7\u6D3B\u52D5'
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'sidebar-submenu-item' },
                        React.createElement(
                            'a',
                            { href: 'test.com', className: 'sidebar-submenu-item-link' },
                            React.createElement(
                                'span',
                                null,
                                '\u512A\u60E0\u5238'
                            )
                        )
                    )
                )
            )
        )
    );
};