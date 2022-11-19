class ToolBar extends React.Component{
    render_upper(){
        let upper=(
            <div className="upper_container">
                <div className="upper_main nav_container">
                    <div className="w-1/5 upper_selction">
                        <div className="upper_nobar">
                            <a className="" href="">賣家中心</a>
                        </div>
                        <div className="upper_bar">
                            <p className="">聯絡我們</p>
                        </div>
                        <div>
                            <a href="">
                                <img src="/Shaker/static/img/github.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="w-1/5 upper_selction justify-end">
                        <div className="upper_nobar">
                            <a href="">註冊</a>
                        </div>
                        <div className="upper_bar">
                            <a className="" href="/login">登入</a>
                        </div>
                    </div>
                </div>
            </div>
        )
        return upper
    }
    render_lower(){
        let lower=(
            <div className=" lower_container">
                <div className="nav_container lower_main">  
                    <div className="w-1/5">
                        <img src="" alt="" />
                    </div>
                    <div className="search_bar">
                        <input type="text" name="" id="" className="search_text"/>
                        <button className="search_btn">
                            <img src="/Shaker/static/img/search.svg" alt=""  className=""/>
                        </button>
                    </div>
                    <div className="cart_aera">
                        <a  className="cart_link" href="">
                            <img src="/Shaker/static/img/cart.svg" alt="" className="cart_icon"/>
                        </a>
                    </div>
                </div>
            </div>
        )
        return lower
    }
    render(){
        let main=(
            <div className="toolbar">
                <this.render_upper></this.render_upper>
                <this.render_lower></this.render_lower>
            </div>
        )
        return main
    }
}