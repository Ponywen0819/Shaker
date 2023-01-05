const User_area = ({img, name})=>{
    const [append, setappend] = React.useState(false)

    const showappend = ()=>{
        setappend(true)
    }

    const hideappend = ()=>{
        setappend(false)
    }

    const handleLogout =()=>{
        fetch('/account/Logoff',{
            method: 'POST'
        }).then(res=>{
            if(res.status === 200){
                SuccessNotify('登出成功').then(()=>location.href = location.href)
            }
        })
    }

    return(
        <div className={`user_area`} onMouseEnter={()=>showappend()} onMouseLeave={()=>hideappend()} >
            <a className={`user_title`}>
                <div className={`Toolbar_user_img`} style={{backgroundImage: `url(${(img==null)?'/static/img/logo1.png':img.slice(1)})`}}></div>
                <p className={`text-white`}>{name}</p>
            </a>
            {append && (
                <div className={`Toolbar_user_section_area`}>
                    <a className={`font-bold Toolbar_user_section`} href={`/user/account/profile`}>我的帳號</a>
                    <a className={`font-bold Toolbar_user_section` } href={`/user/purchase`}>購買清單</a>
                    <button className={`font-bold Toolbar_user_section`} onClick={handleLogout}>登出</button>
                </div>
            )}

        </div>
    )
}


const UpperBar = ()=>{
    const [isLogin, setLog] = React.useState(false)
    const [userinfo, setinfo] = React.useState({name:'',img:''})

    const testLogin = ()=>{
            fetch('/account/GetUserDetail',{
                body: JSON.stringify({
                    require:["file_path", "name"]
                }),
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                }
            }).then((response)=>{
                if (response.status === 200){
                    return response.json()
                }
            }).then((data)=>{
                if (data.cause === 0){
                    setLog(true)
                    setinfo(data)
                }
            })

    }

    React.useEffect(()=>{
        testLogin()
    },[])

    return (<div className="upper_container">
                <div className="upper_main nav_container">
                    <div className="w-1/5 upper_selction">
                        <div className="upper_nobar">
                            <a className="Toolbat_text" href="/sellercenter/index">賣家中心</a>
                        </div>
                    </div>
                    {isLogin?
                        (
                            <User_area name={userinfo.name} img={userinfo.file_path}></User_area>
                        ):
                        (<div className="w-1/5 upper_selction justify-end">
                            <div className="upper_nobar">
                                <a className="Toolbat_text" href="/register">註冊</a>
                            </div>
                            <div className="upper_bar">
                                <a className="Toolbat_text" href="/login">登入</a>
                            </div>
                        </div>)
                    }
                </div>
            </div>)
}

const LowerBar = ()=>{
    const [search, setText] = React.useState('')
    const handle_search = ()=>{
        let qur = new URLSearchParams({search_word : search})
        console.log(qur.toString())
        document.location = `/search?${qur.toString()}`
    }

    return(
        <div className=" lower_container">
            <div className="nav_container lower_main">
                <a className="w-1/5 lower_img_area" href={`/`}>
                    <img className={`lower_img`} src="/static/img/logobar_orange.png" alt="" />
                </a>
                <div className="search_bar">
                    <input type="text" name="" id="" className="search_text" value={search} onInput={(e)=>setText(e.target.value)}/>
                    <button className="search_btn" onClick={()=>handle_search()}>
                        <img src="/static/img/search.svg" alt=""  className=""/>
                    </button>
                </div>
                <div className="cart_aera">
                    <a  className="cart_link" href="/cart">
                        <img src="/static/img/cart.svg" alt="" className="cart_icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

const ToolBar = ()=>(
    <nav>
        <UpperBar></UpperBar>
        <LowerBar></LowerBar>
    </nav>
)