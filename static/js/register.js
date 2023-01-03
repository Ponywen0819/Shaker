var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Logo = function Logo() {
    return React.createElement(
        "a",
        { href: "/", className: "logo_area" },
        React.createElement("img", { src: "/static/img/logo2.png", alt: "" })
    );
};

var handle_register = function handle_register() {
    fetch('account/PublicKey', {
        method: 'GET'
    }).then(function (respone) {
        if (respone.status === 200) {
            return respone.text();
        }
    }).then(function (data) {
        var public_key = forge.pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文
        var encode_password = forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(document.getElementById("password").value), 'RSA-OAEP', { md: forge.md.sha256.create(), mgf1: { md: forge.md.sha1.create() } }));

        fetch('account/Register', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById("name").value,
                account_id: document.getElementById("account").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                password: encode_password
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (respons) {
            if (respons.status === 200) {
                return respons.json();
            }
        }).then(function (json) {
            if (json.cause === 0) {
                SuccessNotify('註冊成功').then(function () {
                    location.href = '/';
                    console.log('success');
                });
            } else {
                // 登入失敗通知
                FailNotify('註冊出現錯誤');
                console.log(json.cause);
            }
        });
    });
};

var check_input = function check_input() {
    var p_1 = document.getElementById("password").value;
    var p_2 = document.getElementById("check").value;

    if (p_1 === p_2) {
        handle_register();
    } else {
        document.getElementById("check").style = 'border: 1px solid red';
        console.log('local');
    }
};

var handle_number_input = function handle_number_input(e, setter) {
    setter(e.target.value.replace(/[^0-9]/, ''));
};

var handle_text_input = function handle_text_input(e, setter) {
    setter(e.target.value);
};

var InputBox = function InputBox(_ref) {
    var name = _ref.name,
        type = _ref.type,
        show = _ref.show,
        _onInput = _ref.onInput;

    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        val = _React$useState2[0],
        setVal = _React$useState2[1];

    return React.createElement("input", { className: "input_bar p-2",
        id: name,
        type: type,
        placeholder: show,
        onInput: function onInput(e) {
            return _onInput(e, setVal);
        },
        value: val });
};

var Registeform = function Registeform() {
    var FormSetting = [{ name: 'name', title: "Name", type: 'text', onInput: handle_text_input }, { name: 'account', title: "Account ID", type: 'text', onInput: handle_text_input }, { name: 'email', title: "Email", type: 'text', onInput: handle_text_input }, { name: 'phone', title: "Phone", type: 'text', onInput: handle_number_input }, { name: 'password', title: "Password", type: 'password', onInput: handle_text_input }, { name: 'check', title: "Check Password", type: 'password', onInput: handle_text_input }];

    return React.createElement(
        "form",
        { className: "registe_form", id: "form" },
        FormSetting.map(function (i) {
            return React.createElement(InputBox, { name: i.name, show: i.title, type: i.type, onInput: i.onInput });
        }),
        React.createElement("input", { name: 'submit', type: "button", className: "btn login_btn", value: "\u8A3B\u518A", onClick: check_input })
    );
};

var MainInterface = function MainInterface() {
    return React.createElement(
        "div",
        null,
        React.createElement(Logo, null),
        React.createElement(
            "div",
            { className: "main_area" },
            React.createElement(
                "div",
                { className: "interface_area" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        { className: "text-2xl font-bold" },
                        "\u8A3B\u518A"
                    )
                ),
                React.createElement(Registeform, null),
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
                    { className: "flex justify-center flex" },
                    React.createElement(
                        "p",
                        null,
                        "\u5DF2\u7D93\u6709\u5E33\u865F\u4E86\u55CE?"
                    ),
                    React.createElement(
                        "a",
                        { className: "text-[cadetblue]", href: "/login" },
                        "\u767B\u5165"
                    )
                )
            )
        )
    );
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(MainInterface, null));
// ReactDOM.render(<MainInterface />, document.getElementById("main"));