const CartLowerBar = ()=>(
    <div className=" cart_lower">
        <div className="cart_lower_container">
            <a className="w-2/5 cart_lower_img_area" href={`/`}>
                <img className={`cart_lower_img`} src="/static/img/logobar_white.png" alt="" />
                <p className={`cart_logo_text`}>購物車</p>
            </a>
            <div className="cart_search_bar">
                <input type="text" name="" id="" className="cart_search_input"/>
                <button className="cart_search_btn">
                    <img src="/static/img/search.svg" alt=""  className=""/>
                </button>
            </div>
        </div>
    </div>
)

const ContentTitle = ()=>(
    <div className={`cart_title title`}>
        <div className={`title_btn_area`}>
            <button className={'title_btn'}></button>
        </div>
        <p className={``} style={{width: '35%'}}>商品</p>
        {
            ['單價', '數量', '總計', '操作'].map(i=>(<p className={`title_text`} style={{width: '15%'}}>{i}</p>))
        }
    </div>
)

const Order_title = ({shop_name})=>{
    return (<div className={`order_title title`}>
                <div className={'title_btn_area'}>
                    <button className={`title_btn`}></button>
                </div>
                <div className={`title_text`}>
                    <a href={``}>{shop_name}</a>
                </div>
            </div>)
}

const Product = ()=>(
    <div className={`cart_title title`}>
        <div className={`title_btn_area`}>
            <button className={'title_btn'}></button>
        </div>
        <p className={``} style={{width: '35%'}}>商品</p>
        {
            ['單價', '數量', '總計', '操作'].map(i=>(<p className={`title_text`} style={{width: '15%'}}>{i}</p>))
        }
    </div>
)

const Order = ({products})=>{
    return(
        <Order_title shop_name={`我超棒`}>
        {
            products.map(i => (
                <Product></Product>
            ))
        }
        </Order_title>
    )
}

const Main = ()=>{
    return [
        <div className={`mb-8`}>
            <UpperBar></UpperBar>
            <CartLowerBar></CartLowerBar>
        </div>,
        <div className="main">
            <ContentTitle></ContentTitle>
            <Order products={[]}></Order>
        </div>

    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)