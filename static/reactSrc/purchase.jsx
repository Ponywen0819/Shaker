const SelectionItem = ({typename, activate, onclick}) => {
    return (
        <button className={`section_btn ${activate ? 'selection_btn_on' : ''}`} onClick={() => onclick(typename)}>
            <p>{typename}</p>
        </button>
    )
}


const Selection = ({items, state, handleClick}) => (
    <div className={`section`}>{items.map(i => (
        <SelectionItem typename={i} activate={(state === i)} onclick={handleClick}></SelectionItem>
    ))}
    </div>
)


const Item = ({name, img, num, price}) => (
    <div className={`item`}>
        <div className={`item_info`}>
            <div className={`item_img`} style={{'backgroundImage': `url(${img})`}}></div>
            <div className={`item_text`}>
                <p className={`item_name`}>{name}</p>
                <p className={`item_num`}> {`x ${num}`}</p>
            </div>
        </div>
        <p className={`item_price`}>{`$${price * num}`}</p>
    </div>
)


const ItemList = ({state, price, products, start, end}) => {
    const stateName = ['已成立', '運送中', '已完成'];

    console.log(products)
    return (
        <div className={`order`}>
            <div className={`order_nav`}>
                <p className={`order_nav_title`}>{stateName[state]}</p>
            </div>
            <div className={``}></div>
            {
                (products !== undefined) &&
                products.map(p => (
                    <Item name={p.name} img={p.photo.slice(1)} price={p.price} num={p.number}></Item>
                ))
            }
            <div className={`order_tail`}>
                <div>
                    <p className={`order_time`}>{`start time : ${start.getFullYear()}/${start.getMonth() + 1}/${start.getDate()}`}</p>
                    {
                        (end > new Date()) ?
                            <p className={`order_time`}>{`end time : ${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()} (maybe)`}</p> :
                            <p className={`order_time`}>{`end time : ${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()} `}</p>
                    }
                </div>
                <div className={`order_price_area`}>
                    <p>訂單金額:</p>
                    <p className={`order_price`}>${price}</p>
                </div>
            </div>
        </div>
    )
}


const Interface = () => {
    const [state, setState] = React.useState("全部");
    const [orders, setOrders] = React.useState([])

    const handleClick = (i) => {
        setState(i)
    }

    React.useEffect(() => {
        fetch('/product/GetOrderList', {
            method: 'POST'
        }).then(res => {
            if (res.status === 200) {
                return res.json()
            }
        }).then(data => {
            console.log(data)
            if (data.cause === 0) {
                setOrders(data.data)
            }
        })
    }, [])

    return (
        <div className={`interface`}>
            <Selection items={["全部", '已成立', '運送中', '已完成',]} state={state}
                       handleClick={handleClick}></Selection>
            {
                orders.map(i => {
                    const showing = ["全部", '已成立', '運送中', '已完成',].indexOf(state) - 1;
                    if ((showing < 0) || (showing === i.status))
                        return <ItemList state={i.status} price={i.price} products={i.products}
                                         start={new Date(i.start_time)} end={new Date(i.end_time)}></ItemList>;
                })
            }
        </div>
    )
}


const Main = () => {
    return [
        <ToolBar></ToolBar>, (
            <div className="main_area">
                <UserInfo></UserInfo>
                <Interface></Interface>
            </div>)
    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)