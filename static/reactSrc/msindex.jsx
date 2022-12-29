const Main = ()=>{
    return [
        <div className="test" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Nav />
            <div className="mainContext flex-1">
                <Sidebar />
                <SellingPanel/>
            </div>
        </div>
    ]
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)