const From = ()=>{
    const [img ,setImg] = React.useState('')
    const [name, setName] = React.useState('')
    const [options, setOptions] = React.useState([])
    const [intro, setIntro] = React.useState('')




    React.useEffect(()=>{
        setOptions(['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店'])
    },[])

    return(
        <div className={`shipping_container grow px-10 py-3`}>
            <p className={`interface_title`}>新增商品</p>

            <form className={`flex flex-col px-10`}>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品照片</p>
                    {
                        (img === '')?
                            <button className={`new_img new_img_notact`}>設定商品照片</button>:
                            <div>
                                <div className={`new_img`} style={{backgroundImage: `url(${img})`}}></div>
                                <button className={`new_btn`}>設定商品照片</button>
                            </div>
                    }
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品名稱</p>
                    <input className={`new_name_input`} type={`text`} value={name} placeholder={`在這裡新增商品名稱`}/>
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品類別</p>
                    <select className={`new_name_input`}>
                        <option value="" disabled selected>選擇商品類別</option>
                        {
                            options.map(option=>(
                                <option value={option}>{option}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品敘述</p>
                    <textarea  className={`new_intro_input`} value={intro} placeholder={`在這裡新增商品敘述`}/>
                </div>
                <div className={`flex justify-end`}>
                    <button className={`new_btn`}>新增商品並下架</button>
                    <button className={`new_btn`}>新增商品並上架</button>
                </div>
            </form>
        </div>
    )
}


const Main = ()=>{
    return(
        <div>
            <SellerBar></SellerBar>
            <div className={`flex`}>
                <Sidebar></Sidebar>
                <From></From>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)