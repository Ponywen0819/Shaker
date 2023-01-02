const CheckBar =()=>{
    return(
        <div className=" cart_lower">
            <div className="cart_lower_container">
                <a className="w-2/5 cart_lower_img_area" href={`/`}>
                    <img className={`cart_lower_img`} src="/static/img/logobar_white.png" alt="" />
                    <p className={`cart_logo_text`}>結帳</p>
                </a>
            </div>
        </div>
    )
}

const OrderRow = ({img, name, price, num})=>{
    return(
        <div className={`title  !h-28`}>
            <div className={`w-[60%] flex gap-2`}>
                <div className={`product_img bg_img`} style={{backgroundImage: `url(${(img == null)?'/static/img/logo1.png':img.slice(1)})`}}></div>
                <p>{name}</p>
            </div>
            <p className={`w-[10%] text-center`}>{`$${price}`}</p>
            <p className={`w-[10%] text-center`}>{num}</p>
            <p className={`w-[20%] text-right`}>{`$${num*price}`}</p>
        </div>
    )
}

const OrderArea =({items})=>{
    return(
        <div className={`order_container`}>
            <div className={`title`}>
                <p className={`w-[60%] text-xl font-extrabold`}>訂單內容</p>
                {
                    ['單價','數量'].map(i=>(
                        <p className={`w-[10%] text-center`}>{i}</p>
                    ))
                }
                <p className={`w-[20%] text-right`}>總價</p>
            </div>
            {
                items.map(i=>(<OrderRow  name={i.name} img={i.photo} num={i.count} price={i.price} ></OrderRow>))
            }
        </div>
    )
}

const CouponArea =()=>{
    return(
        <div className={`title h-20 justify-end mb-5`}>
            <p className={`pr-5`}>{`尚未選擇優惠券`}</p>
            <button>選擇優惠券</button>
        </div>
    )
}

const Summarize = ({infos})=>{
    let end = 0
    Object.entries(infos).map(i=>{
        end += i[1]
    })

    return(
        <div className={`title !h-fit flex justify-end p-5`}>
            <div className={`w-[20%]`}>
                <div className={``}>
                    {
                        Object.entries(infos).map(info=>{
                            if (info[1] !== 0){
                                return(
                                    <div className={`flex by-10 justify-between`}>
                                        <p>{info[0]}</p>
                                        <p>{`$${info[1]}`}</p>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className={`flex by-10 justify-between`}>
                        <p>總金額</p>
                        <p>{end}</p>
                    </div>
                </div>
                <   div className={`flex justify-end`}>
                    <button className={`create_order_btn`}>下訂單</button>
                </div>
            </div>
        </div>
    )
}

const Main = ()=>{
    const [OrderItem, setItem] = React.useState([])
    const [total, setTotal] = React.useState(0)


    React.useEffect(()=>{
        const value = `; ${document.cookie}`;
        const parts = value.split(`; orders=`);
        console.log(parts)
        let product_ids = ''
        if (parts.length === 2){
            product_ids = parts.pop().split(';').shift();
        }

        fetch('/product/GetCartProducctsById',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: product_ids
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
        }).then(data=>{
            if(data.cause === 0){
                console.log(data.data)
                setItem(data.data)
                let temp = 0
                data.data.map(i=>{
                    temp += (i.price * i.count)
                })
                setTotal(temp)
                return(data.data)
            }
        }).then(data=>{
            fetch('/coupon/GetCoupons',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    shop_id: data[0].shop_id
                })
            }).then(res=>{
                if(res.status === 200){
                    return res.json()
                }
            }).then(data=>{
                console.log(data)
            })

        })


    },[])


    return(
        <div>
            <UpperBar></UpperBar>
            <CheckBar></CheckBar>
            <div className={`main mb-10`}>
                <OrderArea items={OrderItem}></OrderArea>
                <CouponArea></CouponArea>
                <Summarize infos={{"商品總金額：": total,"運費總金額": 60, "折價券折扣": -20, "運費折扣": -60}}></Summarize>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)