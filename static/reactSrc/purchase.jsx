const SelectionItem = ({typename, activate, onclick})=>{
    return (
        <button className={`section_btn ${activate? 'selection_btn_on':''}`} onClick={ ()=> onclick(typename)}>
            <p>{typename}</p>
        </button>
    )
}

const Selection = ({items, state, handleClick})=> (
    <div className={`section`}>{items.map(i => (
        <SelectionItem typename={i} activate={(state == i)} onclick={handleClick}></SelectionItem>
    ))}
    </div>
)

const Item = ({name, img, num, price})=>(
    <div className={`item`}>
        <div className={`item_info`}>
            <div className={`item_img`} style={{'background-image': `url(${img})`}}></div>
            <div className={`item_text`}>
                <p className={`item_name`}>{name}</p>
                <p className={`item_num`}> {`x ${num}`}</p>
            </div>
        </div>
        <p className={`item_price`}>{`$${price * num}`}</p>
    </div>
)

const ItemList = ({state,  products, start, end})=>{
    const stateName = ['已成立', '運送中', '已完成'];
    return (
        <div className={`order`}>
            <div className={`order_nav`}>
                <p className={`order_nav_title`}>{stateName[state]}</p>
            </div>
            <div className={``}></div>
            {
                products.map(p=>(
                    <Item name={p.name} img={p.img} price={p.price} num={p.num}></Item>
                ))
            }
            <div>
                <p>{`start time : ${start}`}</p>
                <p>{`end time : ${end}`}</p>
            </div>
        </div>
    )
}

const Interface = ()=>{
    const [state,setState] = React.useState("全部");

    const handleClick = (i) => {setState(i)}

    const items=[
        {
            state: 0,
            price: 100,
            start: '22-08-19',
            end:'23-05-28',
            product:[
                {
                    img: '/static/img/logo2.png',
                    name: 'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
                    price: 130,
                    num: 1
                }
            ]
        },
        {
            state: 1,
            price: 100,
            start: '22-08-19',
            end:'23-05-28',
            product:[
                {
                    img: '/static/img/logo1.png',
                    name: '123123123',
                    price: 11111,
                    num: 1
                },
                {
                    img: '/static/img/logo1.png',
                    name: '33',
                    price: 222,
                    num: 3
                }
            ]
        },
        {
            state: 2,
            price: 100,
            start: '22-08-19',
            end:'23-05-28',
            product:[
                {
                    img: '/static/img/logo1.png',
                    name: 'qweqw',
                    price: 1123,
                    num: 3
                }
            ]
        }
    ]

    return (
        <div className={`interface`}>
            <Selection items={["全部", '已成立', '運送中', '已完成',] } state={state} handleClick={handleClick}></Selection>
            {/*<ItemList items={items}></ItemList>*/}
            { items.map( i =>( <ItemList state={i.state} products={i.product} start={i.start} end={i.end}></ItemList> ) ) }
        </div>
    )
}

const Main = ()=>{
    return [
        <ToolBar></ToolBar>,(
        <div className="main_area">
            <UserInfo></UserInfo>
            <Interface></Interface>
        </div>)
    ]
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)