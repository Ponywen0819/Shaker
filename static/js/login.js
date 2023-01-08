var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var ToolBar = function ToolBar() {
    return React.createElement(
        "a",
        { className: "logo_area", href: "/" },
        React.createElement("img", { src: "/static/img/Logo2.png", alt: "" })
    );
};

var handle_login = function handle_login() {
    fetch('/account/PublicKey', {
        method: 'GET'
    }).then(function (respone) {
        if (respone.status === 200) {
            return respone.text();
        }
    }).then(function (data) {
        var account = document.getElementById("account").value;
        var password = document.getElementById('password').value;

        var public_key = forge.pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文
        var encode_password = forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(password), 'RSA-OAEP', { md: forge.md.sha256.create(), mgf1: { md: forge.md.sha1.create() } }));
        console.log('success');

        fetch('/account/Login', {
            method: 'POST',
            body: JSON.stringify({
                account: account,
                password: encode_password
            }),
            headers: { 'content-type': 'application/json' }
        }).then(function (respons) {
            if (respons.status === 200) {
                return respons.json();
            }
        }).then(function (json) {
            if (json.cause === 0) {
                SuccessNotify("登入成功").then(function () {
                    location.href = '/';
                });
            } else {
                // FailNotify("帳號密碼錯誤")
                fetch('/admin/Login', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({
                        account: account,
                        password: encode_password
                    })
                }).then(function (res) {
                    if (res.status === 200) {
                        return res.json();
                    }
                }).then(function (data) {
                    if (data.cause === 0) {
                        SuccessNotify('管理員登入成功').then(function () {
                            location.href = '/admin/shipping';
                        });
                    } else {
                        FailNotify('帳號或密碼錯誤');
                    }
                });
            }
        });
    });
};

var InputBox = function InputBox(_ref) {
    var id = _ref.id,
        type = _ref.type,
        show = _ref.show,
        empty = _ref.empty;

    return React.createElement(
        "div",
        { className: 'w-full' },
        React.createElement("input", { className: "input_main w-full",
            type: type,
            id: id,
            placeholder: show,
            style: { border: "1px solid " + (empty ? 'red' : 'gray') }
        })
    );
};

var CheckForm = function CheckForm(seta, setp) {
    var vaild = true;
    if (document.getElementById('account').value === '') {
        seta(true);
        vaild = false;
    } else {
        seta(false);
    }
    if (document.getElementById('password').value === '') {
        setp(true);
        vaild = false;
    } else {
        setp(false);
    }
    if (vaild) handle_login();
};

var Login = function Login() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        acc_emp = _React$useState2[0],
        setacc = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        pas_emp = _React$useState4[0],
        setpas = _React$useState4[1];

    return [React.createElement(ToolBar, null), React.createElement(
        "div",
        { className: "main_area" },
        React.createElement(
            "div",
            { className: "login_area" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { className: "text-2hxl font-bold" },
                    "\u767B\u5165"
                )
            ),
            React.createElement(InputBox, { id: "account", type: "email", show: "\u5E33\u865F", empty: acc_emp }),
            React.createElement(InputBox, { id: "password", type: "password", show: "\u5BC6\u78BC", empty: pas_emp }),
            acc_emp || pas_emp ? React.createElement(
                "p",
                { style: { color: 'red', 'font-size': '10px' } },
                "\u5FC5\u9808\u5165\u5E33\u865F\u5BC6\u78BC"
            ) : '',
            React.createElement(
                "button",
                { id: "login", className: "login_btn btn", onClick: function onClick() {
                        return CheckForm(setacc, setpas);
                    } },
                "\u767B\u5165"
            ),
            React.createElement(
                "div",
                { className: "or_area" },
                React.createElement("div", { className: "or_bar" }),
                React.createElement(
                    "div",
                    null,
                    "\u6216"
                ),
                React.createElement("div", { className: "or_bar" })
            ),
            React.createElement(
                "div",
                { className: "flex justify-center" },
                React.createElement(
                    "p",
                    null,
                    "\u5C1A\u672A\u64C1\u6709\u5E33\u865F?"
                ),
                React.createElement(
                    "a",
                    { className: "text-[cadetblue]", href: "/register" },
                    "\u8A3B\u518A"
                )
            )
        )
    )];
};

var mont = ReactDOM.createRoot(document.getElementById("main"));
mont.render(React.createElement(Login, null));