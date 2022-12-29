function Sidebar () {
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
