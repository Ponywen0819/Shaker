const UpperBar = ()=>(
    <div className="upper_container">
        <div className="upper_main nav_container">
            <div className="w-1/5 upper_selction">
                <div className="upper_nobar">
                    <a className="Toolbat_text" href="">賣家中心</a>
                </div>
            </div>
            <div className="w-1/5 upper_selction justify-end">
                <div className="upper_nobar">
                    <a className="Toolbat_text" href="/register">註冊</a>
                </div>
                <div className="upper_bar">
                    <a className="Toolbat_text" href="/login">登入</a>
                </div>
            </div>
        </div>
    </div>
)

const LowerBar = ()=>(
    <div className=" lower_container">
        <div className="nav_container lower_main">
            <a className="w-1/5 lower_img_area" href={`/`}>
                <img className={`lower_img`} src="/static/img/logobar_orange.png" alt="" />
            </a>
            <div className="search_bar">
                <input type="text" name="" id="" className="search_text"/>
                <button className="search_btn">
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

const ToolBar = ()=>(
    <nav>
        <UpperBar></UpperBar>
        <LowerBar></LowerBar>
    </nav>
)