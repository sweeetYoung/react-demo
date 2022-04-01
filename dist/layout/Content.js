"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
// import { mainRoutes } from "../router";
// import generateRoute from "../utils/generateRoute";
// import Home from '../views/Home/index';
var Content = antd_1.Layout.Content;
function LayoutContent(props) {
    console.log('父组件传过来的参数', props);
    return (react_1.default.createElement(Content, { style: { margin: '16px' } },
        react_1.default.createElement("div", { className: "site-layout-background", style: { padding: 24, minHeight: 360 } },
            react_1.default.createElement(react_router_dom_1.Switch, null,
                props.renderRoute,
                react_1.default.createElement(react_router_dom_1.Redirect, { to: "/Home" })))));
}
exports.default = LayoutContent;
//# sourceMappingURL=Content.js.map