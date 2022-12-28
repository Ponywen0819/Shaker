var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Sidebar() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shipmentIsOpen = _React$useState2[0],
      setIsOpenS = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      orderIsOpen = _React$useState4[0],
      setIsOpenO = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      productIsOpen = _React$useState6[0],
      setIsOpenP = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      financeIsOpen = _React$useState8[0],
      setIsOpenF = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      eventIsOpen = _React$useState10[0],
      setIsOpenE = _React$useState10[1];

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
  return React.createElement(
    'div',
    { className: 'sidebar-container' },
    React.createElement(
      'ul',
      { className: 'sidebar-menu' },
      React.createElement(
        'li',
        { className: 'shipment' },
        React.createElement(
          'div',
          { className: 'sidebar-menu-item' },
          React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511', className: 'sidebar-menu-item-icon' }),
          React.createElement(
            'span',
            { className: 'sidebar-menu-item-text', onClick: shipmentClose },
            '\u7269\u6D41\u4E2D\u5FC3'
          ),
          React.createElement('span', { className: 'sidebar-menu-item-space' }),
          React.createElement(
            'i',
            { className: 'sidebar-menu-item-collapse shopee-icon' },
            React.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
              React.createElement('path', { d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'sidebar-submenu', style: { display: '' + (shipmentIsOpen ? 'block' : 'none') } },
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u5F85\u51FA\u8CA8'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u6279\u6B21\u51FA\u8CA8'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u7269\u6D41\u8A2D\u5B9A'
              )
            )
          )
        )
      ),
      React.createElement(
        'li',
        { className: 'order' },
        React.createElement(
          'div',
          { className: 'sidebar-menu-item' },
          React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511', className: 'sidebar-menu-item-icon' }),
          React.createElement(
            'span',
            { className: 'sidebar-menu-item-text', onClick: orderClose },
            '\u8A02\u55AE\u7BA1\u7406'
          ),
          React.createElement('span', { className: 'sidebar-menu-item-space' }),
          React.createElement(
            'i',
            { className: 'sidebar-menu-item-collapse shopee-icon' },
            React.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
              React.createElement('path', { d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'sidebar-submenu', style: { display: '' + (orderIsOpen ? 'block' : 'none') } },
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u6211\u7684\u92B7\u552E'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u4E0D\u6210\u7ACB'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u9000\u6B3E & \u9000\u8CA8'
              )
            )
          )
        )
      ),
      React.createElement(
        'li',
        { className: 'product' },
        React.createElement(
          'div',
          { className: 'sidebar-menu-item' },
          React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511', className: 'sidebar-menu-item-icon' }),
          React.createElement(
            'span',
            { className: 'sidebar-menu-item-text', onClick: productClose },
            '\u5546\u54C1\u7BA1\u7406'
          ),
          React.createElement('span', { className: 'sidebar-menu-item-space' }),
          React.createElement(
            'i',
            { className: 'sidebar-menu-item-collapse shopee-icon' },
            React.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
              React.createElement('path', { d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'sidebar-submenu', style: { display: '' + (productIsOpen ? 'block' : 'none') } },
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u6211\u7684\u5546\u54C1'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u65B0\u589E\u5546\u54C1'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u5546\u54C1\u8A2D\u5B9A'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u5C3A\u5BF8\u8868\u7BA1\u7406'
              )
            )
          )
        )
      ),
      React.createElement(
        'li',
        { className: 'finance' },
        React.createElement(
          'div',
          { className: 'sidebar-menu-item' },
          React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511', className: 'sidebar-menu-item-icon' }),
          React.createElement(
            'span',
            { className: 'sidebar-menu-item-text', onClick: financeClose },
            '\u8CA1\u52D9\u7BA1\u7406'
          ),
          React.createElement('span', { className: 'sidebar-menu-item-space' }),
          React.createElement(
            'i',
            { className: 'sidebar-menu-item-collapse shopee-icon' },
            React.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
              React.createElement('path', { d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'sidebar-submenu', style: { display: '' + (financeIsOpen ? 'block' : 'none') } },
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u6211\u7684\u9032\u5E33'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u9280\u884C\u5E33\u865F'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u4ED8\u6B3E\u8A2D\u5B9A'
              )
            )
          )
        )
      ),
      React.createElement(
        'li',
        { className: 'event' },
        React.createElement(
          'div',
          { className: 'sidebar-menu-item' },
          React.createElement('img', { src: 'https://cf.shopee.tw/file/c15905d5a6284687c4a6ad00d0feb511', className: 'sidebar-menu-item-icon' }),
          React.createElement(
            'span',
            { className: 'sidebar-menu-item-text', onClick: eventClose },
            '\u7BA1\u7406\u884C\u92B7\u6D3B\u52D5'
          ),
          React.createElement('span', { className: 'sidebar-menu-item-space' }),
          React.createElement(
            'i',
            { className: 'sidebar-menu-item-collapse shopee-icon' },
            React.createElement(
              'svg',
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
              React.createElement('path', { d: 'M8 6.81l3.97 3.97a.75.75 0 0 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06L8 6.81z' })
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'sidebar-submenu', style: { display: '' + (eventIsOpen ? 'block' : 'none') } },
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u6211\u7684\u884C\u92B7\u6D3B\u52D5'
              )
            )
          ),
          React.createElement(
            'li',
            { className: 'sidebar-submenu-item' },
            React.createElement(
              'a',
              { href: 'test.com', className: 'sidebar-submenu-item-link' },
              React.createElement(
                'span',
                null,
                '\u512A\u60E0\u5238'
              )
            )
          )
        )
      )
    )
  );
}