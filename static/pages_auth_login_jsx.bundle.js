/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages_auth_login_jsx"],{

/***/ "./components/notification.js":
/*!************************************!*\
  !*** ./components/notification.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FailNotify: () => (/* binding */ FailNotify),\n/* harmony export */   SuccessNotify: () => (/* binding */ SuccessNotify)\n/* harmony export */ });\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/.pnpm/sweetalert2@11.7.27/node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SuccessNotify = (title) =>\n  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n    icon: \"success\",\n    title: title,\n    timer: 1500,\n    showConfirmButton: false,\n  });\n\nconst FailNotify = (title) =>\n  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n    icon: \"error\",\n    title: title,\n    timer: 1500,\n    showConfirmButton: false,\n  });\n\n\n//# sourceURL=webpack:///./components/notification.js?");

/***/ }),

/***/ "./pages/auth/login.jsx":
/*!******************************!*\
  !*** ./pages/auth/login.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-forge */ \"./node_modules/.pnpm/node-forge@1.3.1/node_modules/node-forge/lib/index.js\");\n/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/notification.js */ \"./components/notification.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/.pnpm/react-router-dom@6.15.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Component = function Component() {\n  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    acc_emp = _React$useState2[0],\n    setacc = _React$useState2[1];\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n    _React$useState4 = _slicedToArray(_React$useState3, 2),\n    pas_emp = _React$useState4[0],\n    setpas = _React$useState4[1];\n  var handle_login = function handle_login() {\n    fetch(\"/api/account/PublicKey\", {\n      method: \"GET\"\n    }).then(function (respone) {\n      if (respone.status === 200) {\n        return respone.text();\n      }\n    }).then(function (data) {\n      var account = document.getElementById(\"account\").value;\n      var password = document.getElementById(\"password\").value;\n      var public_key = node_forge__WEBPACK_IMPORTED_MODULE_1___default().pki.publicKeyFromPem(data); //data是你去跟後端請求回來的公鑰明文\n      var encode_password = node_forge__WEBPACK_IMPORTED_MODULE_1___default().util.encode64(public_key.encrypt(node_forge__WEBPACK_IMPORTED_MODULE_1___default().util.encodeUtf8(password), \"RSA-OAEP\", {\n        md: node_forge__WEBPACK_IMPORTED_MODULE_1___default().md.sha256.create(),\n        mgf1: {\n          md: node_forge__WEBPACK_IMPORTED_MODULE_1___default().md.sha1.create()\n        }\n      }));\n      console.log(\"success\");\n      fetch(\"/api/account/Login\", {\n        method: \"POST\",\n        body: JSON.stringify({\n          account: account,\n          password: encode_password\n        }),\n        headers: {\n          \"content-type\": \"application/json\"\n        }\n      }).then(function (respons) {\n        if (respons.status === 200) {\n          return respons.json();\n        }\n      }).then(function (json) {\n        if (json.cause === 0) {\n          (0,_components_notification_js__WEBPACK_IMPORTED_MODULE_2__.SuccessNotify)(\"登入成功\").then(function () {\n            navigation(\"/\");\n          });\n        } else {\n          fetch(\"/api/admin/Login\", {\n            method: \"POST\",\n            headers: {\n              \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              account: account,\n              password: encode_password\n            })\n          }).then(function (res) {\n            if (res.status === 200) {\n              return res.json();\n            }\n          }).then(function (data) {\n            if (data.cause === 0) {\n              (0,_components_notification_js__WEBPACK_IMPORTED_MODULE_2__.SuccessNotify)(\"管理員登入成功\").then(function () {\n                navigation(\"/admin\");\n              });\n            } else {\n              (0,_components_notification_js__WEBPACK_IMPORTED_MODULE_2__.FailNotify)(\"帳號或密碼錯誤\");\n            }\n          });\n        }\n      });\n    });\n  };\n  var InputBox = function InputBox(_ref) {\n    var id = _ref.id,\n      type = _ref.type,\n      show = _ref.show,\n      empty = _ref.empty;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"w-full\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      className: \"px-2 py-1 w-full\",\n      type: type,\n      id: id,\n      placeholder: show,\n      style: {\n        border: \"1px solid \".concat(empty ? \"red\" : \"gray\")\n      }\n    }));\n  };\n  var CheckForm = function CheckForm(seta, setp) {\n    var vaild = true;\n    if (document.getElementById(\"account\").value === \"\") {\n      seta(true);\n      vaild = false;\n    } else {\n      seta(false);\n    }\n    if (document.getElementById(\"password\").value === \"\") {\n      setp(true);\n      vaild = false;\n    } else {\n      setp(false);\n    }\n    if (vaild) handle_login();\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bg-white rounded-lg w-80 h-fit p-2 flex flex-col gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-2xl font-bold\"\n  }, \"\\u767B\\u5165\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grow flex flex-col gap-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u5E33\\u865F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InputBox, {\n    id: \"account\",\n    type: \"email\",\n    show: \"\\u5E33\\u865F\",\n    empty: acc_emp\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u5BC6\\u78BC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InputBox, {\n    id: \"password\",\n    type: \"password\",\n    show: \"\\u5BC6\\u78BC\",\n    empty: pas_emp\n  })), acc_emp || pas_emp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: {\n      color: \"red\",\n      \"font-size\": \"10px\"\n    }\n  }, \"\\u5FC5\\u9808\\u5165\\u5E33\\u865F\\u5BC6\\u78BC\") : \"\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    id: \"login\",\n    className: \"block w-fit px-3 py-2 mx-auto bg-orange-400 text-white rounded-lg\",\n    onClick: function onClick() {\n      return CheckForm(setacc, setpas);\n    }\n  }, \"\\u767B\\u5165\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative py-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-[1px] w-full bg-slate-500/30\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"absolute inset-1/2 translate-y-[-50%] translate-x-[-50%] w-5 h-5\"\n  }, \"\\u6216\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \" flex flex-col justify-center items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\u5C1A\\u672A\\u64C1\\u6709\\u5E33\\u865F?\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n    to: \"/auth/register\",\n    className: \"text-orange-400\"\n  }, \"\\u8A3B\\u518A\"))));\n};\n\n//# sourceURL=webpack:///./pages/auth/login.jsx?");

/***/ }),

/***/ "?3849":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

}]);