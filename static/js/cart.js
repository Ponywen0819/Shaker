var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CartLowerBar = function CartLowerBar() {
    return React.createElement(
        "div",
        { className: " cart_lower" },
        React.createElement(
            "div",
            { className: "cart_lower_container" },
            React.createElement(
                "a",
                { className: "w-2/5 cart_lower_img_area", href: "/" },
                React.createElement("img", { className: "cart_lower_img", src: "/static/img/logobar_white.png", alt: "" }),
                React.createElement(
                    "p",
                    { className: "cart_logo_text" },
                    "\u8CFC\u7269\u8ECA"
                )
            ),
            React.createElement(
                "div",
                { className: "cart_search_bar" },
                React.createElement("input", { type: "text", name: "", id: "", className: "cart_search_input" }),
                React.createElement(
                    "button",
                    { className: "cart_search_btn" },
                    React.createElement("img", { src: "/static/img/search.svg", alt: "", className: "" })
                )
            )
        )
    );
};

var ContentTitle = function ContentTitle() {
    return React.createElement(
        "div",
        { className: "cart_title title" },
        React.createElement("div", { className: "title_btn_area" }),
        React.createElement(
            "p",
            { className: "", style: { width: '45%' } },
            "\u5546\u54C1"
        ),
        ['單價', '數量', '總計', '操作'].map(function (i) {
            return React.createElement(
                "p",
                { className: "title_text", style: { width: i === '數量' ? '14%' : '12%' } },
                i
            );
        })
    );
};

var Order_title = function Order_title(_ref) {
    var shop_name = _ref.shop_name,
        _onClick = _ref.onClick,
        isChecked = _ref.isChecked;

    return React.createElement(
        "div",
        { className: "order_title title" },
        React.createElement(
            "div",
            { className: 'title_btn_area' },
            React.createElement("input", { type: 'checkbox', className: "title_btn", id: shop_name, onClick: function onClick() {
                    return _onClick(shop_name);
                }, checked: isChecked })
        ),
        React.createElement(
            "div",
            { className: "title_text" },
            React.createElement(
                "a",
                { href: "" },
                shop_name
            )
        )
    );
};

var Product = function Product(_ref2) {
    var item = _ref2.item,
        _onClick2 = _ref2.onClick,
        isChecked = _ref2.isChecked,
        update = _ref2.update;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        disable = _React$useState2[0],
        setable = _React$useState2[1];

    var handle_update_num = function handle_update_num(val) {
        var next = item.count + val;
        if (next <= 0 || next > item.remain) {
            return;
        } else {
            setable(true);
            // 後端處理
            fetch('/product/UploadCartNum', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: item.id,
                    'new_count': next
                })
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
            }).then(function (data) {
                if (data.cause === 0) {
                    return true;
                }
            }).then(function (res) {
                if (res === true) {
                    update(item.id, next);
                    setable(false);
                }
            });
        }
    };

    return React.createElement(
        "div",
        { className: "product_container" },
        React.createElement(
            "div",
            { className: "title_btn_area" },
            React.createElement("input", { type: 'checkbox',
                className: "title_btn",
                name: item.id,
                onClick: function onClick() {
                    return _onClick2({
                        id: item.id,
                        shop_name: item.shop_name,
                        remain: item.remain
                    });
                },
                checked: isChecked
            })
        ),
        React.createElement(
            "div",
            { className: "product_info_container" },
            React.createElement("div", { className: "product_img", style: { backgroundImage: "url(" + item.photo + ")" } }),
            React.createElement(
                "p",
                null,
                item.name
            )
        ),
        React.createElement(
            "p",
            { className: "w-[12%] flex justify-center" },
            "$",
            item.price
        ),
        React.createElement(
            "div",
            { className: "w-[14%] flex justify-center" },
            React.createElement(
                "div",
                { className: "product_number_container" },
                React.createElement(
                    "button",
                    { className: "product_number_btn",
                        onClick: function onClick() {
                            return handle_update_num(-1);
                        },
                        disabled: disable
                    },
                    "-"
                ),
                React.createElement(
                    "p",
                    { className: "product_number" },
                    item.count
                ),
                React.createElement(
                    "button",
                    { className: "product_number_btn",
                        onClick: function onClick() {
                            return handle_update_num(1);
                        },
                        disabled: disable
                    },
                    "+"
                )
            )
        ),
        React.createElement(
            "p",
            { className: "w-[12%] flex justify-center" },
            "$",
            item.count * item.price
        ),
        React.createElement(
            "div",
            { className: "w-[12%] flex justify-center" },
            React.createElement(
                "button",
                null,
                "X"
            )
        )
    );
};

var Footer = function Footer(_ref3) {
    var price = _ref3.price,
        num = _ref3.num,
        onClick = _ref3.onClick;

    return React.createElement(
        "div",
        { className: "creat_order" },
        React.createElement(
            "p",
            { className: "text-lg" },
            "\u7E3D\u91D1\u984D"
        ),
        React.createElement(
            "p",
            null,
            "(" + num + "\u500B\u5546\u54C1): "
        ),
        React.createElement(
            "p",
            { className: "create_order_price px-1" },
            "" + price
        ),
        React.createElement(
            "button",
            { className: "create_order_btn", onClick: onClick },
            "\u53BB\u8CB7\u55AE"
        )
    );
};

var Main = function Main() {
    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        products = _React$useState4[0],
        setproduct = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        selection = _React$useState6[0],
        setSelection = _React$useState6[1];

    var select_product = function select_product(product) {
        var copy_select = selection.slice(0); // 複製
        // 做商品個別檢查
        // 檢查陣列中是否有重複的值

        var dup = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = selection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                select = _step.value;

                if (select.id === product.id) {
                    dup = true;
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (dup) {
            var index = selection.indexOf(product);
            copy_select.splice(index, 1);
        } else {
            // 若是選擇新的商品要檢查是否為別商片的物品
            if (selection.length === 0) {
                copy_select.push(product);
            } else {
                if (selection[0].shop_name !== product.shop_name) {
                    copy_select = [product];
                } else {
                    copy_select.push(product);
                }
            }
        }
        setSelection(copy_select);
    };

    var get_title_check = function get_title_check(shop_name) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = products[shop_name][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                product = _step2.value;

                var dup = false;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = selection[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        select = _step3.value;

                        if (select.id === product.id) {
                            dup = true;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                if (!dup) {
                    return false;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return true;
    };

    var get_item_check = function get_item_check(id) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = selection[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                select = _step4.value;

                if (select.id === id) {
                    return true;
                }
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        return false;
    };

    var select_shop = function select_shop(name) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = products[name][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                product = _step5.value;

                if (!selection.includes(product)) {
                    setSelection(products[name]);
                    return;
                }
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        setSelection([]);
    };

    var handle_change = function handle_change(id, val) {
        var new_list = {};
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = Object.keys(products)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                shop = _step6.value;

                console.log(shop);
                var temp = products[shop].slice(0);
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = products[shop].entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _ref4 = _step7.value;

                        var _ref5 = _slicedToArray(_ref4, 2);

                        var _i = _ref5[0];
                        var value = _ref5[1];

                        console.log(value);
                        if (value.id === id) {
                            temp[_i].count = val;
                        }
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }

                console.log(temp);
                new_list[shop] = temp;
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }

        setproduct(new_list);
    };

    var calc_price = function calc_price() {
        var total = 0;
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
            for (var _iterator8 = Object.values(products)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                items = _step8.value;
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = items[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        item = _step9.value;

                        // 檢查是否在列表中
                        var _iteratorNormalCompletion10 = true;
                        var _didIteratorError10 = false;
                        var _iteratorError10 = undefined;

                        try {
                            for (var _iterator10 = selection[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                s = _step10.value;

                                if (s.id === item.id) {
                                    total += item.count * item.price;
                                    break;
                                }
                            }
                        } catch (err) {
                            _didIteratorError10 = true;
                            _iteratorError10 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                    _iterator10.return();
                                }
                            } finally {
                                if (_didIteratorError10) {
                                    throw _iteratorError10;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                    _iterator8.return();
                }
            } finally {
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }

        return total;
    };

    var handle_checkout = function handle_checkout() {
        if (selection.length > 0) {
            var id_list = selection.map(function (item) {
                return item.id;
            });
            console.log(id_list);
            document.cookie = "orders=" + JSON.stringify(id_list);
            document.location = '/checkout';
        } else {
            FailNotify('請選擇至少一項商品');
        }
    };

    React.useEffect(function () {
        if (products.length === 0) {
            fetch('/product/GetProductsToCart', {
                method: 'POST'
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                }
            }).then(function (data) {
                if (data.cause === 0) {
                    var a = {};
                    var _iteratorNormalCompletion11 = true;
                    var _didIteratorError11 = false;
                    var _iteratorError11 = undefined;

                    try {
                        for (var _iterator11 = data.products[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                            i = _step11.value;

                            var order_keys = Object.keys(a);
                            if (order_keys.includes(i.shop_name)) {
                                a[i.shop_name].push(i);
                            } else {
                                a[i.shop_name] = [i];
                            }
                        }
                    } catch (err) {
                        _didIteratorError11 = true;
                        _iteratorError11 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion11 && _iterator11.return) {
                                _iterator11.return();
                            }
                        } finally {
                            if (_didIteratorError11) {
                                throw _iteratorError11;
                            }
                        }
                    }

                    setproduct(a);
                }
            });
        }
    }, [selection]);

    return [React.createElement(
        "div",
        { className: "mb-8" },
        React.createElement(UpperBar, null),
        React.createElement(CartLowerBar, null)
    ), React.createElement(
        "div",
        { className: "main main_content" },
        React.createElement(
            "div",
            null,
            React.createElement(ContentTitle, null),
            React.createElement(
                "div",
                { className: "" },
                Object.entries(products).map(function (order) {
                    return React.createElement(
                        "div",
                        { className: "order_container" },
                        React.createElement(Order_title, { shop_name: order[0], onClick: select_shop, isChecked: get_title_check(order[0]) }),
                        order[1].map(function (i) {
                            return React.createElement(Product, { item: i, onClick: select_product, isChecked: get_item_check(i.id), update: handle_change });
                        })
                    );
                })
            )
        ),
        React.createElement(Footer, { num: selection.length, price: calc_price(), onClick: handle_checkout })
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));