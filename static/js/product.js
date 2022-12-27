var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ProductArea = function ProductArea() {
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        product_name = _React$useState2[0],
        setName = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        comment_num = _React$useState4[0],
        setCommentNum = _React$useState4[1];

    var _React$useState5 = React.useState(0),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        remaining = _React$useState6[0],
        setRemaining = _React$useState6[1];
    // 價格使用陣列表示，第一個代表原價，如有第二個則是折價後


    var _React$useState7 = React.useState([0]),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        price = _React$useState8[0],
        setprice = _React$useState8[1];

    var _React$useState9 = React.useState(null),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        product_photo = _React$useState10[0],
        setPhoto = _React$useState10[1];

    var _React$useState11 = React.useState(1),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        wanna_num = _React$useState12[0],
        setNum = _React$useState12[1];

    React.useEffect(function () {
        setName('測試用商品名稱');
        setCommentNum(3);
        setRemaining(20);
        setprice([100, 600]);
        setPhoto('/static/img/logo1.png');
        //之後會加上神奇的API
    }, []);

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'product_show' },
            React.createElement('div', { className: 'product_img bg_img', style: { backgroundImage: 'url(' + (product_photo == null ? '/static/img/logo1.png' : product_photo) + ')' } })
        ),
        React.createElement(
            'div',
            { className: 'product_interface' },
            React.createElement(
                'div',
                { className: 'product_name_area' },
                React.createElement(
                    'p',
                    { className: 'product_name' },
                    product_name
                )
            ),
            React.createElement(
                'div',
                { className: 'product_info' },
                React.createElement('div', { className: 'product_info_column col' }),
                React.createElement(
                    'div',
                    { className: 'product_info_column col' },
                    React.createElement(
                        'p',
                        { className: 'product_info_val' },
                        comment_num
                    ),
                    React.createElement(
                        'p',
                        { className: 'product_info_title' },
                        '\u8A55\u8AD6\u6578'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'product_info_column' },
                    React.createElement(
                        'p',
                        { className: 'product_info_val' },
                        remaining
                    ),
                    React.createElement(
                        'p',
                        { className: 'product_info_title' },
                        '\u5269\u9918'
                    )
                )
            ),
            price.length > 1 ? React.createElement(
                'div',
                { className: 'product_price_area' },
                React.createElement(
                    'p',
                    { className: 'product_discount' },
                    '$' + price[0]
                ),
                React.createElement(
                    'p',
                    { className: 'product_price' },
                    '$' + price[1]
                )
            ) : React.createElement(
                'div',
                { className: 'product_price_area' },
                React.createElement(
                    'p',
                    { className: 'product_price' },
                    '$' + price[0]
                )
            ),
            React.createElement(
                'div',
                { className: 'product_interact' },
                React.createElement(
                    'p',
                    { className: '' },
                    '\u6578\u91CF'
                ),
                React.createElement(
                    'div',
                    { className: 'product_number' },
                    React.createElement(
                        'button',
                        { className: 'number_btn' },
                        '-'
                    ),
                    React.createElement('input', { className: 'number_input', type: 'text', value: wanna_num }),
                    React.createElement(
                        'button',
                        { className: 'number_btn' },
                        '+'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'product_cart_area' },
                React.createElement(
                    'button',
                    { className: 'product_cart_btn product_buy_btn' },
                    '\u76F4\u63A5\u8CFC\u8CB7'
                ),
                React.createElement(
                    'button',
                    { className: 'product_cart_btn product_cart_btn' },
                    '\u52A0\u5165\u8CFC\u7269\u8ECA'
                )
            )
        )
    );
};

var ShopArea = function ShopArea() {
    var _React$useState13 = React.useState(''),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        shop_name = _React$useState14[0],
        setName = _React$useState14[1];

    var _React$useState15 = React.useState(0),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        star = _React$useState16[0],
        setStar = _React$useState16[1];

    var _React$useState17 = React.useState('/static/img/logo1.png'),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        shop_img = _React$useState18[0],
        setImg = _React$useState18[1];

    var _React$useState19 = React.useState('1922-08-19'),
        _React$useState20 = _slicedToArray(_React$useState19, 2),
        last_login = _React$useState20[0],
        setLast = _React$useState20[1];

    React.useEffect(function () {
        setName('測試用商店名');
        setStar(3);
        setImg('/static/img/logo1.png');
        // 做商店資料取出
    }, []);

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement('div', { className: 'shop_img bg_img', style: { backgroundImage: 'url(' + (shop_img == null ? '/static/img/logo1.png' : shop_img) + ')' } }),
        React.createElement(
            'div',
            { className: 'flex flex-col justify-center' },
            React.createElement(
                'p',
                { className: 'shop_name' },
                shop_name
            ),
            React.createElement(
                'div',
                { className: 'flex gap-5' },
                React.createElement(
                    'p',
                    null,
                    '\u4E0A\u6B21\u767B\u5165: ' + last_login
                ),
                React.createElement(
                    'p',
                    null,
                    '\u8A55\u50F9: ' + star
                )
            )
        )
    );
};

var ProductDetail = function ProductDetail() {
    var _React$useState21 = React.useState(''),
        _React$useState22 = _slicedToArray(_React$useState21, 2),
        detail = _React$useState22[0],
        setdetail = _React$useState22[1];

    React.useEffect(function () {
        setdetail('rrr\nrrrrr\nr\nrrrr\nrrrrrk');
    }, []);

    return React.createElement(
        'div',
        { className: 'container flex-col' },
        React.createElement(
            'p',
            { className: 'text-gray-400 text-lg' },
            '\u5546\u54C1\u8A73\u60C5'
        ),
        React.createElement(
            'p',
            { className: 'product_detail' },
            detail
        )
    );
};

var Comment = function Comment() {
    var _React$useState23 = React.useState([]),
        _React$useState24 = _slicedToArray(_React$useState23, 2),
        comments = _React$useState24[0],
        setComments = _React$useState24[1];

    React.useEffect(function () {
        setComments([{ picture: '/static/img/logo1.png', star: 3, description: 'ertyuiop', user: 'qweqwe', user_photo: '/static/img/logo1.png' }, { picture: '/static/img/logo1.png', star: 1, description: 'erty', user: 'qweqwe', user_photo: '/static/img/logo1.png' }, { picture: '/static/img/logo1.png', star: 4, description: 'ertqwe\nqwe\nuiop', user: 'qweqwe', user_photo: '/static/img/logo1.png' }, { picture: '/static/img/logo1.png', star: 6, description: 'ertyuioqwe\np', user: 'qweqwe', user_photo: '/static/img/logo1.png' }, { picture: '/static/img/logo1.png', star: 7, description: 'ertyu\nsiop', user: 'qweqwe', user_photo: '/static/img/logo1.png' }]);
    }, []);

    return React.createElement(
        'div',
        { className: 'container flex-col' },
        React.createElement(
            'p',
            { className: 'text-gray-400 text-lg' },
            '\u5546\u54C1\u8A55\u50F9'
        ),
        comments.map(function (i) {
            return React.createElement(
                'div',
                { className: 'comment_area ' + (i !== comments[comments.length - 1] && 'comment_border') },
                React.createElement('div', { className: 'comment_img bg_img', style: { backgroundImage: 'url(' + (i.picture == null ? '/static/img/logo1.png' : i.picture) + ')' } }),
                React.createElement(
                    'div',
                    { className: '' },
                    React.createElement(
                        'div',
                        { className: 'flex flex-col py-1' },
                        React.createElement(
                            'div',
                            { className: 'flex gap-2' },
                            React.createElement('div', { className: 'comment_user_img bg_img', style: { backgroundImage: 'url(' + (i.user_photo == null ? '/static/img/logo1.png' : i.user_photo) + ')' } }),
                            React.createElement(
                                'p',
                                null,
                                i.user
                            )
                        ),
                        React.createElement(
                            'p',
                            { className: '' },
                            '\u8A55\u50F9' + i.star
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: '' },
                        i.description
                    )
                )
            );
        })
    );
};

var Main = function Main() {
    return React.createElement(
        'div',
        null,
        React.createElement(ToolBar, null),
        React.createElement(ProductArea, null),
        React.createElement(ShopArea, null),
        React.createElement(ProductDetail, null),
        React.createElement(Comment, null)
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));