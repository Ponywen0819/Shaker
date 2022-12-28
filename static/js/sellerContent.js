var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function SMContext() {
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      oneIsTouched = _React$useState2[0],
      setOneIsTouched = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      twoIsTouched = _React$useState4[0],
      setTwoIsTouched = _React$useState4[1];

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      thirdIsTouched = _React$useState6[0],
      setThirdIsTouched = _React$useState6[1];

  var _React$useState7 = React.useState(true),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      fourIsTouched = _React$useState8[0],
      setFourIsTouched = _React$useState8[1];

  var _React$useState9 = React.useState(true),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      fiveIsTouched = _React$useState10[0],
      setFiveIsTouched = _React$useState10[1];

  var _React$useState11 = React.useState(true),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      sixIsTouched = _React$useState12[0],
      setSixIsTouched = _React$useState12[1];

  var _React$useState13 = React.useState(true),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      sevenIsTouched = _React$useState14[0],
      setSevenIsTouched = _React$useState14[1];

  var _React$useState15 = React.useState(true),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      eightIsTouched = _React$useState16[0],
      setEightIsTouched = _React$useState16[1];

  function oneChange() {
    setOneIsTouched(!oneIsTouched);
  }
  function twoChange() {
    setTwoIsTouched(!twoIsTouched);
  }
  function thirdChange() {
    setThirdIsTouched(!thirdIsTouched);
  }
  function fourChange() {
    setFourIsTouched(!fourIsTouched);
  }
  function fiveChange() {
    setFiveIsTouched(!fiveIsTouched);
  }
  function sixChange() {
    setSixIsTouched(!sixIsTouched);
  }
  function sevenChange() {
    setSevenIsTouched(!sevenIsTouched);
  }
  function eightChange() {
    setEightIsTouched(!eightIsTouched);
  }
  return React.createElement(
    'div',
    { className: 'page-content-wrapper' },
    React.createElement(
      'div',
      { className: 'flex-box' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'flex-box' },
          React.createElement(
            'div',
            { className: 'main-column' },
            React.createElement(
              'div',
              { className: 'card-offset card-1' },
              React.createElement(
                'div',
                { className: 'title' },
                '\u5F85\u8FA6\u4E8B\u9805\u6E05\u55AE',
                React.createElement(
                  'p',
                  { className: 'card-tips' },
                  '\u60A8\u7684\u5F85\u8655\u7406\u4E8B\u9805'
                )
              ),
              React.createElement(
                'div',
                { className: 'async-data-wapper' },
                React.createElement(
                  'div',
                  { className: 'status' },
                  React.createElement(
                    'div',
                    { className: 'to-do-box' },
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem pending-paid-anchor', onMouseEnter: oneChange, onMouseLeave: oneChange, style: { backgroundColor: '' + (oneIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle pending-paid-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5F85\u4ED8\u6B3E\u8A02\u55AE'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem pending-proccess-anchor', onMouseEnter: twoChange, onMouseLeave: twoChange, style: { backgroundColor: '' + (twoIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle pending-proccess-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5F85\u8655\u7406\u8A02\u55AE'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem have-proccess-anchor', onMouseEnter: thirdChange, onMouseLeave: thirdChange, style: { backgroundColor: '' + (thirdIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle have-proccess-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5DF2\u8655\u7406\u8A02\u55AE'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem pending-cancel-anchor', onMouseEnter: fourChange, onMouseLeave: fourChange, style: { backgroundColor: '' + (fourIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle pending-cancel-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5F85\u53D6\u6D88\u8A02\u55AE'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem pending-return-anchor', onMouseEnter: fiveChange, onMouseLeave: fiveChange, style: { backgroundColor: '' + (fiveIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle pending-return-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5F85\u9000\u6B3E/\u9000\u8CA8\u8A02\u55AE'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem banned-anchor', onMouseEnter: sixChange, onMouseLeave: sixChange, style: { backgroundColor: '' + (sixIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle ban-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5DF2\u7981\u8CE3/\u641C\u5C0B\u6392\u5E8F\u964D\u4F4E\u5546\u54C1'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem sold-out-anchor', onMouseEnter: sevenChange, onMouseLeave: sevenChange, style: { backgroundColor: '' + (sevenIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle sold-out-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5DF2\u552E\u5B8C\u5546\u54C1'
                      )
                    ),
                    React.createElement(
                      'a',
                      { href: 'test.com', className: 'to-do-box-aitem pending-evevt-anchor', onMouseEnter: eightChange, onMouseLeave: eightChange, style: { backgroundColor: '' + (eightIsTouched ? "aliceblue" : "#aacbde") } },
                      React.createElement(
                        'p',
                        { className: 'item-tltle pending-evevt-value' },
                        '0'
                      ),
                      React.createElement(
                        'p',
                        { className: 'item-desc' },
                        '\u5F85\u78BA\u8A8D\u6D3B\u52D5'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}