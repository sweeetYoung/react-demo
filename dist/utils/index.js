"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
function flatten(arr, child) {
    return [].concat.apply([], arr.map(function (item) {
        return item[child] //判断是否有子项，否则递归flatten报错
            ? [].concat.apply([], __spreadArray([item], flatten(item[child]), false)) : [].concat(item);
    }));
}
exports.flatten = flatten;
//# sourceMappingURL=index.js.map