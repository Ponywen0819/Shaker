const DisplayTitle = () =>(
    <div className={`discount_container`}>
        <div className={'header_container'}>
            <p className={`discount_title`}>推薦商品</p>
        </div>
    </div>
)

const DiscountCard = ({no, img, name, orgin, dis, first}) =>(
    <a href={`${no}`} className={`discount_item_card ${first? '':'card_bar'}`}>
        <div className={`dis_item_img`} style={{backgroundImage: `url(${img})`}}></div>
        <p className={`dis_item_name`}> {name}</p>
        <div className={`flex items-end`}>
            <p className={`dis_item_dis`}>${dis}</p>
            <p className={`dis_item_origin pl-1`}>${orgin}</p>
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
                <p className={`discount_title`}>特價商品</p>
                <a className={`discount_link`}>看更多 ></a>
            </div>
            <div className={`discount_main`}>
                <button className={`discount_course left_course`} id={`btn_backward`} onClick={ ()=>(handle_click(false)) }>{`<`}</button>
                <button className={`discount_course right_course`} id={`btn_forward`} onClick={ ()=>(handle_click(true)) }>{`>`} </button>
                <div className={`discount_display`}>
                    <div className={`discount_warp`} style={{transform : `translateX(-${10 * offset}%)`}}>
                        {
                            items.map(i => (
                                <DiscountCard no={i.no} name={i.name} img={i.img} dis={i.dis} orgin={i.origin} first={items.indexOf(i) == 0}></DiscountCard>
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

const ItemTypes = ['3C', '周邊', 'NB', '通訊', '數位', '家電', '日用', '食品', '生活', '運動戶外', '美妝', '衣鞋包錶', '品牌旗艦', '書店'];

const ItemTypeSelection = ()=>{
    return(
        <div className={`type_selection`}>
            <div className={`type_container`}>
                {
                 ItemTypes.map(i=>(
                    <TypeLink type={i} first={ItemTypes.indexOf(i) == 0}></TypeLink>
                 ))
                }
            </div>
        </div>
    )
}

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
        const dis_item = [
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 100,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 101,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 103,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 104,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 105,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 106,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 107,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 108,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 109,},
        ]

        const qqqq = [
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 100,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : null,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},
            { no : 'a124fw', img : '/static/img/logo1.png', name : '我是商品', origin : 123, dis : 102,},


        ]

        return [
            <nav className={`mb-8`}>
                <UpperBar></UpperBar>
                <LowerBar></LowerBar>
                <ItemTypeSelection></ItemTypeSelection>
            </nav>,
            <div className={`main`}>
                <Discount items ={dis_item}></Discount>
                <DisplayTitle></DisplayTitle>
                <div className={`item_list mb-8`}>
                    {
                        qqqq.map( i => (
                            <ItemCard no={i.no} name={i.name} img={i.img} dis={i.dis} origin={i.origin}></ItemCard>
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