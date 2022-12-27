var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DisplayTitle = function DisplayTitle() {
    return React.createElement(
        'div',
        { className: 'discount_container' },
        React.createElement(
            'div',
            { className: 'header_container' },
            React.createElement(
                'p',
                { className: 'discount_title' },
                '\u63A8\u85A6\u5546\u54C1'
            )
        )
    );
};

var DiscountCard = function DiscountCard(_ref) {
    var no = _ref.no,
        img = _ref.img,
        name = _ref.name,
        orgin = _ref.orgin,
        dis = _ref.dis,
        first = _ref.first;
    return React.createElement(
        'a',
        { href: '' + no, className: 'discount_item_card ' + (first ? '' : 'card_bar') },
        React.createElement('div', { className: 'dis_item_img', style: { backgroundImage: 'url(' + img + ')' } }),
        React.createElement(
            'p',
            { className: 'dis_item_name' },
            ' ',
            name
        ),
        React.createElement(
            'div',
            { className: 'flex items-end' },
            React.createElement(
                'p',
                { className: 'dis_item_dis' },
                '$',
                dis
            ),
            React.createElement(
                'p',
                { className: 'dis_item_origin pl-1' },
                '$',
                orgin
            )
        )
    );
};

var Discount = function Discount(_ref2) {
    var items = _ref2.items;

    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        offset = _React$useState2[0],
        setOffset = _React$useState2[1];

    var handle_click = function handle_click(forward) {
        var newVal = forward ? offset + 1 : offset - 1;
        if (newVal < 0) newVal = 0;
        if (newVal > 5) newVal = 5;
        setOffset(newVal);
    };
    var mounted = React.useRef();
    React.useEffect(function () {
        if (mounted.current === false) {
            mounted.current = true;
            document.getElementById('btn_forward').addEventListener('click', function (e) {
                return handle_click(true);
            });
            document.getElementById('btn_backward').addEventListener('click', function (e) {
                return handle_click(false);
            });
        }
    }, [offset]);

    return React.createElement(
        'div',
        { className: 'discount_container' },
        React.createElement(
            'div',
            { className: 'header_container header_bar' },
            React.createElement(
                'p',
                { className: 'discount_title' },
                '\u7279\u50F9\u5546\u54C1'
            ),
            React.createElement(
                'a',
                { className: 'discount_link' },
                '\u770B\u66F4\u591A >'
            )
        ),
        React.createElement(
            'div',
            { className: 'discount_main' },
            React.createElement(
                'button',
                { className: 'discount_course left_course', id: 'btn_backward', onClick: function onClick() {
                        return handle_click(false);
                    } },
                '<'
            ),
            React.createElement(
                'button',
                { className: 'discount_course right_course', id: 'btn_forward', onClick: function onClick() {
                        return handle_click(true);
                    } },
                '>',
                ' '
            ),
            React.createElement(
                'div',
                { className: 'discount_display' },
                React.createElement(
                    'div',
                    { className: 'discount_warp', style: { transform: 'translateX(-' + 10 * offset + '%)' } },
                    items.map(function (i) {
                        return React.createElement(DiscountCard, { no: i.no, name: i.name, img: i.img, dis: i.dis, orgin: i.origin, first: items.indexOf(i) == 0 });
                    })
                )
            )
        )
    );
};

var TypeLink = function TypeLink(_ref3) {
    var type = _ref3.type,
        first = _ref3.first;
    return React.createElement(
        'div',
        { className: 'type_link ' + (first ? '' : 'type_bar') },
        React.createElement(
            'a',
            { href: '', className: 'type_text' },
            type
        )
    );
};

var ItemTypes = ['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店'];

var ItemTypeSelection = function ItemTypeSelection() {
    return React.createElement(
        'div',
        { className: 'type_selection' },
        React.createElement(
            'div',
            { className: 'type_container' },
            ItemTypes.map(function (i) {
                return React.createElement(TypeLink, { type: i, first: ItemTypes.indexOf(i) == 0 });
            })
        )
    );
};

var ItemCard = function ItemCard(_ref4) {
    var no = _ref4.no,
        img = _ref4.img,
        name = _ref4.name,
        origin = _ref4.origin,
        dis = _ref4.dis;
    return React.createElement(
        'a',
        { href: '' + no, className: 'item_card_container' },
        React.createElement(
            'div',
            { className: 'item_card' },
            React.createElement('div', { className: 'item_img', style: { backgroundImage: 'url(' + img + ')' } }),
            React.createElement(
                'div',
                { className: 'px-1' },
                React.createElement(
                    'p',
                    { className: 'dis_item_name' },
                    ' ',
                    name
                ),
                React.createElement(
                    'div',
                    { className: 'flex items-end' },
                    dis == null ? [React.createElement(
                        'p',
                        { className: 'item_price' },
                        '$',
                        origin
                    )] : [React.createElement(
                        'p',
                        { className: 'item_price' },
                        '$',
                        dis
                    ), React.createElement(
                        'p',
                        { className: 'dis_item_origin pl-1' },
                        '$',
                        origin
                    )]
                )
            )
        )
    );
};

var Main = function Main() {
    var dis_item = [{ no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 100 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 101 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 103 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 104 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 105 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 106 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 107 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 108 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 109 }];

    var qqqq = [{ no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 100 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: null }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }, { no: 'a124fw', img: '/static/img/logo1.png', name: '我是商品', origin: 123, dis: 102 }];

    return [React.createElement(
        'nav',
        { className: 'mb-8' },
        React.createElement(UpperBar, null),
        React.createElement(LowerBar, null),
        React.createElement(ItemTypeSelection, null)
    ), React.createElement(
        'div',
        { className: 'main' },
        React.createElement(Discount, { items: dis_item }),
        React.createElement(DisplayTitle, null),
        React.createElement(
            'div',
            { className: 'item_list mb-8' },
            qqqq.map(function (i) {
                return React.createElement(ItemCard, { no: i.no, name: i.name, img: i.img, dis: i.dis, origin: i.origin });
            })
        ),
        React.createElement(
            'div',
            { className: 'flex justify-center mb-8' },
            React.createElement(
                'a',
                { className: 'more_link', href: '' },
                ' ',
                React.createElement(
                    'p',
                    null,
                    '\u66F4\u591A\u63A8\u85A6'
                )
            )
        )
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));