const Selecter = ({now_on})=>{
    const choise = ['全部', '待出貨', '運送中', '已完成']
    return(
        <div className={`shipping_container mb-8 flex items-center`}>
            {
                choise.map(i =>(
                    <button className={`choise_btn ${(i === choise[now_on]) && 'choosen_btn'}`}>
                        <p>{i}</p>
                    </button>
                ))
            }
        </div>
    )
}

const Item = ({item})=>{
    const shipping_state = ['待出貨', '運送中', '已完成']
    const payment_state = ['貨到付款', '信用卡', '轉帳']

    return(
        <div className={`flex list_title mb-3 items-center`}>
            <div className={`flex flex-col w-[50%]`}>
                {
                    item.items.map(item=>(
                        <div className={`flex mb-2  `}>
                            <div className={`item_img`} style={{backgroundImage: `url(${item.img})`}}></div>
                            <p className={``}>{item.name}</p>
                        </div>
                    ))
                }
            </div>
            <p className={`w-[15%] text-center text-sm text-gray-500`}>{shipping_state[item.state]}</p>
            <p className={`w-[15%] text-center text-sm text-gray-500`}>{payment_state[item.payment]}</p>
            <p className={`w-[20%] text-right text-xl text-[#fc753e]`}>{`$${item.price}`}</p>
        </div>
    )
}

const ItemList = ({item_list})=>{
    return(
        <div className={`shipping_container mb-8 px-6 py-3`}>
            <div className={`flex list_title mb-3`}>
                <p className={`w-[50%]`}>商品</p>
                <p className={`w-[15%] text-center`}>狀態</p>
                <p className={`w-[15%] text-center`}>付款方式</p>
                <p className={`w-[20%] text-right`}>金額</p>
            </div>
            {
                item_list.map(item=>(
                    <Item item={item}></Item>
                ))
            }
        </div>
    )
}

const ShiipingArea = ()=>{
    const [items, setItems] = React.useState([])

    React.useEffect(()=>{
        setItems([
            {items: [{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 0, state:1},
            {items: [{img: '/static/img/logo1.png', name:'12'},{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 1, state:2},
            {items: [{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 2, state:0},
            {items: [{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 2, state:1},
            {items: [{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 1, state:2},
            {items: [{img: '/static/img/logo1.png', name:'12'}], price: 100, payment: 0, state:0},
        ])
    },[])

    return(
        <div className={`w-1/2 grow`}>
            <Selecter now_on={1}></Selecter>
            <ItemList item_list={items}></ItemList>
        </div>
    )
}


const Main = ()=>{
    return(
        <div>
            <SellerBar></SellerBar>
            <div className={`flex`}>
                <Sidebar></Sidebar>
                <ShiipingArea></ShiipingArea>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)