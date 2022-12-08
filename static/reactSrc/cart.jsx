const CartLowerBar = ()=>(
    <div className=" cart_lower">
        <div className="cart_lower_container">
            <a className="w-1/5 lower_img_area" href={`/`}>
                <img className={`lower_img`} src="/static/img/logobar_white.png" alt="" />
            </a>
            <div className="cart_search_bar">
                <input type="text" name="" id="" className="cart_search_input"/>
                <button className="search_btn">
                    <img src="/static/img/search.svg" alt=""  className=""/>
                </button>
            </div>
        </div>
    </div>
)


const Main = ()=>{
    return [
        <nav>
            <UpperBar></UpperBar>
            <CartLowerBar></CartLowerBar>
        </nav>
        ,(
        <div className="main_area">
        </div>)
    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)