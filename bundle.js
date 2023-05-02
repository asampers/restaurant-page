/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./homepage.jpg */ "./src/homepage.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./about.jpg */ "./src/about.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./menu.jpg */ "./src/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0px;\n  min-height: 100vh;\n  position:relative;\n  background-color: rgb(15, 16, 17);\n  scroll-behavior: smooth;\n}\n\n#content {\n  color:whitesmoke;\n  font-family: 'Homemade Apple', cursive;\n}\n\n.welcome {\n  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.menu {\n  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.contact {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.info {\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n}\n\nh1 {\n  padding: 2em;\n  font-size: 3em;\n}\n\n.about h1 {\n  padding: 1em;\n}\n\n.menu h1 {\n  padding: 2.5em 1em .5em 1em;\n  font-size: 2em;\n}\n\nheader p {\n  font-size:2rem;\n}\n\n.container {\n  height:100vh;\n  text-align: center;\n  margin:0 auto;\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-position: center 20%;\n  text-shadow: 1px 1px .75px black;\n}\n\n.container h1 {\n  max-width: 700px;\n  margin:0 auto;\n}\n\nnav {\n  max-width: 80%;\n  height: 50px;\n  margin: 0 auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display:flex;\n  align-items:center;\n  background-color: rgba(42, 44, 46, 0.671);\n  border-radius: 5px;\n}\n\nnav button {\n  height: 100%;\n  padding: 0 1em;\n  display:flex;\n  align-items:center;\n  font-size:1.3em;\n  background:none;\n  border:none;\n  color: whitesmoke;;\n}\n\nnav button:hover {\n  color:rgba(246, 248, 253, 0.801);\n  transition: all 0.2s ease;\n  cursor:pointer;\n}\n\n.active {\n  border-radius:5px;\n  background-color:rgba(255,255,255,0.2);\n}\n\n.menu-group {\n  max-height: 600px;\n  padding: 1.5em;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-item-heading {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n}\n\n.menu-item-name {\n  margin-right: 1.5em;\n}\n\n.menu-item-desc {\n  line-height: 1.6;\n  font-size: large;\n}\n\nfooter {\n  height:7vh;\n  color:whitesmoke;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  position:absolute;\n  max-width:100%;\n  bottom:0;\n  left:0;\n  right:0;\n  text-align:center;\n  padding: 0 1em;\n  box-sizing:border-box;\n  text-shadow: 1px 1px .75px black;\n}\n\n@media (max-width:580px) {\n  nav {\n    width: 100%;\n    justify-content:center;\n  }\n\n  nav button {\n    font-size: 1rem;\n  }\n\n  .about {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n\n  .menu-group {\n    max-height: 500px;\n    overflow: scroll;\n  }\n\n  header p, .text {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n\n@media (max-width:440px) {\n  nav button {\n    font-size: 0.85rem;\n  }\n\n  .container {\n    font-size: 15px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;EAEE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,4GAA0F;AAC5F;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kHAA6F;AAC/F;;AAEA;EACE,4GAAsF;AACxF;;AAEA;EACE,kHAA+F;AACjG;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;EACrB,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,QAAQ;EACR,MAAM;EACN,OAAO;EACP,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,2BAA2B;EAC7B;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');\n\nhtml,\nbody {\n  margin: 0px;\n  min-height: 100vh;\n  position:relative;\n  background-color: rgb(15, 16, 17);\n  scroll-behavior: smooth;\n}\n\n#content {\n  color:whitesmoke;\n  font-family: 'Homemade Apple', cursive;\n}\n\n.welcome {\n  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./homepage.jpg');\n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./about.jpg');\n}\n\n.menu {\n  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./menu.jpg');\n}\n\n.contact {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./contact.jpg');\n}\n\n.info {\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n}\n\nh1 {\n  padding: 2em;\n  font-size: 3em;\n}\n\n.about h1 {\n  padding: 1em;\n}\n\n.menu h1 {\n  padding: 2.5em 1em .5em 1em;\n  font-size: 2em;\n}\n\nheader p {\n  font-size:2rem;\n}\n\n.container {\n  height:100vh;\n  text-align: center;\n  margin:0 auto;\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-position: center 20%;\n  text-shadow: 1px 1px .75px black;\n}\n\n.container h1 {\n  max-width: 700px;\n  margin:0 auto;\n}\n\nnav {\n  max-width: 80%;\n  height: 50px;\n  margin: 0 auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display:flex;\n  align-items:center;\n  background-color: rgba(42, 44, 46, 0.671);\n  border-radius: 5px;\n}\n\nnav button {\n  height: 100%;\n  padding: 0 1em;\n  display:flex;\n  align-items:center;\n  font-size:1.3em;\n  background:none;\n  border:none;\n  color: whitesmoke;;\n}\n\nnav button:hover {\n  color:rgba(246, 248, 253, 0.801);\n  transition: all 0.2s ease;\n  cursor:pointer;\n}\n\n.active {\n  border-radius:5px;\n  background-color:rgba(255,255,255,0.2);\n}\n\n.menu-group {\n  max-height: 600px;\n  padding: 1.5em;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-item-heading {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n}\n\n.menu-item-name {\n  margin-right: 1.5em;\n}\n\n.menu-item-desc {\n  line-height: 1.6;\n  font-size: large;\n}\n\nfooter {\n  height:7vh;\n  color:whitesmoke;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  position:absolute;\n  max-width:100%;\n  bottom:0;\n  left:0;\n  right:0;\n  text-align:center;\n  padding: 0 1em;\n  box-sizing:border-box;\n  text-shadow: 1px 1px .75px black;\n}\n\n@media (max-width:580px) {\n  nav {\n    width: 100%;\n    justify-content:center;\n  }\n\n  nav button {\n    font-size: 1rem;\n  }\n\n  .about {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n\n  .menu-group {\n    max-height: 500px;\n    overflow: scroll;\n  }\n\n  header p, .text {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n}\n\n@media (max-width:440px) {\n  nav button {\n    font-size: 0.85rem;\n  }\n\n  .container {\n    font-size: 15px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const about = () => {
  const about = document.getElementById('about');
  about.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container', 'about');
  const headline = document.createElement('h1');
  const tagline = document.createElement('p');
  const hours = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'Exceeding expectations since 1993';
  tagline.innerHTML = "Nestled in the heart of Paris, our restaurant has\
  humble beginnings and big dreams. <br>We make our pasta fresh, <br>our Boulevardiers strong and \
  <br>can't wait to serve you.";
  hours.innerHTML = "\
  HOURS: Tues - Thurs 3pm - 10pm<br>\
         Fri - Sun 3pm - 12am<br>\
         Closed Mondays"
  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(hours);

  const content = document.querySelector('#content');
  content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clear = () => {
  const container = document.getElementsByClassName('container')[0];
  container.remove();
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i< buttons.length; i++) {
    buttons[i].className = "";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = () => {
  const contact = document.getElementById('contact');
  contact.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container', 'contact');
  const headline = document.createElement('h1');
  const phone = document.createElement('p');
  const email = document.createElement('p');
  const address = document.createElement('p');
  const info = document.createElement('div');
  info.classList.add('info')


  headline.innerHTML = 'See you soon!';
  phone.innerHTML = 'Phone: (1)23-456-789-10';
  email.innerHTML = 'Email: french@french.fr';
  address.innerHTML = 'Address: Champ de Mars, 5 Avenue Anatole France, 75007 Paris';
  
  info.appendChild(phone);
  info.appendChild(email);
  info.appendChild(address);

  container.appendChild(headline);
  container.appendChild(info);

  const content = document.querySelector('#content');
  content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.innerText = 'Created by Anna Sampers';
  footer.appendChild(footerText);
  const body = document.querySelector('body');
  body.appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
  const menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container', 'menu');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Lots of good things to eat';

  const menu = document.createElement('div');
  menu.classList.add('menu-group');
  const items = [['Pasta', '€25', 'noodles, red sauce, garlic, basil'], 
                 ['Pizza', '€30', 'dough, red sauce, pepperoni, mozzarella'],
                 ['Charcuterie Place', '€15', 'daily selection with grain mustard, cornichons and crackers'],
                 ['Fresh Oysters', '€3 each', 'shucked to order'],
                 ['Chocolate Ganache Cake', '€6', 'served with raspberry sauce and crème anglaise'],
                 ['Pot De Creme', '€5', 'changes daily, served with a madeliene cake and fresh berries']
                ];

  for (let i=0; i < items.length; i++) {
    let item = document.createElement('div');
    item.classList.add('menu-item');
    let title = document.createElement('h3');
    title.classList.add('menu-item-heading');
    let name = document.createElement('span');
    name.classList.add('menu-item-name');
    let price = document.createElement('span');
    let desc = document.createElement('p');
    desc.classList.add('menu-item-desc');
    name.innerHTML = items[i][0];
    price.innerHTML = items[i][1];
    desc.innerHTML = items[i][2];
    title.appendChild(name);
    title.appendChild(price);
    item.appendChild(title);
    item.appendChild(desc);
    menu.appendChild(item);
  }

  container.appendChild(headline);
  container.appendChild(menu);

  const content = document.querySelector('#content');
  content.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nav = () => {
  const nav = document.createElement('nav');
  
  const welcome = document.createElement('button');
  welcome.innerHTML = 'Welcome';
  welcome.id = 'welcome';

  const about = document.createElement('button');
  about.innerHTML = 'About';
  about.id = 'about';

  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  nav.appendChild(welcome);
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);
  
  return nav;
 };

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");



const welcome = () => {
  const content = document.getElementById('content');
  if (!document.querySelector('nav')) {
    content.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])());
  }

  const welcome = document.getElementById('welcome');
  welcome.classList.add('active');
  
  const container = document.createElement('div');
  container.classList.add('container', 'welcome');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Français et Français';
  header.appendChild(headline);
  container.appendChild(header);

  const tagline = document.createElement('p');
  tagline.innerHTML = '~ A very French restaurant for the very French ~';
  header.appendChild(tagline);

  content.appendChild(container);

  if (!document.querySelector('footer')) {
    (0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);

/***/ }),

/***/ "./src/about.jpg":
/*!***********************!*\
  !*** ./src/about.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7330d1a48c2b75f5d5b.jpg";

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20330fba9794ff1ef1a3.jpg";

/***/ }),

/***/ "./src/homepage.jpg":
/*!**************************!*\
  !*** ./src/homepage.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4415973cd4bdf20f31fc.jpg";

/***/ }),

/***/ "./src/menu.jpg":
/*!**********************!*\
  !*** ./src/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42849c133ec3e524e21.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ "./src/welcome.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear */ "./src/clear.js");







(0,_welcome__WEBPACK_IMPORTED_MODULE_1__["default"])();

// welcome tab
const welcomeBtn = document.getElementById('welcome');
welcomeBtn.onclick = () => {
  (0,_clear__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_welcome__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

// about tab
const aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  (0,_clear__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

// menu tab
const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  (0,_clear__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
 
// contact tab
const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  (0,_clear__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
} 

 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUdBQWlDO0FBQzdFLDRDQUE0QyxtR0FBOEI7QUFDMUUsNENBQTRDLGlHQUE2QjtBQUN6RSw0Q0FBNEMsdUdBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsNEhBQTRIO0FBQzVILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSx1REFBdUQsZ0JBQWdCLHNCQUFzQixzQkFBc0Isc0NBQXNDLDRCQUE0QixHQUFHLGNBQWMscUJBQXFCLDJDQUEyQyxHQUFHLGNBQWMseUhBQXlILEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGtDQUFrQywrSEFBK0gsR0FBRyxXQUFXLHlIQUF5SCxHQUFHLGNBQWMsK0hBQStILEdBQUcsV0FBVyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsbUJBQW1CLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxRQUFRLGlCQUFpQixtQkFBbUIsR0FBRyxlQUFlLGlCQUFpQixHQUFHLGNBQWMsZ0NBQWdDLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsa0JBQWtCLGdDQUFnQywwQkFBMEIsb0NBQW9DLHFDQUFxQyxHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLEdBQUcsU0FBUyxtQkFBbUIsaUJBQWlCLG1CQUFtQix1QkFBdUIsWUFBWSxhQUFhLGlCQUFpQix1QkFBdUIsOENBQThDLHVCQUF1QixHQUFHLGdCQUFnQixpQkFBaUIsbUJBQW1CLGlCQUFpQix1QkFBdUIsb0JBQW9CLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEdBQUcsc0JBQXNCLHFDQUFxQyw4QkFBOEIsbUJBQW1CLEdBQUcsYUFBYSxzQkFBc0IsMkNBQTJDLEdBQUcsaUJBQWlCLHNCQUFzQixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQixHQUFHLHdCQUF3QixrQkFBa0IsNEJBQTRCLGNBQWMsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHFCQUFxQixxQkFBcUIsR0FBRyxZQUFZLGVBQWUscUJBQXFCLGlCQUFpQix1QkFBdUIsMkJBQTJCLHNCQUFzQixtQkFBbUIsYUFBYSxXQUFXLFlBQVksc0JBQXNCLG1CQUFtQiwwQkFBMEIscUNBQXFDLEdBQUcsOEJBQThCLFNBQVMsa0JBQWtCLDZCQUE2QixLQUFLLGtCQUFrQixzQkFBc0IsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsa0NBQWtDLEtBQUssbUJBQW1CLHdCQUF3Qix1QkFBdUIsS0FBSyx1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLEdBQUcsOEJBQThCLGdCQUFnQix5QkFBeUIsS0FBSyxrQkFBa0Isc0JBQXNCLEtBQUssR0FBRyxTQUFTLGlGQUFpRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sNkdBQTZHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHNCQUFzQixzQ0FBc0MsNEJBQTRCLEdBQUcsY0FBYyxxQkFBcUIsMkNBQTJDLEdBQUcsY0FBYywrRkFBK0YsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGtHQUFrRyxHQUFHLFdBQVcsMkZBQTJGLEdBQUcsY0FBYyxvR0FBb0csR0FBRyxXQUFXLHFCQUFxQixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQkFBbUIsR0FBRyxZQUFZLHVCQUF1QixHQUFHLFFBQVEsaUJBQWlCLG1CQUFtQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsY0FBYyxnQ0FBZ0MsbUJBQW1CLEdBQUcsY0FBYyxtQkFBbUIsR0FBRyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixrQkFBa0IsZ0NBQWdDLDBCQUEwQixvQ0FBb0MscUNBQXFDLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsR0FBRyxTQUFTLG1CQUFtQixpQkFBaUIsbUJBQW1CLHVCQUF1QixZQUFZLGFBQWEsaUJBQWlCLHVCQUF1Qiw4Q0FBOEMsdUJBQXVCLEdBQUcsZ0JBQWdCLGlCQUFpQixtQkFBbUIsaUJBQWlCLHVCQUF1QixvQkFBb0Isb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxzQkFBc0IscUNBQXFDLDhCQUE4QixtQkFBbUIsR0FBRyxhQUFhLHNCQUFzQiwyQ0FBMkMsR0FBRyxpQkFBaUIsc0JBQXNCLG1CQUFtQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLGtCQUFrQiw0QkFBNEIsY0FBYyxHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIscUJBQXFCLHFCQUFxQixHQUFHLFlBQVksZUFBZSxxQkFBcUIsaUJBQWlCLHVCQUF1QiwyQkFBMkIsc0JBQXNCLG1CQUFtQixhQUFhLFdBQVcsWUFBWSxzQkFBc0IsbUJBQW1CLDBCQUEwQixxQ0FBcUMsR0FBRyw4QkFBOEIsU0FBUyxrQkFBa0IsNkJBQTZCLEtBQUssa0JBQWtCLHNCQUFzQixLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QixrQ0FBa0MsS0FBSyxtQkFBbUIsd0JBQXdCLHVCQUF1QixLQUFLLHVCQUF1Qix3QkFBd0IseUJBQXlCLEtBQUssR0FBRyw4QkFBOEIsZ0JBQWdCLHlCQUF5QixLQUFLLGtCQUFrQixzQkFBc0IsS0FBSyxHQUFHLHFCQUFxQjtBQUN4MVA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM5QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDVGY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQzlDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCSztBQUNNOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUc7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxtREFBTTtBQUNWO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQUNKO0FBQ0Y7QUFDTTtBQUNKOztBQUU1QixvREFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1AsRUFBRSxvREFBTztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQUs7QUFDUCxFQUFFLGtEQUFLO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQLEVBQUUsaURBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBSztBQUNQLEVBQUUsb0RBQU87QUFDVDs7QUFFQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaG9tZXBhZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hYm91dC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL21lbnUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb250YWN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SG9tZW1hZGUrQXBwbGUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE2LCAxNyk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgY29sb3I6d2hpdGVzbW9rZTtcXG4gIGZvbnQtZmFtaWx5OiAnSG9tZW1hZGUgQXBwbGUnLCBjdXJzaXZlO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5pbmZvIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5hYm91dCBoMSB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5tZW51IGgxIHtcXG4gIHBhZGRpbmc6IDIuNWVtIDFlbSAuNWVtIDFlbTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5oZWFkZXIgcCB7XFxuICBmb250LXNpemU6MnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6MTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46MCBhdXRvO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDIwJTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IC43NXB4IGJsYWNrO1xcbn1cXG5cXG4uY29udGFpbmVyIGgxIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46MCBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQ0LCA0NiwgMC42NzEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgZm9udC1zaXplOjEuM2VtO1xcbiAgYmFja2dyb3VuZDpub25lO1xcbiAgYm9yZGVyOm5vbmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTs7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6cmdiYSgyNDYsIDI0OCwgMjUzLCAwLjgwMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG59XFxuXFxuLm1lbnUtZ3JvdXAge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtaXRlbS1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1lbnUtaXRlbS1uYW1lIHtcXG4gIG1hcmdpbi1yaWdodDogMS41ZW07XFxufVxcblxcbi5tZW51LWl0ZW0tZGVzYyB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDo3dmg7XFxuICBjb2xvcjp3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgbWF4LXdpZHRoOjEwMCU7XFxuICBib3R0b206MDtcXG4gIGxlZnQ6MDtcXG4gIHJpZ2h0OjA7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggLjc1cHggYmxhY2s7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KSB7XFxuICBuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gIH1cXG5cXG4gIG5hdiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICAubWVudS1ncm91cCB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcblxcbiAgaGVhZGVyIHAsIC50ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NDQwcHgpIHtcXG4gIG5hdiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNEdBQTBGO0FBQzVGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0hBQTZGO0FBQy9GOztBQUVBO0VBQ0UsNEdBQXNGO0FBQ3hGOztBQUVBO0VBQ0Usa0hBQStGO0FBQ2pHOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SG9tZW1hZGUrQXBwbGUmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTYsIDE3KTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjp3aGl0ZXNtb2tlO1xcbiAgZm9udC1mYW1pbHk6ICdIb21lbWFkZSBBcHBsZScsIGN1cnNpdmU7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybCgnLi9ob21lcGFnZS5qcGcnKTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoJy4vYWJvdXQuanBnJyk7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMC41KSksIHVybCgnLi9tZW51LmpwZycpO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoJy4vY29udGFjdC5qcGcnKTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmFib3V0IGgxIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLm1lbnUgaDEge1xcbiAgcGFkZGluZzogMi41ZW0gMWVtIC41ZW0gMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmhlYWRlciBwIHtcXG4gIGZvbnQtc2l6ZToycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDoxMDB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjowIGF1dG87XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMjAlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggLjc1cHggYmxhY2s7XFxufVxcblxcbi5jb250YWluZXIgaDEge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjowIGF1dG87XFxufVxcblxcbm5hdiB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDQsIDQ2LCAwLjY3MSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBmb250LXNpemU6MS4zZW07XFxuICBiYWNrZ3JvdW5kOm5vbmU7XFxuICBib3JkZXI6bm9uZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlOztcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjpyZ2JhKDI0NiwgMjQ4LCAyNTMsIDAuODAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBib3JkZXItcmFkaXVzOjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbn1cXG5cXG4ubWVudS1ncm91cCB7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gIHBhZGRpbmc6IDEuNWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1pdGVtLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0Ojd2aDtcXG4gIGNvbG9yOndoaXRlc21va2U7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICBtYXgtd2lkdGg6MTAwJTtcXG4gIGJvdHRvbTowO1xcbiAgbGVmdDowO1xcbiAgcmlnaHQ6MDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAuNzVweCBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpIHtcXG4gIG5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgfVxcblxcbiAgbmF2IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5tZW51LWdyb3VwIHtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICB9XFxuXFxuICBoZWFkZXIgcCwgLnRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo0NDBweCkge1xcbiAgbmF2IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2Fib3V0Jyk7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhZ2xpbmUuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9ICdFeGNlZWRpbmcgZXhwZWN0YXRpb25zIHNpbmNlIDE5OTMnO1xuICB0YWdsaW5lLmlubmVySFRNTCA9IFwiTmVzdGxlZCBpbiB0aGUgaGVhcnQgb2YgUGFyaXMsIG91ciByZXN0YXVyYW50IGhhc1xcXG4gIGh1bWJsZSBiZWdpbm5pbmdzIGFuZCBiaWcgZHJlYW1zLiA8YnI+V2UgbWFrZSBvdXIgcGFzdGEgZnJlc2gsIDxicj5vdXIgQm91bGV2YXJkaWVycyBzdHJvbmcgYW5kIFxcXG4gIDxicj5jYW4ndCB3YWl0IHRvIHNlcnZlIHlvdS5cIjtcbiAgaG91cnMuaW5uZXJIVE1MID0gXCJcXFxuICBIT1VSUzogVHVlcyAtIFRodXJzIDNwbSAtIDEwcG08YnI+XFxcbiAgICAgICAgIEZyaSAtIFN1biAzcG0gLSAxMmFtPGJyPlxcXG4gICAgICAgICBDbG9zZWQgTW9uZGF5c1wiXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWluZXInKVswXTtcbiAgY29udGFpbmVyLnJlbW92ZSgpO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaTwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGJ1dHRvbnNbaV0uY2xhc3NOYW1lID0gXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhcjsiLCJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdjb250YWN0Jyk7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpXG5cblxuICBoZWFkbGluZS5pbm5lckhUTUwgPSAnU2VlIHlvdSBzb29uISc7XG4gIHBob25lLmlubmVySFRNTCA9ICdQaG9uZTogKDEpMjMtNDU2LTc4OS0xMCc7XG4gIGVtYWlsLmlubmVySFRNTCA9ICdFbWFpbDogZnJlbmNoQGZyZW5jaC5mcic7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gJ0FkZHJlc3M6IENoYW1wIGRlIE1hcnMsIDUgQXZlbnVlIEFuYXRvbGUgRnJhbmNlLCA3NTAwNyBQYXJpcyc7XG4gIFxuICBpbmZvLmFwcGVuZENoaWxkKHBob25lKTtcbiAgaW5mby5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSAnQ3JlYXRlZCBieSBBbm5hIFNhbXBlcnMnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyIiwiY29uc3QgbWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnbWVudScpO1xuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRsaW5lLmlubmVySFRNTCA9ICdMb3RzIG9mIGdvb2QgdGhpbmdzIHRvIGVhdCc7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JvdXAnKTtcbiAgY29uc3QgaXRlbXMgPSBbWydQYXN0YScsICfigqwyNScsICdub29kbGVzLCByZWQgc2F1Y2UsIGdhcmxpYywgYmFzaWwnXSwgXG4gICAgICAgICAgICAgICAgIFsnUGl6emEnLCAn4oKsMzAnLCAnZG91Z2gsIHJlZCBzYXVjZSwgcGVwcGVyb25pLCBtb3p6YXJlbGxhJ10sXG4gICAgICAgICAgICAgICAgIFsnQ2hhcmN1dGVyaWUgUGxhY2UnLCAn4oKsMTUnLCAnZGFpbHkgc2VsZWN0aW9uIHdpdGggZ3JhaW4gbXVzdGFyZCwgY29ybmljaG9ucyBhbmQgY3JhY2tlcnMnXSxcbiAgICAgICAgICAgICAgICAgWydGcmVzaCBPeXN0ZXJzJywgJ+KCrDMgZWFjaCcsICdzaHVja2VkIHRvIG9yZGVyJ10sXG4gICAgICAgICAgICAgICAgIFsnQ2hvY29sYXRlIEdhbmFjaGUgQ2FrZScsICfigqw2JywgJ3NlcnZlZCB3aXRoIHJhc3BiZXJyeSBzYXVjZSBhbmQgY3LDqG1lIGFuZ2xhaXNlJ10sXG4gICAgICAgICAgICAgICAgIFsnUG90IERlIENyZW1lJywgJ+KCrDUnLCAnY2hhbmdlcyBkYWlseSwgc2VydmVkIHdpdGggYSBtYWRlbGllbmUgY2FrZSBhbmQgZnJlc2ggYmVycmllcyddXG4gICAgICAgICAgICAgICAgXTtcblxuICBmb3IgKGxldCBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1oZWFkaW5nJyk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBpdGVtc1tpXVswXTtcbiAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtc1tpXVsxXTtcbiAgICBkZXNjLmlubmVySFRNTCA9IGl0ZW1zW2ldWzJdO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJjb25zdCBuYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB3ZWxjb21lLmlubmVySFRNTCA9ICdXZWxjb21lJztcbiAgd2VsY29tZS5pZCA9ICd3ZWxjb21lJztcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhYm91dC5pbm5lckhUTUwgPSAnQWJvdXQnO1xuICBhYm91dC5pZCA9ICdhYm91dCc7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgbWVudS5pZCA9ICdtZW51JztcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuICBjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIFxuICByZXR1cm4gbmF2O1xuIH07XG5cbiBleHBvcnQgZGVmYXVsdCBuYXY7IiwiaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuY29uc3Qgd2VsY29tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JykpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdigpKTtcbiAgfVxuXG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnd2VsY29tZScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkbGluZS5pbm5lckhUTUwgPSAnRnJhbsOnYWlzIGV0IEZyYW7Dp2Fpcyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhZ2xpbmUuaW5uZXJIVE1MID0gJ34gQSB2ZXJ5IEZyZW5jaCByZXN0YXVyYW50IGZvciB0aGUgdmVyeSBGcmVuY2ggfic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSkge1xuICAgIGZvb3RlcigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHdlbGNvbWUgZnJvbSAnLi93ZWxjb21lJztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGNsZWFyIGZyb20gJy4vY2xlYXInO1xuXG53ZWxjb21lKCk7XG5cbi8vIHdlbGNvbWUgdGFiXG5jb25zdCB3ZWxjb21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUnKTtcbndlbGNvbWVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY2xlYXIoKTtcbiAgd2VsY29tZSgpO1xufVxuXG4vLyBhYm91dCB0YWJcbmNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG5hYm91dEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjbGVhcigpO1xuICBhYm91dCgpO1xufVxuXG4vLyBtZW51IHRhYlxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5tZW51QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNsZWFyKCk7XG4gIG1lbnUoKTtcbn1cbiBcbi8vIGNvbnRhY3QgdGFiXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcbmNvbnRhY3RCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY2xlYXIoKTtcbiAgY29udGFjdCgpO1xufSBcblxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==