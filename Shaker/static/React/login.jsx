function renderToolBar(){
    let main=(
        <a className="logo_area" href="/"> 
            登入LOGO
            {/* <img src="" alt="" />   */}
        </a>
    );
    return main
}


class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let main = (
            <div className="main_area">
                <div className="login_area">
                    <div>
                        <h1 className="text-2xl font-bold">登入</h1>
                    </div>
                    <div className="text_area">
                        <div className="input_area">
                            <p>帳號</p>
                            <input className="input_main" type="email" name="" id="" />
                        </div>
                        <div className="input_area">
                            <p>密碼</p>
                            <input className="input_main" type="password" name="" id="" />
                        </div>
                    </div>
                    <div className="help_area">
                        <a className="help_text" href="">忘記密碼</a>
                    </div>
                    <div className="btn_area">
                        <button className="login_btn bg-orange-500">登入</button>
                    </div>
                    <div className="or_area">
                        <div className="or_bar"></div>
                        <div>或</div>
                        <div className="or_bar"></div>
                    </div>
                    <div>

                    </div>
                    <div className="flex justify-center">
                        <p>尚未擁有帳號?</p>
                        <a className="text-[cadetblue]" href="">註冊</a>
                    </div>
                </div>
            </div>
        )
        
        return [renderToolBar(),main]
    }
}

const mont = ReactDOM.createRoot(document.getElementById("main"))
mont.render(<Login></Login>)