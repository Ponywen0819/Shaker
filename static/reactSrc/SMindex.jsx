const Main = ()=>{
    return [
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Nav />
            <div className="mainContext flex-1">
                <Sidebar />
                <SMContext/>
            </div>
        </div>
    ]
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)