(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _m = require("./m1.js");

var m1 = _interopRequireWildcard(_m);

var _m2 = require("./m2.js");

var m2 = _interopRequireWildcard(_m2);

var _m3 = require("./m3.js");

var m3 = _interopRequireWildcard(_m3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// console.log(m1)
// console.log(m2);
// console.log(m3);

m1.xq(); // 模块引入

m2.xq();
m3.default.change();
},{"./m1.js":2,"./m2.js":3,"./m3.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xq = xq;
// export命令用于规定模块的对外接口
// 分别暴露
var name = exports.name = '浮幻';
function xq() {
    console.log('前端');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
var name = '浮幻';

function xq() {
    console.log('学前端');
}

exports.name = name;
exports.xq = xq;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露
exports.default = {
    name: 'FUHUAN',
    change: function change() {
        console.log('改变');
    }
};
},{}]},{},[1]);
