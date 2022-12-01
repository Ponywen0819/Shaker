const Interface = ()=>{
    return(
        <div className="intercafe">
            <div className="interface_title">
                <p className="">在此修改你的個人資料</p>
            </div>
            <div className="input_area">
                <div className="form_line">
                    <p className="form_title">舊密碼</p>
                    <input className="form_input" type="password"/>
                </div>
                <div className="form_line">
                    <p className="form_title">新密碼</p>
                    <input className="form_input" type="password"/>
                </div>
                <div className="form_line">
                    <p className="form_title">再次輸入舊密碼</p>
                    <input className="form_input" type="password"/>
                </div>
                <div className="form_submit">
                    <p className="form_title"></p>
                    <button className="form_btn">確認變更</button>
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