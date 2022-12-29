var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var SellingPanel = function SellingPanel() {
    var navOptSels = [false, false, false, false, false, false, false, false];
    var formerOpt = 1;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        navOptSelOne = _React$useState2[0],
        setNavOptSelOne = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        navOptSelTwo = _React$useState4[0],
        setNavOptSelTwo = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        navOptSelThird = _React$useState6[0],
        setNavOptSelThird = _React$useState6[1];

    var _React$useState7 = React.useState(false),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        navOptSelFour = _React$useState8[0],
        setNavOptSelFour = _React$useState8[1];

    var _React$useState9 = React.useState(false),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        navOptSelFive = _React$useState10[0],
        setNavOptSelFive = _React$useState10[1];

    var _React$useState11 = React.useState(false),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        navOptSelSix = _React$useState12[0],
        setNavOptSelSix = _React$useState12[1];

    var _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        navOptSelSeven = _React$useState14[0],
        setNavOptSelSeven = _React$useState14[1];

    var _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        navOptSelEight = _React$useState16[0],
        setNavOptSelEight = _React$useState16[1];

    function SeletNavOptOne() {
        formerOpt = 1;
        if (formerOpt != 1) {
            ResetBtn(formerOpt);
        }
        setNavOptSelOne(!navOptSelOne);
    }
    function SeletNavOptTwo() {
        formerOpt = 2;
        if (formerOpt != 2) {
            ResetBtn(formerOpt);
        }
        setNavOptSelTwo(!navOptSelTwo);
    }
    function SeletNavOptThird() {
        formerOpt = 3;
        if (formerOpt != 3) {
            ResetBtn(formerOpt);
        }
        setNavOptSelThird(!navOptSelThird);
    }
    function SeletNavOptFour() {
        formerOpt = 4;
        if (formerOpt != 4) {
            ResetBtn(formerOpt);
        }
        setNavOptSelFour(!navOptSelFour);
    }
    function SeletNavOptFive() {
        formerOpt = 5;
        if (formerOpt != 5) {
            ResetBtn(formerOpt);
        }
        setNavOptSelFive(!navOptSelFive);
    }
    function SeletNavOptSix() {
        formerOpt = 6;
        if (formerOpt != 6) {
            ResetBtn(formerOpt);
        }
        setNavOptSelSix(!navOptSelSix);
    }
    function SeletNavOptSeven() {
        formerOpt = 7;
        if (formerOpt != 7) {
            ResetBtn(formerOpt);
        }
        setNavOptSelSeven(!navOptSelSeven);
    }
    function SeletNavOptEight() {
        formerOpt = 8;
        if (formerOpt != 8) {
            ResetBtn(formerOpt);
        }
        setNavOptSelEight(!navOptSelEight);
    }
    function ResetBtn(optInd) {
        switch (optInd) {
            case 1:
                setNavOptSelOne(!navOptSelOne);
                console.log(navOptSelOne);
                break;
            case 2:
                setNavOptSelTwo(!navOptSelTwo);
                break;
            case 3:
                setNavOptSelThird(!navOptSelThird);
                break;
            case 4:
                setNavOptSelFour(!navOptSelFour);
                break;
            case 5:
                setNavOptSelFive(!navOptSelFive);
                break;
            case 6:
                setNavOptSelSix(!navOptSelSix);
                break;
            case 7:
                setNavOptSelSeven(!navOptSelSeven);
                break;
            case 8:
                setNavOptSelEight(!navOptSelEight);
                break;
        }
    }

    return React.createElement(
        "div",
        { className: "page-container has-siderbar" },
        React.createElement(
            "div",
            { className: "page-content-wrapper" },
            React.createElement(
                "div",
                { className: "selling-root" },
                React.createElement(
                    "div",
                    { className: "selling-container" },
                    React.createElement(
                        "div",
                        { className: "selling-container top-card-bar" },
                        React.createElement(
                            "div",
                            { className: "fixed-bar" },
                            React.createElement(
                                "div",
                                { className: "portal-panel" },
                                React.createElement(
                                    "div",
                                    { className: "list-tabs" },
                                    React.createElement(
                                        "div",
                                        { className: "top-tab-flex main-content" },
                                        React.createElement(
                                            "div",
                                            { className: "panel-nav" },
                                            React.createElement(
                                                "div",
                                                { className: "tabs_nav-warp" },
                                                React.createElement(
                                                    "div",
                                                    { className: "nav_options" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u5168\u90E8"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u5C1A\u672A\u4ED8\u6B3E"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u5F85\u51FA\u8CA8"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u904B\u9001\u4E2D"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u5DF2\u5B8C\u6210"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u4E0D\u6210\u7ACB"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u9000\u6B3E/\u9000\u8CA8"
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "nav_option", tabIndex: "0" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "option-label" },
                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                "\u904B\u9001\u5931\u6557"
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
                    ),
                    React.createElement(
                        "div",
                        { className: "order-panel" },
                        React.createElement(
                            "div",
                            { className: "order-list" },
                            React.createElement(
                                "div",
                                { className: "padding-wrap" },
                                React.createElement(
                                    "div",
                                    { className: "order-search" },
                                    React.createElement(
                                        "div",
                                        { className: "order-export" },
                                        React.createElement(
                                            "div",
                                            { className: "singal-picker-wrapper" },
                                            React.createElement(
                                                "span",
                                                { className: "date" },
                                                "\u8A02\u55AE\u6210\u7ACB\u65E5\u671F"
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "date-selecter" },
                                                React.createElement(
                                                    "div",
                                                    { className: "date-selecter__input" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "date-picker" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "date-picker__prefix" },
                                                            React.createElement(
                                                                "i",
                                                                { className: "date-picker__prefix-icon" },
                                                                React.createElement(
                                                                    "svg",
                                                                    { className: "prefix__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
                                                                    React.createElement("path", { d: "M11.5156954,1 C11.7918378,1 12.0156954,1.22385763 12.0156954,1.5 L12.015,2 L14,2 C14.5522847,2 15,2.44771525 15,3 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,3 C1,2.44771525 1.44771525,2 2,2 L3.991,2 L3.99143991,1.5 C3.99143991,1.22385763 4.21529754,1 4.49143991,1 C4.76758229,1 4.99143991,1.22385763 4.99143991,1.5 L4.991,2 L11.015,2 L11.0156954,1.5 C11.0156954,1.22385763 11.239553,1 11.5156954,1 Z M14,6 L2,6 L2,14 L14,14 L14,6 Z M5.5,11 C5.77614237,11 6,11.2238576 6,11.5 C6,11.7761424 5.77614237,12 5.5,12 L4.5,12 C4.22385763,12 4,11.7761424 4,11.5 C4,11.2238576 4.22385763,11 4.5,11 L5.5,11 Z M8.5,11 C8.77614237,11 9,11.2238576 9,11.5 C9,11.7761424 8.77614237,12 8.5,12 L7.5,12 C7.22385763,12 7,11.7761424 7,11.5 C7,11.2238576 7.22385763,11 7.5,11 L8.5,11 Z M11.5,11 C11.7761424,11 12,11.2238576 12,11.5 C12,11.7761424 11.7761424,12 11.5,12 L10.5,12 C10.2238576,12 10,11.7761424 10,11.5 C10,11.2238576 10.2238576,11 10.5,11 L11.5,11 Z M5.5,8 C5.77614237,8 6,8.22385763 6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4.5,9 C4.22385763,9 4,8.77614237 4,8.5 C4,8.22385763 4.22385763,8 4.5,8 L5.5,8 Z M8.5,8 C8.77614237,8 9,8.22385763 9,8.5 C9,8.77614237 8.77614237,9 8.5,9 L7.5,9 C7.22385763,9 7,8.77614237 7,8.5 C7,8.22385763 7.22385763,8 7.5,8 L8.5,8 Z M11.5,8 C11.7761424,8 12,8.22385763 12,8.5 C12,8.77614237 11.7761424,9 11.5,9 L10.5,9 C10.2238576,9 10,8.77614237 10,8.5 C10,8.22385763 10.2238576,8 10.5,8 L11.5,8 Z M3.991,3 L2,3 L2,5 L14,5 L14,3 L12.015,3 L12.0156954,3.5 C12.0156954,3.77614237 11.7918378,4 11.5156954,4 C11.239553,4 11.0156954,3.77614237 11.0156954,3.5 L11.015,3 L4.991,3 L4.99143991,3.5 C4.99143991,3.77614237 4.76758229,4 4.49143991,4 C4.21529754,4 3.99143991,3.77614237 3.99143991,3.5 L3.991,3 Z" })
                                                                )
                                                            )
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "date-picker__inner" },
                                                            "\"2022/01/01 - 2022/01/30\""
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "date-picker__suffix" },
                                                            React.createElement(
                                                                "i",
                                                                { className: "data-picker__clearBtn" },
                                                                React.createElement(
                                                                    "svg",
                                                                    { className: "prefix__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
                                                                    React.createElement("path", { fillRule: "evenodd", d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M10.5924919,5.27303573 C10.4094355,5.1521972 10.1606887,5.17236516 9.99956233,5.33352414 L9.99956233,5.33352414 L8.00023568,7.33325477 L6.00047136,5.33349045 C5.81628967,5.14930876 5.51767215,5.14930876 5.33349045,5.33349045 L5.33349045,5.33349045 L5.27301564,5.40754038 C5.1522078,5.59059052 5.17239885,5.83931011 5.33355782,6.00040399 L5.33355782,6.00040399 L7.33372614,7.99976432 L5.33352414,9.99956232 L5.33352414,9.99956232 L5.27306194,10.0735738 C5.15220491,10.2566181 5.17234775,10.5053668 5.33349045,10.6665095 L5.33349045,10.6665095 L5.40750807,10.7269643 C5.5905645,10.8478028 5.83931125,10.8276348 6.00043768,10.6664759 L6.00043768,10.6664759 L8.00023568,8.66627386 L9.99959601,10.6664422 L9.99959601,10.6664422 L10.0736337,10.726932 C10.2566595,10.8477768 10.5053831,10.827636 10.6665095,10.6665095 C10.8506912,10.4823279 10.8506912,10.1837103 10.6665095,9.99952864 L10.6665095,9.99952864 L8.66674523,7.99976432 L10.6664759,6.00043767 L10.6664759,6.00043767 L10.7269381,5.92642616 C10.8477951,5.74338194 10.8276522,5.49463316 10.6665095,5.33349045 L10.6665095,5.33349045 Z" })
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "order-search-container" },
                                        React.createElement(
                                            "div",
                                            { className: "search-input__Util" },
                                            React.createElement(
                                                "span",
                                                { className: "input-group__prepend" },
                                                React.createElement(
                                                    "div",
                                                    { className: "search__prepend select" },
                                                    React.createElement(
                                                        "div",
                                                        { tabIndex: 0, className: "data__picker " },
                                                        React.createElement(
                                                            "div",
                                                            { className: "picker__inner" },
                                                            "\u8CB7\u5BB6\u5E33\u865F"
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "picker__suffix" },
                                                            React.createElement(
                                                                "i",
                                                                { className: "picker__suffix_icon" },
                                                                React.createElement(
                                                                    "svg",
                                                                    { xmlns: "http://www.w3.org/2000/svg" },
                                                                    React.createElement("path", { d: "M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z" })
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "span",
                                                { className: "input-group__append" },
                                                React.createElement(
                                                    "div",
                                                    { className: "order-search-input" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "search-wrapper" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "search-input__inner" },
                                                            React.createElement("input", { type: "text", className: "search-target", placeholder: "\u8ACB\u8F38\u5165\u5E33\u865F" }),
                                                            React.createElement("div", { className: "search-input__suffix" })
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "order-panel-header" },
                                    React.createElement(
                                        "div",
                                        { className: "order-header-title" },
                                        "\u8A02\u55AE"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "title-space" },
                                        React.createElement(
                                            "div",
                                            { className: "div-button" },
                                            React.createElement(
                                                "button",
                                                { type: "button", className: "action_btn" },
                                                React.createElement(
                                                    "i",
                                                    { className: "action-btn-icon" },
                                                    React.createElement(
                                                        "svg",
                                                        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
                                                        React.createElement("path", { d: "M4.035 4h7.923l-.238-1.105a.5.5 0 0 0-.49-.395H4.763a.5.5 0 0 0-.489.395L4.035 4zm9.471.065A2 2 0 0 1 15 6v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 1.486-1.933l.32-1.488A2 2 0 0 1 4.763 1h6.469a2 2 0 0 1 1.955 1.579l.32 1.486zM13.5 6h-11v7a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6zM4.75 8h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm0 3h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5z" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "action-btn-context" },
                                                    "\u529F\u80FD\u6309\u9375"
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "order-list-pannel" },
                                React.createElement(
                                    "div",
                                    { className: "order-list-section" },
                                    React.createElement(
                                        "div",
                                        { className: "order-list-section-header" },
                                        React.createElement(
                                            "div",
                                            { className: "order-container" },
                                            React.createElement(
                                                "div",
                                                { className: "order-list-header inner" },
                                                React.createElement(
                                                    "span",
                                                    { className: "item-product" },
                                                    "\u5546\u54C1"
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "item-total" },
                                                    "\u6536\u4ED8\u91D1\u984D"
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "item-status" },
                                                    "\u5546\u54C1\u72C0\u614B"
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "item-expire" },
                                                    "\u5230\u671F\u6642\u9593"
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
        )
    );
};