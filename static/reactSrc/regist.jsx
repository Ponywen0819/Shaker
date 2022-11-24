function Render_logo(){
    return (
        <a href="/index" className="logo_area">
            <img src="/Shaker/static/logo/logo2.png" alt="" />
        </a>
    )
}

function MainInterface(){
    
    const [state, setState] = React.useState(0);
    
    function toState(forward){
        if(forward){
            setState((state>=1)? state:state+1)
        }
        else{
            setState((state<=0)? state:state-1)
        }
    }

    function showInterface(){
        if(state == 0){
            return [<input className="input_bar" type="email" name="" id="" placeholder="E-mail"/>,
            <button className="btn login_btn" onClick={()=> toState(true)}>下一步</button>]
        }
        else{
            let content = [
                <input className="input_bar" type="email" name="" id="" placeholder="E-mail"/>,
                <input className="input_bar" type="email" name="" id="" placeholder="Password"/>,
                <button className="btn login_btn" onClick={() =>toState(false)}>上一步</button>,
                <button className="btn login_btn" >註冊</button>
            ]
            return content
        }
    }

    let main =(
            <div className="main_area">
                <div className="interface_area">
                    <div>
                        <h1 className="text-2xl font-bold">註冊</h1>
                    </div>
                    {showInterface()}
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
                        <p>已經有帳號了嗎?</p>
                        <a className="text-[cadetblue]" href="/login">登入</a>
                    </div>
                </div>
            </div>
        )
    return [main,Render_logo()]
}

ReactDOM.createRoot(document.getElementById("main")).render(<MainInterface></MainInterface>)
// ReactDOM.render(<MainInterface />, document.getElementById("main"));