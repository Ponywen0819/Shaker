const UserInput = ({type, title, orgin}) =>{
    const [val, setval] = React.useState('')

    React.useEffect(()=>{
        setval(orgin)
    },[])

    const handle_number_input =(e) =>{
        setval(e.target.value.replace(/[^0-9]/, ''));
    }

    const handle_text_input = (e) =>{
        setval(e.target.value);
    }


    return(
        <div className="form_line">
            <p className="form_title">{title}</p>
            <input className="form_input"
                   type="text"
                   value={val}
                   name={title}
                   id={title}
                   onInput={ (type === 'text')?handle_text_input:handle_number_input}
            />
        </div>
    )
}


const UserImgInput = ({orgin}) =>{
    const [img, setImg] = React.useState(orgin)
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
        console.log('還沒寫拉哈哈')
    }

    React.useEffect(()=>{
        if(orgin !== img){
            setChange(true)
        }
        else{
            setChange(false)
        }
    },[img])

    return(
        <div className="img_form_container">
            <img className="from_img" src={img}></img>
            <div className="img_form_btn_area">
                {
                    img_change?
                        <button className="img_form_btn" onClick={triggerImageUpload}>確認修改</button>:
                        <button className="img_form_btn" onClick={triggerImageChange}>更改照片</button>
                }
            </div>
            <p className="img_form_text">我只吃png :P</p>
        </div>
    )
}

const Interface = () => {
    const [userinfo,setInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
        img: "/static/img/logo1.png"
    })

    const [user_img, setImg] = React.useState('')

    const getInfo = ()=>{
        fetch('/account/GetUserDetail',{
            method: 'POST'
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
            if(data.cause === 200){
                setInfo({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    img: (data.photo == null)?"/static/img/logo1.png":data.photo
                })
                setImg((data.photo == null)?"/static/img/logo1.png":data.photo)
            }
            else {
                FailNotify('請先登入').then(()=>(
                    location.href='/login'
                ))
            }
        })
    }

    React.useEffect(()=>{
        getInfo()
        console.log(user_img)
    },[])



    return(
        <div className="intercafe">
            <div className="interface_title">
                <p className="">在此修改你的個人資料</p>
            </div>
            <div className="input_area">
                <form className="form">
                    <div className="form_submit">
                        <p className="form_title"></p>
                        <button className="form_btn">確認變更</button>
                    </div>
                </form>
                <div className="img_form">
                    <UserImgInput orgin={userinfo.img}></UserImgInput>
                </div>
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