const InputList = ({info}) =>{
    const translate={name: "使用者名稱",email: "電子郵件",phone: "電話號碼"}
    var list =[]
    for(const [title, value] of Object.entries(info)){
        if(title=="img") continue;
        let row=(
            <div className="form_line">
                <p className="form_title">{translate[title]}</p>
                <input className="form_input" type="text" value={value} name={title}/>
            </div>
        )
        list.push(row)
    }
    return list
}

const Interface = () => {
    const [userinfo,setinfo] = React.useState({
        name: "",
        email: "",
        phone: "",
        img: "/static/img/logo1.png"
    })

    const getInfo = ()=>{
        fetch('/account/GetUserDetail',{
            method: 'POST'
        }).then((response)=>{
            if(response.status == 200) {
                return response.json()
            }
            else {
                FailNotify('請先登入').then(()=>(
                    location.href='/login'
                ))
            }
        }).then((data)=>{
            if(data.cause === 200){
                setinfo({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    img: (data.img==null)? "/static/img/logo1.png":data.img
                })
            }
            else {
                FailNotify('請先登入').then(()=>(
                    location.href='/login'
                ))
            }
        })
    }

    React.useEffect(()=>{
        getInfo()
    },[])

    return(
        <div className="intercafe">
            <div className="interface_title">
                <p className="">在此修改你的個人資料</p>
            </div>
            <div className="input_area">
                <form className="form">
                    <InputList info={userinfo}></InputList>
                    <div className="form_submit">
                        <p className="form_title"></p>
                        <button className="form_btn">確認變更</button>
                    </div>
                </form>
                <div className="img_form">
                    <div className="img_form_container">
                        <img className="from_img" src={userinfo.img}></img>
                        <div className="img_form_btn_area">
                            <button className="img_form_btn">更改照片</button>
                        </div>
                        <p className="img_form_text">我只吃png :P</p>
                    </div>
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