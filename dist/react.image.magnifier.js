!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactD3Treemap=t(require("react"),require("react-dom")):e.ReactD3Treemap=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(1);t.default=r.default},function(e,t,o){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__assign||Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),i=o(3),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.size/2,o=e.zoomImage.width/e.smallImage.width,r=e.zoomImage.height/e.smallImage.height,n=-(e.offsetX*o-t),i=-(e.offsetY*r-t),a=e.offsetY<e.smallImage.height&&e.offsetX<e.smallImage.width&&e.offsetY>0&&e.offsetX>0;return s.createElement("div",{style:{position:"absolute",display:a?"block":"none",top:e.y,left:e.x,width:e.size,height:e.size,marginLeft:-t+e.cursorOffset.x,marginTop:-t+e.cursorOffset.y,backgroundColor:"white",borderRadius:e.size,boxShadow:"1px 1px 6px rgba(0,0,0,0.3)"}},s.createElement("div",{style:{width:e.size,height:e.size,backgroundImage:"url("+e.zoomImage.src+")",backgroundRepeat:"no-repeat",backgroundPosition:n+"px "+i+"px",borderRadius:e.size}}))},t}(s.Component);t.Magnifier=a;var f=function(e){function t(t,o){var r=e.call(this,t)||this;return r.portalElement=null,r.onMouseMove=function(e){var t=r.getOffset(i.findDOMNode(r));r.setState({x:e.x+window.scrollX,y:e.y+window.scrollY,offsetX:e.x-t.x,offsetY:e.y-t.y})},r.setState({x:0,y:0,offsetX:-1,offsetY:-1}),r}return r(t,e),t.prototype.componentDidMount=function(){document.addEventListener("mousemove",this.onMouseMove),this.portalElement||(this.portalElement=document.createElement("div"),document.body.appendChild(this.portalElement)),this.componentDidUpdate()},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousemove",this.onMouseMove),document.body.removeChild(this.portalElement),this.portalElement=null},t.prototype.componentDidUpdate=function(){i.render(s.createElement(a,n({size:this.props.size,smallImage:this.props.image,zoomImage:this.props.zoomImage,cursorOffset:this.props.cursorOffset},this.state)),this.portalElement)},t.prototype.getOffset=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-e.scrollLeft,o+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{x:t,y:o}},t.prototype.render=function(){return s.createElement("img",n({},this.props,{src:this.props.image.src}))},t}(s.Component);t.ImageMagnifierLens=f,t.default=f},function(t,o){t.exports=e},function(e,o){e.exports=t}])});
//# sourceMappingURL=react.image.magnifier.js.map