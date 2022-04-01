"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
function generateRoute(item) {
    // 有子路由
    if (item.routes && item.routes.length !== 0) {
        // 当前路由也要生成路由
        var routeView = react_1.default.createElement(react_router_dom_1.Route, { key: item.key, path: item.path, exact: item.exact, render: function (routeProps) {
                // 路由对应的组件 <Route><组件名称></组件名称></Route> ,这样就不用写Link标签来指定的路由组件了
                return react_1.default.createElement(item.component, __assign({}, routeProps));
            } });
        // 生成当前路由的子路由
        var children = item.routes.map(function (route) {
            return generateRoute(route);
        });
        children.push(routeView);
        return children;
    }
    // 生成当前路由
    return (react_1.default.createElement(react_router_dom_1.Route, { key: item.key, path: item.path, exact: item.exact, render: function (routeProps) {
            return react_1.default.createElement(item.component, __assign({}, routeProps));
        } }));
}
exports.default = generateRoute;
//# sourceMappingURL=generateRoute.js.map