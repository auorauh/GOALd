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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    font-family: Helvetica;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\tbackground: #C9D6FF;  /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\t\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100vh;\n\toverflow-y: hidden;\n}\nol, ul {\n\tlist-style: none;\n}\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\twidth: 100%;\n}\n#icon {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 2rem;\n\twidth: 4%;\n}\nh1 {\n\tfont-size: 3rem;\n\tpadding: 1rem;\n}\nh2 {\n\tfont-size: 1rem;\n}\n.board {\n\twidth: 40%;\n}\n.goalItem {\n\tposition: relative;\n\twidth: 100%;\n    height: 100%;\n\tflex-basis: 100%;\n\tborder-radius: 20%;\n\tborder: 2px solid gray;\n\tmargin: 5px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.goalItem:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n.goalItem:hover {\n\tbackground-color: cornflowerblue;\n}\n.fin {\n\tbackground-color: darkseagreen !important;\n}\n.goalItem:hover .goalContent {\n\tdisplay: flex;\n}\n.goalItem:hover .goalTitle {\n\tdisplay: none;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.goalForm {\n\twidth: 100%;\n\theight: 0;\n\tposition: fixed;\n\tz-index: 1;\n\tbottom:0;\n\ttransition: 0.5s;\n\tdisplay: hidden;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n}\nform {\n\tpadding-top: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n.goalTitle {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\ttext-align: center;\n}\n.goalContent {\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 1rem;\n\twidth: 100%;\n    height: 100%;\n}\n.complete {\n\tborder-radius: 10%;\n\twidth: 50%;\n\tborder-color: green;\n\tbackground-color: darkseagreen;\n}\n.open {\n\tdisplay: flex;\n\theight: 75%;\n\tbackground-color: cornflowerblue;\n\tborder-radius: 5%;\n    margin-bottom: -5rem;\n}\n/*Form Style*/\nh3 {\n\tfont-size: 1.75em;\n\tcolor: #FBF5B7;\n}\ninput {\n\tborder-radius: 0.35rem;\n}\n.goalType {\n\twidth: 100%;\n}\n#desc {\n\theight: 5rem;\n\twidth: 100%;\n}\n#submit {\n\ttext-align: center;\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tpadding: .75rem;\n\tborder-radius: 5%;\n\tborder: 2px solid rgba(0, 0, 0, 0.411);\n\tcursor:pointer;\n}\n#remove {\n\talign-self: flex-end;\n\tjustify-self: flex-end;\n\tcursor: pointer;\n}\n#cancel {\n\talign-self: flex-end;\n\tcursor: pointer;\n}\n/* Footer and Home Menu */\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 2rem 0;\n}\n.addGoalBtn {\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tborder-radius: 50%;\n\theight: 4rem;\n\twidth: 4rem;\n\tdisplay: flex;\n\tfont-size: 4.75rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\tcursor: pointer;\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.addGoalBtn:hover {\n\tbackground-image: linear-gradient(25deg, #74EBD5 0%, cornflowerblue 100%);\n}\n\n@media screen and (max-width: 900px) {\n\tbody {\n\t\tjustify-content: center;\n\t}\n\theader {\n\t\tposition: absolute;\n    \ttop: 0;\n\t}\n\t#icon {\n\t\twidth: 20%;\n\t}\n\t.board {\n\t\twidth: 100%;\n\t}\n\tfooter {\n\t\tposition: absolute;\n    \tbottom: 0;\n\t}\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;IACrB,sBAAsB;AAC1B;AACA;;CAEC,cAAc;AACf;AACA;CACC,cAAc;CACd,mBAAmB,GAAG,8BAA8B;CACpD,+DAA+D,GAAG,+BAA+B;CACjG,uDAAuD,EAAE,qEAAqE;CAC9H,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;CACrB,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,aAAa;CACb,SAAS;AACV;AACA;CACC,eAAe;CACf,aAAa;AACd;AACA;CACC,eAAe;AAChB;AACA;CACC,UAAU;AACX;AACA;CACC,kBAAkB;CAClB,WAAW;IACR,YAAY;CACf,gBAAgB;CAChB,kBAAkB;CAClB,sBAAsB;CACtB,WAAW;CACX,aAAa;IACV,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;CACC,WAAW;CACX,cAAc;CACd,oBAAoB;AACrB;AACA;CACC,gCAAgC;AACjC;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;AACA;CACC,WAAW;CACX,SAAS;CACT,eAAe;CACf,UAAU;CACV,QAAQ;CACR,gBAAgB;CAChB,eAAe;CACf,2BAA2B;CAC3B,mBAAmB;CACnB,sBAAsB;AACvB;AACA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;AACA;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,sBAAsB;CACtB,kBAAkB;CAClB,SAAS;CACT,WAAW;IACR,YAAY;AAChB;AACA;CACC,kBAAkB;CAClB,UAAU;CACV,mBAAmB;CACnB,8BAA8B;AAC/B;AACA;CACC,aAAa;CACb,WAAW;CACX,gCAAgC;CAChC,iBAAiB;IACd,oBAAoB;AACxB;AACA,aAAa;AACb;CACC,iBAAiB;CACjB,cAAc;AACf;AACA;CACC,sBAAsB;AACvB;AACA;CACC,WAAW;AACZ;AACA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,+DAA+D;CAC/D,eAAe;CACf,iBAAiB;CACjB,sCAAsC;CACtC,cAAc;AACf;AACA;CACC,oBAAoB;CACpB,sBAAsB;CACtB,eAAe;AAChB;AACA;CACC,oBAAoB;CACpB,eAAe;AAChB;AACA,yBAAyB;AACzB;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;CACX,eAAe;AAChB;AACA;CACC,+DAA+D;CAC/D,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,aAAa;CACb,kBAAkB;IACf,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;CACrB,eAAe;CACf,2CAA2C;AAC5C;AACA;CACC,yEAAyE;AAC1E;;AAEA;CACC;EACC,uBAAuB;CACxB;CACA;EACC,kBAAkB;KACf,MAAM;CACV;CACA;EACC,UAAU;CACX;CACA;EACC,WAAW;CACZ;CACA;EACC,kBAAkB;KACf,SAAS;CACb;EACC","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    font-family: Helvetica;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\tbackground: #C9D6FF;  /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\t\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 100vh;\n\toverflow-y: hidden;\n}\nol, ul {\n\tlist-style: none;\n}\nheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\twidth: 100%;\n}\n#icon {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 2rem;\n\twidth: 4%;\n}\nh1 {\n\tfont-size: 3rem;\n\tpadding: 1rem;\n}\nh2 {\n\tfont-size: 1rem;\n}\n.board {\n\twidth: 40%;\n}\n.goalItem {\n\tposition: relative;\n\twidth: 100%;\n    height: 100%;\n\tflex-basis: 100%;\n\tborder-radius: 20%;\n\tborder: 2px solid gray;\n\tmargin: 5px;\n\tdisplay: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.goalItem:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n.goalItem:hover {\n\tbackground-color: cornflowerblue;\n}\n.fin {\n\tbackground-color: darkseagreen !important;\n}\n.goalItem:hover .goalContent {\n\tdisplay: flex;\n}\n.goalItem:hover .goalTitle {\n\tdisplay: none;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.goalForm {\n\twidth: 100%;\n\theight: 0;\n\tposition: fixed;\n\tz-index: 1;\n\tbottom:0;\n\ttransition: 0.5s;\n\tdisplay: hidden;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-direction: column;\n}\nform {\n\tpadding-top: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n.goalTitle {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\ttext-align: center;\n}\n.goalContent {\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 1rem;\n\twidth: 100%;\n    height: 100%;\n}\n.complete {\n\tborder-radius: 10%;\n\twidth: 50%;\n\tborder-color: green;\n\tbackground-color: darkseagreen;\n}\n.open {\n\tdisplay: flex;\n\theight: 75%;\n\tbackground-color: cornflowerblue;\n\tborder-radius: 5%;\n    margin-bottom: -5rem;\n}\n/*Form Style*/\nh3 {\n\tfont-size: 1.75em;\n\tcolor: #FBF5B7;\n}\ninput {\n\tborder-radius: 0.35rem;\n}\n.goalType {\n\twidth: 100%;\n}\n#desc {\n\theight: 5rem;\n\twidth: 100%;\n}\n#submit {\n\ttext-align: center;\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tpadding: .75rem;\n\tborder-radius: 5%;\n\tborder: 2px solid rgba(0, 0, 0, 0.411);\n\tcursor:pointer;\n}\n#remove {\n\talign-self: flex-end;\n\tjustify-self: flex-end;\n\tcursor: pointer;\n}\n#cancel {\n\talign-self: flex-end;\n\tcursor: pointer;\n}\n/* Footer and Home Menu */\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tpadding: 2rem 0;\n}\n.addGoalBtn {\n\tbackground:linear-gradient(to right, #BF953F, #FBF5B7, #AA771C);\n\tborder-radius: 50%;\n\theight: 4rem;\n\twidth: 4rem;\n\tdisplay: flex;\n\tfont-size: 4.75rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\tcursor: pointer;\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n.addGoalBtn:hover {\n\tbackground-image: linear-gradient(25deg, #74EBD5 0%, cornflowerblue 100%);\n}\n\n@media screen and (max-width: 900px) {\n\tbody {\n\t\tjustify-content: center;\n\t}\n\theader {\n\t\tposition: absolute;\n    \ttop: 0;\n\t}\n\t#icon {\n\t\twidth: 20%;\n\t}\n\t.board {\n\t\twidth: 100%;\n\t}\n\tfooter {\n\t\tposition: absolute;\n    \tbottom: 0;\n\t}\n  }"],"sourceRoot":""}]);
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
    window.localStorage.setItem(nameNew, JSON.stringify(justadded));
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
        //find cell
        let cell = document.getElementById(i+1);
        cell.innerHTML= '';
        let goal = _createGoal__WEBPACK_IMPORTED_MODULE_0__.currentGoals[i];
        //goal title
        const goalTitle = document.createElement('div');
        goalTitle.innerText = goal.nameNew;
        goalTitle.classList.add('goalTitle');
        //goal name
        const goalContent = document.createElement('div');
        goalContent.classList.add('goalContent');
        const name = document.createElement('div');
        name.innerText = goal.nameNew;
        goalContent.appendChild(name);
        //goal type
        let type = document.createElement('div');
        type.innerText = goal.typeNew;
        goalContent.appendChild(type);
        //goal completion date
        let date = document.createElement('div');
        date.innerText = goal.dueDate;
        goalContent.appendChild(date);
        //goal description 
        let desc = document.createElement('div');
        desc.innerText = goal.desc;
        goalContent.appendChild(desc);
        //remove button
        let remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.classList.add('remove');

        //complete button 
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
                localStorage.setItem(goal.nameNew, JSON.stringify(goal))
            })
            goalContent.appendChild(complete);
            
        }
        //add to page
        goalContent.appendChild(remove);
        cell.appendChild(goalContent);
        cell.append(goalTitle)
    }

    //remove button logic
    const removeButton = document.querySelectorAll('.remove');
        removeButton.forEach(
            function (item) {
                item.addEventListener('click', () => {
                item = item.parentElement;
                (0,_remove__WEBPACK_IMPORTED_MODULE_1__.remove)(item.parentElement);
                current();
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


const layout = () => {
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
                window.localStorage.removeItem(goal.nameNew);
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





function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let add = ( localStorage.getItem(keys[i]) );
        console.log(add);
        add = JSON.parse(add)
        _createGoal__WEBPACK_IMPORTED_MODULE_1__.currentGoals.unshift(add);
    }
    
    return values;
}
allStorage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNtQztBQUN4QjtBQUNFOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQU07QUFDTixpREFBTzs7QUFFUDtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBTztBQUN2QixhQUFhO0FBQ2I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvYWxkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dvYWxkLy4vc3JjL2NyZWF0ZUdvYWwuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvY3VycmVudC5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvcmVtb3ZlLmpzIiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG59XFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0YmFja2dyb3VuZDogI0M5RDZGRjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG5cXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UyRTJFMiwgI0M5RDZGRik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UyRTJFMiwgI0M5RDZGRik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXHRcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jaWNvbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0d2lkdGg6IDQlO1xcbn1cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcbmgyIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcbi5ib2FyZCB7XFxuXFx0d2lkdGg6IDQwJTtcXG59XFxuLmdvYWxJdGVtIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXHRmbGV4LWJhc2lzOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDIwJTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcblxcdG1hcmdpbjogNXB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmdvYWxJdGVtOmFmdGVyIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG59XFxuLmdvYWxJdGVtOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG59XFxuLmZpbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuICFpbXBvcnRhbnQ7XFxufVxcbi5nb2FsSXRlbTpob3ZlciAuZ29hbENvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5nb2FsSXRlbTpob3ZlciAuZ29hbFRpdGxlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5nb2FsRm9ybSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAxO1xcblxcdGJvdHRvbTowO1xcblxcdHRyYW5zaXRpb246IDAuNXM7XFxuXFx0ZGlzcGxheTogaGlkZGVuO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmZvcm0ge1xcblxcdHBhZGRpbmctdG9wOiAycmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcbi5nb2FsVGl0bGUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdvYWxDb250ZW50IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbXBsZXRlIHtcXG5cXHRib3JkZXItcmFkaXVzOiAxMCU7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRib3JkZXItY29sb3I6IGdyZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXG59XFxuLm9wZW4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA3NSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IC01cmVtO1xcbn1cXG4vKkZvcm0gU3R5bGUqL1xcbmgzIHtcXG5cXHRmb250LXNpemU6IDEuNzVlbTtcXG5cXHRjb2xvcjogI0ZCRjVCNztcXG59XFxuaW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XFxufVxcbi5nb2FsVHlwZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbiNkZXNjIHtcXG5cXHRoZWlnaHQ6IDVyZW07XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbiNzdWJtaXQge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0JGOTUzRiwgI0ZCRjVCNywgI0FBNzcxQyk7XFxuXFx0cGFkZGluZzogLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDUlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcblxcdGN1cnNvcjpwb2ludGVyO1xcbn1cXG4jcmVtb3ZlIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NhbmNlbCB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBGb290ZXIgYW5kIEhvbWUgTWVudSAqL1xcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwYWRkaW5nOiAycmVtIDA7XFxufVxcbi5hZGRHb2FsQnRuIHtcXG5cXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0JGOTUzRiwgI0ZCRjVCNywgI0FBNzcxQyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHR3aWR0aDogNHJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZvbnQtc2l6ZTogNC43NXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG59XFxuLmFkZEdvYWxCdG46aG92ZXIge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgIzc0RUJENSAwJSwgY29ybmZsb3dlcmJsdWUgMTAwJSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcblxcdGhlYWRlciB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXHR0b3A6IDA7XFxuXFx0fVxcblxcdCNpY29uIHtcXG5cXHRcXHR3aWR0aDogMjAlO1xcblxcdH1cXG5cXHQuYm9hcmQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHRmb290ZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFx0Ym90dG9tOiAwO1xcblxcdH1cXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CLEdBQUcsOEJBQThCO0NBQ3BELCtEQUErRCxHQUFHLCtCQUErQjtDQUNqRyx1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O0NBQ2I7RUFDQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdGJhY2tncm91bmQ6ICNDOUQ2RkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI2ljb24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdHdpZHRoOiA0JTtcXG59XFxuaDEge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYm9hcmQge1xcblxcdHdpZHRoOiA0MCU7XFxufVxcbi5nb2FsSXRlbSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFx0ZmxleC1iYXNpczogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgZ3JheTtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5nb2FsSXRlbTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcbi5nb2FsSXRlbTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcbi5maW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbiAhaW1wb3J0YW50O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxDb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxUaXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uZ29hbEZvcm0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRib3R0b206MDtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGRpc3BsYXk6IGhpZGRlbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5mb3JtIHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG4uZ29hbFRpdGxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5nb2FsQ29udGVudCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb21wbGV0ZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAlO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0Ym9yZGVyLWNvbG9yOiBncmVlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxufVxcbi5vcGVuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNzUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcXG59XFxuLypGb3JtIFN0eWxlKi9cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiAxLjc1ZW07XFxuXFx0Y29sb3I6ICNGQkY1Qjc7XFxufVxcbmlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG4uZ29hbFR5cGUge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jZGVzYyB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jc3VibWl0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdHBhZGRpbmc6IC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1JTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuI3JlbW92ZSB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjYW5jZWwge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogRm9vdGVyIGFuZCBIb21lIE1lbnUgKi9cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWRkR29hbEJ0biB7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0d2lkdGg6IDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDQuNzVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcbi5hZGRHb2FsQnRuOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICM3NEVCRDUgMCUsIGNvcm5mbG93ZXJibHVlIDEwMCUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG5cXHRoZWFkZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFx0dG9wOiAwO1xcblxcdH1cXG5cXHQjaWNvbiB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFx0LmJvYXJkIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFxcdGJvdHRvbTogMDtcXG5cXHR9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY3VycmVudEdvYWxzID0gW107XG5cblxuZXhwb3J0IGNvbnN0IEdvYWwgPSAobmFtZU5ldywgdHlwZU5ldywgZHVlRGF0ZSwgZGVzYykgPT4ge1xuICBsZXQgZmluID0gZmFsc2U7XG4gICAgcmV0dXJuIHtuYW1lTmV3LCB0eXBlTmV3LCBkdWVEYXRlLCBkZXNjLCBmaW59O1xuICB9XG5cbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICBsZXQgbmFtZU5ldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgbGV0IHR5cGVOZXc7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpLmNoZWNrZWQpe1xuICAgICAgICB0eXBlTmV3ID0gJ0RhaWx5JztcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmonKS5jaGVja2VkKSB7XG4gICAgICAgIHR5cGVOZXcgPSAnT2JqZWN0aXZlJztcbiAgICB9XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgICBsZXQganVzdGFkZGVkID0gR29hbChuYW1lTmV3LCB0eXBlTmV3LCBkdWVEYXRlLCBkZXNjKTtcbiAgICBjdXJyZW50R29hbHMucHVzaChqdXN0YWRkZWQpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lTmV3LCBKU09OLnN0cmluZ2lmeShqdXN0YWRkZWQpKTtcbn1cbmV4cG9ydCBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgXG59XG52YXIgZCA9IG5ldyBEYXRlKCk7XG5sZXQgZGF5ID0gZC5nZXREYXkoKTtcbmxldCBkYXRlID0gZGF5ICsgJ3RoJztcblxuLy8gY29uc3QgamVmZiA9IEdvYWwoJ0JydXNoIFRlZXRoJywgJ0RhaWx5JywgJ2J5IDExOjU5IFBNJywgJ0JydXNoIG15IFRlZXRoJyk7XG4vLyBjdXJyZW50R29hbHMucHVzaChqZWZmKTtcbi8vIGNvbnN0IG9uZSA9IEdvYWwoJ29uZScsICdEYWlseScsICdieSAxMTo1OSBQTScsICdvbmUnKTtcbi8vIGN1cnJlbnRHb2Fscy5wdXNoKG9uZSk7XG4vLyBjb25zdCB0d28gPSBHb2FsKCd0d28nLCAnRGFpbHknLCAnYnkgMTE6NTkgUE0nLCAndHdvJyk7XG4vLyBjdXJyZW50R29hbHMucHVzaCh0d28pOyIsImltcG9ydCB7IGN1cnJlbnRHb2FscyB9IGZyb20gXCIuL2NyZWF0ZUdvYWxcIjtcbmltcG9ydCB7cmVtb3ZlfSBmcm9tIFwiLi9yZW1vdmVcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvYWxJdGVtJyk7XG5cbiAgICBjZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbicpOyAgIFxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9MDsgaTxjdXJyZW50R29hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9maW5kIGNlbGxcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKzEpO1xuICAgICAgICBjZWxsLmlubmVySFRNTD0gJyc7XG4gICAgICAgIGxldCBnb2FsID0gY3VycmVudEdvYWxzW2ldO1xuICAgICAgICAvL2dvYWwgdGl0bGVcbiAgICAgICAgY29uc3QgZ29hbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdvYWxUaXRsZS5pbm5lclRleHQgPSBnb2FsLm5hbWVOZXc7XG4gICAgICAgIGdvYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdnb2FsVGl0bGUnKTtcbiAgICAgICAgLy9nb2FsIG5hbWVcbiAgICAgICAgY29uc3QgZ29hbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ29hbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZ29hbENvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lLmlubmVyVGV4dCA9IGdvYWwubmFtZU5ldztcbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIC8vZ29hbCB0eXBlXG4gICAgICAgIGxldCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHR5cGUuaW5uZXJUZXh0ID0gZ29hbC50eXBlTmV3O1xuICAgICAgICBnb2FsQ29udGVudC5hcHBlbmRDaGlsZCh0eXBlKTtcbiAgICAgICAgLy9nb2FsIGNvbXBsZXRpb24gZGF0ZVxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlLmlubmVyVGV4dCA9IGdvYWwuZHVlRGF0ZTtcbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIC8vZ29hbCBkZXNjcmlwdGlvbiBcbiAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSBnb2FsLmRlc2M7XG4gICAgICAgIGdvYWxDb250ZW50LmFwcGVuZENoaWxkKGRlc2MpO1xuICAgICAgICAvL3JlbW92ZSBidXR0b25cbiAgICAgICAgbGV0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmUuaW5uZXJUZXh0ID0gJ3JlbW92ZSc7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcblxuICAgICAgICAvL2NvbXBsZXRlIGJ1dHRvbiBcbiAgICAgICAgaWYgKGdvYWwuZmluID09IHRydWUpIHtcbiAgICAgICAgICAgIGdvYWxUaXRsZS5pbm5lclRleHQgPSBnb2FsVGl0bGUuaW5uZXJUZXh0KyAnIOKckyc7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ZpbicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRlLmlubmVyVGV4dCA9ICfinJMnO1xuICAgICAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdvYWwuZmluID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZmluJyk7XG4gICAgICAgICAgICAgICAgZ29hbFRpdGxlLmlubmVyVGV4dCA9IGdvYWxUaXRsZS5pbm5lclRleHQrICcg4pyTJztcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnb2FsLm5hbWVOZXcsIEpTT04uc3RyaW5naWZ5KGdvYWwpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGdvYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vYWRkIHRvIHBhZ2VcbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChnb2FsQ29udGVudCk7XG4gICAgICAgIGNlbGwuYXBwZW5kKGdvYWxUaXRsZSlcbiAgICB9XG5cbiAgICAvL3JlbW92ZSBidXR0b24gbG9naWNcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi5mb3JFYWNoKFxuICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0ucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY3VycmVudCgpO1xuICAgICAgICB9KSAgXG4gICAgfVxuKVxufSIsImltcG9ydCBJY29uIGZyb20gJy4vbG9nby5wbmcnO1xuXG5leHBvcnQgY29uc3QgbGF5b3V0ID0gKCkgPT4ge1xuICAgIC8vSGVhZGVyIGFuZCBMb2dvXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uc3JjID0gSWNvbjtcbiAgICBsb2dvLmlkID0gJ2ljb24nO1xuICAgIGhlYWRlci5wcmVwZW5kKGxvZ28pO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGJvYXJkLmlkID0gJ2dvYWxCb2FyZCc7XG5cbiAgICAvL2ZpbGwgYm9hcmQgd2l0aCBlbXB0eSBnb2FsIGl0ZW1zXG4gICAgbGV0IGxpbWl0ID0gMDsgLy9zZXQgbnVtYmVyIElEXG4gICAgZm9yIChsZXQgaT0wOyBpPDM7IGkrKyl7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgZm9yIChsZXQgeD0wOyB4PDM7IHgrKyl7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdnb2FsSXRlbScpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbClcbiAgICAgICAgICAgIGxpbWl0Kys7XG4gICAgICAgICAgICBjb2wuaWQgPSBsaW1pdDtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBcbiAgICB9XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2FyZCk7XG5cbiAgICAvL05ldyBHb2FsIEZvcm1cbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3R29hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2dvYWxGb3JtJyk7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ05ldyBHb2FsIEZvcm0nOyBcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICAvL05BTUUgXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZS5pZCA9ICduYW1lJztcbiAgICBuYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lLnBsYWNlaG9sZGVyID0gJ0dvYWwgTmFtZSc7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTsgICAgIFxuICAgIG5hbWUucmVxdWlyZWQgPSB0cnVlOyBcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgLy9HT0FMIFRZUEUgU1RBUlRJTkcgV0lUSCBEQUlMWSBcbiAgICBjb25zdCB0eXBlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHR5cGVUaXRsZS5pbm5lclRleHQgPSAnSXMgdGhpcyBhbiBvYmplY3RpdmUgb3IgYSBkYWlseSBnb2FsPyc7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZCh0eXBlVGl0bGUpO1xuICAgIGNvbnN0IGdvYWx0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ29hbHR5cGUuY2xhc3NMaXN0LmFkZCgnZ29hbFR5cGUnKTtcbiAgICBjb25zdCBkYWlseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYWlseUxhYmVsLmh0bWxGb3IgPSAnZGFpbHknO1xuICAgIGRhaWx5TGFiZWwuaW5uZXJUZXh0ID0gJ0RhaWx5JztcbiAgICBjb25zdCBkYWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGFpbHkuaWQgPSAnZGFpbHknO1xuICAgIGRhaWx5LnR5cGUgPSAncmFkaW8nO1xuICAgIGRhaWx5LnZhbHVlID0gJ2RhaWx5JztcbiAgICBkYWlseS5uYW1lID0gJ2dvYWwgdHlwZSc7XG4gICAgZGFpbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBub0RhdGUpXG4gICAgLy9PQkpcbiAgICBjb25zdCBvYmpMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBvYmpMYWJlbC5odG1sRm9yID0gJ29iamVjdGl2ZSc7XG4gICAgb2JqZWN0aXZlLnR5cGUgPSAncmFkaW8nO1xuICAgIG9iamVjdGl2ZS52YWx1ZSA9ICdvYmplY3RpdmUnO1xuICAgIG9iamVjdGl2ZS5uYW1lID0gJ2dvYWwgdHlwZSc7XG4gICAgb2JqZWN0aXZlLmlkID0gJ29iaic7XG4gICAgb2JqZWN0aXZlLmNoZWNrZWQgPSB0cnVlO1xuICAgIG9iamVjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5vRGF0ZSlcblxuICAgIC8vYWRkIERhaWx5IGFuZCBPYmpcbiAgICBvYmpMYWJlbC5pbm5lclRleHQgPSAnT2JqZWN0aXZlJztcbiAgICBvYmpMYWJlbC5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xuICAgIGdvYWx0eXBlLmFwcGVuZENoaWxkKG9iakxhYmVsKTtcbiAgICBkYWlseUxhYmVsLmFwcGVuZENoaWxkKGRhaWx5KVxuICAgIGdvYWx0eXBlLmFwcGVuZENoaWxkKGRhaWx5TGFiZWwpO1xuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZ29hbHR5cGUpO1xuXG4gICAgLy9EQVRFIGlucHV0XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGF0ZVRpdGxlLmlubmVyVGV4dCA9ICdEdWUgRGF0ZTonO1xuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZGF0ZVRpdGxlKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2dvYWxUeXBlJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGUuaWQgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAvL2Rlc2NyaXB0aW9uIGlucHV0IFxuICAgIGNvbnN0IGRlc2NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGVzY1RpdGxlLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkZXNjVGl0bGUpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZ29hbFR5cGUnKTtcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjLnR5cGUgPSAndGV4dGJveCc7XG4gICAgZGVzYy5pZD0gJ2Rlc2MnO1xuICAgIGRlc2MucGxhY2Vob2xkZXIgPSAnZGVzY3JpYmUgeW91ciBnb2FsIGhlcmUhJztcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjKVxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgLy9zdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VibWl0LmlubmVyVGV4dCA9ICdDcmVhdGUgR29hbCc7XG4gICAgc3VibWl0LmlkID0gJ3N1Ym1pdCc7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgLy9jYW5jZWwgYnV0dG9uXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwnO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybURpdi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfSlcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cblxuICAgIGZ1bmN0aW9uIG9wZW5Hb2FsRm9ybSgpIHtcbiAgICAgICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgfVxuXG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChuZXdHb2FsKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgICBmdW5jdGlvbiBub0RhdGUoKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBkYXRlLmdldEhvdXJzKCkgKyAnOicgKyBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseScpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGR1ZURhdGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmonKS5jaGVja2VkKXtcbiAgICAgICAgICAgIGR1ZURhdGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZCgnYWRkR29hbEJ0bicpO1xuICAgIGNyZWF0ZS5pbm5lclRleHQ9ICcrJztcbiAgICBjcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuR29hbEZvcm0pO1xuXG4gICAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcbiAgICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbFBhbmVsKTtcbn0iLCJpbXBvcnQgeyBjdXJyZW50R29hbHMgfSBmcm9tIFwiLi9jcmVhdGVHb2FsXCI7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSAoaXRlbSkgPT4ge1xuICAgIGl0ZW0gPShpdGVtLmlkKS0xO1xuICAgIGxldCBnb2FsID0gY3VycmVudEdvYWxzW2l0ZW1dXG4gICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKzEpO1xuICAgIHZhciBpbmRleCA9IGN1cnJlbnRHb2Fscy5pbmRleE9mKGdvYWwpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdmaW4nKTtcbiAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50R29hbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZ29hbC5uYW1lTmV3KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvYWxJdGVtJylcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlLCBHb2FsLCBjdXJyZW50R29hbHN9IGZyb20gJy4vY3JlYXRlR29hbCc7XG5pbXBvcnQge2xheW91dH0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHtjdXJyZW50fSBmcm9tICcuL2N1cnJlbnQnO1xuXG5mdW5jdGlvbiBhbGxTdG9yYWdlKCkge1xuXG4gICAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSxcbiAgICAgICAgaSA9IGtleXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgIGxldCBhZGQgPSAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZCk7XG4gICAgICAgIGFkZCA9IEpTT04ucGFyc2UoYWRkKVxuICAgICAgICBjdXJyZW50R29hbHMudW5zaGlmdChhZGQpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuYWxsU3RvcmFnZSgpO1xubGF5b3V0KCk7XG5jdXJyZW50KCk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGUoKTtcbiAgICBjdXJyZW50KCk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWxGb3JtJyk7XG4gICAgY2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xufSlcblxuY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGUnKTtcbiAgICBjb21wbGV0ZS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50KCk7XG4gICAgICAgICAgICB9KSAgXG4gICAgICAgIH1cbiAgICApXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==