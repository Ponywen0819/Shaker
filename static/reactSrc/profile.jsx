const UserInput = ({type, orgin, change, title}) =>{
    const [val, setval] = React.useState('')

    const handle_number_input =(e) =>{
        setval(e.target.value.replace(/[^0-9]/, ''));
        change(e.target.name, e.target.value.replace(/[^0-9]/, ''));

    }

    const handle_text_input = (e) =>{
        setval(e.target.value);
        change(e.target.name,e.target.value);
    }

    React.useEffect(()=>{
        setval(orgin)
    },[orgin])

    return(
        <div className="form_line">
            <p className="form_title">{title}</p>
            <input className="form_input"
                   name={title}
                   type={type}
                   value={val}
                   onInput={(title !== 'phone')?handle_text_input:handle_number_input}
            />
        </div>
    )
}

const UserImgInput = ({orgin}) =>{
    const [img, setImg] = React.useState('')
    const [img_change, setChange] = React.useState(false)

    const triggerImageChange = () =>{
        let file_input = document.createElement("input")
        file_input.type = "file"
        file_input.accept = "image/*"
        file_input.onchange = e => {
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onload = readerEvent => {
                let content = readerEvent.target.result;
                console.log(content)
                setImg(content)
            }
        }
        file_input.click();
    }

    const triggerImageUpload = ()=>{
        fetch('/account/ChangeProfile',{
            body: JSON.stringify({'photo': img}),
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
            if(data.cause !== 0){
                FailNotify("上傳圖片出現錯誤")
            }
            else{
                SuccessNotify('圖片上傳成功').then(()=>location.href = location.href)
            }
        })
    }

    React.useEffect(()=>{
        if(img === ''){
            setImg(orgin)
        }
        if(orgin !== img){
            setChange(true)
        }
        else{
            setChange(false)
        }
    },[orgin,img])

    return(
        <div className="img_form_container">
            <img className="from_img" src={img}></img>
            <div className="img_form_btn_area">
                {
                    img_change?
                        <div className={`flex flex-col gap-1`}>
                            <button className="img_form_btn" onClick={triggerImageUpload}>確認修改</button>
                            <button className="img_form_btn" onClick={triggerImageUpload}>取消</button>
                        </div>:
                        <div>
                            <button className="img_form_btn" onClick={triggerImageChange}>更改照片</button>
                        </div>
                }
            </div>
            <p className="img_form_text">我只吃png :P</p>
        </div>
    )
}

const Interface = () => {
    const [userinfo,setInfo] = React.useState({name: "", email: "", phone: "", photo: '', file_path: ''})

    const [user_img, setImg] = React.useState('')

    const [change, setChange] = React.useState({})

    React.useEffect(()=>{getInfo()},[])

    const getInfo = ()=>{
        fetch('/account/GetUserDetail',{
            body: JSON.stringify({
                require:["photo", "name", "email", "phone", 'file_path']
            }),
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            }
        }).then((response)=>{
            if(response.status === 200) {
                return response.json()
            }
            else {
                FailNotify('請先登入').then(()=>(
                    location.href='/login'
                ))
            }
        }).then((data)=>{
            if(data.cause === 0){
                setInfo({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    photo: data.file_path,
                })
                setImg((data.file_path == null)?"/static/img/logo1.png":data.file_path.slice(1))
            }
            else {
                FailNotify('請先登入').then(()=>(
                    location.href='/login'
                ))
            }
        })
    }

    const handle_change = (name, val)=>{
        change[name] = val
        // console.log(name, change)
        setChange(change)
    }

    const handle_upload = ()=>{
        let need2upload = false
        for(i of Object.entries(change)){
            if(userinfo[i[0]] !== i[1]){
                need2upload = true
            }
        }
        if(need2upload){
            fetch('/account/ChangeProfile',{
                body: JSON.stringify(change),
                headers:{
                    'content-type': 'application/json'
                },
                method:'POST'
            }).then(res=>{
                if(res.status === 200){
                    return res.json()
                }
                else{
                    FailNotify("資訊更新出現錯誤").then(()=>{location.href = location.href})
                }
            }).then(data=>{
                console.log(data)
                if(data.cause !== 0){
                    FailNotify("資訊更新出現錯誤").then(()=>{location.href = location.href})
                }
                else{
                    SuccessNotify("資料更新成功").then(()=>{location.href = location.href})
                }
            })
        }
        else{
            SuccessNotify("資料更新成功")
        }
    }

    const name2type = {name: 'text', email: 'email', phone: 'text'}

    return(
        <div className="intercafe">
            <div className="interface_title">
                <p className="">在此修改你的個人資料</p>
            </div>
            <div className="input_area">
                <div className="form">
                    {
                        Object.entries(userinfo).map(i=>{
                            // console.log(i[1])
                            if(i[0]!== 'photo'){
                                return <UserInput orgin={i[1]} type={name2type[i[0]]} title={i[0]} change={handle_change}></UserInput>
                            }
                        })
                    }
                    <div className="form_submit">
                        <p className="form_title"></p>
                        <button className="form_btn" onClick={handle_upload}>確認變更</button>
                    </div>
                </div>
                <div className="img_form">
                    <UserImgInput orgin={user_img}></UserImgInput>
                </div>
            </div>
        </div>
    )
}

const Main = ()=>{
    return(
        <div>
            <ToolBar></ToolBar>
            <div className="main_area">
                <UserInfo></UserInfo>
                <Interface></Interface>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)