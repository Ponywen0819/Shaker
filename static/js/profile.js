var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var UserInput = function UserInput(_ref) {
    var type = _ref.type,
        orgin = _ref.orgin,
        change = _ref.change,
        title = _ref.title;

    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        val = _React$useState2[0],
        setval = _React$useState2[1];

    var handle_number_input = function handle_number_input(e) {
        setval(e.target.value.replace(/[^0-9]/, ''));
        change(e.target.name, e.target.value.replace(/[^0-9]/, ''));
    };

    var handle_text_input = function handle_text_input(e) {
        setval(e.target.value);
        change(e.target.name, e.target.value);
    };

    React.useEffect(function () {
        setval(orgin);
    }, [orgin]);

    return React.createElement(
        'div',
        { className: 'form_line' },
        React.createElement(
            'p',
            { className: 'form_title' },
            title
        ),
        React.createElement('input', { className: 'form_input',
            name: title,
            type: type,
            value: val,
            onInput: title !== 'phone' ? handle_text_input : handle_number_input
        })
    );
};

var UserImgInput = function UserImgInput(_ref2) {
    var orgin = _ref2.orgin;

    var _React$useState3 = React.useState(orgin),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        img = _React$useState4[0],
        setImg = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        img_change = _React$useState6[0],
        setChange = _React$useState6[1];

    var triggerImageChange = function triggerImageChange() {
        var file_input = document.createElement("input");
        file_input.type = "file";
        file_input.accept = "image/*";
        file_input.onchange = function (e) {
            var image = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = function (readerEvent) {
                var content = readerEvent.target.result;
                console.log(content);
                setImg(content);
            };
        };
        file_input.click();
    };

    var triggerImageUpload = function triggerImageUpload() {
        fetch('/account/ChangeProfile', {
            body: JSON.stringify({ 'photo': img }),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                return res.json();
            } else {
                FailNotify("上傳圖片出現錯誤");
            }
        }).then(function (data) {
            if (data.status !== 200) {
                FailNotify("上傳圖片出現錯誤");
            }
        }).then(function (data) {
            if (data.status === 200) {
                SuccessNotify("銅片上傳成功");
            }
        });
    };

    React.useEffect(function () {
        if (orgin !== img) {
            setChange(true);
        } else {
            setChange(false);
        }
    }, [img]);

    return React.createElement(
        'div',
        { className: 'img_form_container' },
        React.createElement('img', { className: 'from_img', src: img }),
        React.createElement(
            'div',
            { className: 'img_form_btn_area' },
            img_change ? React.createElement(
                'div',
                { className: 'flex flex-col gap-1' },
                React.createElement(
                    'button',
                    { className: 'img_form_btn', onClick: triggerImageUpload },
                    '\u78BA\u8A8D\u4FEE\u6539'
                ),
                React.createElement(
                    'button',
                    { className: 'img_form_btn', onClick: triggerImageUpload },
                    '\u53D6\u6D88'
                )
            ) : React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { className: 'img_form_btn', onClick: triggerImageChange },
                    '\u66F4\u6539\u7167\u7247'
                )
            )
        ),
        React.createElement(
            'p',
            { className: 'img_form_text' },
            '\u6211\u53EA\u5403png :P'
        )
    );
};

var Interface = function Interface() {
    var _React$useState7 = React.useState({ name: "", email: "", phone: "", photo: '' }),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        userinfo = _React$useState8[0],
        setInfo = _React$useState8[1];

    var _React$useState9 = React.useState(''),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        user_img = _React$useState10[0],
        setImg = _React$useState10[1];

    var _React$useState11 = React.useState({}),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        change = _React$useState12[0],
        setChange = _React$useState12[1];

    React.useEffect(function () {
        getInfo();
    }, []);

    var getInfo = function getInfo() {
        fetch('/account/GetUserDetail', {
            body: JSON.stringify({
                require: ["photo", "name", "email", "phone"]
            }),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                FailNotify('請先登入').then(function () {
                    return location.href = '/login';
                });
            }
        }).then(function (data) {
            if (data.cause === 0) {
                setInfo({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    photo: data.photo
                });
                setImg(data.photo == null ? "/static/img/logo1.png" : data.photo);
            } else {
                FailNotify('請先登入').then(function () {
                    return location.href = '/login';
                });
            }
        });
    };

    var handle_change = function handle_change(name, val) {
        change[name] = val;
        // console.log(name, change)
        setChange(change);
    };

    var handle_upload = function handle_upload() {
        var need2upload = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(change)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                i = _step.value;

                if (userinfo[i[0]] !== i[1]) {
                    need2upload = true;
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

        if (need2upload) {
            fetch('/account/ChangeProfile', {
                body: JSON.stringify(change),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            }).then(function (res) {
                if (res.status === 200) {
                    return res.json();
                } else {
                    FailNotify("資訊更新出現錯誤").then(function () {
                        location.href = location.href;
                    });
                }
            }).then(function (data) {
                console.log(data);
                if (data.cause !== 0) {
                    FailNotify("資訊更新出現錯誤").then(function () {
                        location.href = location.href;
                    });
                } else {
                    SuccessNotify("資料更新成功").then(function () {
                        location.href = location.href;
                    });
                }
            });
        } else {
            SuccessNotify("資料更新成功");
        }
    };

    var name2type = { name: 'text', email: 'email', phone: 'text' };

    return React.createElement(
        'div',
        { className: 'intercafe' },
        React.createElement(
            'div',
            { className: 'interface_title' },
            React.createElement(
                'p',
                { className: '' },
                '\u5728\u6B64\u4FEE\u6539\u4F60\u7684\u500B\u4EBA\u8CC7\u6599'
            )
        ),
        React.createElement(
            'div',
            { className: 'input_area' },
            React.createElement(
                'div',
                { className: 'form' },
                Object.entries(userinfo).map(function (i) {
                    // console.log(i[1])
                    if (i[0] !== 'photo') {
                        return React.createElement(UserInput, { orgin: i[1], type: name2type[i[0]], title: i[0], change: handle_change });
                    }
                }),
                React.createElement(
                    'div',
                    { className: 'form_submit' },
                    React.createElement('p', { className: 'form_title' }),
                    React.createElement(
                        'button',
                        { className: 'form_btn', onClick: handle_upload },
                        '\u78BA\u8A8D\u8B8A\u66F4'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'img_form' },
                React.createElement(UserImgInput, { orgin: user_img })
            )
        )
    );
};

var Main = function Main() {
    return React.createElement(
        'div',
        null,
        React.createElement(ToolBar, null),
        React.createElement(
            'div',
            { className: 'main_area' },
            React.createElement(UserInfo, null),
            React.createElement(Interface, null)
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));