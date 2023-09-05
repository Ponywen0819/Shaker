"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages_admin_admin_index_jsx"],{

/***/ "./pages/admin/admin_index.jsx":
/*!*************************************!*\
  !*** ./pages/admin/admin_index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Component = function Component() {\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    fetch(\"/admin/getAdminInfo\", {\n      method: \"GET\"\n    }).then(function (res) {\n      if (res.status === 200) {\n        return res.json();\n      }\n      if (res.status === 401) {\n        location.href = \"/login\";\n      }\n    }).then(function (data) {\n      console.log(data);\n      if (data.cause === 0) {\n        setName(data.data.name);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u9996\\u9801\\u7684\\u62C9\"));\n};\n\n//# sourceURL=webpack:///./pages/admin/admin_index.jsx?");

/***/ })

}]);