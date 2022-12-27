const Navbutton = ({img, url, title,activate})=>(
    <a  className={`header ${activate? 'now_on':''}`} href={url}>
        {img? (<img src= {`/static/img/${img}`} ></img>): ''}
        <p>{title}</p>
    </a>
)

const Standerbar = ({title,url,items,img})=>{

    const isOpened = (items? items.some((i)=> (i.url == window.location.pathname)) : false);

    return (
        <div className={`normal_bar`} >
            <Navbutton
                title={title}
                url={url}
                img={img}
                activate={items? false:(window.location.pathname==url)}>
            </Navbutton>
            {isOpened &&
                <div className={`submenu`}>
                    {items ? items.map(subItem => (
                        <Navbutton title={subItem.title} url={subItem.url}
                                   activate={window.location.pathname == subItem.url}></Navbutton>
                    )) : ''}
                </div>
            }
        </div>
    )
}

const UserInfo = ()=>{
    const [username, setusername] = React.useState("");
    const [user_photo, setPhoto] = React.useState('')
    React.useEffect(() => {}, [])
    const obj = [
        { title: '我的帳戶',
            url: '/user/account/profile',
            img: 'person-square.svg',
            item: [
                {title: "更改個人資訊",url: '/user/account/profile'},
                {title: "更改密碼", url: '/user/account/password'}
            ]},
        { title: '購買清單', url: '/user/purchase', img: 'card-list.svg'},
        { title: '我的優惠券', url: '/user/coupon', img: 'ticket-detailed.svg'}
    ]

    React.useState(()=>{
        fetch('/account/GetUserDetail',{
            method:"POST",
            body:JSON.stringify({
                require:['photo', 'name']
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then(res=>{
            const status_code = res.status
            if(status_code === 200){
                return res.json()
            }
            else if(status_code === 401){
                FailNotify('請先登入').then(()=>location.herf = location.href)
            }
        }).then(data=>{
            const return_coode = data.cause
            if(return_coode === 0){
                setusername(data.name)
                setPhoto(data.photo)
            }
            else{
                FailNotify('取得使用者資料發生錯誤')
            }
        },[])


    })

    return (
        <aside className="side_bar">
            <div className="info_area">
                <div className="user_img" style={{backgroundImage: `url(${(user_photo==null)?'/static/img/logo1.png':user_photo})`}}></div>
                <div>
                    <p className="user_name">{ username }</p>
                    <a className="edit_btn" href="/user/account/profile">
                        <img src="/static/img/pencil.svg"></img>
                        <p>修改個人資訊</p>
                    </a>
                </div>
            </div>
            {obj.map(i=>(
                <Standerbar
                    title={i.title}
                    url={i.url}
                    type={i.type}
                    img={i.img}
                    items={i.item}>
                </Standerbar>
            ))}
        </aside>
    )
}