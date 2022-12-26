var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var handle_text_change = function handle_text_change(element, setter) {
    setter(element.value);
};

var Interface = function Interface() {
    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        old_pass = _React$useState2[0],
        setOld = _React$useState2[1];

    var _React$useState3 = React.useState(''),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        new_pass = _React$useState4[0],
        setNew = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        check = _React$useState6[0],
        setCheck = _React$useState6[1];

    var handle_update = function handle_update() {

        if (new_pass === check) {
            fetch('/account/PublicKey', {
                method: 'GET'
            }).then(function (respone) {
                if (respone.status === 200) {
                    return respone.text();
                }
            }).then(function (data) {
                var public_key = forge.pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文
                fetch('/account/ChangePassword', {
                    method: 'POST',
                    body: JSON.stringify({
                        old: forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(old_pass), 'RSA-OAEP', { md: forge.md.sha256.create(), mgf1: { md: forge.md.sha1.create() } })),
                        new: forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(new_pass), 'RSA-OAEP', { md: forge.md.sha256.create(), mgf1: { md: forge.md.sha1.create() } }))
                    }),
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then(function (res) {
                    if (res.status === 200) {
                        return res.json();
                    } else {
                        FailNotify("密碼更新發生錯誤");
                    }
                }).then(function (data) {
                    if (data.cause === 0) {
                        SuccessNotify("密碼更新成功").then(function () {
                            return location.href = location.href;
                        });
                    } else {
                        FailNotify("密碼更新發生錯誤");
                    }
                });
            });
        } else {}
    };

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
                { className: 'form_line' },
                React.createElement(
                    'p',
                    { className: 'form_title' },
                    '\u820A\u5BC6\u78BC'
                ),
                React.createElement('input', { className: 'form_input', type: 'password', onInput: function onInput(e) {
                        return handle_text_change(e.target, setOld);
                    }, value: old_pass })
            ),
            React.createElement(
                'div',
                { className: 'form_line' },
                React.createElement(
                    'p',
                    { className: 'form_title' },
                    '\u65B0\u5BC6\u78BC'
                ),
                React.createElement('input', { className: 'form_input', type: 'password', onInput: function onInput(e) {
                        return handle_text_change(e.target, setNew);
                    }, value: new_pass })
            ),
            React.createElement(
                'div',
                { className: 'form_line' },
                React.createElement(
                    'p',
                    { className: 'form_title' },
                    '\u518D\u6B21\u8F38\u5165\u820A\u5BC6\u78BC'
                ),
                React.createElement('input', { className: 'form_input', type: 'password', onInput: function onInput(e) {
                        return handle_text_change(e.target, setCheck);
                    }, value: check })
            ),
            React.createElement(
                'div',
                { className: 'form_submit' },
                React.createElement('p', { className: 'form_title' }),
                React.createElement(
                    'button',
                    { className: 'form_btn', onClick: handle_update },
                    '\u78BA\u8A8D\u8B8A\u66F4'
                )
            )
        )
    );
};

var Main = function Main() {
    return [React.createElement(ToolBar, null), React.createElement(
        'div',
        { className: 'main_area' },
        React.createElement(UserInfo, null),
        React.createElement(Interface, null)
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));