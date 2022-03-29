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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDbUM7QUFDeEI7QUFDRTs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFNO0FBQ04saURBQU87O0FBRVA7QUFDQTtBQUNBLElBQUksbURBQU07QUFDVixJQUFJLGlEQUFPO0FBQ1g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkIsYUFBYTtBQUNiO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dvYWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nb2FsZC8uL3NyYy9jcmVhdGVHb2FsLmpzIiwid2VicGFjazovL2dvYWxkLy4vc3JjL2N1cnJlbnQuanMiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL2dvYWxkLy4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nb2FsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvYWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29hbGQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ29hbGQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcblxcdGJhY2tncm91bmQ6ICNDOUQ2RkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuXFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMkUyRTIsICNDOUQ2RkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFx0XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI2ljb24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRwYWRkaW5nOiAycmVtO1xcblxcdHdpZHRoOiA0JTtcXG59XFxuaDEge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYm9hcmQge1xcblxcdHdpZHRoOiA0MCU7XFxufVxcbi5nb2FsSXRlbSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFx0ZmxleC1iYXNpczogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMCU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgZ3JheTtcXG5cXHRtYXJnaW46IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5nb2FsSXRlbTphZnRlciB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcbi5nb2FsSXRlbTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcbi5maW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbiAhaW1wb3J0YW50O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxDb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIgLmdvYWxUaXRsZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4uZ29hbEZvcm0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMTtcXG5cXHRib3R0b206MDtcXG5cXHR0cmFuc2l0aW9uOiAwLjVzO1xcblxcdGRpc3BsYXk6IGhpZGRlbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5mb3JtIHtcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG4uZ29hbFRpdGxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5nb2FsQ29udGVudCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb21wbGV0ZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTAlO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0Ym9yZGVyLWNvbG9yOiBncmVlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxufVxcbi5vcGVuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNzUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNXJlbTtcXG59XFxuLypGb3JtIFN0eWxlKi9cXG5oMyB7XFxuXFx0Zm9udC1zaXplOiAxLjc1ZW07XFxuXFx0Y29sb3I6ICNGQkY1Qjc7XFxufVxcbmlucHV0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xcbn1cXG4uZ29hbFR5cGUge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jZGVzYyB7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4jc3VibWl0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdHBhZGRpbmc6IC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1JTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG59XFxuI3JlbW92ZSB7XFxuXFx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjYW5jZWwge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogRm9vdGVyIGFuZCBIb21lIE1lbnUgKi9cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWRkR29hbEJ0biB7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCRjk1M0YsICNGQkY1QjcsICNBQTc3MUMpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0d2lkdGg6IDRyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LXNpemU6IDQuNzVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxufVxcbi5hZGRHb2FsQnRuOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICM3NEVCRDUgMCUsIGNvcm5mbG93ZXJibHVlIDEwMCUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG5cXHRoZWFkZXIge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFx0dG9wOiAwO1xcblxcdH1cXG5cXHQjaWNvbiB7XFxuXFx0XFx0d2lkdGg6IDIwJTtcXG5cXHR9XFxuXFx0LmJvYXJkIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFxcdGJvdHRvbTogMDtcXG5cXHR9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0lBQ3JCLHNCQUFzQjtBQUMxQjtBQUNBOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQixHQUFHLDhCQUE4QjtDQUNwRCwrREFBK0QsR0FBRywrQkFBK0I7Q0FDakcsdURBQXVE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O0VBQ0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbn1cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRiYWNrZ3JvdW5kOiAjQzlENkZGOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcblxcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTJFMkUyLCAjQzlENkZGKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTJFMkUyLCAjQzlENkZGKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcdFxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbiNpY29uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cGFkZGluZzogMnJlbTtcXG5cXHR3aWR0aDogNCU7XFxufVxcbmgxIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuaDIge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmJvYXJkIHtcXG5cXHR3aWR0aDogNDAlO1xcbn1cXG4uZ29hbEl0ZW0ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcdGZsZXgtYmFzaXM6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjAlO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuXFx0bWFyZ2luOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZ29hbEl0ZW06YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbn1cXG4uZ29hbEl0ZW06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cXG4uZmluIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuLmdvYWxJdGVtOmhvdmVyIC5nb2FsQ29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuLmdvYWxJdGVtOmhvdmVyIC5nb2FsVGl0bGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLmdvYWxGb3JtIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDE7XFxuXFx0Ym90dG9tOjA7XFxuXFx0dHJhbnNpdGlvbjogMC41cztcXG5cXHRkaXNwbGF5OiBoaWRkZW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZm9ybSB7XFxuXFx0cGFkZGluZy10b3A6IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuLmdvYWxUaXRsZSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZ29hbENvbnRlbnQge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29tcGxldGUge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwJTtcXG5cXHR3aWR0aDogNTAlO1xcblxcdGJvcmRlci1jb2xvcjogZ3JlZW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbn1cXG4ub3BlbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDc1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTVyZW07XFxufVxcbi8qRm9ybSBTdHlsZSovXFxuaDMge1xcblxcdGZvbnQtc2l6ZTogMS43NWVtO1xcblxcdGNvbG9yOiAjRkJGNUI3O1xcbn1cXG5pbnB1dCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC4zNXJlbTtcXG59XFxuLmdvYWxUeXBlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI2Rlc2Mge1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuI3N1Ym1pdCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkY5NTNGLCAjRkJGNUI3LCAjQUE3NzFDKTtcXG5cXHRwYWRkaW5nOiAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNSU7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQxMSk7XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxufVxcbiNyZW1vdmUge1xcblxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY2FuY2VsIHtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIEZvb3RlciBhbmQgSG9tZSBNZW51ICovXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLmFkZEdvYWxCdG4ge1xcblxcdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkY5NTNGLCAjRkJGNUI3LCAjQUE3NzFDKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdHdpZHRoOiA0cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1zaXplOiA0Ljc1cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcbn1cXG4uYWRkR29hbEJ0bjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjNzRFQkQ1IDAlLCBjb3JuZmxvd2VyYmx1ZSAxMDAlKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIFxcdHRvcDogMDtcXG5cXHR9XFxuXFx0I2ljb24ge1xcblxcdFxcdHdpZHRoOiAyMCU7XFxuXFx0fVxcblxcdC5ib2FyZCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdGZvb3RlciB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXHRib3R0b206IDA7XFxuXFx0fVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGN1cnJlbnRHb2FscyA9IFtdO1xuXG5cbmV4cG9ydCBjb25zdCBHb2FsID0gKG5hbWVOZXcsIHR5cGVOZXcsIGR1ZURhdGUsIGRlc2MpID0+IHtcbiAgbGV0IGZpbiA9IGZhbHNlO1xuICAgIHJldHVybiB7bmFtZU5ldywgdHlwZU5ldywgZHVlRGF0ZSwgZGVzYywgZmlufTtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWVOZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGxldCB0eXBlTmV3O1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKS5jaGVja2VkKXtcbiAgICAgICAgdHlwZU5ldyA9ICdEYWlseSc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqJykuY2hlY2tlZCkge1xuICAgICAgICB0eXBlTmV3ID0gJ09iamVjdGl2ZSc7XG4gICAgfVxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWU7XG4gICAgbGV0IGp1c3RhZGRlZCA9IEdvYWwobmFtZU5ldywgdHlwZU5ldywgZHVlRGF0ZSwgZGVzYyk7XG4gICAgY3VycmVudEdvYWxzLnB1c2goanVzdGFkZGVkKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZU5ldywgSlNPTi5zdHJpbmdpZnkoanVzdGFkZGVkKSk7XG59XG5leHBvcnQgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gIFxufVxudmFyIGQgPSBuZXcgRGF0ZSgpO1xubGV0IGRheSA9IGQuZ2V0RGF5KCk7XG5sZXQgZGF0ZSA9IGRheSArICd0aCc7XG5cbi8vIGNvbnN0IGplZmYgPSBHb2FsKCdCcnVzaCBUZWV0aCcsICdEYWlseScsICdieSAxMTo1OSBQTScsICdCcnVzaCBteSBUZWV0aCcpO1xuLy8gY3VycmVudEdvYWxzLnB1c2goamVmZik7XG4vLyBjb25zdCBvbmUgPSBHb2FsKCdvbmUnLCAnRGFpbHknLCAnYnkgMTE6NTkgUE0nLCAnb25lJyk7XG4vLyBjdXJyZW50R29hbHMucHVzaChvbmUpO1xuLy8gY29uc3QgdHdvID0gR29hbCgndHdvJywgJ0RhaWx5JywgJ2J5IDExOjU5IFBNJywgJ3R3bycpO1xuLy8gY3VycmVudEdvYWxzLnB1c2godHdvKTsiLCJpbXBvcnQgeyBjdXJyZW50R29hbHMgfSBmcm9tIFwiLi9jcmVhdGVHb2FsXCI7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSBcIi4vcmVtb3ZlXCI7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50ID0gKCkgPT4ge1xuICAgIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb2FsSXRlbScpO1xuXG4gICAgY2VsbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaW4nKTsgICBcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPTA7IGk8Y3VycmVudEdvYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vZmluZCBjZWxsXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSsxKTtcbiAgICAgICAgY2VsbC5pbm5lckhUTUw9ICcnO1xuICAgICAgICBsZXQgZ29hbCA9IGN1cnJlbnRHb2Fsc1tpXTtcbiAgICAgICAgLy9nb2FsIHRpdGxlXG4gICAgICAgIGNvbnN0IGdvYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnb2FsVGl0bGUuaW5uZXJUZXh0ID0gZ29hbC5uYW1lTmV3O1xuICAgICAgICBnb2FsVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ29hbFRpdGxlJyk7XG4gICAgICAgIC8vZ29hbCBuYW1lXG4gICAgICAgIGNvbnN0IGdvYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdvYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dvYWxDb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZS5pbm5lclRleHQgPSBnb2FsLm5hbWVOZXc7XG4gICAgICAgIGdvYWxDb250ZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAvL2dvYWwgdHlwZVxuICAgICAgICBsZXQgdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0eXBlLmlubmVyVGV4dCA9IGdvYWwudHlwZU5ldztcbiAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQodHlwZSk7XG4gICAgICAgIC8vZ29hbCBjb21wbGV0aW9uIGRhdGVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSBnb2FsLmR1ZURhdGU7XG4gICAgICAgIGdvYWxDb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAvL2dvYWwgZGVzY3JpcHRpb24gXG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gZ29hbC5kZXNjO1xuICAgICAgICBnb2FsQ29udGVudC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgLy9yZW1vdmUgYnV0dG9uXG4gICAgICAgIGxldCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVtb3ZlLmlubmVyVGV4dCA9ICdyZW1vdmUnO1xuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG5cbiAgICAgICAgLy9jb21wbGV0ZSBidXR0b24gXG4gICAgICAgIGlmIChnb2FsLmZpbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBnb2FsVGl0bGUuaW5uZXJUZXh0ID0gZ29hbFRpdGxlLmlubmVyVGV4dCsgJyDinJMnO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdmaW4nKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb21wbGV0ZS5pbm5lclRleHQgPSAn4pyTJztcbiAgICAgICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnb2FsLmZpbiA9IHRydWVcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ZpbicpO1xuICAgICAgICAgICAgICAgIGdvYWxUaXRsZS5pbm5lclRleHQgPSBnb2FsVGl0bGUuaW5uZXJUZXh0KyAnIOKckyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZ29hbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgdG8gcGFnZVxuICAgICAgICBnb2FsQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGdvYWxDb250ZW50KTtcbiAgICAgICAgY2VsbC5hcHBlbmQoZ29hbFRpdGxlKVxuICAgIH1cblxuICAgIC8vcmVtb3ZlIGJ1dHRvbiBsb2dpY1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmZvckVhY2goXG4gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50KCk7XG4gICAgICAgIH0pICBcbiAgICB9XG4pXG59IiwiaW1wb3J0IEljb24gZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBsYXlvdXQgPSAoKSA9PiB7XG4gICAgLy9IZWFkZXIgYW5kIExvZ29cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSBJY29uO1xuICAgIGxvZ28uaWQgPSAnaWNvbic7XG4gICAgaGVhZGVyLnByZXBlbmQobG9nbyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgYm9hcmQuaWQgPSAnZ29hbEJvYXJkJztcblxuICAgIC8vZmlsbCBib2FyZCB3aXRoIGVtcHR5IGdvYWwgaXRlbXNcbiAgICBsZXQgbGltaXQgPSAwOyAvL3NldCBudW1iZXIgSURcbiAgICBmb3IgKGxldCBpPTA7IGk8MzsgaSsrKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICBmb3IgKGxldCB4PTA7IHg8MzsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29sLmNsYXNzTGlzdC5hZGQoJ2dvYWxJdGVtJyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICAgICAgbGltaXQrKztcbiAgICAgICAgICAgIGNvbC5pZCA9IGxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIFxuICAgIH1cbiAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkKTtcblxuICAgIC8vTmV3IEdvYWwgRm9ybVxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdHb2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZ29hbEZvcm0nKTtcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGZvcm1UaXRsZS5pbm5lclRleHQgPSAnTmV3IEdvYWwgRm9ybSc7IFxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIC8vTkFNRSBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lLmlkID0gJ25hbWUnO1xuICAgIG5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWUucGxhY2Vob2xkZXIgPSAnR29hbCBOYW1lJztcbiAgICBuYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpOyAgICAgXG4gICAgbmFtZS5yZXF1aXJlZCA9IHRydWU7IFxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAvL0dPQUwgVFlQRSBTVEFSVElORyBXSVRIIERBSUxZIFxuICAgIGNvbnN0IHR5cGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdHlwZVRpdGxlLmlubmVyVGV4dCA9ICdJcyB0aGlzIGFuIG9iamVjdGl2ZSBvciBhIGRhaWx5IGdvYWw/JztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKHR5cGVUaXRsZSk7XG4gICAgY29uc3QgZ29hbHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnb2FsdHlwZS5jbGFzc0xpc3QuYWRkKCdnb2FsVHlwZScpO1xuICAgIGNvbnN0IGRhaWx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRhaWx5TGFiZWwuaHRtbEZvciA9ICdkYWlseSc7XG4gICAgZGFpbHlMYWJlbC5pbm5lclRleHQgPSAnRGFpbHknO1xuICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYWlseS5pZCA9ICdkYWlseSc7XG4gICAgZGFpbHkudHlwZSA9ICdyYWRpbyc7XG4gICAgZGFpbHkudmFsdWUgPSAnZGFpbHknO1xuICAgIGRhaWx5Lm5hbWUgPSAnZ29hbCB0eXBlJztcbiAgICBkYWlseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5vRGF0ZSlcbiAgICAvL09CSlxuICAgIGNvbnN0IG9iakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG9iakxhYmVsLmh0bWxGb3IgPSAnb2JqZWN0aXZlJztcbiAgICBvYmplY3RpdmUudHlwZSA9ICdyYWRpbyc7XG4gICAgb2JqZWN0aXZlLnZhbHVlID0gJ29iamVjdGl2ZSc7XG4gICAgb2JqZWN0aXZlLm5hbWUgPSAnZ29hbCB0eXBlJztcbiAgICBvYmplY3RpdmUuaWQgPSAnb2JqJztcbiAgICBvYmplY3RpdmUuY2hlY2tlZCA9IHRydWU7XG4gICAgb2JqZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbm9EYXRlKVxuXG4gICAgLy9hZGQgRGFpbHkgYW5kIE9ialxuICAgIG9iakxhYmVsLmlubmVyVGV4dCA9ICdPYmplY3RpdmUnO1xuICAgIG9iakxhYmVsLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XG4gICAgZ29hbHR5cGUuYXBwZW5kQ2hpbGQob2JqTGFiZWwpO1xuICAgIGRhaWx5TGFiZWwuYXBwZW5kQ2hpbGQoZGFpbHkpXG4gICAgZ29hbHR5cGUuYXBwZW5kQ2hpbGQoZGFpbHlMYWJlbCk7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChnb2FsdHlwZSk7XG5cbiAgICAvL0RBVEUgaW5wdXRcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkYXRlVGl0bGUuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZ29hbFR5cGUnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZS5pZCA9ICdkYXRlJztcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIC8vZGVzY3JpcHRpb24gaW5wdXQgXG4gICAgY29uc3QgZGVzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNjVGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKGRlc2NUaXRsZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdnb2FsVHlwZScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2MudHlwZSA9ICd0ZXh0Ym94JztcbiAgICBkZXNjLmlkPSAnZGVzYyc7XG4gICAgZGVzYy5wbGFjZWhvbGRlciA9ICdkZXNjcmliZSB5b3VyIGdvYWwgaGVyZSEnO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgbmV3R29hbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAvL3N1Ym1pdCBidXR0b25cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBHb2FsJztcbiAgICBzdWJtaXQuaWQgPSAnc3VibWl0JztcbiAgICBuZXdHb2FsLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICAvL2NhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbCc7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9KVxuICAgIG5ld0dvYWwuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuXG4gICAgZnVuY3Rpb24gb3BlbkdvYWxGb3JtKCkge1xuICAgICAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKG5ld0dvYWwpXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIGZ1bmN0aW9uIG5vRGF0ZSgpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IGRhdGUuZ2V0SG91cnMoKSArICc6JyArIGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5JykuY2hlY2tlZCkge1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBkdWVEYXRlLnZhbHVlID0gY3VycmVudERhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iaicpLmNoZWNrZWQpe1xuICAgICAgICAgICAgZHVlRGF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKCdhZGRHb2FsQnRuJyk7XG4gICAgY3JlYXRlLmlubmVyVGV4dD0gJysnO1xuICAgIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Hb2FsRm9ybSk7XG5cbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChjcmVhdGUpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwpO1xufSIsImltcG9ydCB7IGN1cnJlbnRHb2FscyB9IGZyb20gXCIuL2NyZWF0ZUdvYWxcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChpdGVtKSA9PiB7XG4gICAgaXRlbSA9KGl0ZW0uaWQpLTE7XG4gICAgbGV0IGdvYWwgPSBjdXJyZW50R29hbHNbaXRlbV1cbiAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0rMSk7XG4gICAgdmFyIGluZGV4ID0gY3VycmVudEdvYWxzLmluZGV4T2YoZ29hbCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbicpO1xuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHb2Fscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShnb2FsLm5hbWVOZXcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29hbEl0ZW0nKVxuICAgICAgICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtjcmVhdGUsIEdvYWwsIGN1cnJlbnRHb2Fsc30gZnJvbSAnLi9jcmVhdGVHb2FsJztcbmltcG9ydCB7bGF5b3V0fSBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQge2N1cnJlbnR9IGZyb20gJy4vY3VycmVudCc7XG5cbmZ1bmN0aW9uIGFsbFN0b3JhZ2UoKSB7XG5cbiAgICB2YXIgdmFsdWVzID0gW10sXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxuICAgICAgICBpID0ga2V5cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoIGktLSApIHtcbiAgICAgICAgbGV0IGFkZCA9ICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSkgKTtcbiAgICAgICAgY29uc29sZS5sb2coYWRkKTtcbiAgICAgICAgYWRkID0gSlNPTi5wYXJzZShhZGQpXG4gICAgICAgIGN1cnJlbnRHb2Fscy51bnNoaWZ0KGFkZCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5hbGxTdG9yYWdlKCk7XG5sYXlvdXQoKTtcbmN1cnJlbnQoKTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZSgpO1xuICAgIGN1cnJlbnQoKTtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbEZvcm0nKTtcbiAgICBjbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG59KVxuXG5jb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZScpO1xuICAgIGNvbXBsZXRlLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgfVxuICAgIClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9