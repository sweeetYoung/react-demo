"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = require("react");
var Breadcrumb_1 = require("../components/Breadcrumb");
var Header = antd_1.Layout.Header;
var LayoutHeader = function () {
    return (react_1.default.createElement(Header, { className: "site-layout-background", style: { padding: 0 } },
        react_1.default.createElement(Breadcrumb_1.default, null)));
};
exports.default = LayoutHeader;
//# sourceMappingURL=Header.js.map