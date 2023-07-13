"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6532);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_progressbar__WEBPACK_IMPORTED_MODULE_2__);



const SeverityBar = ({ value  })=>{
    const calculateGradientColor = (value)=>{
        const normalizedValue = value / 100;
        const red = Math.round(255 - normalizedValue * 255);
        const green = Math.round(normalizedValue * 255);
        return `rgb(${red}, ${green}, 0)`;
    };
    const gradientColor = calculateGradientColor(value);
    const progressBarStyle = {
        height: "20px",
        background: `linear-gradient(to right, red, ${gradientColor}, green)`,
        position: "relative"
    };
    const pointerStyle = {
        position: "absolute",
        top: "-10px",
        left: `calc(${value}% - 5px)`,
        width: "0",
        height: "0",
        borderTop: "10px solid black",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        transform: "translateX(-50%)"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: progressBarStyle,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressbar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar, {
                value: value,
                style: {
                    height: "100%",
                    borderRadius: 0
                },
                showValue: false,
                className: "severity-bar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: pointerStyle
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeverityBar);


/***/ })

};
;