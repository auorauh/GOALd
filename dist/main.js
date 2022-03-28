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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    font-family: Helvetica;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\tbackground: #C9D6FF;  /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\t\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100vh;\n\toverflow-y: hidden;\n}\nol, ul {\n\tlist-style: none;\n}\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\twidth: 100%;\n}\n#icon {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 2rem;\n\twidth: 4%;\n}\nh1 {\n\tfont-size: 3rem;\n\tpadding: 1rem;\n}\nh2 {\n\tfont-size: 1rem;\n}\n.board {\n\twidth: 40%;\n}\n.goalItem {\n\tposition: relative;\n\twidth: 100%;\n    height: 100%;\n\tflex-basis: 100%;\n\tborder-radius: 20%;\n\tborder: 2px solid gray;\n\tmargin: 5px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.goalItem:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n.goalItem:hover {\n\tbackground-color: cornflowerblue;\n}\n.fin {\n\tbackground-color: darkseagreen !important;\n}\n.goalItem:hover .goalContent {\n\tdisplay: flex;\n}\n.goalItem:hover .goalTitle {\n\tdisplay: none;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.goalForm {\n\twidth: 100%;\n\theight: 0;\n\tposition: fixed;\n\tz-index: 1;\n\tbottom:0;\n\ttransition: 0.5s;\n\tdisplay: hidden;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n}\nform {\n\tpadding-top: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n.goalTitle {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\ttext-align: center;\n}\n.goalContent {\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 1rem;\n\twidth: 100%;\n    height: 100%;\n}\n.open {\n\tdisplay: flex;\n\theight: 75%;\n\tbackground-color: cornflowerblue;\n\tborder-radius: 5%;\n    margin-bottom: -5rem;\n}\n/*Form Style*/\nh3 {\n\tfont-size: 1.75em;\n\tcolor: #FBF5B7;\n}\ninput {\n\tborder-radius: 0.35rem;\n}\n.goalType {\n\twidth: 100%;\n}\n#desc {\n\theight: 5rem;\n\twidth: 100%;\n}\n#submit {\n\ttext-align: center;\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tpadding: .75rem;\n\tborder-radius: 5%;\n\tborder: 2px solid rgba(0, 0, 0, 0.411);\n\tcursor:pointer;\n}\n#remove {\n\talign-self: flex-end;\n\tjustify-self: flex-end;\n\tcursor: pointer;\n}\n#cancel {\n\talign-self: flex-end;\n\tcursor: pointer;\n}\n/* Footer and Home Menu */\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 2rem 0;\n}\n.addGoalBtn {\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tborder-radius: 50%;\n\theight: 4rem;\n\twidth: 4rem;\n\tdisplay: flex;\n\tfont-size: 4.75rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\tcursor: pointer;\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.addGoalBtn:hover {\n\tbackground-image: linear-gradient(25deg, #74EBD5 0%, cornflowerblue 100%);\n}\n\n@media screen and (max-width: 900px) {\n\tbody {\n\t\tjustify-content: center;\n\t}\n\theader {\n\t\tposition: absolute;\n    \ttop: 0;\n\t}\n\t#icon {\n\t\twidth: 20%;\n\t}\n\t.board {\n\t\twidth: 100%;\n\t}\n\tfooter {\n\t\tposition: absolute;\n    \tbottom: 0;\n\t}\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;IACrB,sBAAsB;AAC1B;AACA;;CAEC,cAAc;AACf;AACA;CACC,cAAc;CACd,mBAAmB,GAAG,8BAA8B;CACpD,+DAA+D,GAAG,+BAA+B;CACjG,uDAAuD,EAAE,qEAAqE;CAC9H,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;CACrB,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,aAAa;CACb,SAAS;AACV;AACA;CACC,eAAe;CACf,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,UAAU;AACX;AACA;CACC,kBAAkB;CAClB,WAAW;IACR,YAAY;CACf,gBAAgB;CAChB,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;CACX,aAAa;IACV,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;CACC,WAAW;CACX,cAAc;CACd,oBAAoB;AACrB;AACA;CACC,gCAAgC;AACjC;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;AACA;CACC,WAAW;CACX,SAAS;CACT,eAAe;CACf,UAAU;CACV,QAAQ;CACR,gBAAgB;CAChB,eAAe;CACf,2BAA2B;CAC3B,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;AACA;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,kBAAkB;CAClB,SAAS;CACT,WAAW;IACR,YAAY;AAChB;AACA;CACC,aAAa;CACb,WAAW;CACX,gCAAgC;CAChC,iBAAiB;IACd,oBAAoB;AACxB;AACA,aAAa;AACb;CACC,iBAAiB;CACjB,cAAc;AACf;AACA;CACC,sBAAsB;AACvB;AACA;CACC,WAAW;AACZ;AACA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,+DAA+D;CAC/D,eAAe;CACf,iBAAiB;CACjB,sCAAsC;CACtC,cAAc;AACf;AACA;CACC,oBAAoB;CACpB,sBAAsB;CACtB,eAAe;AAChB;AACA;CACC,oBAAoB;CACpB,eAAe;AAChB;AACA,yBAAyB;AACzB;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;CACX,eAAe;AAChB;AACA;CACC,+DAA+D;CAC/D,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,aAAa;CACb,kBAAkB;IACf,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;CACrB,eAAe;CACf,2CAA2C;AAC5C;AACA;CACC,yEAAyE;AAC1E;;AAEA;CACC;EACC,uBAAuB;CACxB;CACA;EACC,kBAAkB;KACf,MAAM;CACV;CACA;EACC,UAAU;CACX;CACA;EACC,WAAW;CACZ;CACA;EACC,kBAAkB;KACf,SAAS;CACb;EACC","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    font-family: Helvetica;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\tbackground: #C9D6FF;  /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\t\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100vh;\n\toverflow-y: hidden;\n}\nol, ul {\n\tlist-style: none;\n}\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\twidth: 100%;\n}\n#icon {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 2rem;\n\twidth: 4%;\n}\nh1 {\n\tfont-size: 3rem;\n\tpadding: 1rem;\n}\nh2 {\n\tfont-size: 1rem;\n}\n.board {\n\twidth: 40%;\n}\n.goalItem {\n\tposition: relative;\n\twidth: 100%;\n    height: 100%;\n\tflex-basis: 100%;\n\tborder-radius: 20%;\n\tborder: 2px solid gray;\n\tmargin: 5px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.goalItem:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n.goalItem:hover {\n\tbackground-color: cornflowerblue;\n}\n.fin {\n\tbackground-color: darkseagreen !important;\n}\n.goalItem:hover .goalContent {\n\tdisplay: flex;\n}\n.goalItem:hover .goalTitle {\n\tdisplay: none;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.goalForm {\n\twidth: 100%;\n\theight: 0;\n\tposition: fixed;\n\tz-index: 1;\n\tbottom:0;\n\ttransition: 0.5s;\n\tdisplay: hidden;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n}\nform {\n\tpadding-top: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n.goalTitle {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\ttext-align: center;\n}\n.goalContent {\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 1rem;\n\twidth: 100%;\n    height: 100%;\n}\n.open {\n\tdisplay: flex;\n\theight: 75%;\n\tbackground-color: cornflowerblue;\n\tborder-radius: 5%;\n    margin-bottom: -5rem;\n}\n/*Form Style*/\nh3 {\n\tfont-size: 1.75em;\n\tcolor: #FBF5B7;\n}\ninput {\n\tborder-radius: 0.35rem;\n}\n.goalType {\n\twidth: 100%;\n}\n#desc {\n\theight: 5rem;\n\twidth: 100%;\n}\n#submit {\n\ttext-align: center;\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tpadding: .75rem;\n\tborder-radius: 5%;\n\tborder: 2px solid rgba(0, 0, 0, 0.411);\n\tcursor:pointer;\n}\n#remove {\n\talign-self: flex-end;\n\tjustify-self: flex-end;\n\tcursor: pointer;\n}\n#cancel {\n\talign-self: flex-end;\n\tcursor: pointer;\n}\n/* Footer and Home Menu */\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 2rem 0;\n}\n.addGoalBtn {\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tborder-radius: 50%;\n\theight: 4rem;\n\twidth: 4rem;\n\tdisplay: flex;\n\tfont-size: 4.75rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\tcursor: pointer;\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.addGoalBtn:hover {\n\tbackground-image: linear-gradient(25deg, #74EBD5 0%, cornflowerblue 100%);\n}\n\n@media screen and (max-width: 900px) {\n\tbody {\n\t\tjustify-content: center;\n\t}\n\theader {\n\t\tposition: absolute;\n    \ttop: 0;\n\t}\n\t#icon {\n\t\twidth: 20%;\n\t}\n\t.board {\n\t\twidth: 100%;\n\t}\n\tfooter {\n\t\tposition: absolute;\n    \tbottom: 0;\n\t}\n  }"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/createGoal.js":
/*!***************************!*\
  !*** ./src/createGoal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Goal": () => (/* binding */ Goal),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "currentGoals": () => (/* binding */ currentGoals),
/* harmony export */   "finished": () => (/* binding */ finished)
/* harmony export */ });
const currentGoals = [];

const Goal = (nameNew, typeNew, dueDate, desc) => {
  // nameNew;
  // typeNew;
  // dueDate;
  // desc;
  let fin = false;
    return {nameNew, typeNew, dueDate, desc, fin};
  }

  const create = () => {
    let nameNew = document.getElementById('name').value;
    let typeNew;
    if (document.getElementById('daily').checked){
        typeNew = 'Daily';
    } else if (document.getElementById('obj').checked) {
        typeNew = 'Objective';
    }
    let dueDate = document.getElementById('date').value;
    let desc = document.getElementById('desc').value;
    let justadded = Goal(nameNew, typeNew, dueDate, desc);
    currentGoals.push(justadded);
}
const finished = () => {
  
}
var d = new Date();
let day = d.getDay();
let date = day + 'th';

// const jeff = Goal('Brush Teeth', 'Daily', 'by 11:59 PM', 'Brush my Teeth');
// currentGoals.push(jeff);
// const one = Goal('one', 'Daily', 'by 11:59 PM', 'one');
// currentGoals.push(one);
// const two = Goal('two', 'Daily', 'by 11:59 PM', 'two');
// currentGoals.push(two);

//  export const DailyGoal = (name) => {
//     // simply create a person and pull out the sayName function with destructuring assignment syntax!
//     const {sayName} = ObjGoal(name);
//     name;
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {name, sayName, doSomethingNerdy};
//   } 


/***/ }),

/***/ "./src/current.js":
/*!************************!*\
  !*** ./src/current.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "current": () => (/* binding */ current)
/* harmony export */ });
/* harmony import */ var _createGoal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGoal */ "./src/createGoal.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/remove.js");



const current = () => {
    let cells = document.querySelectorAll('.goalItem');

    cells.forEach(element => {
     element.classList.remove('fin');   
    });

    for (let i =0; i<_createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals.length; i++) {
        let cell = document.getElementById(i+1);
        cell.innerHTML= '';
        let goal = _createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals[i];
        const goalTitle = document.createElement('div');
        goalTitle.innerText = goal.nameNew;
        goalTitle.classList.add('goalTitle');
        
        const goalContent = document.createElement('div');
        goalContent.classList.add('goalContent');
        const name = document.createElement('div');
        name.innerText = goal.nameNew;
        goalContent.appendChild(name);

        let type = document.createElement('div');
        type.innerText = goal.typeNew;
        goalContent.appendChild(type);

        let date = document.createElement('div');
        date.innerText = goal.dueDate;
        goalContent.appendChild(date);

        let desc = document.createElement('div');
        desc.innerText = goal.desc;
        goalContent.appendChild(desc);

        let remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.classList.add('remove');

        if (goal.fin == true) {
            goalTitle.innerText = goalTitle.innerText+ ' ✓';
            cell.classList.add('fin');

        } else {
            let complete = document.createElement('button');
            complete.innerText = '✓';
            complete.classList.add('complete');
            complete.addEventListener('click', () => {
                goal.fin = true
                cell.classList.add('fin');
                goalTitle.innerText = goalTitle.innerText+ ' ✓';
            })
            goalContent.appendChild(complete);
            
        }
        goalContent.appendChild(remove);
        cell.appendChild(goalContent);
        cell.append(goalTitle)
    }
    const removeButton = document.querySelectorAll('.remove');
removeButton.forEach(
    function (item) {
        item.addEventListener('click', () => {
            item = item.parentElement;
            (0,_remove__WEBPACK_IMPORTED_MODULE_1__.remove)(item.parentElement);
            current();
            console.log(_createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals);
        })  
    }
)
}

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");


const layout = (currentGoals) => {
    //Header and Logo
    const header = document.querySelector('header');
    const logo = new Image();
    logo.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logo.id = 'icon';
    header.prepend(logo);
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.classList.add('board');
    board.id = 'goalBoard';

    //fill board with empty goal items
    let limit = 0; //set number ID
    for (let i=0; i<3; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        for (let x=0; x<3; x++){
            const col = document.createElement('div');
            col.classList.add('goalItem');
            row.appendChild(col)
            limit++;
            col.id = limit;
        }
        board.appendChild(row);
        
    }
    body.appendChild(board);

    //New Goal Form
    const formDiv = document.createElement('div');
    const newGoal = document.createElement('form');
    formDiv.classList.add('goalForm');
    const formTitle = document.createElement('h3');
    formTitle.innerText = 'New Goal Form'; 
    newGoal.appendChild(formTitle);

    //NAME 
    const name = document.createElement('input');
    name.id = 'name';
    name.type = "text";
    name.placeholder = 'Goal Name';
    name.setAttribute("required", "");     
    name.required = true; 
    newGoal.appendChild(name);

    //GOAL TYPE STARTING WITH DAILY 
    const typeTitle = document.createElement('h3');
    typeTitle.innerText = 'Is this an objective or a daily goal?';
    newGoal.appendChild(typeTitle);
    const goaltype = document.createElement('div');
    goaltype.classList.add('goalType');
    const dailyLabel = document.createElement('label');
    dailyLabel.htmlFor = 'daily';
    dailyLabel.innerText = 'Daily';
    const daily = document.createElement('input');
    daily.id = 'daily';
    daily.type = 'radio';
    daily.value = 'daily';
    daily.name = 'goal type';
    daily.addEventListener('click', noDate)
    //OBJ
    const objLabel = document.createElement('label');
    const objective = document.createElement('input');
    objLabel.htmlFor = 'objective';
    objective.type = 'radio';
    objective.value = 'objective';
    objective.name = 'goal type';
    objective.id = 'obj';
    objective.checked = true;
    objective.addEventListener('click', noDate)

    //add Daily and Obj
    objLabel.innerText = 'Objective';
    objLabel.appendChild(objective);
    goaltype.appendChild(objLabel);
    dailyLabel.appendChild(daily)
    goaltype.appendChild(dailyLabel);
    newGoal.appendChild(goaltype);

    //DATE input
    const date = document.createElement('div');
    const dateTitle = document.createElement('h3');
    dateTitle.innerText = 'Due Date:';
    newGoal.appendChild(dateTitle);
    date.classList.add('goalType');
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'date';
    dueDate.setAttribute("type", "date");
    date.appendChild(dueDate);
    newGoal.appendChild(date);

    //description input 
    const descTitle = document.createElement('h3');
    descTitle.innerText = 'Description';
    newGoal.appendChild(descTitle);
    const description = document.createElement('div');
    description.classList.add('goalType');
    const desc = document.createElement('input');
    desc.type = 'textbox';
    desc.id= 'desc';
    desc.placeholder = 'describe your goal here!';
    description.appendChild(desc)
    newGoal.appendChild(description);

    //submit button
    const submit = document.createElement('div');
    submit.innerText = 'Create Goal';
    submit.id = 'submit';
    newGoal.appendChild(submit);

    //cancel button
    const cancel = document.createElement('div');
    cancel.innerText = 'Cancel';
    cancel.id = 'cancel';
    cancel.addEventListener('click', () => {
        formDiv.classList.remove('open');
    })
    newGoal.appendChild(cancel);


    function openGoalForm() {
        formDiv.classList.add('open');
    }

    formDiv.appendChild(newGoal)
    body.appendChild(formDiv);

    function noDate() {
        var date = new Date();
        var currentDate = date.toISOString().slice(0,10);
        var currentTime = date.getHours() + ':' + date.getMinutes();
        if (document.getElementById('daily').checked) {
            dueDate.disabled = true;
            dueDate.value = currentDate;
        } else if (document.getElementById('obj').checked){
            dueDate.disabled = false;
            dueDate.value = '';
        }
    }


    const controlPanel = document.createElement('footer');
    const controls = document.createElement('div');
    const create = document.createElement('div');
    create.classList.add('addGoalBtn');
    create.innerText= '+';
    create.addEventListener('click', openGoalForm);

    controls.appendChild(create);
    controlPanel.appendChild(controls);
    body.appendChild(controlPanel);
}

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _createGoal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGoal */ "./src/createGoal.js");


const remove = (item) => {
    item =(item.id)-1;
    let goal = _createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals[item]
    let cell = document.getElementById(item+1);
    var index = _createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals.indexOf(goal);
            cell.classList.remove('fin');
            cell.innerHTML = ""
            if (index > -1) {
                _createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals.splice(index, 1);
              }
              let arr = document.querySelectorAll('.goalItem')
            arr.forEach(element => {
                element.innerHTML = "";
            });
}


/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2ae650b78ec9f27cd26.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _createGoal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGoal */ "./src/createGoal.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current */ "./src/current.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove */ "./src/remove.js");







(0,_layout__WEBPACK_IMPORTED_MODULE_2__.layout)();
(0,_current__WEBPACK_IMPORTED_MODULE_3__.current)();

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    (0,_createGoal__WEBPACK_IMPORTED_MODULE_1__.create)();
    (0,_current__WEBPACK_IMPORTED_MODULE_3__.current)();
    let close = document.querySelector('.goalForm');
    close.classList.remove('open');
})

const complete = document.querySelectorAll('.complete');
    complete.forEach(
        function (item) {
            item.addEventListener('click', () => {
                (0,_current__WEBPACK_IMPORTED_MODULE_3__.current)();
            })  
        }
    )


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNtQztBQUN4QjtBQUNFO0FBQ0Y7OztBQUdoQywrQ0FBTTtBQUNOLGlEQUFPOztBQUVQO0FBQ0E7QUFDQSxJQUFJLG1EQUFNO0FBQ1YsSUFBSSxpREFBTztBQUNYO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFPO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dvYWxkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvY3JlYXRlR29hbC5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9jdXJyZW50LmpzIiwid2VicGFjazovL2dvYWxkLy4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dvYWxkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbn1cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRiYWNrZ3JvdW5kOiAjQzlENkZGOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTJFMkUyLCAjQzlENkZGKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTJFMkUyLCAjQzlENkZGKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcdFxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbiNpY29uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXHR3aWR0aDogNCU7XFxufVxcbmgxIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuaDIge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmJvYXJkIHtcXG5cXHR3aWR0aDogNDAlO1xcbn1cXG4uZ29hbEl0ZW0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuXFx0bWFyZ2luOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZ29hbEl0ZW06YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cXG4uZmluIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuLmdvYWxJdGVtOmhvdmVyIC5nb2FsQ29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmdvYWxJdGVtOmhvdmVyIC5nb2FsVGl0bGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLmdvYWxGb3JtIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym90dG9tOjA7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXHRkaXNwbGF5OiBoaWRkZW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZm9ybSB7XFxuXFx0cGFkZGluZy10b3A6IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuLmdvYWxUaXRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZ29hbENvbnRlbnQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ub3BlbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTVyZW07XFxufVxcbi8qRm9ybSBTdHlsZSovXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcblxcdGNvbG9yOiAjRkJGNUI3O1xcbn1cXG5pbnB1dCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG59XFxuLmdvYWxUeXBlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI2Rlc2Mge1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI3N1Ym1pdCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkY5NTNGLCAjRkJGNUI3LCAjQUE3NzFDKTtcXG5cXHRwYWRkaW5nOiAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNSU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQxMSk7XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxufVxcbiNyZW1vdmUge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY2FuY2VsIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIEZvb3RlciBhbmQgSG9tZSBNZW51ICovXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLmFkZEdvYWxCdG4ge1xcblxcdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkY5NTNGLCAjRkJGNUI3LCAjQUE3NzFDKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdHdpZHRoOiA0cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1zaXplOiA0Ljc1cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG4uYWRkR29hbEJ0bjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjNzRFQkQ1IDAlLCBjb3JuZmxvd2VyYmx1ZSAxMDAlKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFxcdHRvcDogMDtcXG5cXHR9XFxuXFx0I2ljb24ge1xcblxcdFxcdHdpZHRoOiAyMCU7XFxuXFx0fVxcblxcdC5ib2FyZCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdGZvb3RlciB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXHRib3R0b206IDA7XFxuXFx0fVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUIsR0FBRyw4QkFBOEI7Q0FDcEQsK0RBQStELEdBQUcsK0JBQStCO0NBQ2pHLHVEQUF1RCxFQUFFLHFFQUFxRTtDQUM5SCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxhQUFhO0NBQ2IsU0FBUztBQUNWO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0lBQ1IsWUFBWTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxhQUFhO0lBQ1YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MseUNBQXlDO0FBQzFDO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsZUFBZTtDQUNmLFVBQVU7Q0FDVixRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztJQUNSLFlBQVk7QUFDaEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsZ0NBQWdDO0NBQ2hDLGlCQUFpQjtJQUNkLG9CQUFvQjtBQUN4QjtBQUNBLGFBQWE7QUFDYjtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsK0RBQStEO0NBQy9ELGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLGNBQWM7QUFDZjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjtBQUNBLHlCQUF5QjtBQUN6QjtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLGVBQWU7QUFDaEI7QUFDQTtDQUNDLCtEQUErRDtDQUMvRCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxhQUFhO0NBQ2Isa0JBQWtCO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCLGVBQWU7Q0FDZiwyQ0FBMkM7QUFDNUM7QUFDQTtDQUNDLHlFQUF5RTtBQUMxRTs7QUFFQTtDQUNDO0VBQ0MsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrQkFBa0I7S0FDZixNQUFNO0NBQ1Y7Q0FDQTtFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxrQkFBa0I7S0FDZixTQUFTO0NBQ2I7RUFDQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdGJhY2tncm91bmQ6ICNDOUQ2RkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI2ljb24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdHdpZHRoOiA0JTtcXG59XFxuaDEge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYm9hcmQge1xcblxcdHdpZHRoOiA0MCU7XFxufVxcbi5nb2FsSXRlbSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFx0ZmxleC1iYXNpczogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgZ3JheTtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5nb2FsSXRlbTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcbi5nb2FsSXRlbTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcbi5maW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbiAhaW1wb3J0YW50O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxDb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxUaXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uZ29hbEZvcm0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRib3R0b206MDtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGRpc3BsYXk6IGhpZGRlbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5mb3JtIHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG4uZ29hbFRpdGxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5nb2FsQ29udGVudCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5vcGVuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNzUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcXG59XFxuLypGb3JtIFN0eWxlKi9cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiAxLjc1ZW07XFxuXFx0Y29sb3I6ICNGQkY1Qjc7XFxufVxcbmlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG4uZ29hbFR5cGUge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jZGVzYyB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jc3VibWl0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdHBhZGRpbmc6IC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1JTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuI3JlbW92ZSB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjYW5jZWwge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogRm9vdGVyIGFuZCBIb21lIE1lbnUgKi9cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWRkR29hbEJ0biB7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0d2lkdGg6IDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDQuNzVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcbi5hZGRHb2FsQnRuOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICM3NEVCRDUgMCUsIGNvcm5mbG93ZXJibHVlIDEwMCUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG5cXHRoZWFkZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFx0dG9wOiAwO1xcblxcdH1cXG5cXHQjaWNvbiB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFx0LmJvYXJkIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFxcdGJvdHRvbTogMDtcXG5cXHR9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY3VycmVudEdvYWxzID0gW107XG5cbmV4cG9ydCBjb25zdCBHb2FsID0gKG5hbWVOZXcsIHR5cGVOZXcsIGR1ZURhdGUsIGRlc2MpID0+IHtcbiAgLy8gbmFtZU5ldztcbiAgLy8gdHlwZU5ldztcbiAgLy8gZHVlRGF0ZTtcbiAgLy8gZGVzYztcbiAgbGV0IGZpbiA9IGZhbHNlO1xuICAgIHJldHVybiB7bmFtZU5ldywgdHlwZU5ldywgZHVlRGF0ZSwgZGVzYywgZmlufTtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWVOZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGxldCB0eXBlTmV3O1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKS5jaGVja2VkKXtcbiAgICAgICAgdHlwZU5ldyA9ICdEYWlseSc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqJykuY2hlY2tlZCkge1xuICAgICAgICB0eXBlTmV3ID0gJ09iamVjdGl2ZSc7XG4gICAgfVxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWU7XG4gICAgbGV0IGp1c3RhZGRlZCA9IEdvYWwobmFtZU5ldywgdHlwZU5ldywgZHVlRGF0ZSwgZGVzYyk7XG4gICAgY3VycmVudEdvYWxzLnB1c2goanVzdGFkZGVkKTtcbn1cbmV4cG9ydCBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgXG59XG52YXIgZCA9IG5ldyBEYXRlKCk7XG5sZXQgZGF5ID0gZC5nZXREYXkoKTtcbmxldCBkYXRlID0gZGF5ICsgJ3RoJztcblxuLy8gY29uc3QgamVmZiA9IEdvYWwoJ0JydXNoIFRlZXRoJywgJ0RhaWx5JywgJ2J5IDExOjU5IFBNJywgJ0JydXNoIG15IFRlZXRoJyk7XG4vLyBjdXJyZW50R29hbHMucHVzaChqZWZmKTtcbi8vIGNvbnN0IG9uZSA9IEdvYWwoJ29uZScsICdEYWlseScsICdieSAxMTo1OSBQTScsICdvbmUnKTtcbi8vIGN1cnJlbnRHb2Fscy5wdXNoKG9uZSk7XG4vLyBjb25zdCB0d28gPSBHb2FsKCd0d28nLCAnRGFpbHknLCAnYnkgMTE6NTkgUE0nLCAndHdvJyk7XG4vLyBjdXJyZW50R29hbHMucHVzaCh0d28pO1xuXG4vLyAgZXhwb3J0IGNvbnN0IERhaWx5R29hbCA9IChuYW1lKSA9PiB7XG4vLyAgICAgLy8gc2ltcGx5IGNyZWF0ZSBhIHBlcnNvbiBhbmQgcHVsbCBvdXQgdGhlIHNheU5hbWUgZnVuY3Rpb24gd2l0aCBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQgc3ludGF4IVxuLy8gICAgIGNvbnN0IHtzYXlOYW1lfSA9IE9iakdvYWwobmFtZSk7XG4vLyAgICAgbmFtZTtcbi8vICAgICBjb25zdCBkb1NvbWV0aGluZ05lcmR5ID0gKCkgPT4gY29uc29sZS5sb2coJ25lcmQgc3R1ZmYnKTtcbi8vICAgICByZXR1cm4ge25hbWUsIHNheU5hbWUsIGRvU29tZXRoaW5nTmVyZHl9O1xuLy8gICB9IFxuIiwiaW1wb3J0IHsgY3VycmVudEdvYWxzIH0gZnJvbSBcIi4vY3JlYXRlR29hbFwiO1xuaW1wb3J0IHtyZW1vdmV9IGZyb20gXCIuL3JlbW92ZVwiO1xuXG5leHBvcnQgY29uc3QgY3VycmVudCA9ICgpID0+IHtcbiAgICBsZXQgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29hbEl0ZW0nKTtcblxuICAgIGNlbGxzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmluJyk7ICAgXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0wOyBpPGN1cnJlbnRHb2Fscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkrMSk7XG4gICAgICAgIGNlbGwuaW5uZXJIVE1MPSAnJztcbiAgICAgICAgbGV0IGdvYWwgPSBjdXJyZW50R29hbHNbaV07XG4gICAgICAgIGNvbnN0IGdvYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnb2FsVGl0bGUuaW5uZXJUZXh0ID0gZ29hbC5uYW1lTmV3O1xuICAgICAgICBnb2FsVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ29hbFRpdGxlJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnb2FsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnb2FsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdnb2FsQ29udGVudCcpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gZ29hbC5uYW1lTmV3O1xuICAgICAgICBnb2FsQ29udGVudC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgICBsZXQgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0eXBlLmlubmVyVGV4dCA9IGdvYWwudHlwZU5ldztcbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQodHlwZSk7XG5cbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSBnb2FsLmR1ZURhdGU7XG4gICAgICAgIGdvYWxDb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gZ29hbC5kZXNjO1xuICAgICAgICBnb2FsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZS5pbm5lclRleHQgPSAncmVtb3ZlJztcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuXG4gICAgICAgIGlmIChnb2FsLmZpbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBnb2FsVGl0bGUuaW5uZXJUZXh0ID0gZ29hbFRpdGxlLmlubmVyVGV4dCsgJyDinJMnO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdmaW4nKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb21wbGV0ZS5pbm5lclRleHQgPSAn4pyTJztcbiAgICAgICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnb2FsLmZpbiA9IHRydWVcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ZpbicpO1xuICAgICAgICAgICAgICAgIGdvYWxUaXRsZS5pbm5lclRleHQgPSBnb2FsVGl0bGUuaW5uZXJUZXh0KyAnIOKckyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChnb2FsQ29udGVudCk7XG4gICAgICAgIGNlbGwuYXBwZW5kKGdvYWxUaXRsZSlcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xucmVtb3ZlQnV0dG9uLmZvckVhY2goXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICByZW1vdmUoaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHb2Fscyk7XG4gICAgICAgIH0pICBcbiAgICB9XG4pXG59IiwiaW1wb3J0IEljb24gZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsYXlvdXQgPSAoY3VycmVudEdvYWxzKSA9PiB7XG4gICAgLy9IZWFkZXIgYW5kIExvZ29cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSBJY29uO1xuICAgIGxvZ28uaWQgPSAnaWNvbic7XG4gICAgaGVhZGVyLnByZXBlbmQobG9nbyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgYm9hcmQuaWQgPSAnZ29hbEJvYXJkJztcblxuICAgIC8vZmlsbCBib2FyZCB3aXRoIGVtcHR5IGdvYWwgaXRlbXNcbiAgICBsZXQgbGltaXQgPSAwOyAvL3NldCBudW1iZXIgSURcbiAgICBmb3IgKGxldCBpPTA7IGk8MzsgaSsrKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8MzsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2dvYWxJdGVtJyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICAgICAgbGltaXQrKztcbiAgICAgICAgICAgIGNvbC5pZCA9IGxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIFxuICAgIH1cbiAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICAgIC8vTmV3IEdvYWwgRm9ybVxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdHb2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZ29hbEZvcm0nKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSAnTmV3IEdvYWwgRm9ybSc7IFxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIC8vTkFNRSBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLmlkID0gJ25hbWUnO1xuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUucGxhY2Vob2xkZXIgPSAnR29hbCBOYW1lJztcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpOyAgICAgXG4gICAgbmFtZS5yZXF1aXJlZCA9IHRydWU7IFxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAvL0dPQUwgVFlQRSBTVEFSVElORyBXSVRIIERBSUxZIFxuICAgIGNvbnN0IHR5cGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdHlwZVRpdGxlLmlubmVyVGV4dCA9ICdJcyB0aGlzIGFuIG9iamVjdGl2ZSBvciBhIGRhaWx5IGdvYWw/JztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKHR5cGVUaXRsZSk7XG4gICAgY29uc3QgZ29hbHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnb2FsdHlwZS5jbGFzc0xpc3QuYWRkKCdnb2FsVHlwZScpO1xuICAgIGNvbnN0IGRhaWx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhaWx5TGFiZWwuaHRtbEZvciA9ICdkYWlseSc7XG4gICAgZGFpbHlMYWJlbC5pbm5lclRleHQgPSAnRGFpbHknO1xuICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYWlseS5pZCA9ICdkYWlseSc7XG4gICAgZGFpbHkudHlwZSA9ICdyYWRpbyc7XG4gICAgZGFpbHkudmFsdWUgPSAnZGFpbHknO1xuICAgIGRhaWx5Lm5hbWUgPSAnZ29hbCB0eXBlJztcbiAgICBkYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5vRGF0ZSlcbiAgICAvL09CSlxuICAgIGNvbnN0IG9iakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG9iakxhYmVsLmh0bWxGb3IgPSAnb2JqZWN0aXZlJztcbiAgICBvYmplY3RpdmUudHlwZSA9ICdyYWRpbyc7XG4gICAgb2JqZWN0aXZlLnZhbHVlID0gJ29iamVjdGl2ZSc7XG4gICAgb2JqZWN0aXZlLm5hbWUgPSAnZ29hbCB0eXBlJztcbiAgICBvYmplY3RpdmUuaWQgPSAnb2JqJztcbiAgICBvYmplY3RpdmUuY2hlY2tlZCA9IHRydWU7XG4gICAgb2JqZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbm9EYXRlKVxuXG4gICAgLy9hZGQgRGFpbHkgYW5kIE9ialxuICAgIG9iakxhYmVsLmlubmVyVGV4dCA9ICdPYmplY3RpdmUnO1xuICAgIG9iakxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XG4gICAgZ29hbHR5cGUuYXBwZW5kQ2hpbGQob2JqTGFiZWwpO1xuICAgIGRhaWx5TGFiZWwuYXBwZW5kQ2hpbGQoZGFpbHkpXG4gICAgZ29hbHR5cGUuYXBwZW5kQ2hpbGQoZGFpbHlMYWJlbCk7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChnb2FsdHlwZSk7XG5cbiAgICAvL0RBVEUgaW5wdXRcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkYXRlVGl0bGUuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZ29hbFR5cGUnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZS5pZCA9ICdkYXRlJztcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIC8vZGVzY3JpcHRpb24gaW5wdXQgXG4gICAgY29uc3QgZGVzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNjVGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKGRlc2NUaXRsZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdnb2FsVHlwZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2MudHlwZSA9ICd0ZXh0Ym94JztcbiAgICBkZXNjLmlkPSAnZGVzYyc7XG4gICAgZGVzYy5wbGFjZWhvbGRlciA9ICdkZXNjcmliZSB5b3VyIGdvYWwgaGVyZSEnO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAvL3N1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBHb2FsJztcbiAgICBzdWJtaXQuaWQgPSAnc3VibWl0JztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAvL2NhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbCc7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9KVxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuXG4gICAgZnVuY3Rpb24gb3BlbkdvYWxGb3JtKCkge1xuICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKG5ld0dvYWwpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIGZ1bmN0aW9uIG5vRGF0ZSgpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IGRhdGUuZ2V0SG91cnMoKSArICc6JyArIGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5JykuY2hlY2tlZCkge1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBkdWVEYXRlLnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iaicpLmNoZWNrZWQpe1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKCdhZGRHb2FsQnRuJyk7XG4gICAgY3JlYXRlLmlubmVyVGV4dD0gJysnO1xuICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Hb2FsRm9ybSk7XG5cbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwpO1xufSIsImltcG9ydCB7IGN1cnJlbnRHb2FscyB9IGZyb20gXCIuL2NyZWF0ZUdvYWxcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChpdGVtKSA9PiB7XG4gICAgaXRlbSA9KGl0ZW0uaWQpLTE7XG4gICAgbGV0IGdvYWwgPSBjdXJyZW50R29hbHNbaXRlbV1cbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0rMSk7XG4gICAgdmFyIGluZGV4ID0gY3VycmVudEdvYWxzLmluZGV4T2YoZ29hbCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbicpO1xuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHb2Fscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29hbEl0ZW0nKVxuICAgICAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtjcmVhdGUsIEdvYWwsIGN1cnJlbnRHb2Fsc30gZnJvbSAnLi9jcmVhdGVHb2FsJztcbmltcG9ydCB7bGF5b3V0fSBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQge2N1cnJlbnR9IGZyb20gJy4vY3VycmVudCc7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSBcIi4vcmVtb3ZlXCI7XG5cblxubGF5b3V0KCk7XG5jdXJyZW50KCk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGUoKTtcbiAgICBjdXJyZW50KCk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWxGb3JtJyk7XG4gICAgY2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xufSlcblxuY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGUnKTtcbiAgICBjb21wbGV0ZS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50KCk7XG4gICAgICAgICAgICB9KSAgXG4gICAgICAgIH1cbiAgICApXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==