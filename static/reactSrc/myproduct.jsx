const Item =()=>{
    return(
        <div>
            <div>
                <div></div>
                <p></p>
            </div>

        </div>
    )
}

const Itemlist = ()=>{
    return(
        <div>
            <div className={`flex`}>
                <p>商品名稱</p>
                <p>價格</p>
                <p>商品數量</p>
                <p>操作</p>
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