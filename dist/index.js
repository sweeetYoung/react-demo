"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.scss");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var react_router_dom_1 = require("react-router-dom");
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.HashRouter, null,
    react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading") },
        react_1.default.createElement(App_1.default, null))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map