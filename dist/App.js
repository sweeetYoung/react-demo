"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var layout_1 = require("./layout");
var Login_1 = require("./views/Login");
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/Login", component: Login_1.default }),
        react_1.default.createElement(layout_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map