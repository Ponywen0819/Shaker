var ToolBar = function ToolBar() {
    return React.createElement(
        "a",
        { className: "logo_area", href: "/" },
        React.createElement("img", { src: "/static/img/Logo2.png", alt: "" })
    );
};

var handle_login = function handle_login() {
    fetch('account/PublicKey', {
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

        fetch('account/Login', {
            method: 'POST',
            body: JSON.stringify({
                account: account,
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
            if (json.status === "success") {
                location.href = '/';
                console.log('success');
            } else {
                // 登入失敗通知
                console.log('fail');
            }
        });
    });
};

var Login = function Login() {
    var mounted = React.useRef();

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
            React.createElement("input", { className: "input_main", type: "email", name: "", id: "account", placeholder: "\u5E33\u865F" }),
            React.createElement("input", { className: "input_main", type: "password", name: "", id: "password", placeholder: "\u5BC6\u78BC" }),
            React.createElement(
                "a",
                { className: "help_text", href: "static/reactSrc/login" },
                "\u5FD8\u8A18\u5BC6\u78BC"
            ),
            React.createElement(
                "button",
                { id: "login", className: "login_btn btn", onClick: handle_login },
                "\u767B\u5165"
            ),
            React.createElement(
                "div",
                { className: "or_area" },
                "s",
                React.createElement("div", { className: "or_bar" }),
                React.createElement(
                    "div",
                    null,
                    "\u6216"
                ),
                React.createElement("div", { className: "or_bar" })
            ),
            React.createElement(
                "button",
                { className: "btn auth_btn" },
                React.createElement("img", { src: "/static/img/google_logo.svg", alt: "", className: "sm_logo" }),
                "Google"
            ),
            React.createElement(
                "button",
                { className: "btn auth_btn" },
                React.createElement("img", { src: "/static/img/github_black.svg", alt: "", className: "sm_logo" }),
                "Github"
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