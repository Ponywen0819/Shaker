const DisplayTitle = () =>(
    <div className={`discount_container`}>
        <div className={'header_container'}>
            <p className={`discount_title`}>其他商品</p>
        </div>
    </div>
)

const DiscountCard = ({no, img, name, price, first}) =>(
    <a href={`/product/${no}`} className={`discount_item_card ${first? '':'card_bar'}`}>
        <div className={`dis_item_img`} style={{backgroundImage: `url(${img})`}}></div>
        <p className={`dis_item_name`}> {name}</p>
        <div className={`flex items-end`}>
            <p className={`dis_item_dis`}>${price}</p>
        </div>
    </a>
)

const Discount = ({items}) => {
    const [offset,setOffset] = React.useState(0);

    const handle_click = (forward)=>{
        let newVal = (forward?  offset+1 :offset-1);
        if( newVal < 0) newVal = 0;
        if( newVal > 5) newVal = 5;
        setOffset(newVal);
    };
    const mounted=React.useRef();
    React.useEffect(()=>{
      if(mounted.current===false){
        mounted.current=true;
        document.getElementById('btn_forward').addEventListener('click', (e)=>( handle_click(true) ))
        document.getElementById('btn_backward').addEventListener('click', (e)=>( handle_click(false) ))
      }
    }, [offset]);

    return (
        <div className={`discount_container`}>
            <div className={`header_container header_bar`}>
                <p className={`discount_title`}>推薦商品</p>
                <a className={`discount_link`}>看更多 ></a>
            </div>
            <div className={`discount_main`}>
                <button className={`discount_course left_course`} id={`btn_backward`} onClick={ ()=>(handle_click(false)) }>{`<`}</button>
                <button className={`discount_course right_course`} id={`btn_forward`} onClick={ ()=>(handle_click(true)) }>{`>`} </button>
                <div className={`discount_display`}>
                    <div className={`discount_warp`} style={{transform : `translateX(-${10 * offset}%)`}}>
                        {
                            items.map(i => (
                                <DiscountCard no={i.id} name={i.name} img={i.file_path} price={i.price} first={items.indexOf(i) === 0}></DiscountCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

const TypeLink = ({type, first})=>(
    <div className={`type_link ${first? '':'type_bar'}`}>
        <a href={``} className={`type_text`}>{type}</a>
    </div>
)

const ItemTypeSelection = ()=>{
    const [item_types, setTypes] = React.useState([])

    React.useEffect(()=>{
        fetch('/product/GetAllCategory',{
            method: 'GET'
        }).then(res=>{
            if(res.status === 200){
                return res.json()
            }
        }).then(data=>{
            console.log(data)
            setTypes(data)
        })
    },[])

    return(
        <div className={`type_selection`}>
            <div className={`type_container`}>
                {
                 item_types.map(i=>(
                    <TypeLink type={i.name} first={i.id === 1}></TypeLink>
                 ))
                }
            </div>
        </div>
    )
}

const ItemCard = ({no, img, name, price}) =>(
    <a href={`/product/${no}`} className={`item_card_container`}>
        <div className={`item_card`}>
            <div className={`item_img`} style={{backgroundImage: `url(${img})`}}></div>
            <div className={'px-1'}>
                <p className={`dis_item_name`}> {name}</p>
                <div className={`flex items-end`}>
                    <p className={`item_price`}>${price}</p>
                </div>
            </div>
        </div>
    </a>
)

const Main = ()=>{
        const [re, setRe] = React.useState([])
        const [all, setAll] = React.useState([])

        React.useEffect(()=>{
           fetch('/product/SearchProduct',{
               method: 'POST',
               headers:{
                   'content-type': 'application/json'
               },
               body:JSON.stringify({})
           }).then(res=>{
               if(res.status === 200){
                   return res.json()
               }
           }).then(data=>{
               console.log(data)
               setRe(data)
               setAll(data)
           })

        },[])

        return [
            <nav className={`mb-8`}>
                <UpperBar></UpperBar>
                <LowerBar></LowerBar>
                <ItemTypeSelection></ItemTypeSelection>
            </nav>,
            <div className={`main`}>
                <Discount items ={re.slice(0,10)}></Discount>
                <DisplayTitle></DisplayTitle>
                <div className={`item_list mb-8`}>
                    {
                        all.map( i => (
                            <ItemCard no={i.id} name={i.name} img={i.file_path} price={i.price}></ItemCard>
                        ))
                    }
                </div>
                <div className={`flex justify-center mb-8`}>
                    <a className={`more_link`} href={``}> <p>更多推薦</p></a>
                </div>
            </div>
        ]
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)