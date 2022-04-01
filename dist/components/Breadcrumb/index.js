"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = require("react");
var router_1 = require("../../router");
var utils_1 = require("../../utils");
var react_router_dom_1 = require("react-router-dom");
function Breadcrumbs() {
    var location = (0, react_router_dom_1.useLocation)();
    var pathArr = location.pathname.split('/').filter(function (item) { return item; });
    var flatRoutes = (0, utils_1.flatten)(router_1.mainRoutes, 'routes');
    var breadcrumbs = [];
    pathArr.map(function (item) { return breadcrumbs.push(flatRoutes.find(function (itemR) { return itemR.title === item; })); });
    console.log(breadcrumbs);
    return (react_1.default.createElement(antd_1.Breadcrumb, { style: { margin: '16px' } }, breadcrumbs.map(function (item) {
        return ((item === null || item === void 0 ? void 0 : item.breadJump) ?
            react_1.default.createElement(antd_1.Breadcrumb.Item, { key: item.key },
                react_1.default.createElement(react_router_dom_1.Link, { to: item.path }, item.title))
            :
                react_1.default.createElement(antd_1.Breadcrumb.Item, { key: item === null || item === void 0 ? void 0 : item.key }, item === null || item === void 0 ? void 0 : item.title));
    })));
}
function HeaderBreadcrumb() {
    return (react_1.default.createElement(Breadcrumbs, null));
}
exports.default = HeaderBreadcrumb;
//# sourceMappingURL=index.js.map