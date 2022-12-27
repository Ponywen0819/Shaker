const Nav = () => {
  const [accInfoIsTouched, setaccIsTouched] = React.useState(false);
  function pullDownMenu() {
      setaccIsTouched(!accInfoIsTouched);
  }
return (
  <div className='nav-container'>
      <div className='nav-content' >
          <a href='./test' className='nav-logo'>
            <img src="/static/img/logo2.png"></img>
          </a>
          <div className='nav-logo-content'onMouseEnter={accInfoIsTouched ? pullDownMenu:""}> 
              <a href= 'this para. should be filled the anchor link' className='nav-text'> 賣家中心</a>
          </div>
          <div style={{position:'relative'}} >
              <div className='pop-over'>
                  <div className='pop-over _ref'>
                      <div className='account-info-box'>
                          <div className='account-info' onClick={pullDownMenu} >
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII="  className='account-avatar'></img>
                              <span className='account-name'>account name</span>
                          </div>
                      </div>
                  </div>

                  <div className='pulldown-container' style={{display : `${accInfoIsTouched ? 'block' :'none'}`}}>
                    <div className="menu" onMouseLeave={pullDownMenu}>
                      <ul>
                        <li className="account-dropdown-item">
                          <span className="pull-down-menu text">賣場中心</span>
                        </li>
                      </ul>

                      <ul>
                        <li className="account-dropdown-item">
                          <span className="pull-down-menu text">登出</span>
                        </li>
                      </ul>
                    </div>
                  </div> 
              </div>
          </div>
      </div>
  </div>
  )
}

const Sidebar = () =>{
  const [shipmentIsOpen, setIsOpenS] = React.useState(false);
  const [orderIsOpen, setIsOpenO] = React.useState(false);
  const [productIsOpen, setIsOpenP] = React.useState(false);
  const [financeIsOpen, setIsOpenF] = React.useState(false);
  const [eventIsOpen, setIsOpenE] = React.useState(false);

  function shipmentClose() {
    setIsOpenS(!shipmentIsOpen);
  }
  function orderClose() {
    setIsOpenO(!orderIsOpen);
  }
  function productClose() {
    setIsOpenP(!productIsOpen);
  }
  function financeClose() {
    setIsOpenF(!financeIsOpen);
  }
  function eventClose() {
    setIsOpenE(!eventIsOpen);
  }
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-menu'>
        <li className='shipment'>
          <div className='sidebar-menu-item'>
            <img src= "https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511" className='sidebar-menu-item-icon'></img>
            <span className='sidebar-menu-item-text' onClick={shipmentClose}>物流中心</span>
            <span className='sidebar-menu-item-space'></span>
            <i className='sidebar-menu-item-collapse shopee-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
              </svg>
            </i>
          </div>
          <ul className='sidebar-submenu' style={{display : `${shipmentIsOpen ? 'block' :'none'}`}}>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>待出貨</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>批次出貨</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>物流設定</span>
              </a>
            </li> 
          </ul>
        </li>
        
        <li className='order'>
          <div className='sidebar-menu-item'>
            <img src= "https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511" className='sidebar-menu-item-icon'></img>
            <span className='sidebar-menu-item-text' onClick={orderClose}>訂單管理</span>
            <span className='sidebar-menu-item-space'></span>
            <i className='sidebar-menu-item-collapse shopee-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
              </svg>
            </i>
          </div>
          <ul className='sidebar-submenu' style={{display : `${orderIsOpen ? 'block' :'none'}`}}>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>我的銷售</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>不成立</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>退款 & 退貨</span>
              </a>
            </li> 
          </ul>
        </li>

        <li className='product'>
          <div className='sidebar-menu-item'>
            <img src= "https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511" className='sidebar-menu-item-icon'></img>
            <span className='sidebar-menu-item-text' onClick={productClose}>商品管理</span>
            <span className='sidebar-menu-item-space'></span>
            <i className='sidebar-menu-item-collapse shopee-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
              </svg>
            </i>
          </div>
          <ul className='sidebar-submenu' style={{display : `${productIsOpen ? 'block' :'none'}`}}>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>我的商品</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>新增商品</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>商品設定</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>尺寸表管理</span>
              </a>
            </li>  
          </ul>

        </li>

        <li className='finance'>
          <div className='sidebar-menu-item'>
            <img src= "https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511" className='sidebar-menu-item-icon'></img>
            <span className='sidebar-menu-item-text' onClick={financeClose}>財務管理</span>
            <span className='sidebar-menu-item-space'></span>
            <i className='sidebar-menu-item-collapse shopee-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
              </svg>
            </i>
          </div>
          <ul className='sidebar-submenu' style={{display : `${financeIsOpen ? 'block' :'none'}`}}>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>我的進帳</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>銀行帳號</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>付款設定</span>
              </a>
            </li> 
          </ul>
        </li>

        <li className='event'>
          <div className='sidebar-menu-item'>
            <img src= "https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511" className='sidebar-menu-item-icon'></img>
            <span className='sidebar-menu-item-text' onClick={eventClose}>管理行銷活動</span>
            <span className='sidebar-menu-item-space'></span>
            <i className='sidebar-menu-item-collapse shopee-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16">
                <path d="M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z"></path>
              </svg>
            </i>
          </div>
          <ul className='sidebar-submenu' style={{display : `${eventIsOpen ? 'block' :'none'}`}}>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>我的行銷活動</span>
              </a>
            </li>
            <li className='sidebar-submenu-item'> 
              <a href ="test.com" className='sidebar-submenu-item-link'>
                <span>優惠券</span>
              </a>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  )
}


const SMCbulletin = () =>(
    <div className='aside-column'>
            <div className='card card-offset'>
                <div className='title-box'>
                    <div className='title'> 蝦皮公告</div>
                    <button type='button' className='bulletin-more'>
                        <span>更多</span>
                        <i className='more-icon'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16"  className='sv'>
                                <path d="M9.19 8l-3.97 3.97a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5 -4.5a.75.75 0 0 0-1.06 1.06L9.19 8z">
                                </path>
                            </svg>
                        </i> 
                    </button>
                </div>                    
                <div className='async-data-wrapper announcement-wrapper'>
                    <div className='status'>
                        <div className='status-box'> 
                            <div className='hot'>
                                <i className='hot-icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                                        <path d="M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className='context'>
                                <div className='item item-hover'>
                                    <p className='context-title'> test</p>
                                    <p className='descr'>
                                            test123121231321321
                                    </p>
                                </div>
                                <span className='time'>2022.12.24</span>
                            </div>
                        </div>
                        
                        <div className='status-box'> 
                            <div className='hot'>
                                <i className='hot-icon'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                                        <path d="M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z"></path>
                                    </svg>
                                </i>
                            </div>
                            <div className='context'>
                                <div className='item item-hover'>
                                    <p className='context-title'> test</p>
                                    <p className='descr'>
                                            test123121231321321
                                    </p>
                                </div>
                                <span className='time'>2022.12.24</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
)



const SMContext = () =>{
    const [oneIsTouched, setOneIsTouched] = React.useState(true);
  const [twoIsTouched, setTwoIsTouched] = React.useState(true);
  const [thirdIsTouched, setThirdIsTouched] = React.useState(true);
  const [fourIsTouched, setFourIsTouched] = React.useState(true);
  const [fiveIsTouched, setFiveIsTouched] = React.useState(true);
  const [sixIsTouched, setSixIsTouched] = React.useState(true);
  const [sevenIsTouched, setSevenIsTouched] = React.useState(true);
  const [eightIsTouched, setEightIsTouched] = React.useState(true);
  function oneChange(){
    setOneIsTouched(!oneIsTouched);
  }
  function twoChange(){
    setTwoIsTouched(!twoIsTouched);
  }
  function thirdChange(){
    setThirdIsTouched(!thirdIsTouched);
  }
  function fourChange(){
    setFourIsTouched(!fourIsTouched);
  }
  function fiveChange(){
    setFiveIsTouched(!fiveIsTouched);
  }
  function sixChange(){
    setSixIsTouched(!sixIsTouched);
  }
  function sevenChange(){
    setSevenIsTouched(!sevenIsTouched);
  }
  function eightChange(){
    setEightIsTouched(!eightIsTouched);
  }
  return (
    <div className='page-content-wrapper'>
      <div className='flex-box'>
        <div className='content'>
          <div className='flex-box'>
            <div className='main-column'>
              <div className='card-offset card-1'>
                <div className='title'>     
                  待辦事項清單
                  <p className='card-tips'>您的待處理事項</p>
                </div>
                <div className='async-data-wapper'>
                  <div className='status'>
                    <div className='to-do-box'>
                      <a href='test.com' className='to-do-box-aitem pending-paid-anchor' onMouseEnter={oneChange} onMouseLeave={oneChange} style={{backgroundColor:`${oneIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-paid-value'>0</p>
                        <p className='item-desc'>待付款訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-proccess-anchor'onMouseEnter={twoChange} onMouseLeave={twoChange} style={{backgroundColor:`${twoIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-proccess-value'>0</p>
                        <p className='item-desc'>待處理訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem have-proccess-anchor'onMouseEnter={thirdChange} onMouseLeave={thirdChange} style={{backgroundColor:`${thirdIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle have-proccess-value'>0</p>
                        <p className='item-desc'>已處理訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-cancel-anchor'onMouseEnter={fourChange} onMouseLeave={fourChange} style={{backgroundColor:`${fourIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-cancel-value'>0</p>
                        <p className='item-desc'>待取消訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-return-anchor' onMouseEnter={fiveChange} onMouseLeave={fiveChange} style={{backgroundColor:`${fiveIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-return-value'>0</p>
                        <p className='item-desc'>待退款/退貨訂單</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem banned-anchor' onMouseEnter={sixChange} onMouseLeave={sixChange} style={{backgroundColor:`${sixIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle ban-value'>0</p>
                        <p className='item-desc'>已禁賣/搜尋排序降低商品</p>
                      </a>
                      <a href='test.com' className='to-do-box-aitem sold-out-anchor'onMouseEnter={sevenChange} onMouseLeave={sevenChange} style={{backgroundColor:`${sevenIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle sold-out-value'>0</p>
                        <p className='item-desc'>已售完商品</p>
                      </a>

                      <a href='test.com' className='to-do-box-aitem pending-evevt-anchor'onMouseEnter={eightChange} onMouseLeave={eightChange} style={{backgroundColor:`${eightIsTouched ? "aliceblue": "#aacbde"}`}}>
                        <p className='item-tltle pending-evevt-value'>0</p>
                        <p className='item-desc'>待確認活動</p>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




const Main = ()=>{
    return [
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Nav />
            <div className="mainContext flex-1">
                <Sidebar />
                <SMContext/>
                <SMCbulletin/>
            </div>
        </div>
    ]
}

ReactDOM.createRoot(document.getElementById("main")).render(<Main></Main>)