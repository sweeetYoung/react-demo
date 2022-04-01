"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./style.scss");
var antd_1 = require("antd");
var Sider_1 = require("./Sider");
var Header_1 = require("./Header");
var Content_1 = require("./Content");
var router_1 = require("../router");
var generateRoute_1 = require("../utils/generateRoute");
function BasicLayout() {
    function isLogin() {
        var _a;
        var userInfo = window.localStorage.getItem('userInfo') || {};
        return ((_a = Object.keys(userInfo)) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    console.log('是否登陆', isLogin());
    return (isLogin() ?
        react_1.default.createElement(antd_1.Layout, { className: "page" },
            react_1.default.createElement(Sider_1.default, null),
            react_1.default.createElement(antd_1.Layout, { className: "site-layout" },
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(Content_1.default, { renderRoute: router_1.mainRoutes.map(function (item) { return (0, generateRoute_1.default)(item); }) })))
        :
            react_1.default.createElement(react_router_dom_1.Redirect, { to: '/Login' }));
}
exports.default = (0, react_router_dom_1.withRouter)(BasicLayout);
//# sourceMappingURL=index.js.map