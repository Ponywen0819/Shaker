const ProductArea = ({info, wanna_num, chang_num, upload})=>{
    return(
        <div className={`container`}>
            <div className={`product_show`}>
                <div className={`product_img bg_img`} style={{backgroundImage: `url(${(info.file_path==null)?'/static/img/logo1.png':info.file_path.slice(1)})`}}></div>
            </div>
            <div className={`product_interface`}>
                <div className={`product_name_area`}>
                    <p className={`product_name`}>{ info.name }</p>
                </div>
                <div className={`product_info`}>
                    <div className={'product_info_column'}>
                        <p className={`product_info_val`}>{info.number}</p>
                        <p className={`product_info_title`}>剩餘</p>
                    </div>
                </div>
                    <div className={`product_price_area`}>
                        <p className={`product_price`}>{ `$${info.price}` }</p>
                    </div>
                <div className={`product_interact`}>
                    <p className={``}>數量</p>
                    <div className={'product_number'}>
                        <button className={`number_btn`} onClick={()=>chang_num(-1)}>-</button>
                        <input  className={`number_input`} type={`text`} value={wanna_num}/>
                        <button className={`number_btn`} onClick={()=>chang_num(1)}>+</button>
                    </div>
                </div>
                {
                    (info.number === 0)?
                        (<div className={`product_cart_area`}><span className={`text-2xl`}>!已售完</span></div>):
                        (<div className={`product_cart_area`}>
                                <button className={`product_cart_btn product_buy_btn`} onClick={()=>upload(true)}>直接購買</button>
                                <button className={`product_cart_btn product_cart_btn`} onClick={()=>upload(false)}>加入購物車</button>
                        </div>)
                }
            </div>
        </div>
    )
}

const ShopArea = ({shop_id})=>{
    const [last_login, setLast] = React.useState(new Date())
    const [shop_info, setInfo] = React.useState({
        file_path: '',
        avgstar: 0,
        last_login: '',
        name: ''
    })

    React.useEffect(()=>{
        console.log('123')
        if(shop_id === 0){
            return
        }
        // 做商店資料取
        fetch('/account/GetShopInfo',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                shop_id: shop_id
            })
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
        }).then(data=>{
            setInfo(data[0])
            setLast(new Date(data[0].last_login))
        })
    },[shop_id])

    return(
        <div className={`container`}>
                <div className={`shop_img bg_img`} style={{backgroundImage: `url(${(shop_info.file_path === null)?'/static/img/logo1.png':shop_info.file_path})`}}></div>
                <div className={`flex flex-col justify-center`}>
                    <p className={`shop_name`}>{shop_info.name}</p>
                    <div className={`flex gap-5`}>
                        <p>{`上次登入: ${last_login.getFullYear()}/${last_login.getMonth() + 1}/${last_login.getDay()}`}</p>
                        <p>{`評價: ${shop_info.avgstar}`}</p>
                    </div>
                </div>
        </div>
    )
}

const ProductDetail = ({intro})=>{
    return(
        <div className={`container flex-col`}>
            <p className={`text-gray-400 text-lg`}>{`商品詳情`}</p>
            <p className={`product_detail`}>{intro}</p>
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
    const [product_info ,setInfo] = React.useState({
        shop_id: 0,
        name: '',
        price: 0,
        intro: '',
        photo: '',
        avgstar: 0,
        number: 0
    })
    const [wanna_num, setNum] = React.useState(1)

    const handle_wanna = val =>{
        let a = wanna_num + val
        if((a>0) && (a<=product_info.number)){
            setNum(a)
        }
    }

    const handle_add_cart = redic =>{
        fetch('/product/AddProductToCart',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                product_id: parseInt(product_info.id),
                count: wanna_num
            })
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
        }).then(data=>{
            if(data.cause === 0){
                if(redic){
                    location.href = '/cart'
                }
                else{
                    SuccessNotify('加入購物車成功')
                }
            }
        })
    }

    React.useEffect(()=>{
        fetch('/product/GetProduct',{
            method: 'POST',
            body:JSON.stringify({
                id:[
                    parseInt(location.pathname.split('/')[2])
                ]
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
        }).then(data=>{
            console.log(data)
            if(data.cause === 0){
                setInfo(data.data[0])
            }
        })
    },[])

    return(
        <div>
            <ToolBar></ToolBar>
            <ProductArea info={product_info} wanna_num={wanna_num} chang_num={handle_wanna} upload = {handle_add_cart}></ProductArea>
            <ShopArea shop_id={product_info.shop_id}></ShopArea>
            <ProductDetail intro={product_info.intro} ></ProductDetail>
            {/*<Comment></Comment>*/}
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)