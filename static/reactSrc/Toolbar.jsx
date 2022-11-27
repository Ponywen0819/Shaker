class ToolBar extends React.Component{
    render_upper(){
        return (
            <div className="upper_container">
                <div className="upper_main nav_container">
                    <div className="w-1/5 upper_selction">
                        <div className="upper_nobar">
                            <a className="Toolbat_text" href="">賣家中心</a>
                        </div>
                        {/* <div className="upper_bar">
                            <p className="">聯絡我們</p>
                        </div> */}
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

    }
    render_lower(){
        return (
            <div className=" lower_container">
                <div className="nav_container lower_main">  
                    <div className="w-1/5">
                        <img src="/static/img/logo2.png" alt="" />
                    </div>
                    <div className="search_bar">
                        <input type="text" name="" id="" className="search_text"/>
                        <button className="search_btn">
                            <img src="/static/img/search.svg" alt=""  className=""/>
                        </button>
                    </div>
                    <div className="cart_aera">
                        <a  className="cart_link" href="">
                            <img src="/static/img/cart.svg" alt="" className="cart_icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <nav className="toolbar">
                <this.render_upper></this.render_upper>
                <this.render_lower></this.render_lower>
            </nav>
        )
    }
}