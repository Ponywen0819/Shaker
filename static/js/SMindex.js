var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var SMCbulletin = function SMCbulletin() {
    return React.createElement(
        'div',
        { className: 'aside-column' },
        React.createElement(
            'div',
            { className: 'card card-offset' },
            React.createElement(
                'div',
                { className: 'title-box' },
                React.createElement(
                    'div',
                    { className: 'title' },
                    ' \u8766\u76AE\u516C\u544A'
                ),
                React.createElement(
                    'button',
                    { type: 'button', className: 'bulletin-more' },
                    React.createElement(
                        'span',
                        null,
                        '\u66F4\u591A'
                    ),
                    React.createElement(
                        'i',
                        { className: 'more-icon' },
                        React.createElement(
                            'svg',
                            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', className: 'sv' },
                            React.createElement('path', { d: 'M9.19 8l-3.97 3.97a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5 -4.5a.75.75 0 0 0-1.06 1.06L9.19 8z' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'async-data-wrapper announcement-wrapper' },
                React.createElement(
                    'div',
                    { className: 'status' },
                    React.createElement(
                        'div',
                        { className: 'status-box' },
                        React.createElement(
                            'div',
                            { className: 'hot' },
                            React.createElement(
                                'i',
                                { className: 'hot-icon' },
                                React.createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                                    React.createElement('path', { d: 'M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z' })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'context' },
                            React.createElement(
                                'div',
                                { className: 'item item-hover' },
                                React.createElement(
                                    'p',
                                    { className: 'context-title' },
                                    ' test'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'descr' },
                                    'test123121231321321'
                                )
                            ),
                            React.createElement(
                                'span',
                                { className: 'time' },
                                '2022.12.24'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'status-box' },
                        React.createElement(
                            'div',
                            { className: 'hot' },
                            React.createElement(
                                'i',
                                { className: 'hot-icon' },
                                React.createElement(
                                    'svg',
                                    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' },
                                    React.createElement('path', { d: 'M9.32 1.44a5.682 5.682 0 0 0 1.659 3.385A5.688 5.688 0 0 1 13.5 9.574c0 2.164-1.586 4.375-3.144 4.878l-.217.07c.085-.063.159-.134.217-.213.32-.434.524-1.048.612-1.844.172-1.546-.346-3.022-1.551-4.43-.057-.066-.162-.033-.156.048.106 1.334.099 2.18-.02 2.535-.247.737-.677 1.279-1.151 1.308-.747.047-1.292-.269-1.637-.948-.032-.062-.157-.057-.187.012-.32.743-.351 1.516-.095 2.318.131.41.359.781.682 1.11.233.238.637.469 1.144.55-.632.023-1.296-.078-2.085-.37C4.158 13.953 2.5 11.863 2.5 9.575c0-1.539.6-2.933 1.572-3.951.037-.039.095-.075.147-.069.063.008.119.067.122.121.09 1.31.498 2.33 1.351 3.17.097.095.167.032.11-.09-.341-.726-.378-1.43-.378-2.367 0-2.239 1.27-4.173 3.112-5.085.464-.269.752-.109.784.138z' })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'context' },
                            React.createElement(
                                'div',
                                { className: 'item item-hover' },
                                React.createElement(
                                    'p',
                                    { className: 'context-title' },
                                    ' test'
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'descr' },
                                    'test123121231321321'
                                )
                            ),
                            React.createElement(
                                'span',
                                { className: 'time' },
                                '2022.12.24'
                            )
                        )
                    )
                )
            )
        )
    );
};

var SMContext = function SMContext() {
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
};

var Main = function Main() {
    return [React.createElement(
        'div',
        { style: { display: "flex", flexDirection: "column", height: "100vh" } },
        React.createElement(SellerBar, null),
        React.createElement(
            'div',
            { className: 'mainContext flex-1' },
            React.createElement(Sidebar, null),
            React.createElement(SMContext, null),
            React.createElement(SMCbulletin, null)
        )
    )];
};

ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(Main, null));