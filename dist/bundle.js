/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
var Magnifier = /** @class */ (function (_super) {
    __extends(Magnifier, _super);
    function Magnifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnifier.prototype.render = function () {
        var props = this.props;
        var halfSize = props.size / 2;
        var magX = props.zoomImage.width / props.smallImage.width;
        var magY = props.zoomImage.height / props.smallImage.height;
        var bgX = -(props.offsetX * magX - halfSize);
        var bgY = -(props.offsetY * magY - halfSize);
        var isVisible = props.offsetY < props.smallImage.height &&
            props.offsetX < props.smallImage.width &&
            props.offsetY > 0 &&
            props.offsetX > 0;
        return (React.createElement("div", { style: {
                position: 'absolute',
                display: isVisible ? 'block' : 'none',
                top: props.y,
                left: props.x,
                width: props.size,
                height: props.size,
                marginLeft: -halfSize + props.cursorOffset.x,
                marginTop: -halfSize + props.cursorOffset.y,
                backgroundColor: 'white',
                borderRadius: props.size,
                boxShadow: "1px 1px 6px rgba(0,0,0,0.3)"
            } },
            React.createElement("div", { style: {
                    width: props.size,
                    height: props.size,
                    backgroundImage: "url(" + props.zoomImage.src + ")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: bgX + "px " + bgY + "px",
                    borderRadius: props.size
                } })));
    };
    return Magnifier;
}(React.Component));
exports.Magnifier = Magnifier;
var ImageMagnifierLens = /** @class */ (function (_super) {
    __extends(ImageMagnifierLens, _super);
    function ImageMagnifierLens(props, state) {
        var _this = _super.call(this, props) || this;
        _this.portalElement = null;
        _this.onMouseMove = function (e) {
            var offset = _this.getOffset(ReactDOM.findDOMNode(_this));
            _this.setState({
                x: e.x + window.scrollX,
                y: e.y + window.scrollY,
                offsetX: e.x - offset.x,
                offsetY: e.y - offset.y
            });
        };
        _this.setState({
            x: 0,
            y: 0,
            offsetX: -1,
            offsetY: -1
        });
        return _this;
    }
    ImageMagnifierLens.prototype.componentDidMount = function () {
        document.addEventListener('mousemove', this.onMouseMove);
        if (!this.portalElement) {
            this.portalElement = document.createElement('div');
            document.body.appendChild(this.portalElement);
        }
        this.componentDidUpdate();
    };
    ImageMagnifierLens.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeChild(this.portalElement);
        this.portalElement = null;
    };
    ImageMagnifierLens.prototype.componentDidUpdate = function () {
        ReactDOM.render(React.createElement(Magnifier, __assign({ size: this.props.size, smallImage: this.props.image, zoomImage: this.props.zoomImage, cursorOffset: this.props.cursorOffset }, this.state)), this.portalElement);
    };
    ImageMagnifierLens.prototype.getOffset = function (el) {
        var x = 0;
        var y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent; //el.offsetParent;
        }
        return { x: x, y: y };
    };
    ImageMagnifierLens.prototype.render = function () {
        return (React.createElement("img", __assign({}, this.props, { src: this.props.image.src })));
    };
    return ImageMagnifierLens;
}(React.Component));
exports.ImageMagnifierLens = ImageMagnifierLens;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);
var ImageMagnifierLens_1 = __webpack_require__(2);
ReactDOM.render(React.createElement("div", null,
    React.createElement(ImageMagnifierLens_1.ImageMagnifierLens, { image: {
            src: "https://github.com/giuleon/react-image-magnifier/blob/master/src/img/world-map-small.jpg",
            width: 400,
            height: 300
        }, zoomImage: {
            src: "https://github.com/giuleon/react-image-magnifier/blob/master/src/img/world-map-large.jpg",
            width: 1600,
            height: 1200
        }, cursorOffset: { x: 80, y: -80 }, size: 200 })), document.getElementById("app"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map