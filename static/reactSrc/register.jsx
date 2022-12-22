const Logo = () =>(
    <a href="/" className="logo_area">
        <img src="/static/img/logo2.png" alt="" />
    </a>
)

const handle_register = () => {
    fetch('account/PublicKey',{
        method: 'GET'
    }).then(function (respone){
        if(respone.status === 200){
            return respone.text()
        }
    }).then(function (data){
        var public_key = forge.pki.publicKeyFromPem(data) //data是你去跟後端請求回來的公鑰明文
        submit_data.password = forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(submit_data.password), 'RSA-OAEP', {md: forge.md.sha256.create(), mgf1: {md: forge.md.sha1.create()}}))

        fetch('account/Register',{
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById(`name`).value,
                account: document.getElementById(`account`).value,
                email: document.getElementById(`email`).value,
                phone: document.getElementById(`phone`).value,
                password: document.getElementById(`password`).value,
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
}

const check_input = ()=>{
    const p_1 = document.getElementById(`password`).value
    const p_2 = document.getElementById(`check`).value

    if(p_1 === p_2){
        handle_register()
    }
    else{
        document.getElementById(`check`).style = 'border: 1px solid red'
    }
}

const handle_number_input =(e, setter) =>{
    setter(e.target.value.replace(/[^0-9]/, ''));
}

const handle_text_input = (e, setter) =>{
    setter(e.target.value);
}

const InputBox = ({name, type, show, onInput})=>{
    const [val, setVal] = React.useState('')

    return <input className="input_bar p-2"
                  id={name}
                  type={type}
                  placeholder={show}
                  onInput={(e)=>onInput(e,setVal)}
                  value={val}/>
}

const Registeform = ()=>{
    let FormSetting = [
        {name: 'name', title: `Name`, type: 'text', onInput: handle_text_input},
        {name: 'account', title: `Account ID`, type: 'text', onInput: handle_text_input},
        {name: 'email', title: `Email`, type: 'text', onInput: handle_text_input},
        {name: 'phone', title: `Phone`, type: 'text', onInput: handle_number_input},
        {name: 'password', title: `Password`, type: 'password', onInput: handle_text_input},
        {name: 'check', title: `Check Password`, type: 'password', onInput: handle_text_input}
    ]

    return (
        <form className={`registe_form`} id={`form`}>
            {FormSetting.map((i)=>(<InputBox name={i.name} show={i.title} type={i.type} onInput={i.onInput}></InputBox>))}
            <input name={'submit'} type={`button`} className="btn login_btn" value={`註冊`} onClick={check_input}/>
        </form>
    )
}

const MainInterface = () =>(
    <div>
            <Logo></Logo>
            <div className="main_area">
                <div className="interface_area">
                    <div>
                        <h1 className="text-2xl font-bold">註冊</h1>
                    </div>
                    <Registeform></Registeform>
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
                    <div className="flex justify-center flex-col">
                        <p>已經有帳號了嗎?</p>
                        <a className="text-[cadetblue]" href="/login">登入</a>
                    </div>
                </div>
            </div>
    </div>
)


ReactDOM.createRoot(document.getElementById("main")).render(<MainInterface></MainInterface>)
// ReactDOM.render(<MainInterface />, document.getElementById("main"));