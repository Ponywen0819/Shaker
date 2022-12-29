const From = ()=>{
    const [img, setImg] = React.useState('')
    const [name, setName] = React.useState('')
    const [choosen, setChoosen] = React.useState('')
    const [options, setOptions] = React.useState([])
    const [price, setPrice] = React.useState('')
    const [num, setNum] = React.useState('')
    const [intro, setIntro] = React.useState('')

    const triggerImageChange = () =>{
        console.log('qw12')
        let file_input = document.createElement("input")
        file_input.type = "file"
        file_input.accept = "image/*"
        file_input.onchange = e => {
            console.log('qwe')
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onload = readerEvent => {
                let content = readerEvent.target.result;
                setImg(content)
            }
        }
        console.log('q12112')
        file_input.click();
    }

    const handle_change = (event, setter)=>{
        const element = event.target
        setter(element.value)
    }

    const handle_number = (event, setter) =>{
        let value = event.target.value
        if(value !== '0'){
            value = value.replace(/[^0-9]/, '')
            setter(value.replace(/\b(0+)/gi, ''))
        }
    }

    const triggerImageUpload = (state)=>{
        if (img === '') {FailNotify('請上傳商品圖片'); return;}
        if (name === ''){FailNotify('請輸入商品名稱'); return;}
        if (choosen === ''){FailNotify('請選擇商品類別'); return;}
        if (price === ''){FailNotify('請輸入商品價格'); return;}
        if (num === ''){FailNotify('請輸入商品數量'); return;}

        fetch('/account/ChangeProfile',{
            body: JSON.stringify({
                photo: img,
                name: name,
                category: choosen,
                price: parseInt(price),
                num: parseInt(num),
                intro: intro,
                state: state
            }),
            headers:{
                'content-type': 'application/json'
            },
            method:'POST'
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
            else{
                FailNotify("上傳圖片出現錯誤")
            }
        }).then(data=>{
            if(data.status !== 200){
                FailNotify("上傳圖片出現錯誤")
            }
        }).then(data=>{
            if(data.status === 200){
                SuccessNotify("圖片上傳成功")
            }
        })
    }

    React.useEffect(()=>{
        setOptions(['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店'])
    },[])

    return(
        <div className={`shipping_container grow px-10 py-3`}>
            <p className={`interface_title`}>新增商品</p>
            <div className={`flex flex-col px-10`}>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品照片</p>
                        {
                            (img === '')?
                                <button className={`new_img new_img_notact`} onClick={triggerImageChange}>設定商品照片</button>:
                                <div className={`flex flex-col gap-2`}>
                                    <div className={`new_img`} style={{backgroundImage: `url(${img})`}}></div>
                                    <button className={`new_btn !h-8 !w-30`} onClick={triggerImageChange}>設定商品照片</button>
                                </div>
                        }
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品價格</p>
                    <input className={`new_name_input`}
                           type={`number`}
                           value={price}
                           placeholder={`在這裡輸入商品價格`}
                           onInput={(e)=>handle_number(e, setPrice)}/>
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品數量</p>
                    <input className={`new_name_input`}
                           type={`number`}
                           value={num}
                           placeholder={`在這裡輸入商品數量`}
                           onInput={(e)=>handle_number(e, setNum)}/>
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品名稱</p>
                    <input className={`new_name_input`}
                           type={`text`}
                           value={name}
                           placeholder={`在這裡新增商品名稱`}
                           onInput={(e)=>handle_change(e, setName)}/>
                </div>
                <div className={`flex mb-3`}>
                    <p className={`w-[20%]`}>商品類別</p>
                    <select className={`new_name_input`} value={choosen} onInput={(e)=>handle_change(e, setChoosen)}>
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
                    <textarea  className={`new_intro_input`}
                               value={intro}
                               placeholder={`在這裡新增商品敘述`}
                               onInput={(e)=>handle_change(e,setIntro)}
                    />
                </div>
                <div className={`flex justify-end`}>
                    <button className={`new_btn`}>新增商品並下架</button>
                    <button className={`new_btn`}>新增商品並上架</button>
                </div>
            </div>
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