
const ProductArea = ()=>{
    const [product_name, setName] = React.useState('')
    const [ comment_num, setCommentNum ] = React.useState(0)
    const [remaining, setRemaining] = React.useState(0)
    // 價格使用陣列表示，第一個代表原價，如有第二個則是折價後
    const [price, setprice] = React.useState([0])
    const [product_photo, setPhoto] = React.useState(null)
    const [wanna_num,setNum] = React.useState(1)

    React.useEffect(()=>{
        setName('測試用商品名稱')
        setCommentNum(3)
        setRemaining(20)
        setprice([100, 600])
        setPhoto('/static/img/logo1.png')
        //之後會加上神奇的API
    },[])


    return(
        <div className={`container`}>
            <div className={`product_show`}>
                <div className={`product_img bg_img`} style={{backgroundImage: `url(${(product_photo==null)?'/static/img/logo1.png':product_photo})`}}></div>
            </div>
            <div className={`product_interface`}>
                <div className={`product_name_area`}>
                    <p className={`product_name`}>{ product_name }</p>
                </div>
                <div className={`product_info`}>
                    <div className={'product_info_column col'}></div>
                    <div className={'product_info_column col'}>
                        <p className={`product_info_val`}>{comment_num}</p>
                        <p className={`product_info_title`}>評論數</p>
                    </div>
                    <div className={'product_info_column'}>
                        <p className={`product_info_val`}>{remaining}</p>
                        <p className={`product_info_title`}>剩餘</p>
                    </div>
                </div>
                    {
                        (price.length > 1)?(
                            <div className={'product_price_area'}>
                                <p className={`product_discount`}>{ `$${price[0]}` }</p>
                                <p className={`product_price`}>{ `$${price[1]}` }</p>
                            </div>

                        ):(
                            <div className={`product_price_area`}>
                                <p className={`product_price`}>{ `$${price[0]}` }</p>
                            </div>
                        )
                    }
                <div className={`product_interact`}>
                    <p className={``}>數量</p>
                    <div className={'product_number'}>
                        <button className={`number_btn`}>-</button>
                        <input  className={`number_input`} type={`text`} value={wanna_num}/>
                        <button className={`number_btn`}>+</button>
                    </div>
                </div>
                <div className={`product_cart_area`}>
                    <button className={`product_cart_btn product_buy_btn`}>直接購買</button>
                    <button className={`product_cart_btn product_cart_btn`}>加入購物車</button>
                </div>
            </div>

        </div>
    )
}

const ShopArea = ()=>{
    const [shop_name, setName] = React.useState('')
    const [star, setStar] = React.useState(0)
    const [shop_img, setImg] = React.useState('/static/img/logo1.png')
    const [last_login, setLast] = React.useState('1922-08-19')

    React.useEffect(()=>{
        setName('測試用商店名')
        setStar(3)
        setImg('/static/img/logo1.png')
        // 做商店資料取出
    },[])

    return(
        <div className={`container`}>
                <div className={`shop_img bg_img`} style={{backgroundImage: `url(${(shop_img==null)?'/static/img/logo1.png':shop_img})`}}></div>
                <div className={`flex flex-col justify-center`}>
                    <p className={`shop_name`}>{shop_name}</p>
                    <div className={`flex gap-5`}>
                        <p>{`上次登入: ${last_login}`}</p>
                        <p>{`評價: ${star}`}</p>
                    </div>
                </div>
        </div>
    )
}

const ProductDetail = ()=>{
    const [detail, setdetail] = React.useState('')

    React.useEffect(()=>{
        setdetail('rrr\nrrrrr\nr\nrrrr\nrrrrrk')
    },[])

    return(
        <div className={`container flex-col`}>
            <p className={`text-gray-400 text-lg`}>{`商品詳情`}</p>
            <p className={`product_detail`}>{detail}</p>
        </div>
    )
}

const Comment = ()=>{
    const [comments,setComments] = React.useState([])
    React.useEffect(()=>{
        setComments([
            {picture:'/static/img/logo1.png', star:3, description: 'ertyuiop', user: 'qweqwe', user_photo: '/static/img/logo1.png'},
            {picture:'/static/img/logo1.png', star:1, description: 'erty',  user: 'qweqwe', user_photo: '/static/img/logo1.png'},
            {picture:'/static/img/logo1.png', star:4, description: 'ertqwe\nqwe\nuiop',  user: 'qweqwe', user_photo: '/static/img/logo1.png'},
            {picture:'/static/img/logo1.png', star:6, description: 'ertyuioqwe\np', user: 'qweqwe', user_photo: '/static/img/logo1.png'},
            {picture:'/static/img/logo1.png', star:7, description: 'ertyu\nsiop', user: 'qweqwe', user_photo: '/static/img/logo1.png'}
        ])
    },[])


    return(
        <div className={`container flex-col`}>
            <p className={`text-gray-400 text-lg`}>商品評價</p>
            {
                comments.map(i=>(
                    <div className={`comment_area ${(i !== comments[comments.length - 1]) && 'comment_border'}`}>
                        <div className={`comment_img bg_img`} style={{backgroundImage: `url(${(i.picture==null)?'/static/img/logo1.png':i.picture})`}}></div>
                        <div className={``}>
                            <div className={`flex flex-col py-1`}>
                                <div className={`flex gap-2`}>
                                    <div className={`comment_user_img bg_img`} style={{backgroundImage: `url(${(i.user_photo==null)?'/static/img/logo1.png':i.user_photo})`}}></div>
                                    <p>{i.user}</p>
                                </div>
                                <p className={``}>{`評價${i.star}`}</p>
                            </div>
                        <p className={``}>{i.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Main = ()=>{
    return(
        <div>
            <ToolBar></ToolBar>
            <ProductArea></ProductArea>
            <ShopArea></ShopArea>
            <ProductDetail></ProductDetail>
            <Comment></Comment>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)