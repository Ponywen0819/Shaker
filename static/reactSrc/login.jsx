function renderToolBar(){
    let main=(
        <a className="logo_area" href="/"> 
            <img src="/Shaker/static/logo/Logo2.png" alt="" />  
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
                    <input className="input_main" type="email" name="" id="" placeholder="帳號"/>
                    <input className="input_main" type="password" name="" id="" placeholder="密碼"/>
                    <a className="help_text" href="">忘記密碼</a>
                    <button className="login_btn btn">登入</button>
                    <div className="or_area">
                        <div className="or_bar"></div>
                        <div>或</div>
                        <div className="or_bar"></div>
                    </div>
                    <button className="btn auth_btn"> 
                        <img src="/Shaker/static/img/google_logo.svg" alt="" className="sm_logo"/> 
                        Google
                    </button>
                    <button className="btn auth_btn">
                        <img src="/Shaker/static/img/github_black.svg" alt="" className="sm_logo"/> 
                        Github
                    </button>
                    <div className="flex justify-center">
                        <p>尚未擁有帳號?</p>
                        <a className="text-[cadetblue]" href="/register">註冊</a>
                    </div>
                </div>
            </div>
        )
        
        return [renderToolBar(),main]
    }
}

const mont = ReactDOM.createRoot(document.getElementById("main"))
mont.render(<Login></Login>)