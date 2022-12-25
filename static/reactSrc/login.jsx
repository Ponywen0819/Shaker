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
                email: account,
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
            if(json.status === `success`) {
                SuccessNotify("登入成功").then(()=>{
                    location.href = '/'
                })
            }
            else{
                FailNotify("帳號密碼錯誤")
            }
        })
    })
}

const InputBox = ({id, type, show, empty})=>{
    return (<div className={'w-full'}>
                <input className="input_main w-full"
                       type={type}
                       id={id}
                       placeholder={show}
                       style={{border: `1px solid ${empty? 'red':'gray'}`}}
                />
            </div>)
}

const CheckForm = (seta, setp)=>{
    let vaild = true
    if(document.getElementById('account').value === ''){
        seta(true)
        vaild = false
    }
    else{
        seta(false)
    }
    if(document.getElementById('password').value === ''){
        setp(true)
        vaild = false
    }
    else{
        setp(false)
    }
    if(vaild)
        handle_login()
}

const Login = () => {
    const [acc_emp, setacc] = React.useState(false)
    const [pas_emp, setpas] = React.useState(false)

    return [<ToolBar></ToolBar>,
            <div className="main_area">
                <div className="login_area">
                    <div>
                        <h1 className="text-2hxl font-bold">登入</h1>
                    </div>
                    <InputBox id={`account`} type={`email`} show={`帳號`} empty={acc_emp}></InputBox>
                    <InputBox id={`password`} type={`password`} show={`密碼`} empty={pas_emp}></InputBox>
                    {
                        acc_emp || pas_emp? <p style={{color: 'red', 'font-size':'10px'}}>必須入帳號密碼</p>:''
                    }
                    <a className="help_text" href="static/reactSrc/login">忘記密碼</a>
                    <button id={`login`} className="login_btn btn" onClick={()=>CheckForm(setacc, setpas)}>登入</button>
                    <div className="or_area">
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
