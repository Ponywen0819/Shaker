const ItemCard = ({no, img, name, origin, dis,}) =>(
    <a href={`${no}`} className={`item_card_container`}>
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
       setitems([
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12},
           {no:'', photo: '/static/img/logo1.png', name: 'rrrrrr', price: 12}
       ])
    },[])

    return(
        <div>
            <ToolBar></ToolBar>
            <div className={`main my-10`}>
            <div className={`item_list mb-8`}>
                {
                    item_list.map(i=>{
                        return <ItemCard no={i.no} name={i.name} img={i.photo} origin={i.price} dis={null}></ItemCard>
                    })
                }
            </div>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)