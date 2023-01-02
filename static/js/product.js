var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ProductArea = function ProductArea(_ref) {
    var info = _ref.info,
        wanna_num = _ref.wanna_num,
        chang_num = _ref.chang_num,
        upload = _ref.upload;


    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'product_show' },
            React.createElement('div', { className: 'product_img bg_img', style: { backgroundImage: 'url(' + (info.file_path == null ? '/static/img/logo1.png' : info.file_path.slice(1)) + ')' } })
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
                    info.name
                )
            ),
            React.createElement(
                'div',
                { className: 'product_info' },
                React.createElement(
                    'div',
                    { className: 'product_info_column' },
                    React.createElement(
                        'p',
                        { className: 'product_info_val' },
                        info.number
                    ),
                    React.createElement(
                        'p',
                        { className: 'product_info_title' },
                        '\u5269\u9918'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'product_price_area' },
                React.createElement(
                    'p',
                    { className: 'product_price' },
                    '$' + info.price
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
                        { className: 'number_btn', onClick: function onClick() {
                                return chang_num(-1);
                            } },
                        '-'
                    ),
                    React.createElement('input', { className: 'number_input', type: 'text', value: wanna_num }),
                    React.createElement(
                        'button',
                        { className: 'number_btn', onClick: function onClick() {
                                return chang_num(1);
                            } },
                        '+'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'product_cart_area' },
                React.createElement(
                    'button',
                    { className: 'product_cart_btn product_buy_btn', onClick: function onClick() {
                            return upload(true);
                        } },
                    '\u76F4\u63A5\u8CFC\u8CB7'
                ),
                React.createElement(
                    'button',
                    { className: 'product_cart_btn product_cart_btn', onClick: function onClick() {
                            return upload(false);
                        } },
                    '\u52A0\u5165\u8CFC\u7269\u8ECA'
                )
            )
        )
    );
};

var ShopArea = function ShopArea(_ref2) {
    var shop_id = _ref2.shop_id;

    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        shop_name = _React$useState2[0],
        setName = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        star = _React$useState4[0],
        setStar = _React$useState4[1];

    var _React$useState5 = React.useState('/static/img/logo1.png'),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        shop_img = _React$useState6[0],
        setImg = _React$useState6[1];

    var _React$useState7 = React.useState('1922-08-19'),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        last_login = _React$useState8[0],
        setLast = _React$useState8[1];

    React.useEffect(function () {
        if (shop_id !== 0) {
            console.log('shop_asda');
        }
        setName('測試用商店名');
        setStar(3);
        setImg('/static/img/logo1.png');
        // 做商店資料取
    }, [shop_id]);

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

var ProductDetail = function ProductDetail(_ref3) {
    var intro = _ref3.intro;

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
            intro
        )
    );
};

var Comment = function Comment() {
    var _React$useState9 = React.useState([]),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        comments = _React$useState10[0],
        setComments = _React$useState10[1];

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
    var _React$useState11 = React.useState({ shop_id: 0, name: '', price: 0, intro: '', photo: '', avgstar: 0, number: 0 }),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        product_info = _React$useState12[0],
        setInfo = _React$useState12[1];

    var _React$useState13 = React.useState(1),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        wanna_num = _React$useState14[0],
        setNum = _React$useState14[1];

    var handle_wanna = function handle_wanna(val) {
        var a = wanna_num + val;
        if (a > 0 && a <= product_info.number) {
            setNum(a);
        }
    };

    var handle_add_cart = function handle_add_cart(redic) {
        fetch('/product/AddProductToCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                product_id: parseInt(product_info.id),
                count: wanna_num
            })
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            if (data.cause === 0) {
                if (redic) {
                    location.href = '/cart';
                } else {
                    SuccessNotify('加入購物車成功');
                }
            }
        });
    };

    React.useEffect(function () {
        fetch('/product/GetProduct', {
            method: 'POST',
            body: JSON.stringify({
                id: [parseInt(location.pathname.split('/')[2])]
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setInfo(data.products[0]);
            }
        });
    }, []);

    return React.createElement(
        'div',
        null,
        React.createElement(ToolBar, null),
        React.createElement(ProductArea, { info: product_info, wanna_num: wanna_num, chang_num: handle_wanna, upload: handle_add_cart }),
        React.createElement(ShopArea, { shop_id: product_info.shop_id }),
        React.createElement(ProductDetail, { intro: product_info.intro }),
        React.createElement(Comment, null)
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));