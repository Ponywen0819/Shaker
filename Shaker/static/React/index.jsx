class Main extends React.Component{

    render(){
        let main=(
            <ToolBar></ToolBar>
        )
        return main
    }
}


const mont = ReactDOM.createRoot(document.getElementById("main"))
mont.render(<Main></Main>)