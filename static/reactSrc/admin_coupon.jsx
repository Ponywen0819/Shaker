const Coupon = () =>{
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [coupons, setCoupon] = React.useState([])

    const handle_upload = ()=>{
        if (name === '' || number === '')
            return FailNotify('資料不可為空')
        fetch('/coupon/PublishFreeCarCoupon',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                name: name,
                minimum_consumption: number
            })
        }).then((res)=>{
            if(res.status === 200){
                return res.json()
            }
            else {
                FailNotify('新增優惠券失敗')
            }
        }).then((data)=>{
            console.log(data)
            if(data.cause === 0){
                SuccessNotify('新增優惠券成功').then(()=>{
                    location.href = location.href
                })
            }
            else{
                FailNotify('新增優惠券失敗')
            }
        })
    }

    const render_coupon = ()=>{
        return (
            coupons.map(coupon=> {
                let end = new Date(coupon.end_time)
                return(
                    <div className={`item`}>
                    <div className={`item_info`}>
                        <div className={`item_head item_head_shop`}>
                            免運費
                        </div>
                        <div className={`item_text_area`}>
                            <div>
                                <p>{coupon.name}</p>
                                <p className={`item_name`}>{`免運費`}</p>
                                <p className={`item_num`}> {`低消$${coupon.minimum_consumption}`}</p>
                            </div>
                            <p>{`使用期限 ${end.getFullYear()}/${end.getMonth() + 1}/${end.getDate()}`}</p>
                        </div>
                    </div>
                </div>)
            })
        )
    }

    React.useEffect(() => {
        fetch('/coupon/GetAdminCoupons', {
            method: 'POST'
        }).then(res => {
            if (res.status === 200) {
                return res.json()
            }
        }).then(data => {
            if (data.cause === 0) {
                setCoupon(data.data)
            }
        })
    },[])



    return(
        <div className={`main-content`}>
            <div className={`content-container`}>
                <div className={`coupon-form table-row-border`}>
                    <div className={`coupon-form-title`}>
                        <span>新增免運活動</span>
                    </div>
                    <div className={`coupon-form-body`}>
                        <div className={`coupon-form-area`}>
                            <p className={`coupon-form-subtitle`}>優惠卷名稱</p>
                            <input className={`coupon-form-input`} placeholder={`請輸入新免運卷名稱`} value={name} onInput={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className={`coupon-form-area`}>
                            <p className={`coupon-form-subtitle`}>最低消費</p>
                            <input className={`coupon-form-input`} placeholder={`請輸入免運最低金額`} value={number} onInput={(e)=>setNumber(e.target.value.replace(/[^0-9]/, '').replace(/\b(0+)/gi, ''))}/>
                        </div>
                        <div className={`coupon-form-footer`}>
                            <button className={`table-btn`} onClick={handle_upload}>新增免運活動</button>
                        </div>
                    </div>
                </div>
                <div className={`table-body`}>
                    {
                        (coupons.length === 0)?
                            (<div className={`notification`}>
                                <p className={`notification-text`}>現無免運活動</p>
                            </div>):render_coupon()
                    }
                </div>
            </div>
        </div>
    )
}