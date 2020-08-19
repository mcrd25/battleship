/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#content {\n  display: flex;\n  flex-direction: column; }\n\n#instructions {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 0;\n  padding-bottom: 0; }\n\n#display {\n  font-size: 20px; }\n\n.boards-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 0;\n  padding-top: 0; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  margin: 10rem; }\n\n.cell {\n  border: 2px solid black;\n  margin: 1px;\n  cursor: pointer; }\n\n.single-cell {\n  border: 2px solid black;\n  margin: 1px;\n  display: inline-block;\n  background-color: black;\n  height: 25px;\n  width: 25px; }\n\n.placement {\n  padding: 10px; }\n\n.ship {\n  background-color: black; }\n\n.sea {\n  background-color: lightblue; }\n\n.hit {\n  background-color: red; }\n\n.disabledDiv {\n  pointer-events: none;\n  opacity: 0.6; }\n\n.disabledCell {\n  pointer-events: none; }\n\n.hide-placement {\n  display: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/UI/board.js":
/*!*************************!*\
  !*** ./src/UI/board.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BoardUI = function BoardUI() {
  var gridSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var createCell = function createCell(className, id) {
    var cell = document.createElement('div');
    cell.className = className;
    cell.id = id;
    return cell;
  };

  var createGameboardDiv = function createGameboardDiv(id, className) {
    var gameboardDiv = document.createElement('div');
    gameboardDiv.className = className;
    gameboardDiv.id = id;
    return gameboardDiv;
  };

  var computerMove = function computerMove(computer, player) {
    var compMove = computer.makeRandomMove();

    var _compMove = _slicedToArray(compMove, 2),
        x = _compMove[0],
        y = _compMove[1];

    var cell = document.getElementById("".concat(x, "-").concat(y, "-p"));
    var display = document.querySelector('#display');

    if (player.getBoard().receiveAttack(compMove)) {
      cell.className += ' hit';

      if (player.getBoard().allSunk()) {
        display.innerHTML = 'Computer Won!';
      } else {
        display.innerHTML = 'Your turn';
      }
    } else {
      cell.className += ' sea';
      display.innerHTML = 'Your turn';
    }
  };

  var drawGrid = function drawGrid(id, className, player, opponent) {
    var computer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var grid = document.createElement('div');
    grid.id = id;
    grid.className = className;

    for (var x = 0; x < gridSize; x += 1) {
      var _loop = function _loop(y) {
        var cell = computer ? createCell('cell', "".concat(x, "-").concat(y)) : createCell('cell', "".concat(x, "-").concat(y, "-p"));

        if (computer) {
          cell.addEventListener('click', function () {
            var _cell$id$split = cell.id.split('-'),
                _cell$id$split2 = _slicedToArray(_cell$id$split, 2),
                x2 = _cell$id$split2[0],
                y2 = _cell$id$split2[1];

            if (!player.getBoard().getMoves().includes([x2, y2])) {
              var display = document.querySelector('#display');

              if (player.getBoard().receiveAttack([x2, y2])) {
                cell.className += ' hit';

                if (player.getBoard().allSunk()) {
                  display.innerHTML = 'You Won!';
                } else {
                  display.innerHTML = 'Computer\'s turn';
                  cell.className += ' disabledCell';
                  computerMove(player, opponent);
                }
              } else {
                cell.className += ' sea';
                display.innerHTML = 'Computer\'s turn';
                cell.className += ' disabledCell';
                computerMove(player, opponent);
              }
            }
          });
        }

        grid.appendChild(cell);
      };

      for (var y = 0; y < gridSize; y += 1) {
        _loop(y);
      }
    }

    return grid;
  };

  return {
    createGameboardDiv: createGameboardDiv,
    drawGrid: drawGrid
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BoardUI);

/***/ }),

/***/ "./src/UI/placement.js":
/*!*****************************!*\
  !*** ./src/UI/placement.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PlacementUI = function PlacementUI() {
  var drawPlacement = function drawPlacement(shipName, ship, player) {
    var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var xInput = document.createElement('input');
    var yInput = document.createElement('input');
    var xLabel = document.createElement('label');
    var yLabel = document.createElement('label');
    var shipDiv = document.createElement('div');
    var placeButton = document.createElement('button');
    var horizontalRadio = document.createElement('input');
    var horizontalLabel = document.createElement('label');
    var verticalRadio = document.createElement('input');
    var verticalLabel = document.createElement('label');
    horizontalRadio.value = 'horizontal';
    horizontalRadio.id = "".concat(shipName, "-h");
    horizontalRadio.type = 'radio';
    horizontalRadio.name = "".concat(shipName, "-direction");
    horizontalRadio.checked = true;
    horizontalLabel.htmlFor = horizontalRadio.id;
    horizontalLabel.innerHTML = 'horizontal';
    verticalRadio.value = 'vertical';
    verticalRadio.id = "".concat(shipName, "-v");
    verticalRadio.type = 'radio';
    verticalRadio.name = "".concat(shipName, "-direction");
    verticalLabel.htmlFor = verticalRadio.id;
    verticalLabel.innerHTML = 'vertical';
    placeButton.id = shipName;
    placeButton.className = 'btn waves-effect waves-light use-default place-btn';
    placeButton.innerHTML = 'place';
    placeButton.addEventListener('click', function () {
      var x = parseInt(document.getElementById("".concat(placeButton.id, "-x")).value, 10);
      var y = parseInt(document.getElementById("".concat(placeButton.id, "-y")).value, 10);
      var direction = document.querySelector("input[name=".concat(shipName, "-direction]:checked")).value;

      if (player.getBoard().placeShip(ship, [x, y], direction)) {
        placeButton.className += ' disabledDiv place-btn-disabled';
        var allPlaces = document.querySelectorAll('.place-btn-disabled');

        if (allPlaces.length === 10) {
          var start = document.querySelector('#start');
          var display = document.querySelector('#display');
          start.className = 'btn waves-effect waves-light use-default';
          display.innerHTML = 'Ok, we can start now!';
        }

        if (direction === 'horizontal') {
          for (var i = 0; i < ship.length; i += 1) {
            var cell = document.getElementById("".concat(x, "-").concat(y + i, "-p"));
            cell.className += ' ship';
          }
        } else {
          for (var _i = 0; _i < ship.length; _i += 1) {
            var _cell = document.getElementById("".concat(x + _i, "-").concat(y, "-p"));

            _cell.className += ' ship';
          }
        }
      }
    });

    for (var i = 0; i < length; i += 1) {
      var cell = document.createElement('div');
      cell.className = 'single-cell';
      shipDiv.appendChild(cell);
    }

    xInput.id = "".concat(shipName, "-x");
    xLabel.htmlFor = xInput.id;
    xLabel.innerHTML = 'x';
    yInput.id = "".concat(shipName, "-y");
    yLabel.htmlFor = yInput.id;
    yLabel.innerHTML = 'y';
    xInput.className = 'placement-input';
    yInput.className = 'placement-input';
    return [xInput, xLabel, yInput, yLabel, shipDiv, placeButton, horizontalRadio, horizontalLabel, verticalRadio, verticalLabel];
  };

  return {
    drawPlacement: drawPlacement
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PlacementUI);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Player */ "./src/components/Player.js");
/* harmony import */ var _components_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Ship */ "./src/components/Ship.js");
/* harmony import */ var _UI_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/board */ "./src/UI/board.js");
/* harmony import */ var _UI_placement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/placement */ "./src/UI/placement.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import M from 'materialize-css';





var boardDOM = new _UI_board__WEBPACK_IMPORTED_MODULE_2__["default"]();
var ships = [{
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
  pos: [0, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
  pos: [1, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
  pos: [2, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
  pos: [3, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
  pos: [4, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
  pos: [5, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
  pos: [6, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
  pos: [7, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
  pos: [8, 0],
  direction: 'horizontal'
}, {
  ship: new _components_Ship__WEBPACK_IMPORTED_MODULE_1__["default"](4),
  pos: [9, 0],
  direction: 'horizontal'
}];
var placementDOM = new _UI_placement__WEBPACK_IMPORTED_MODULE_3__["default"]();
var player1 = new _components_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player1');
var computer = new _components_Player__WEBPACK_IMPORTED_MODULE_0__["default"]('computer', true);
computer.getBoard().setDefaultBoard();

var placementDivs = function placementDivs(ships, parent) {
  var row1 = document.createElement('div');
  var row2 = document.createElement('div');

  for (var i = 0; i < ships.length; i += 1) {
    var placementDiv = document.createElement('div');

    var _placementDOM$drawPla = placementDOM.drawPlacement("ship".concat(i + 1), ships[i].ship, player1, ships[i].ship.length),
        _placementDOM$drawPla2 = _slicedToArray(_placementDOM$drawPla, 10),
        ship1x = _placementDOM$drawPla2[0],
        labelx = _placementDOM$drawPla2[1],
        ship1y = _placementDOM$drawPla2[2],
        labely = _placementDOM$drawPla2[3],
        shipDiv = _placementDOM$drawPla2[4],
        placeButton = _placementDOM$drawPla2[5],
        hRadio = _placementDOM$drawPla2[6],
        hLabel = _placementDOM$drawPla2[7],
        vRadio = _placementDOM$drawPla2[8],
        vLabel = _placementDOM$drawPla2[9];

    placementDiv.className = 'placement';
    placementDiv.append(shipDiv, labelx, ship1x, labely, ship1y, hLabel, hRadio, vLabel, vRadio, placeButton);

    if (i < parseInt(ships.length / 2, 10)) {
      row1.appendChild(placementDiv);
    } else {
      row2.appendChild(placementDiv);
    }

    parent.append(row1, row2);
  }
};

var init = function init() {
  var content = document.querySelector('#content');
  var boardsDiv = boardDOM.createGameboardDiv('boards', 'boards-div');
  var grid = boardDOM.drawGrid('player', 'grid disabledDiv', player1, computer);
  var grid2 = boardDOM.drawGrid('computer', 'grid disabledDiv', computer, player1, true);
  var display = document.createElement('div');
  var instructionsDiv = document.createElement('div');
  var startDiv = document.createElement('div');
  var startBtn = document.createElement('button');
  instructionsDiv.id = 'instructions';
  display.id = 'display';
  startBtn.id = 'start';
  startBtn.className = 'btn waves-effect waves-light use-default disabledDiv';
  startBtn.innerHTML = 'Start';
  startDiv.appendChild(startBtn);
  placementDivs(ships, instructionsDiv);
  boardsDiv.append(grid, display, grid2);
  content.append(instructionsDiv, startDiv, boardsDiv);
  startBtn.addEventListener('click', function () {
    display.innerHTML = 'Your turn';
    grid2.className = 'grid';
  });
};

init();

/***/ }),

/***/ "./src/components/GameBoard.js":
/*!*************************************!*\
  !*** ./src/components/GameBoard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/components/Ship.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Gameboard = function Gameboard() {
  var shipCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var board = Array(10).fill(null).map(function () {
    return Array(10).fill(null);
  });
  var sunkCount = 0;
  var moves = [];
  var defaultPlacements = [{
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1),
    pos: [0, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1),
    pos: [1, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1),
    pos: [2, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](1),
    pos: [3, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2),
    pos: [4, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2),
    pos: [5, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2),
    pos: [6, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3),
    pos: [7, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3),
    pos: [8, 0],
    direction: 'horizontal'
  }, {
    ship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](4),
    pos: [9, 0],
    direction: 'horizontal'
  }];

  var isHorizontal = function isHorizontal(direction) {
    if (direction === 'horizontal') {
      return true;
    }

    return false;
  };

  var spaceAvailable = function spaceAvailable(direction, x, y, ship) {
    if (isHorizontal(direction)) {
      if (y + ship.length > 10) {
        return false;
      }

      for (var i = y; i < y + ship.length; i += 1) {
        if (board[x][i] !== null) {
          return false;
        }
      }
    } else {
      if (x + ship.length > 10) {
        return false;
      }

      for (var _i = x; _i < x + ship.length; _i += 1) {
        if (board[_i][y] !== null) {
          return false;
        }
      }
    }

    return true;
  };

  var placeShipHelper = function placeShipHelper(x, y, ship, direction) {
    if (isHorizontal(direction)) {
      for (var i = y; i < ship.ship.length + y; i += 1) {
        board[x][i] = ship;
      }
    } else {
      for (var _i2 = x; _i2 < ship.ship.length + x; _i2 += 1) {
        board[_i2][y] = ship;
      }
    }
  };

  var placeShip = function placeShip(ship, pos) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'horizontal';

    var _pos = _slicedToArray(pos, 2),
        x = _pos[0],
        y = _pos[1];

    if (spaceAvailable(direction, x, y, ship)) {
      placeShipHelper(x, y, {
        ship: ship,
        pos: pos,
        direction: direction
      }, direction);
      return true;
    }

    return false;
  };

  var setDefaultBoard = function setDefaultBoard() {
    var ship;

    for (var i = 0; i < defaultPlacements.length; i += 1) {
      ship = defaultPlacements[i];
      placeShip(ship.ship, ship.pos, ship.direction);
    }
  };

  var allSunk = function allSunk() {
    return sunkCount === shipCount;
  };

  var receiveAttack = function receiveAttack(pos) {
    var _pos2 = _slicedToArray(pos, 2),
        x = _pos2[0],
        y = _pos2[1];

    if (board[x][y] !== null) {
      var ship = board[x][y];

      var _ship$pos = _slicedToArray(ship.pos, 2),
          startx = _ship$pos[0],
          starty = _ship$pos[1];

      if (isHorizontal(ship.direction)) {
        ship.ship.hit(y - starty);
      } else {
        ship.ship.hit(x - startx);
      }

      if (ship.ship.isSunk()) {
        sunkCount += 1;
      }

      return true;
    }

    moves.push(pos);
    return false;
  };

  var getBoard = function getBoard() {
    return board;
  };

  var getMoves = function getMoves() {
    return moves;
  };

  return {
    placeShip: placeShip,
    getBoard: getBoard,
    setDefaultBoard: setDefaultBoard,
    receiveAttack: receiveAttack,
    allSunk: allSunk,
    getMoves: getMoves
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Gameboard);

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/components/GameBoard.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/helpers */ "./src/utilities/helpers.js");



var Player = function Player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Player';
  var computer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var board = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var moves = [];

  var getName = function getName() {
    return name;
  };

  var getBoard = function getBoard() {
    return board;
  };

  var makeRandomMove = function makeRandomMove() {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);

    while (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(moves, [x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    moves.push([x, y]);
    return [x, y];
  };

  if (computer) {
    return {
      getName: getName,
      getBoard: getBoard,
      makeRandomMove: makeRandomMove
    };
  }

  return {
    getName: getName,
    getBoard: getBoard
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*\
  !*** ./src/components/Ship.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Ship = function Ship() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var ship = Array(length).fill(false);

  var hit = function hit(pos) {
    if (!ship[pos] && ship[pos] !== undefined) {
      ship[pos] = true;
      return true;
    }

    return false;
  };

  var isHit = function isHit(value) {
    return value === true;
  };

  var isSunk = function isSunk() {
    return ship.every(isHit);
  };

  return {
    isSunk: isSunk,
    hit: hit,
    length: length
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Ship);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/utilities/helpers.js":
/*!**********************************!*\
  !*** ./src/utilities/helpers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrayInArray = function arrayInArray(parent, child) {
  var stringifiedParent = JSON.stringify(parent);
  var stringifiedChild = JSON.stringify(child);
  return stringifiedParent.includes(stringifiedChild);
};

/* harmony default export */ __webpack_exports__["default"] = (arrayInArray);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL3BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbIkJvYXJkVUkiLCJncmlkU2l6ZSIsImNyZWF0ZUNlbGwiLCJjbGFzc05hbWUiLCJpZCIsImNlbGwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVHYW1lYm9hcmREaXYiLCJnYW1lYm9hcmREaXYiLCJjb21wdXRlck1vdmUiLCJjb21wdXRlciIsInBsYXllciIsImNvbXBNb3ZlIiwibWFrZVJhbmRvbU1vdmUiLCJ4IiwieSIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJhbGxTdW5rIiwiaW5uZXJIVE1MIiwiZHJhd0dyaWQiLCJvcHBvbmVudCIsImdyaWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3BsaXQiLCJ4MiIsInkyIiwiZ2V0TW92ZXMiLCJpbmNsdWRlcyIsImFwcGVuZENoaWxkIiwiUGxhY2VtZW50VUkiLCJkcmF3UGxhY2VtZW50Iiwic2hpcE5hbWUiLCJzaGlwIiwibGVuZ3RoIiwieElucHV0IiwieUlucHV0IiwieExhYmVsIiwieUxhYmVsIiwic2hpcERpdiIsInBsYWNlQnV0dG9uIiwiaG9yaXpvbnRhbFJhZGlvIiwiaG9yaXpvbnRhbExhYmVsIiwidmVydGljYWxSYWRpbyIsInZlcnRpY2FsTGFiZWwiLCJ2YWx1ZSIsInR5cGUiLCJuYW1lIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJwYXJzZUludCIsImRpcmVjdGlvbiIsInBsYWNlU2hpcCIsImFsbFBsYWNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFydCIsImkiLCJib2FyZERPTSIsInNoaXBzIiwiU2hpcCIsInBvcyIsInBsYWNlbWVudERPTSIsInBsYXllcjEiLCJQbGF5ZXIiLCJzZXREZWZhdWx0Qm9hcmQiLCJwbGFjZW1lbnREaXZzIiwicGFyZW50Iiwicm93MSIsInJvdzIiLCJwbGFjZW1lbnREaXYiLCJzaGlwMXgiLCJsYWJlbHgiLCJzaGlwMXkiLCJsYWJlbHkiLCJoUmFkaW8iLCJoTGFiZWwiLCJ2UmFkaW8iLCJ2TGFiZWwiLCJhcHBlbmQiLCJpbml0IiwiY29udGVudCIsImJvYXJkc0RpdiIsImdyaWQyIiwiaW5zdHJ1Y3Rpb25zRGl2Iiwic3RhcnREaXYiLCJzdGFydEJ0biIsIkdhbWVib2FyZCIsInNoaXBDb3VudCIsImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic3Vua0NvdW50IiwibW92ZXMiLCJkZWZhdWx0UGxhY2VtZW50cyIsImlzSG9yaXpvbnRhbCIsInNwYWNlQXZhaWxhYmxlIiwicGxhY2VTaGlwSGVscGVyIiwic3RhcnR4Iiwic3RhcnR5IiwiaGl0IiwiaXNTdW5rIiwicHVzaCIsImdldE5hbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcnJheUluQXJyYXkiLCJ1bmRlZmluZWQiLCJpc0hpdCIsImV2ZXJ5IiwiY2hpbGQiLCJzdHJpbmdpZmll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LEdBQUQsQ0FBSixHQUFZLElBQVo7QUFDQSxhQUFPLElBQVA7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1pRCxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBaEUsS0FBSztBQUFBLFdBQUlBLEtBQUssS0FBSyxJQUFkO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTXdELE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTXBFLElBQUksQ0FBQzZFLEtBQUwsQ0FBV0QsS0FBWCxDQUFOO0FBQUEsR0FBZjs7QUFFQSxTQUFPO0FBQ0xSLFVBQU0sRUFBTkEsTUFESztBQUVMRCxPQUFHLEVBQUhBLEdBRks7QUFHTGxFLFVBQU0sRUFBTkE7QUFISyxHQUFQO0FBS0QsQ0FsQkQ7O0FBb0JleUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQSxJQUFNZ0QsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3pDLE1BQUQsRUFBUzZDLEtBQVQsRUFBbUI7QUFDdEMsTUFBTUMsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEQsTUFBZixDQUExQjtBQUNBLE1BQU1pRCxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDQyxTQUFMLENBQWVILEtBQWYsQ0FBekI7QUFDQSxTQUFPQyxpQkFBaUIsQ0FBQ3BGLFFBQWxCLENBQTJCdUYsZ0JBQTNCLENBQVA7QUFDRCxDQUpEOztBQU1lUiwyRUFBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jaW5zdHJ1Y3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuI2Rpc3BsYXkge1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLmJvYXJkcy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIG1hcmdpbjogMTByZW07IH1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNpbmdsZS1jZWxsIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4OyB9XFxuXFxuLnBsYWNlbWVudCB7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cXG5cXG4uc2VhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgfVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyB9XFxuXFxuLmRpc2FibGVkRGl2IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42OyB9XFxuXFxuLmRpc2FibGVkQ2VsbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblxcbi5oaWRlLXBsYWNlbWVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IEJvYXJkVUkgPSAoZ3JpZFNpemUgPSAxMCkgPT4ge1xuICBjb25zdCBjcmVhdGVDZWxsID0gKGNsYXNzTmFtZSwgaWQpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgY2VsbC5pZCA9IGlkO1xuICAgIHJldHVybiBjZWxsO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUdhbWVib2FyZERpdiA9IChpZCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkRGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBnYW1lYm9hcmREaXYuaWQgPSBpZDtcbiAgICByZXR1cm4gZ2FtZWJvYXJkRGl2O1xuICB9O1xuICBjb25zdCBjb21wdXRlck1vdmUgPSAoY29tcHV0ZXIsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGNvbXBNb3ZlID0gY29tcHV0ZXIubWFrZVJhbmRvbU1vdmUoKTtcbiAgICBjb25zdCBbeCwgeV0gPSBjb21wTW92ZTtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0tJHt5fS1wYCk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Jyk7XG4gICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soY29tcE1vdmUpKSB7XG4gICAgICBjZWxsLmNsYXNzTmFtZSArPSAnIGhpdCc7XG4gICAgICBpZiAocGxheWVyLmdldEJvYXJkKCkuYWxsU3VuaygpKSB7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJ0NvbXB1dGVyIFdvbiEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnWW91ciB0dXJuJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC5jbGFzc05hbWUgKz0gJyBzZWEnO1xuICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnWW91ciB0dXJuJztcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRyYXdHcmlkID0gKGlkLCBjbGFzc05hbWUsIHBsYXllciwgb3Bwb25lbnQsIGNvbXB1dGVyID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5pZCA9IGlkO1xuICAgIGdyaWQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBncmlkU2l6ZTsgeCArPSAxKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGdyaWRTaXplOyB5ICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGNvbXB1dGVyID8gY3JlYXRlQ2VsbCgnY2VsbCcsIGAke3h9LSR7eX1gKSA6IGNyZWF0ZUNlbGwoJ2NlbGwnLCBgJHt4fS0ke3l9LXBgKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyKSB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFt4MiwgeTJdID0gY2VsbC5pZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgaWYgKCFwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRNb3ZlcygpLmluY2x1ZGVzKFt4MiwgeTJdKSkge1xuICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soW3gyLCB5Ml0pKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJ1lvdSBXb24hJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnQ29tcHV0ZXJcXCdzIHR1cm4nO1xuICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgKz0gJyBkaXNhYmxlZENlbGwnO1xuICAgICAgICAgICAgICAgICAgY29tcHV0ZXJNb3ZlKHBsYXllciwgb3Bwb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSArPSAnIHNlYSc7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnQ29tcHV0ZXJcXCdzIHR1cm4nO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lICs9ICcgZGlzYWJsZWRDZWxsJztcbiAgICAgICAgICAgICAgICBjb21wdXRlck1vdmUocGxheWVyLCBvcHBvbmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3JpZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUdhbWVib2FyZERpdixcbiAgICBkcmF3R3JpZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkVUk7XG4iLCJjb25zdCBQbGFjZW1lbnRVSSA9ICgpID0+IHtcbiAgY29uc3QgZHJhd1BsYWNlbWVudCA9IChzaGlwTmFtZSwgc2hpcCwgcGxheWVyLCBsZW5ndGggPSAyKSA9PiB7XG4gICAgY29uc3QgeElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGxhY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBob3Jpem9udGFsUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGhvcml6b250YWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdmVydGljYWxSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdmVydGljYWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICBob3Jpem9udGFsUmFkaW8udmFsdWUgPSAnaG9yaXpvbnRhbCc7XG4gICAgaG9yaXpvbnRhbFJhZGlvLmlkID0gYCR7c2hpcE5hbWV9LWhgO1xuICAgIGhvcml6b250YWxSYWRpby50eXBlID0gJ3JhZGlvJztcbiAgICBob3Jpem9udGFsUmFkaW8ubmFtZSA9IGAke3NoaXBOYW1lfS1kaXJlY3Rpb25gO1xuICAgIGhvcml6b250YWxSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICBob3Jpem9udGFsTGFiZWwuaHRtbEZvciA9IGhvcml6b250YWxSYWRpby5pZDtcbiAgICBob3Jpem9udGFsTGFiZWwuaW5uZXJIVE1MID0gJ2hvcml6b250YWwnO1xuICAgIHZlcnRpY2FsUmFkaW8udmFsdWUgPSAndmVydGljYWwnO1xuICAgIHZlcnRpY2FsUmFkaW8uaWQgPSBgJHtzaGlwTmFtZX0tdmA7XG4gICAgdmVydGljYWxSYWRpby50eXBlID0gJ3JhZGlvJztcbiAgICB2ZXJ0aWNhbFJhZGlvLm5hbWUgPSBgJHtzaGlwTmFtZX0tZGlyZWN0aW9uYDtcbiAgICB2ZXJ0aWNhbExhYmVsLmh0bWxGb3IgPSB2ZXJ0aWNhbFJhZGlvLmlkO1xuICAgIHZlcnRpY2FsTGFiZWwuaW5uZXJIVE1MID0gJ3ZlcnRpY2FsJztcbiAgICBwbGFjZUJ1dHRvbi5pZCA9IHNoaXBOYW1lO1xuICAgIHBsYWNlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHVzZS1kZWZhdWx0IHBsYWNlLWJ0bic7XG4gICAgcGxhY2VCdXR0b24uaW5uZXJIVE1MID0gJ3BsYWNlJztcbiAgICBwbGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGFjZUJ1dHRvbi5pZH0teGApLnZhbHVlLCAxMCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxhY2VCdXR0b24uaWR9LXlgKS52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ke3NoaXBOYW1lfS1kaXJlY3Rpb25dOmNoZWNrZWRgKS52YWx1ZTtcbiAgICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoc2hpcCwgW3gsIHldLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgIHBsYWNlQnV0dG9uLmNsYXNzTmFtZSArPSAnIGRpc2FibGVkRGl2IHBsYWNlLWJ0bi1kaXNhYmxlZCc7XG4gICAgICAgIGNvbnN0IGFsbFBsYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZS1idG4tZGlzYWJsZWQnKTtcbiAgICAgICAgaWYgKGFsbFBsYWNlcy5sZW5ndGggPT09IDEwKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcbiAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcbiAgICAgICAgICBzdGFydC5jbGFzc05hbWUgPSAnYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB1c2UtZGVmYXVsdCc7XG4gICAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnT2ssIHdlIGNhbiBzdGFydCBub3chJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fS0ke3kgKyBpfS1wYCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSArPSAnIHNoaXAnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgaX0tJHt5fS1wYCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSArPSAnIHNoaXAnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc05hbWUgPSAnc2luZ2xlLWNlbGwnO1xuICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG5cbiAgICB4SW5wdXQuaWQgPSBgJHtzaGlwTmFtZX0teGA7XG4gICAgeExhYmVsLmh0bWxGb3IgPSB4SW5wdXQuaWQ7XG4gICAgeExhYmVsLmlubmVySFRNTCA9ICd4JztcbiAgICB5SW5wdXQuaWQgPSBgJHtzaGlwTmFtZX0teWA7XG4gICAgeUxhYmVsLmh0bWxGb3IgPSB5SW5wdXQuaWQ7XG4gICAgeUxhYmVsLmlubmVySFRNTCA9ICd5JztcbiAgICB4SW5wdXQuY2xhc3NOYW1lID0gJ3BsYWNlbWVudC1pbnB1dCc7XG4gICAgeUlucHV0LmNsYXNzTmFtZSA9ICdwbGFjZW1lbnQtaW5wdXQnO1xuICAgIHJldHVybiBbeElucHV0LCB4TGFiZWwsIHlJbnB1dCwgeUxhYmVsLCBzaGlwRGl2LCBwbGFjZUJ1dHRvbiwgaG9yaXpvbnRhbFJhZGlvLCBob3Jpem9udGFsTGFiZWwsIHZlcnRpY2FsUmFkaW8sIHZlcnRpY2FsTGFiZWxdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZHJhd1BsYWNlbWVudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlbWVudFVJOyIsIi8vIGltcG9ydCBNIGZyb20gJ21hdGVyaWFsaXplLWNzcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9QbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9jb21wb25lbnRzL1NoaXAnO1xuaW1wb3J0IEJvYXJkVUkgZnJvbSAnLi9VSS9ib2FyZCc7XG5pbXBvcnQgUGxhY2VtZW50VUkgZnJvbSAnLi9VSS9wbGFjZW1lbnQnO1xuXG5pbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJztcblxuXG5cbmNvbnN0IGJvYXJkRE9NID0gbmV3IEJvYXJkVUkoKTtcbmNvbnN0IHNoaXBzID0gW1xuICB7XG4gICAgc2hpcDogbmV3IFNoaXAoMSksXG4gICAgcG9zOiBbMCwgMF0sXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIH0sXG4gIHtcbiAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICBwb3M6IFsxLCAwXSxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgfSxcbiAge1xuICAgIHNoaXA6IG5ldyBTaGlwKDEpLFxuICAgIHBvczogWzIsIDBdLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB9LFxuICB7XG4gICAgc2hpcDogbmV3IFNoaXAoMSksXG4gICAgcG9zOiBbMywgMF0sXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIH0sXG4gIHtcbiAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICBwb3M6IFs0LCAwXSxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgfSxcbiAge1xuICAgIHNoaXA6IG5ldyBTaGlwKDIpLFxuICAgIHBvczogWzUsIDBdLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB9LFxuICB7XG4gICAgc2hpcDogbmV3IFNoaXAoMiksXG4gICAgcG9zOiBbNiwgMF0sXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIH0sXG4gIHtcbiAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICBwb3M6IFs3LCAwXSxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgfSxcbiAge1xuICAgIHNoaXA6IG5ldyBTaGlwKDMpLFxuICAgIHBvczogWzgsIDBdLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB9LFxuICB7XG4gICAgc2hpcDogbmV3IFNoaXAoNCksXG4gICAgcG9zOiBbOSwgMF0sXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIH0sXG5cbl07XG5jb25zdCBwbGFjZW1lbnRET00gPSBuZXcgUGxhY2VtZW50VUkoKTtcbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKCdQbGF5ZXIxJyk7XG5jb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoJ2NvbXB1dGVyJywgdHJ1ZSk7XG5jb21wdXRlci5nZXRCb2FyZCgpLnNldERlZmF1bHRCb2FyZCgpO1xuXG5jb25zdCBwbGFjZW1lbnREaXZzID0gKHNoaXBzLCBwYXJlbnQpID0+IHtcbiAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBwbGFjZW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBbXG4gICAgICBzaGlwMXgsIGxhYmVseCwgc2hpcDF5LCBsYWJlbHksIHNoaXBEaXYsIHBsYWNlQnV0dG9uLCBoUmFkaW8sIGhMYWJlbCwgdlJhZGlvLCB2TGFiZWwsXG4gICAgXSA9IHBsYWNlbWVudERPTS5kcmF3UGxhY2VtZW50KGBzaGlwJHtpICsgMX1gLCBzaGlwc1tpXS5zaGlwLCBwbGF5ZXIxLCBzaGlwc1tpXS5zaGlwLmxlbmd0aCk7XG4gICAgcGxhY2VtZW50RGl2LmNsYXNzTmFtZSA9ICdwbGFjZW1lbnQnO1xuICAgIHBsYWNlbWVudERpdi5hcHBlbmQoXG4gICAgICBzaGlwRGl2LCBsYWJlbHgsIHNoaXAxeCwgbGFiZWx5LCBzaGlwMXksIGhMYWJlbCwgaFJhZGlvLCB2TGFiZWwsIHZSYWRpbywgcGxhY2VCdXR0b24sXG4gICAgKTtcbiAgICBpZiAoaSA8IHBhcnNlSW50KHNoaXBzLmxlbmd0aCAvIDIsIDEwKSkge1xuICAgICAgcm93MS5hcHBlbmRDaGlsZChwbGFjZW1lbnREaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3cyLmFwcGVuZENoaWxkKHBsYWNlbWVudERpdik7XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmQocm93MSwgcm93Mik7XG4gIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBib2FyZHNEaXYgPSBib2FyZERPTS5jcmVhdGVHYW1lYm9hcmREaXYoJ2JvYXJkcycsICdib2FyZHMtZGl2Jyk7XG4gIGNvbnN0IGdyaWQgPSBib2FyZERPTS5kcmF3R3JpZCgncGxheWVyJywgJ2dyaWQgZGlzYWJsZWREaXYnLCBwbGF5ZXIxLCBjb21wdXRlcik7XG4gIGNvbnN0IGdyaWQyID0gYm9hcmRET00uZHJhd0dyaWQoJ2NvbXB1dGVyJywgJ2dyaWQgZGlzYWJsZWREaXYnLCBjb21wdXRlciwgcGxheWVyMSwgdHJ1ZSk7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGluc3RydWN0aW9uc0Rpdi5pZCA9ICdpbnN0cnVjdGlvbnMnO1xuICBkaXNwbGF5LmlkID0gJ2Rpc3BsYXknO1xuICBzdGFydEJ0bi5pZCA9ICdzdGFydCc7XG4gIHN0YXJ0QnRuLmNsYXNzTmFtZSA9ICdidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHVzZS1kZWZhdWx0IGRpc2FibGVkRGl2JztcbiAgc3RhcnRCdG4uaW5uZXJIVE1MID0gJ1N0YXJ0JztcbiAgc3RhcnREaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICBwbGFjZW1lbnREaXZzKHNoaXBzLCBpbnN0cnVjdGlvbnNEaXYpO1xuICBib2FyZHNEaXYuYXBwZW5kKGdyaWQsIGRpc3BsYXksIGdyaWQyKTtcbiAgY29udGVudC5hcHBlbmQoaW5zdHJ1Y3Rpb25zRGl2LCBzdGFydERpdiwgYm9hcmRzRGl2KTtcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSAnWW91ciB0dXJuJztcbiAgICBncmlkMi5jbGFzc05hbWUgPSAnZ3JpZCc7XG4gIH0pO1xufTtcbmluaXQoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IChzaGlwQ291bnQgPSAxMCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gIGxldCBzdW5rQ291bnQgPSAwO1xuICBjb25zdCBtb3ZlcyA9IFtdO1xuICBjb25zdCBkZWZhdWx0UGxhY2VtZW50cyA9IFtcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgIHBvczogWzAsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgIHBvczogWzEsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgIHBvczogWzIsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgxKSxcbiAgICAgIHBvczogWzMsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICAgIHBvczogWzQsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICAgIHBvczogWzUsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgyKSxcbiAgICAgIHBvczogWzYsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICAgIHBvczogWzcsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCgzKSxcbiAgICAgIHBvczogWzgsIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaGlwOiBuZXcgU2hpcCg0KSxcbiAgICAgIHBvczogWzksIDBdLFxuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgfSxcblxuICBdO1xuXG4gIGNvbnN0IGlzSG9yaXpvbnRhbCA9IChkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc3BhY2VBdmFpbGFibGUgPSAoZGlyZWN0aW9uLCB4LCB5LCBzaGlwKSA9PiB7XG4gICAgaWYgKGlzSG9yaXpvbnRhbChkaXJlY3Rpb24pKSB7XG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbeF1baV0gIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3ldICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBIZWxwZXIgPSAoeCwgeSwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGlzSG9yaXpvbnRhbChkaXJlY3Rpb24pKSB7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHNoaXAuc2hpcC5sZW5ndGggKyB5OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbeF1baV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHNoaXAuc2hpcC5sZW5ndGggKyB4OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1beV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBvcywgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zO1xuICAgIGlmIChzcGFjZUF2YWlsYWJsZShkaXJlY3Rpb24sIHgsIHksIHNoaXApKSB7XG4gICAgICBwbGFjZVNoaXBIZWxwZXIoeCwgeSwgeyBzaGlwLCBwb3MsIGRpcmVjdGlvbiB9LCBkaXJlY3Rpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZXREZWZhdWx0Qm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IHNoaXA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0UGxhY2VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2hpcCA9IGRlZmF1bHRQbGFjZW1lbnRzW2ldO1xuICAgICAgcGxhY2VTaGlwKHNoaXAuc2hpcCwgc2hpcC5wb3MsIHNoaXAuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHN1bmtDb3VudCA9PT0gc2hpcENvdW50O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocG9zKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gcG9zO1xuICAgIGlmIChib2FyZFt4XVt5XSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW3hdW3ldO1xuICAgICAgY29uc3QgW3N0YXJ0eCwgc3RhcnR5XSA9IHNoaXAucG9zO1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbChzaGlwLmRpcmVjdGlvbikpIHtcbiAgICAgICAgc2hpcC5zaGlwLmhpdCh5IC0gc3RhcnR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuc2hpcC5oaXQoeCAtIHN0YXJ0eCk7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcC5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHN1bmtDb3VudCArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1vdmVzLnB1c2gocG9zKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIGNvbnN0IGdldE1vdmVzID0gKCkgPT4gbW92ZXM7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0Qm9hcmQsXG4gICAgc2V0RGVmYXVsdEJvYXJkLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgICBnZXRNb3ZlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZUJvYXJkJztcbmltcG9ydCBhcnJheUluQXJyYXkgZnJvbSAnLi4vdXRpbGl0aWVzL2hlbHBlcnMnO1xuXG5jb25zdCBQbGF5ZXIgPSAoXG4gIG5hbWUgPSAnUGxheWVyJyxcbiAgY29tcHV0ZXIgPSBmYWxzZSxcbikgPT4ge1xuICBjb25zdCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgY29uc3QgbW92ZXMgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKCkgPT4ge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHdoaWxlIChhcnJheUluQXJyYXkobW92ZXMsIFt4LCB5XSkpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBtb3Zlcy5wdXNoKFt4LCB5XSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcblxuICBpZiAoY29tcHV0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0TmFtZSxcbiAgICAgIGdldEJvYXJkLFxuICAgICAgbWFrZVJhbmRvbU1vdmUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBnZXRCb2FyZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKGxlbmd0aCA9IDIpID0+IHtcbiAgY29uc3Qgc2hpcCA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICBpZiAoIXNoaXBbcG9zXSAmJiBzaGlwW3Bvc10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2hpcFtwb3NdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNIaXQgPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcC5ldmVyeShpc0hpdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1N1bmssXG4gICAgaGl0LFxuICAgIGxlbmd0aCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGFycmF5SW5BcnJheSA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gIGNvbnN0IHN0cmluZ2lmaWVkUGFyZW50ID0gSlNPTi5zdHJpbmdpZnkocGFyZW50KTtcbiAgY29uc3Qgc3RyaW5naWZpZWRDaGlsZCA9IEpTT04uc3RyaW5naWZ5KGNoaWxkKTtcbiAgcmV0dXJuIHN0cmluZ2lmaWVkUGFyZW50LmluY2x1ZGVzKHN0cmluZ2lmaWVkQ2hpbGQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlJbkFycmF5OyJdLCJzb3VyY2VSb290IjoiIn0=