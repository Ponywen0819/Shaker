const ToolBar = () =>(
        <a className="logo_area" href="/">
            <img src="/static/img/Logo2.png" alt="" />
        </a>
    )


const handle_login = () =>{
    fetch('account/PublicKey',{
        method: 'GET'
    }).then(function (respone){
        if(respone.status === 200){
            return respone.text()
        }
    }).then(function (data){
        const account = document.getElementById(`account`).value
        const password = document.getElementById('password').value

        var public_key = forge.pki.publicKeyFromPem(data) //data是你去跟後端請求回來的公鑰明文
        const encode_password = forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(password), 'RSA-OAEP', {md: forge.md.sha256.create(), mgf1: {md: forge.md.sha1.create()}}))
        console.log('success')

        fetch('account/Login',{
            method: 'POST',
            body: JSON.stringify({
                account: account,
                password: encode_password
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then(function(respons) {
            if(respons.status === 200){
                return respons.json()
            }
        }).then(function (json){
            if(json.status === `success`){
                location.href = '/'
                console.log('success')
            }
            else{
                // 登入失敗通知
                console.log('fail')
            }
        })
    })

    // 使用API 取得公鑰


}

const Login = () => {
    const mounted=React.useRef();

    React.useEffect(()=>{
        if(mounted.current===false){
            console.log('12323')
            mounted.current=true;
            document.getElementById('login').addEventListener('click', (e)=>( console.log('q123') ))
        }
    });

    return [<ToolBar></ToolBar>,
            <div className="main_area">
                <div className="login_area">
                    <div>
                        <h1 className="text-2hxl font-bold">登入</h1>
                    </div>
                    <input className="input_main" type="email" name="" id={`account`} placeholder="帳號"/>
                    <input className="input_main" type="password" name=""  id={`password`} placeholder="密碼"/>
                    <a className="help_text" href="static/reactSrc/login">忘記密碼</a>
                    <button id={`login`} className="login_btn btn" onClick={()=>(handle_login())}>登入</button>
                    <div className="or_area">s
                        <div className="or_bar"></div>
                        <div>或</div>
                        <div className="or_bar"></div>
                    </div>
                    <button className="btn auth_btn">
                        <img src="/static/img/google_logo.svg" alt="" className="sm_logo"/>
                        Google
                    </button>
                    <button className="btn auth_btn">
                        <img src="/static/img/github_black.svg" alt="" className="sm_logo"/>
                        Github
                    </button>
                    <div className="flex justify-center">
                        <p>尚未擁有帳號?</p>
                        <a className="text-[cadetblue]" href="/register">註冊</a>
                    </div>
                </div>
            </div>
    ]
}




const mont = ReactDOM.createRoot(document.getElementById("main"))
mont.render(<Login></Login>)
