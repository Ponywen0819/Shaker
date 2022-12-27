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
        <p className={``} style={{width: '45%'}}>商品</p>
        {
            ['單價', '數量', '總計', '操作'].map(i=>(
                <p className={`title_text`} style={{width: (i==='數量')?'14%':'12%'}}>{i}</p>
            ))
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

const Product = ({item}) =>(
    <div className={`product_container`}>
        <div className={`title_btn_area`}>
            <button className={'title_btn'}></button>
        </div>
        <div className={`product_info_container`}>
            <div className={`product_img`} style={{backgroundImage: `url(${item  .img})`}}></div>
            <p>{item.name}</p>
        </div>
        <p className={`w-[12%] flex justify-center`}>${item.origin}</p>
        <div className={`w-[14%] flex justify-center`}>
            <div className={`product_number_container`}>
                <button className={`product_number_btn`}>-</button>
                <input type={`text`} className={`product_number`} value={item.number}/>
                <button className={`product_number_btn`}>+</button>
            </div>
        </div>
        <p className={`w-[12%] flex justify-center`}>${item.number * item.origin}</p>
        <div className={`w-[12%] flex justify-center`}>
            <button>X</button>
        </div>
    </div>
)

const Order = ({products})=>{
    const [orders, setOrder] = React.useState({})

    React.useEffect(()=>{
        let a ={}
        for(i of products){
            let order_keys = Object.keys(a)
            if(order_keys.includes(i.shop.toString())){
                console.log(a[i.shop])
                a[i.shop].push(i)
                console.log(a[i.shop])
            }
            else{
                a[i.shop] = [i]
            }
        }
        setOrder(a)
    },[])

    return(
        <div className={``}>
            {
                Object.entries(orders).map(order=>{
                    return(
                        <div className={`order_container`}>
                            <Order_title shop_name={order[0]}></Order_title>
                            {
                                order[1].map(i=>(
                                    <Product item={i}></Product>
                                ))
                            }
                        </div>
                    )
                })
            }


        </div>
    )
}

const Main = ()=>{
    const products = [
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 2, },
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 2,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 2,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,},
        { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', number:1,origin : 123, shop : 1,}
    ]

    return [
        <div className={`mb-8`}>
            <UpperBar></UpperBar>
            <CartLowerBar></CartLowerBar>
        </div>,
        <div className="main">
            <ContentTitle></ContentTitle>
            <Order products={products}></Order>
        </div>

    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)