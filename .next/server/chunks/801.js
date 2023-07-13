"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ProductService)
/* harmony export */ });
const ProductService = {
    getProductsSmall () {
        return fetch("/demo/data/products-small.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    },
    getProducts () {
        return fetch("/demo/data/products.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    },
    getProductsWithOrdersSmall () {
        return fetch("/demo/data/products-orders-small.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
};


/***/ })

};
;