const handle_text_change = (element, setter)=>{
    setter(element.value)
}

const Interface = ()=>{
    const [old_pass, setOld] = React.useState('')
    const [new_pass, setNew] = React.useState('')
    const [check, setCheck] = React.useState('')

    const handle_update = ()=>{

        if(new_pass === check){
            fetch('/account/PublicKey',{
                method: 'GET'
            }).then(function (respone){
                if(respone.status === 200){
                    return respone.text()
                }
            }).then(function (data) {
                var public_key = forge.pki.publicKeyFromPem(data) //data是你去跟後端請求回來的公鑰明文
                fetch('/account/ChangePassword', {
                    method: 'POST',
                    body: JSON.stringify({
                        old: forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(old_pass), 'RSA-OAEP', {md: forge.md.sha256.create(), mgf1: {md: forge.md.sha1.create()}})),
                        new: forge.util.encode64(public_key.encrypt(forge.util.encodeUtf8(new_pass), 'RSA-OAEP', {md: forge.md.sha256.create(), mgf1: {md: forge.md.sha1.create()}}))
                    }),
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then((res) => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        FailNotify("密碼更新發生錯誤")
                    }
                }).then((data) => {
                    if (data.cause === 0) {
                        SuccessNotify("密碼更新成功").then(()=>location.href= location.href)
                    } else {
                        FailNotify("密碼更新發生錯誤")
                    }
                })
            })
        }
        else{
        }
    }

    return(
        <div className="intercafe">
            <div className="interface_title">
                <p className="">在此修改你的個人資料</p>
            </div>
            <div className="input_area">
                <div className="form_line">
                    <p className="form_title">舊密碼</p>
                    <input className="form_input" type="password" onInput={(e)=>handle_text_change(e.target,setOld)} value={old_pass}/>
                </div>
                <div className="form_line">
                    <p className="form_title">新密碼</p>
                    <input className="form_input" type="password" onInput={(e)=>handle_text_change(e.target,setNew)} value={new_pass}/>
                </div>
                <div className="form_line">
                    <p className="form_title">再次輸入舊密碼</p>
                    <input className="form_input" type="password" onInput={(e)=>handle_text_change(e.target,setCheck)} value={check}/>
                </div>
                <div className="form_submit">
                    <p className="form_title"></p>
                    <button className="form_btn" onClick={handle_update}>確認變更</button>
                </div>
            </div>
        </div>
    )
}


const Main = ()=>{
    return [
        <ToolBar></ToolBar>,(
        <div className="main_area">
            <UserInfo></UserInfo>
            <Interface></Interface>
        </div>)
    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)