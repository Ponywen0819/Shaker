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
                '\u5176\u4ED6\u5546\u54C1'
            )
        )
    );
};

var DiscountCard = function DiscountCard(_ref) {
    var no = _ref.no,
        img = _ref.img,
        name = _ref.name,
        price = _ref.price,
        first = _ref.first;
    return React.createElement(
        'a',
        { href: '/product/' + no, className: 'discount_item_card ' + (first ? '' : 'card_bar') },
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
                price
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
                '\u63A8\u85A6\u5546\u54C1'
            ),
            React.createElement(
                'a',
                { className: 'discount_link', href: '/search' },
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
                        return React.createElement(DiscountCard, { no: i.id, name: i.name, img: i.file_path, price: i.price, first: items.indexOf(i) === 0 });
                    })
                )
            )
        )
    );
};

var TypeLink = function TypeLink(_ref3) {
    var type = _ref3.type,
        first = _ref3.first,
        id = _ref3.id;

    var handle_search = function handle_search(val) {
        // console.log(JSON.stringify({search_word : parseInt(val)}))
        var qur = new URLSearchParams({ category: val });
        console.log(qur.toString());
        document.location = '/search?' + qur.toString();
    };

    return React.createElement(
        'button',
        { className: 'type_link ' + (first ? '' : 'type_bar'), onClick: function onClick() {
                return handle_search(id);
            } },
        React.createElement(
            'span',
            { className: 'type_text' },
            type
        )
    );
};

var ItemTypeSelection = function ItemTypeSelection() {
    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        item_types = _React$useState4[0],
        setTypes = _React$useState4[1];

    React.useEffect(function () {
        fetch('/product/GetAllCategory', {
            method: 'GET'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            setTypes(data);
        });
    }, []);

    return React.createElement(
        'div',
        { className: 'type_selection' },
        React.createElement(
            'div',
            { className: 'type_container' },
            item_types.map(function (i) {
                return React.createElement(TypeLink, { type: i.name, first: i.id === 1, id: i.id });
            })
        )
    );
};

var ItemCard = function ItemCard(_ref4) {
    var no = _ref4.no,
        img = _ref4.img,
        name = _ref4.name,
        price = _ref4.price;
    return React.createElement(
        'a',
        { href: '/product/' + no, className: 'item_card_container' },
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
                    React.createElement(
                        'p',
                        { className: 'item_price' },
                        '$',
                        price
                    )
                )
            )
        )
    );
};

var Main = function Main() {
    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        re = _React$useState6[0],
        setRe = _React$useState6[1];

    var _React$useState7 = React.useState([]),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        all = _React$useState8[0],
        setAll = _React$useState8[1];

    React.useEffect(function () {
        fetch('/product/SearchProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setRe(data.data);
                setAll(data.data);
            }
        });
    }, []);

    return [React.createElement(
        'nav',
        { className: 'mb-8' },
        React.createElement(UpperBar, null),
        React.createElement(LowerBar, null),
        React.createElement(ItemTypeSelection, null)
    ), React.createElement(
        'div',
        { className: 'main' },
        React.createElement(Discount, { items: re.slice(0, 10) }),
        React.createElement(DisplayTitle, null),
        React.createElement(
            'div',
            { className: 'item_list mb-8' },
            all.map(function (i) {
                return React.createElement(ItemCard, { no: i.id, name: i.name, img: i.file_path, price: i.price });
            })
        ),
        React.createElement(
            'div',
            { className: 'flex justify-center mb-8' },
            React.createElement(
                'a',
                { className: 'more_link', href: '/search' },
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