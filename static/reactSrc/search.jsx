const ItemCard = ({no, img, name, origin, dis,}) =>(
    <a href={`/product/${no}`} className={`item_card_container`}>
        <div className={`item_card`}>
            <div className={`item_img`} style={{backgroundImage: `url(${img})`}}></div>
            <div className={'px-1'}>
                <p className={`dis_item_name`}> {name}</p>
                <div className={`flex items-end`}>
                    {
                        (dis == null)? [<p className={`item_price`}>${origin}</p>]: [<p className={`item_price`}>${dis}</p>, <p className={`dis_item_origin pl-1`}>${origin}</p>]
                    }
                </div>
            </div>
        </div>
    </a>
)

const Main = ()=>{
    const [item_list, setitems] = React.useState([])

    React.useEffect(()=>{
        let search_data = {}
        let urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('search_word') !== null) search_data.search_word = urlParams.get('search_word')
        if(urlParams.get('category') !== null) search_data.category = parseInt(urlParams.get('category'))

        console.log(search_data)
        fetch('/product/SearchProduct',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(search_data)
        }).then((res)=>{
            if(res.status === 200){
                return res.json()
            }
        }).then((data)=>{
            console.log(data)
            if(data.cause === 0){
                setitems(data.data)
            }
        })
    },[])

    return(
        <div>
            <ToolBar></ToolBar>
            <div className={`main my-10`}>
            <div className={`item_list mb-8`}>
                {
                    item_list.map(i=>{
                        return <ItemCard no={i.id} name={i.name} img={i.file_path} origin={i.price}></ItemCard>
                    })
                }
            </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)