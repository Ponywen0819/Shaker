const SelectionItem = ({typename, activate, onclick})=>{
    return (
        <button className={`section_btn ${activate? 'selection_btn_on':''}`} onClick={ ()=> onclick(typename)}>
            <p>{typename}</p>
        </button>
    )
}

const Selection = ({items, state, handleClick})=> (
    <div className={`section`}>
        {
            items.map(i => (
        <SelectionItem typename={i} activate={(state == i)} onclick={handleClick}></SelectionItem>))
        }
    </div>
)

const Item = ({type, end, min, discount})=>(
    <div className={`item`}>
        <div className={`item_info`}>
            <div className={`item_head ${type==0?'item_head_all':'item_head_shop'}`}>
                {
                    type==0?'蟹殼折價':'商場折價'
                }
            </div>
            <div className={`item_text_area`}>
                <div>
                    <p className={`item_name`}>{discount<1? `打${discount*10}折`: `折$${discount}`}</p>
                    <p className={`item_num`}> {`低消$${min}`}</p>
                </div>
                <p>{`使用期限 ${end}`}</p>
            </div>
        </div>
    </div>
)

const Interface = ()=>{
    const [state,setState] = React.useState("全部");

    const handleClick = (i) => {setState(i)}

    const items=[
        {
			"type": 0,        // 優惠券的種類
			"start": '22-08-19', // 優惠券開始時間
			"end": '23-05-28',  // 優惠券到期時間
			"min": 288,    // 優惠券適用條件
			"discount": 0.8,  // 大於1就是單純折價，小數點則是百分比
		},
        {
			"type": 1,        // 優惠券的種類
			"start": '22-08-19', // 優惠券開始時間
			"end": '23-05-28',  // 優惠券到期時間
			"min": 288,    // 優惠券適用條件
			"discount": 0.9,  // 大於1就是單純折價，小數點則是百分比
		},
        {
			"type": 0,        // 優惠券的種類
			"start": '22-08-19', // 優惠券開始時間
			"end": '23-05-28',  // 優惠券到期時間
			"min": 288,    // 優惠券適用條件
			"discount": 200,  // 大於1就是單純折價，小數點則是百分比
		},
    ]

    return (
        <div className={`interface`}>
            <Selection items={["全部", '蟹殼折價券', '商場折價券',] } state={state} handleClick={handleClick}></Selection>
            <div className={`display_area`}>
                {
                    items.map( i =>{
                        const showing = ["全部", '蟹殼折價券', '商場折價券',].indexOf(state) -1;
                    if((showing < 0)  || (showing == i.type)) return <Item type={i.type} end={i.end} min={i.min} discount={i.discount}></Item>;
                    } )
                }
            </div>
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