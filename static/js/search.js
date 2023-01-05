var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ItemCard = function ItemCard(_ref) {
    var no = _ref.no,
        img = _ref.img,
        name = _ref.name,
        origin = _ref.origin,
        dis = _ref.dis;
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
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        item_list = _React$useState2[0],
        setitems = _React$useState2[1];

    React.useEffect(function () {
        var search_data = {};
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('search_word') !== null) search_data.search_word = urlParams.get('search_word');
        if (urlParams.get('category') !== null) search_data.category = parseInt(urlParams.get('category'));

        console.log(search_data);
        fetch('/product/SearchProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(search_data)
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (data) {
            console.log(data);
            if (data.cause === 0) {
                setitems(data.data);
            }
        });
    }, []);

    return React.createElement(
        'div',
        null,
        React.createElement(ToolBar, null),
        React.createElement(
            'div',
            { className: 'main my-10' },
            React.createElement(
                'div',
                { className: 'item_list mb-8' },
                item_list.map(function (i) {
                    return React.createElement(ItemCard, { no: i.id, name: i.name, img: i.file_path, origin: i.price });
                })
            )
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));