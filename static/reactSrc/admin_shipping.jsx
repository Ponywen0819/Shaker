const Shipping = ()=>{
    const [order_list, setList] = React.useState([])
    const data_title = ['訂單編號', '商店名稱', '訂單狀態', '操作']
    const order_state = ['已成立', '運送中', '已完成']

    React.useEffect(()=>{
       fetch('/product/getOrders',{
           method: 'POST'
       }).then((res)=>{
           if(res.status === 200){
               return res.json()
           }
           if(res.status === 401){
               location.href = '/login'
           }
       }).then((data)=>{
           console.log(data)
           if(data.cause === 0){
                setList(data.data)
           }
       })
    },[])

    const handle_change = (id, state)=> {
        fetch('/product/ModifyOrderState',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({
                order_id: id,
                status: state + 1
            })
        }).then((res)=>{
            if(res.status === 200){
                return res.json()
            }
        }).then((data)=>{
            if(data.cause === 0){
                SuccessNotify('更新成功').then(()=>location.href = location.href)
            }
            else {
                FailNotify('更新失敗')
            }
        })
    }

    return(
        <div className={`main-content`}>
            <div className={`content-container`}>
                <div className={`table-header`}>
                    <div className={`table-header-row`}>
                        {
                            data_title.map(title=>
                                <span className={`table-col w-1/4`}>{title}</span>)
                        }
                    </div>
                </div>
                <div className={`table-body`}>
                {
                    order_list.map((order,index)=>(
                        <div className={`table-body-row ${(index !== order_list.length - 1)?'table-row-border':''}`} key={order.id}>
                            <span  className={`w-1/4`}>{order.id}</span>
                            <span className={`w-1/4`}>{order.shop_name}</span>
                            <span className={`w-1/4`}>{order_state[order.status]}</span>
                            <span className={`w-1/4`}>
                                <button className={`table-btn`} onClick={()=>handle_change(order.id,order.status)}>變更狀態</button>
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}