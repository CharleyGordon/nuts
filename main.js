/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home/hero-image.webp */ \"./images/home/hero-image.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@media (min-width: 800px) {\n  .image-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.image-grid :is(img, .main-image) {\n  width: 100%;\n  aspect-ratio: 16/9;\n}\n@media (max-width: 800px) {\n  .image-grid :is(img, .main-image) {\n    aspect-ratio: 1;\n  }\n}\n.image-grid.reversed :is(img, .main-image) {\n  order: -1;\n}\n.image-grid .text {\n  margin-inline: 15%;\n  margin-block: auto;\n}\n.image-grid .button {\n  --background-color: black;\n  width: fit-content;\n}\n.image-grid .main-image {\n  transition: 0.5s ease;\n}\n\nfooter {\n  background-color: hsl(60, 33%, 30%);\n  color: white;\n}\n@media (max-width: 800px) {\n  footer.mobile-ignore {\n    padding-inline: 1ch;\n  }\n}\n@media (max-width: 800px) {\n  footer > .flex-container {\n    flex-direction: column;\n  }\n}\nfooter > .flex-container > * {\n  max-width: 35ch;\n}\nfooter form label {\n  width: 70%;\n}\nfooter label :is(input, textarea) {\n  width: 100%;\n  padding-inline: 2ch;\n  padding-block: 1ch;\n}\nfooter form :is(.button, input, textarea) {\n  --border-color: white;\n  border: 1px solid var(--border-color);\n}\nfooter form.button {\n  min-width: auto;\n  width: 30%;\n}\n@media (min-width: 800px) {\n  footer .bottom-line {\n    justify-content: center;\n  }\n}\n\n.nav-bar {\n  align-items: center;\n  z-index: 1;\n  background-color: hsl(27, 39%, 77%);\n}\n@media (max-width: 800px) {\n  .nav-bar ul {\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    flex-direction: column;\n    translate: 0 -100%;\n    align-items: center;\n    text-align: center;\n    background-color: inherit;\n  }\n}\n@media (min-width: 800px) {\n  .nav-bar ul {\n    margin-inline-start: auto;\n  }\n}\n\n.home .hero-block {\n  color: white;\n}\n.home .hero-block {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-attachment: fixed;\n  color: hsl(27, 39%, 77%);\n}\n.home .hero-block .text {\n  filter: drop-shadow(0 0 5px black);\n}\n.home .hero-block .button {\n  background-color: hsl(0, 64%, 24%);\n}\n.home .cta {\n  background-color: hsl(27, 39%, 77%);\n}\n.home details {\n  text-align: center;\n}\n.home details summary::marker {\n  content: \"\";\n}\n.home details[open] summary {\n  pointer-events: none;\n}\n.home details summary {\n  margin-block-end: 1ch;\n}\n.home .image-grid.bottom-gallery {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (min-width: 800px) {\n  .home .image-grid.bottom-gallery {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n.home .image-grid.bottom-gallery img {\n  aspect-ratio: 1;\n}\n@media (max-width: 800px) {\n  .home .image-grid.bottom-gallery img:last-of-type {\n    grid-column: 1/-1;\n  }\n}\n.home .main-image {\n  cursor: pointer;\n}\n\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 1rem;\n}\n.gallery figure {\n  grid-column: span 3;\n  aspect-ratio: 4/3;\n}\n.gallery figure img {\n  width: 100%;\n  height: 100%;\n}\n.gallery figure.mansonry {\n  grid-row: span 2;\n  aspect-ratio: 4/5.5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  font-size: 1.2rem;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: cover;\n}\n\n.flex-container {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-template-columns: 2fr 1fr;\n}\n\n.none {\n  display: none;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.position-sticky {\n  position: sticky;\n  top: 0;\n}\n\n.center-horizontal {\n  justify-items: center;\n}\n\n.flex-container.center-horizontal {\n  justify-content: center;\n}\n\n.flex-column.center-horizontal {\n  align-items: center;\n}\n\n.flex-container.space-arround-horizontal {\n  justify-content: space-around;\n}\n\n.flex-column.space-arround-horizontal {\n  align-items: space-around;\n}\n\n.flex-container.equal-children .equal {\n  width: 40%;\n}\n\n.padding-inline-standard {\n  padding-inline: 2rem;\n}\n\n.padding-block-standard {\n  padding-block: 0.5rem;\n}\n\n.padding-block-big {\n  padding-block: 3rem;\n}\n\n.padding-block-bigger {\n  padding-block: 6rem;\n}\n\n.padding-block-large {\n  padding-block: 20vh;\n}\n\n.gap-small {\n  gap: 0.375ch;\n}\n\n.gap-standard {\n  gap: 1.5ch;\n}\n\n.gap-big {\n  gap: 2ch;\n}\n\n.gap-large {\n  gap: 3.5ch;\n}\n\n.gap-giant {\n  gap: 5ch;\n}\n\n.font-size-middle {\n  font-size: 1.8rem;\n}\n\n.font-size-big {\n  font-size: 2rem;\n}\n\n.font-size-large {\n  font-size: 3.5rem;\n}\n\n.font-weight-700 {\n  font-weight: 700;\n}\n\n.max-characters-50 {\n  max-width: 50ch;\n}\n\n.max-characters-25 {\n  max-width: 25ch;\n}\n\n.button {\n  --background-color: white;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  min-width: 10ch;\n  padding-inline: var(--padding-inline, 2ch);\n  padding-block: var(--padding-block, 1ch);\n  border: 1px solid var(--background-color);\n  cursor: pointer;\n}\n@media (min-width: 800px) {\n  .button {\n    min-width: 20ch;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./markup/footer.html":
/*!****************************!*\
  !*** ./markup/footer.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<footer class=\\\"padding-inline-standard mobile-ignore\\\">\\n  <div\\n    class=\\\"flex-container space-arround-horizontal gap-giant padding-block-bigger\\\"\\n  >\\n    <div class=\\\"flex-container flex-column gap-big\\\">\\n      <p class=\\\"font-large\\\">Sprzedaż na:</p>\\n      <a href=\\\"#\\\">OLX</a><a href=\\\"#\\\">Allegro lokalnie</a>\\n    </div>\\n    <!-- <div class=\\\"newsletter text flex-container flex-column gap-big\\\">\\n      <p class=\\\"font-large\\\">Newsletter</p>\\n      <p>Stay up to date with all the latest from 47th Cafe</p>\\n      <form class=\\\"flex-container\\\">\\n        <label for=\\\"#email\\\">\\n          <input type=\\\"email\\\" name=\\\"email\\\" id=\\\"email\\\" />\\n        </label>\\n        <button type=\\\"submit\\\" class=\\\"button\\\">Join</button>\\n      </form>\\n    </div> -->\\n    <div class=\\\"contact text flex-container flex-column gap-big\\\">\\n      <p class=\\\"font-large\\\">Napisz do nas:</p>\\n      <p class=\\\"flex-container flex-column\\\">\\n        <a href=\\\"tel:+48882915312\\\" class=\\\"phone-number\\\">882-915-312</a>\\n        <span class=\\\"email\\\">info@mysite.com</span>\\n      </p>\\n    </div>\\n\\n    <div\\n      class=\\\"media text flex-container flex-column gap-standard font-size-big\\\"\\n    >\\n      <p>Nasze media:</p>\\n      <a href=\\\"#\\\">Facebook</a>\\n    </div>\\n  </div>\\n  <!-- <div\\n    class=\\\"bottom-line flex-container padding-inline-standard padding-block-standard\\\"\\n  >\\n    <span>© 2035 by 47th Cafe </span>\\n  </div> -->\\n</footer>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./markup/footer.html?");

/***/ }),

/***/ "./markup/gallery.html":
/*!*****************************!*\
  !*** ./markup/gallery.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-1.webp */ \"./images/gallery/gallery-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-2.webp */ \"./images/gallery/gallery-2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-3.webp */ \"./images/gallery/gallery-3.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-4.webp */ \"./images/gallery/gallery-4.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-5.webp */ \"./images/gallery/gallery-5.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-7.webp */ \"./images/gallery/gallery-7.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-6.webp */ \"./images/gallery/gallery-6.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-10.webp */ \"./images/gallery/gallery-10.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-11.webp */ \"./images/gallery/gallery-11.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-8.webp */ \"./images/gallery/gallery-8.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-9.webp */ \"./images/gallery/gallery-9.webp\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<section id=\\\"gallery\\\" class=\\\"gallery\\\">\\n  <figure data-description=\\\"Orzechy włoskie w łupinie JACEK - DUŻY OWOC 1000g \\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\"Orzechy włoskie ekologiczne łuskane ręcznie 250g \\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure data-description=\\\"Orzechy włoskie premium. Tylko całe ziarna 500g \\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\"Nowość! EkoEnergetyk XXL całe bakalii 300g\\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\"Morele suszone jasne bez pestek 250g.Wysoka jakość \\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\"\\nOrzechy laskowe tegoroczne łuskane ręcznie 250 g \\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n  <figure data-description=\\\"Sliwki suszone bez pestek 250 g. Wysoka jakość. \\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n\\n  <figure data-description=\\\"Rodzynki naturalne ciemne całe owoce India 250 g\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n\\n  <figure data-description=\\\"Daktyle suszone bez pestek 250 g. Wysoka jakość. \\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\" Skorupki, łupiny orzecha włoskiego eko 3000g \\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n\\n  <figure><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" /></figure>\\n\\n  <figure\\n    class=\\\"mansonry\\\"\\n    data-description=\\\"Przegródki, przeponki krzyżowe orzecha włoskiego\\\"\\n  >\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"\\\" />\\n  </figure>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./markup/gallery.html?");

/***/ }),

/***/ "./markup/home.html":
/*!**************************!*\
  !*** ./markup/home.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/almonds-1.webp */ \"./images/home-gallery/almonds-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/walnut-1.webp */ \"./images/home-gallery/walnut-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/walnut-2.webp */ \"./images/home-gallery/walnut-2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/gallery-1.webp */ \"./images/gallery/gallery-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/energetic-1.webp */ \"./images/home-gallery/energetic-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/energetic-2.webp */ \"./images/home-gallery/energetic-2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/nut-mix.jpg */ \"./images/home-gallery/nut-mix.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/nut-mix-2.jpg */ \"./images/home-gallery/nut-mix-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/fig-1.webp */ \"./images/home-gallery/fig-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/prunes-1.webp */ \"./images/home-gallery/prunes-1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/home-gallery/raisns-2.webp */ \"./images/home-gallery/raisns-2.webp\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar code = \"<section class=\\\"home\\\">\\n  <div class=\\\"hero-block position-relative\\\">\\n    <div\\n      class=\\\"text flex-container flex-column padding-inline-standard padding-block-large gap-standard\\\"\\n    >\\n      <h1 class=\\\"font-size-large max-characters-25\\\">\\n        Jem tylko to, co smaczne i zdrowe\\n      </h1>\\n      <div class=\\\"buttons flex-container gap-standard\\\">\\n        <a href=\\\"#\\\" class=\\\"button\\\">Oferty</a\\n        ><a href=\\\"\\\" class=\\\"button\\\">Opinie klientów</a>\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\\\"image-grid\\\">\\n    <div class=\\\"text flex-container flex-column gap-standard padding-block-big\\\">\\n      <h2 class=\\\"font-size-large\\\">Pyszne orzechy</h2>\\n      <a href=\\\"#\\\" class=\\\"button\\\">Sprawdź ofertę</a>\\n    </div>\\n    <div class=\\\"none source-images\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n        alt=\\\"\\\"\\n      /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n        alt=\\\"\\\"\\n      />\\n    </div>\\n    <img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n      alt=\\\"\\\"\\n      class=\\\"main-image\\\"\\n    />\\n  </div>\\n  <div class=\\\"image-grid reversed\\\">\\n    <div class=\\\"text flex-container flex-column gap-standard padding-block-big\\\">\\n      <h2 class=\\\"font-size-large\\\">Smaczne przekąski i mieszanki</h2>\\n      <a href=\\\"#\\\" class=\\\"button\\\">Sprawdź ofertę</a>\\n    </div>\\n    <div class=\\\"none source-images\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"\\n        alt=\\\"\\\"\\n      /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"\\n        alt=\\\"\\\"\\n      />\\n    </div>\\n    <img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"\\n      alt=\\\"\\\"\\n      class=\\\"main-image\\\"\\n    />\\n  </div>\\n  <div class=\\\"image-grid\\\">\\n    <div class=\\\"text flex-container flex-column gap-standard padding-block-big\\\">\\n      <h2 class=\\\"font-size-large\\\">Bakalie i miód</h2>\\n      <a href=\\\"#\\\" class=\\\"button\\\">Sprawdź ofertę</a>\\n    </div>\\n    <div class=\\\"none source-images\\\">\\n      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n        alt=\\\"\\\"\\n      /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" /><img\\n        src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n        alt=\\\"\\\"\\n      />\\n    </div>\\n    <img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n      alt=\\\"\\\"\\n      class=\\\"main-image\\\"\\n    />\\n  </div>\\n  <div\\n    class=\\\"cta flex-container flex-column gap-big center-horizontal padding-block-bigger padding-inline-standard\\\"\\n  >\\n    <h2 class=\\\"font-size-large\\\">Uwaga! Pyszne i zdrowe jedzenie uzależnia.</h2>\\n    <div class=\\\"flex-container equal-children gap-large center-horizontal\\\">\\n      <details open class=\\\"equal\\\">\\n        <summary class=\\\"font-size-middle\\\">Kontakt mailowy</summary>\\n        <div class=\\\"flex-container gap-small flex-column\\\">\\n          <a href=\\\"mailto:taranleonid1@gmail.com\\\">taranleonid1@gmail.com</a>\\n        </div>\\n      </details>\\n\\n      <hr />\\n\\n      <details open class=\\\"equal\\\">\\n        <summary class=\\\"font-size-middle\\\">Dostawa</summary>\\n        <div class=\\\"flex-container gap-small flex-column\\\">\\n          <p>\\n            Odbiór osobisty <span class=\\\"font-weight-700\\\">albo</span> Wysyłka w\\n            24 godziny\\n          </p>\\n        </div>\\n      </details>\\n    </div>\\n  </div>\\n  <div class=\\\"image-grid bottom-gallery\\\">\\n    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\"\\n      alt=\\\"\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"\\\" /><img\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\"\\n      alt=\\\"\\\"\\n    /><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\n  </div>\\n</section>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./markup/home.html?");

/***/ }),

/***/ "./markup/nav-bar.html":
/*!*****************************!*\
  !*** ./markup/nav-bar.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<nav class=\\\"nav-bar flex-container padding-inline-standard position-sticky\\\">\\n  <img alt=\\\"\\\" class=\\\"logo padding-block-big\\\" />\\n  <ul class=\\\"flex-container gap-large\\\">\\n    <li><a href=\\\"#\\\">Home</a></li>\\n    <li><a href=\\\"#\\\">This is us</a></li>\\n    <li><a href=\\\"#\\\">Menu</a></li>\\n    <li><a href=\\\"#\\\">Contact</a></li>\\n  </ul>\\n</nav>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./markup/nav-bar.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./scripts/cycleImages.js":
/*!********************************!*\
  !*** ./scripts/cycleImages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cycleImages(event) {\n  const sourceImagesRefference = \".source-images\";\n  const mainImageRefference = \".main-image\";\n  const transitionClassRemove = \"fade-out\";\n  const transitionClassAdd = \"fade-in\";\n\n  const sourceImages = document.querySelectorAll(sourceImagesRefference);\n\n  if (!sourceImages) return;\n\n  for (let iteration = 0; iteration < sourceImages.length; iteration++) {\n    const sourceImage = sourceImages[iteration];\n    let mainImage, currentSourceImage, nextSourceImage;\n\n    mainImage = sourceImage.parentElement.querySelector(mainImageRefference);\n\n    if (!mainImage) return;\n\n    currentSourceImage = sourceImage.querySelector(\n      `img[src=\"${mainImage.src}\"]`\n    );\n    nextSourceImage =\n      currentSourceImage.nextElementSibling ||\n      currentSourceImage.parentElement.querySelector(\"img\");\n\n    mainImage.classList.add(transitionClassRemove);\n\n    setInterval(() => {\n      if (mainImage.matches(\":hover\") || mainImage.matches(\":focus-within\"))\n        return;\n      const sourceImageElement = document.querySelector(\n        `[src=\"${mainImage.src}\"]`\n      );\n      const removeClass = mainImage.matches(`.${transitionClassRemove}`)\n        ? transitionClassRemove\n        : transitionClassAdd;\n\n      const addClass =\n        removeClass === transitionClassRemove\n          ? transitionClassAdd\n          : transitionClassRemove;\n      mainImage.classList.remove(removeClass);\n\n      const futureImageElement =\n        sourceImageElement.nextElementSibling ||\n        sourceImageElement.parentElement.querySelector(\"img\");\n\n      mainImage.src = futureImageElement.src;\n      mainImage.classList.add(addClass);\n    }, 2000);\n  }\n}\n\nwindow.addEventListener(\"load\", (event) => {\n  cycleImages(event);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cycleImages);\n\n\n//# sourceURL=webpack:///./scripts/cycleImages.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup */ \"./scripts/markup.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./scripts/styles.js\");\n/* harmony import */ var _cycleImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycleImages */ \"./scripts/cycleImages.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/markup.js":
/*!***************************!*\
  !*** ./scripts/markup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../markup/nav-bar.html */ \"./markup/nav-bar.html\");\n/* harmony import */ var _markup_footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../markup/footer.html */ \"./markup/footer.html\");\n/* harmony import */ var _markup_gallery_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../markup/gallery.html */ \"./markup/gallery.html\");\n/* harmony import */ var _markup_home_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../markup/home.html */ \"./markup/home.html\");\n\n\n\n\n\n\nconst parser = new DOMParser();\n\nfunction parseHtml(element) {\n  const parsed = parser.parseFromString(element, \"text/html\");\n  return parsed.querySelector(\"body > *\");\n}\n\nconst elements = {\n  body: document.body,\n  main: document.querySelector(\"main\"),\n  mainArticle: document.querySelector(\"main article\"),\n  navBarElement: parseHtml(_markup_nav_bar_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n  footerElement: parseHtml(_markup_footer_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n  galleryElement: parseHtml(_markup_gallery_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n  homeSection: parseHtml(_markup_home_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n};\n\n// elements.main.append(elements.galleryElement);\n\nelements.body.prepend(elements.navBarElement);\nelements.body.append(elements.footerElement);\n\nelements.mainArticle.append(elements.homeSection);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elements);\n\n\n//# sourceURL=webpack:///./scripts/markup.js?");

/***/ }),

/***/ "./scripts/styles.js":
/*!***************************!*\
  !*** ./scripts/styles.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./scripts/styles.js?");

/***/ }),

/***/ "./images/gallery/gallery-1.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-1.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81a74afc116b34381a74.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-1.webp?");

/***/ }),

/***/ "./images/gallery/gallery-10.webp":
/*!****************************************!*\
  !*** ./images/gallery/gallery-10.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3a0007c49d8ac1d4537.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-10.webp?");

/***/ }),

/***/ "./images/gallery/gallery-11.webp":
/*!****************************************!*\
  !*** ./images/gallery/gallery-11.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a793b1220e32ba93174.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-11.webp?");

/***/ }),

/***/ "./images/gallery/gallery-2.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-2.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b2cf5ee9b2e455acb40.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-2.webp?");

/***/ }),

/***/ "./images/gallery/gallery-3.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-3.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7c5ded30995d77e1d91.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-3.webp?");

/***/ }),

/***/ "./images/gallery/gallery-4.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-4.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"930182cc2a99a55f8cd2.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-4.webp?");

/***/ }),

/***/ "./images/gallery/gallery-5.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-5.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc18a0fdef14bb921423.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-5.webp?");

/***/ }),

/***/ "./images/gallery/gallery-6.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-6.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f381009d249e4ce508b4.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-6.webp?");

/***/ }),

/***/ "./images/gallery/gallery-7.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-7.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9df6160f45ff4a2ec03d.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-7.webp?");

/***/ }),

/***/ "./images/gallery/gallery-8.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-8.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89b9e98366aad173adf0.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-8.webp?");

/***/ }),

/***/ "./images/gallery/gallery-9.webp":
/*!***************************************!*\
  !*** ./images/gallery/gallery-9.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9de83b16777ca865eb45.webp\";\n\n//# sourceURL=webpack:///./images/gallery/gallery-9.webp?");

/***/ }),

/***/ "./images/home-gallery/almonds-1.webp":
/*!********************************************!*\
  !*** ./images/home-gallery/almonds-1.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe735483e97a34d673bd.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/almonds-1.webp?");

/***/ }),

/***/ "./images/home-gallery/energetic-1.webp":
/*!**********************************************!*\
  !*** ./images/home-gallery/energetic-1.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52e114e8e74d732c4b83.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/energetic-1.webp?");

/***/ }),

/***/ "./images/home-gallery/energetic-2.webp":
/*!**********************************************!*\
  !*** ./images/home-gallery/energetic-2.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66669c194d0d2ddfe846.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/energetic-2.webp?");

/***/ }),

/***/ "./images/home-gallery/fig-1.webp":
/*!****************************************!*\
  !*** ./images/home-gallery/fig-1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dae111dfd06000688a08.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/fig-1.webp?");

/***/ }),

/***/ "./images/home-gallery/nut-mix-2.jpg":
/*!*******************************************!*\
  !*** ./images/home-gallery/nut-mix-2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2da6547cdaf5b9cad5db.jpg\";\n\n//# sourceURL=webpack:///./images/home-gallery/nut-mix-2.jpg?");

/***/ }),

/***/ "./images/home-gallery/nut-mix.jpg":
/*!*****************************************!*\
  !*** ./images/home-gallery/nut-mix.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"712d9eccf5ee7b7bfcfa.jpg\";\n\n//# sourceURL=webpack:///./images/home-gallery/nut-mix.jpg?");

/***/ }),

/***/ "./images/home-gallery/prunes-1.webp":
/*!*******************************************!*\
  !*** ./images/home-gallery/prunes-1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce16472fec0193990409.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/prunes-1.webp?");

/***/ }),

/***/ "./images/home-gallery/raisns-2.webp":
/*!*******************************************!*\
  !*** ./images/home-gallery/raisns-2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5998d68b65252b42a9b2.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/raisns-2.webp?");

/***/ }),

/***/ "./images/home-gallery/walnut-1.webp":
/*!*******************************************!*\
  !*** ./images/home-gallery/walnut-1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0cb72dca566329700a2.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/walnut-1.webp?");

/***/ }),

/***/ "./images/home-gallery/walnut-2.webp":
/*!*******************************************!*\
  !*** ./images/home-gallery/walnut-2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ca625823cf915f44d70.webp\";\n\n//# sourceURL=webpack:///./images/home-gallery/walnut-2.webp?");

/***/ }),

/***/ "./images/home/hero-image.webp":
/*!*************************************!*\
  !*** ./images/home/hero-image.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45e878a3da532966138a.webp\";\n\n//# sourceURL=webpack:///./images/home/hero-image.webp?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/main.js");
/******/ 	
/******/ })()
;