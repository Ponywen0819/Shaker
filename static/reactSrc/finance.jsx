const Coupon = ()=>{
    return(
        <div>

        </div>
    )
}
const Main = ()=>{
    // 用於新增優惠券使用
    const [coupon_type, setType] = React.useState('')
    const [coupon_name, setName] = React.useState('')
    const [fix_discount, setFix] = React.useState('')
    const [per_discount, setPer] = React.useState(``)
    const [min, setMin] = React.useState('')
    // 紀錄現有優惠券
    const [coupons, setCoupons] = React.useState([])


    const handle_number = (event, setter) =>{
        let value = event.target.value
        if(value !== '0'){
            value = value.replace(/[^0-9]/, '')
            setter(value.replace(/\b(0+)/gi, ''))
        }
    }

    const create_coupon = ()=>{
        let upload_data = {}
        if(coupon_name === ''){
            FailNotify('請輸入名稱')
            return
        }
        upload_data.name = coupon_name
        if(coupon_type === ''){
            FailNotify('請輸入優惠券種類')
            return;
        }
        upload_data.discount_type = parseInt(coupon_type)
        if(coupon_type === '1'){
            if(per_discount === ''){
                FailNotify('請輸入折價折數')
                return;
            }
            upload_data.discount = per_discount
        }
        else{
            if(min === ''){
                FailNotify('請輸入最低消費金額')
                return;
            }
            upload_data.minimum_consumption = min
            if(fix_discount === ''){
                FailNotify('請輸入折扣金額')
                return;
            }
            upload_data.discount = fix_discount
        }

        fetch('/coupon/PublishShopCoupon',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(upload_data)
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
            else{
                FailNotify('新增優惠券失敗')
            }
        }).then(data=>{
            console.log(data)
            if(data.cause === 0){

            }
            else{
                FailNotify('新增優惠券失敗')
            }
        })
    }


    React.useEffect(()=>{
        fetch('')
    },[coupons])

    return(
        <div>
            <SellerBar></SellerBar>
            <div className={`flex`}>
                <Sidebar></Sidebar>
                <div className={`shipping_container grow px-10 py-3`}>
                    <p className={`interface_title`}>新增優惠券</p>
                    <div className={`flex px-10 flex-wrap`}>
                        <div className={`w-1/2 p-3`}>
                            <p>折價券名稱</p>
                            <input type={`text`} className={`new_name_input w-full`} value={coupon_name} placeholder={`請輸入優惠券名稱`} onInput={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className={`w-1/2 p-3`}>
                            <p>折價券種類</p>
                            <select value={coupon_type} className={`new_name_input w-full`} onInput={(e)=>setType(e.target.value)}>
                                <option value="" disabled selected>選擇折價券類別</option>
                                <option value="1">季節折扣</option>
                                <option value="2">特殊折扣</option>
                            </select>
                        </div>
                        {
                            (coupon_type === '1') ? (
                                <div className={`w-1/2 p-3`}>
                                    <p>打折折數</p>
                                    <input value={per_discount} className={`new_name_input w-full`} onInput={(e)=>handle_number(e,setPer)} placeholder={`請輸入打折折數`}/>
                                </div>
                            ):[
                                <div className={`w-1/2 p-3`}>
                                    <p>最低消費</p>
                                    <input type={`text`} value={min}  className={`new_name_input w-full`} onInput={(e)=>handle_number(e,setMin)} placeholder={`請輸入最低消費金額`}/>
                                </div>,
                                <div className={`w-1/2 p-3`}>
                                    <p>折價金額</p>
                                    <input value={fix_discount} className={`new_name_input w-full`} onInput={(e)=>handle_number(e,setFix)} placeholder={`請輸入折價金額`}/>
                                </div>
                            ]
                        }
                    </div>
                    <div className={`flex justify-end px-10`}>
                        <button className={`new_btn !h-8 !w-30`} onClick={create_coupon}>新增優惠券</button>
                    </div>
                    <p className={`interface_title`}>發行優惠券</p>
                    {
                        (coupons.length === 0)?(
                            <div className={`h-36 flex justify-center items-center`}><p className={`text-2xl font-extrabold `}>現無發行之優惠券</p></div>
                        ):coupons.map(coupon=>(<Coupon></Coupon>))
                    }
                </div>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)