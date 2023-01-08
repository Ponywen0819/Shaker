const AdminHeader = ({user_name})=>{
    const handle_logoff = () => {
        fetch('/account/Logoff',{
            method: 'POST'
        }).then(res=>{
            if(res.status === 200){
                SuccessNotify('登出成功').then(()=>location.href = location.href)
            }
        })
    }

    return(
        <div className={`header`}>
            <div className={`header-div-container`}>
                <div className={`logo-container`}>
                    <img src={"/static/img/logobar_white.png"}/>
                </div>
                <span className={`sublogo`}>控制中心</span>
            </div>
            <div className={`header-div-container`} onMouseEnter={()=>setDrop(true)} onMouseLeave={()=>setDrop(false)}>
                <span className={`header-user-info`}>您好！管理員 </span>
                <span className={`header-user-name`}>{user_name}</span>
                <button className={`header-logoff`} onClick={handle_logoff}>登出</button>
            </div>
        </div>
    )
}

const AdminASide = ({options})=>{
    return(
        <aside className={`aside`}>
            <div className={`aside-column`}>
            {
                options.map(option=>(
                    <a key={option.name} className={`aside-nav`} href={option.href}>
                        <div className={`nav-img-container`}>
                            <img className={`header-user-photo`} src={`/static/img/box.png`} />
                        </div>
                        <span className={`nav-text`}>{option.name}</span>
                    </a>
                ))
            }
            </div>
        </aside>
    )
}


const Main = ()=>{
    const [admin_name, setName] = React.useState('測試用名稱')

    const aside_options = [
        {name: '貨物管理', href:'/admin/shipping'},
        {name: '優惠券管理', href: '/admin/coupon'},
    ]

    React.useEffect(()=>{
        fetch('/admin/getAdminInfo',{
            method: 'GET',
        }).then((res)=>{
            if(res.status === 200){
                return res.json()
            }
            if(res.status === 401){
                location.href = '/login'
            }
        }).then((data)=>{
            console.log(data)
            if(data.cause === 0){
                setName(data.data.name)
            }
        })
    },[])

    const renderContent = ()=>{
        const contentType = location.pathname.slice(1).split('/')[1]
        console.log(contentType)
        if(contentType === 'shipping'){
            return <Shipping></Shipping>
        }
        else if(contentType === 'coupon'){
            return <Coupon></Coupon>
        }
    }

    return(
        <div>
            <AdminHeader user_name={admin_name}/>
            <AdminASide options={aside_options}/>
            {renderContent()}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)