"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages_user_layout_jsx"],{

/***/ "./components/navbar/lower.jsx":
/*!*************************************!*\
  !*** ./components/navbar/lower.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LowerBar: () => (/* binding */ LowerBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router-dom@6.15.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _public_img_logobar_orange_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/img/logobar_orange.png */ \"./public/img/logobar_orange.png\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar SearchIcon = function SearchIcon() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"16\",\n    height: \"16\",\n    fill: \"currentColor\",\n    viewBox: \"0 0 16 16\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"\n  }));\n};\nvar CartIcon = function CartIcon(prop) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"16\",\n    height: \"16\",\n    fill: \"#ffffff\",\n    \"class\": \"bi bi-cart\",\n    viewBox: \"0 0 16 16\"\n  }, prop), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"\n  }));\n};\nvar LowerBar = function LowerBar() {\n  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\"),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    search = _React$useState2[0],\n    setText = _React$useState2[1];\n  var handle_search = function handle_search() {\n    var qur = new URLSearchParams({\n      search_word: search\n    });\n    navigation(\"/product/search?\".concat(qur.toString()));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"py-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"max-w-[1200px] mx-auto flex items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"w-64\",\n    src: _public_img_logobar_orange_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grow border-2 rounded-md flex py-1 px-2 bg-white h-10 gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    className: \"w-full px-1\",\n    value: search,\n    onInput: function onInput(e) {\n      return setText(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"bg-orange-500 text-white px-3 rounded-lg\",\n    onClick: function onClick() {\n      return handle_search();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-64 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/cart\",\n    className: \"w-fit block ml-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartIcon, {\n    className: \"w-8 h-8\"\n  })))));\n};\n\n//# sourceURL=webpack:///./components/navbar/lower.jsx?");

/***/ }),

/***/ "./pages/user/_component/aside.jsx":
/*!*****************************************!*\
  !*** ./pages/user/_component/aside.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Aside: () => (/* binding */ Aside)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router-dom@6.15.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Navbutton = function Navbutton(_ref) {\n  var img = _ref.img,\n    url = _ref.url,\n    title = _ref.title,\n    activate = _ref.activate;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"flex gap-3 items-center \".concat(activate ? \"text-orange-500\" : \"\"),\n    to: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-4 h-4\"\n  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/static/img/\".concat(img)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, title));\n};\nvar Standerbar = function Standerbar(_ref2) {\n  var title = _ref2.title,\n    url = _ref2.url,\n    items = _ref2.items,\n    img = _ref2.img;\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  var isOpened = items ? items.some(function (i) {\n    return i.url == location.pathname;\n  }) : false;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"normal_bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navbutton, {\n    title: title,\n    url: url,\n    img: img,\n    activate: items ? false : location.pathname == url\n  }), isOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-1\"\n  }, items ? items.map(function (subItem) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navbutton, {\n      title: subItem.title,\n      url: subItem.url,\n      activate: location.pathname == subItem.url\n    });\n  }) : \"\"));\n};\nvar Aside = function Aside() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\"),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    username = _React$useState2[0],\n    setusername = _React$useState2[1];\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"\"),\n    _React$useState4 = _slicedToArray(_React$useState3, 2),\n    user_photo = _React$useState4[0],\n    setPhoto = _React$useState4[1];\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {}, []);\n  var obj = [{\n    title: \"我的帳戶\",\n    url: \"/user/account/profile\",\n    img: \"person-square.svg\",\n    item: [{\n      title: \"更改個人資訊\",\n      url: \"/user/account/profile\"\n    }, {\n      title: \"更改密碼\",\n      url: \"/user/account/password\"\n    }]\n  }, {\n    title: \"購買清單\",\n    url: \"/user/purchase\",\n    img: \"card-list.svg\"\n  }];\n  react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {\n    fetch(\"/api/account/GetUserDetail\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        require: [\"file_path\", \"name\"]\n      }),\n      headers: {\n        \"content-type\": \"application/json\"\n      }\n    }).then(function (res) {\n      var status_code = res.status;\n      if (status_code === 200) {\n        return res.json();\n      } else if (status_code === 401) {\n        FailNotify(\"請先登入\").then(function () {\n          return location.herf = location.href;\n        });\n      }\n    }).then(function (data) {\n      var return_coode = data.cause;\n      if (return_coode === 0) {\n        setusername(data.name);\n        setPhoto(\"\".concat(data.file_path.slice(1)));\n      } else {\n        FailNotify(\"取得使用者資料發生錯誤\");\n      }\n    }, []);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"aside\", {\n    className: \"w-64 h-96 bg-white rounded-lg shadow-sm p-3 flex flex-col gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"w-16 h-16 p-1 rounded-full object-cover\",\n    src: user_photo || \"/static/img/logo1.png\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"user_name\"\n  }, username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"flex gap-3\",\n    href: \"/user/account/profile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"/static/img/pencil.svg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u4FEE\\u6539\\u500B\\u4EBA\\u8CC7\\u8A0A\")))), obj.map(function (i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Standerbar, {\n      title: i.title,\n      url: i.url,\n      type: i.type,\n      img: i.img,\n      items: i.item\n    });\n  }));\n};\n\n//# sourceURL=webpack:///./pages/user/_component/aside.jsx?");

/***/ }),

/***/ "./pages/user/layout.jsx":
/*!*******************************!*\
  !*** ./pages/user/layout.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js\");\n/* harmony import */ var _components_navbar_lower_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/navbar/lower.jsx */ \"./components/navbar/lower.jsx\");\n/* harmony import */ var _components_navbar_upper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navbar/upper.jsx */ \"./components/navbar/upper.jsx\");\n/* harmony import */ var _component_aside_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_component/aside.jsx */ \"./pages/user/_component/aside.jsx\");\n\n\n\n\n\nvar Component = function Component() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    className: \"bg-gradient-to-b from-orange-500 to-orange-600\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar_upper_jsx__WEBPACK_IMPORTED_MODULE_2__.UpperBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_navbar_lower_jsx__WEBPACK_IMPORTED_MODULE_1__.LowerBar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex w-[1200px] mx-auto p-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_aside_jsx__WEBPACK_IMPORTED_MODULE_3__.Aside, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Outlet, null))));\n};\n\n//# sourceURL=webpack:///./pages/user/layout.jsx?");

/***/ }),

/***/ "./public/img/logobar_orange.png":
/*!***************************************!*\
  !*** ./public/img/logobar_orange.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"13859569daa43ea9b9c87f43fe498b69.png\");\n\n//# sourceURL=webpack:///./public/img/logobar_orange.png?");

/***/ })

}]);