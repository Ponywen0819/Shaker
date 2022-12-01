const UserInfo = ()=>{
    const [username, setusername] = React.useState("Unknow");
    const [selectnum, setselectnum] = React.useState(['','','']);

    React.useEffect(() => {
       const path = window.location.pathname
        if(path == '/user/profile') setselectnum([" nowon_bar",'','']);
        else if(path == '/user/purchase')setselectnum([''," nowon_bar",'']);
        else setselectnum(['','',"nowon_bar"]);
    }, [])
    let main= (
        <aside className="side_bar">
            <div className="info_area">
                <img className="user_img" src="/static/img/logo1.png"/>
                <div>
                    <p className="user_name">{ username }</p>
                    <a className="edit_btn" href="">
                        <img src="/static/img/pencil.svg"></img>
                        <p>修改個人資訊</p>
                    </a>
                </div>
            </div>
            <a className={"normal_bar " + selectnum[0]} href="/user/profile">
                <img src="/static/img/person-square.svg"></img>
                <p>我的帳戶</p>
            </a>
            <a className={"normal_bar " + selectnum[1]} href="/user/purchase">
                <img src="/static/img/card-list.svg"></img>
                <p>購買清單</p>
            </a>
            <a className={"normal_bar " + selectnum[2]} href="/user/coupon">
                <img src="/static/img/ticket-detailed.svg"></img>
                <p>我的優惠券</p>
            </a>
        </aside>
    )
    return main
}