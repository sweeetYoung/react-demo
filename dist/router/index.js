"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = exports.routes = void 0;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var routes = [
    {
        path: '/Login',
        key: '8',
        exact: true,
        component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Login/index'); }); }),
    }
];
exports.routes = routes;
var mainRoutes = [
    {
        path: '/Home',
        title: 'Home',
        key: '1',
        exact: true,
        icon: react_1.default.createElement(icons_1.SmileOutlined, null),
        breadJump: false,
        component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Home/index'); }); }),
    },
    {
        path: '/ShowTable',
        title: 'ShowTable',
        key: '2',
        icon: react_1.default.createElement(icons_1.PieChartOutlined, null),
        breadJump: false,
        component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/ShowTable/index'); }); }),
    },
    {
        path: '/Charts',
        key: '3',
        component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Charts/index'); }); }),
        title: 'Charts',
        breadJump: false,
        icon: react_1.default.createElement(icons_1.DesktopOutlined, null),
    },
    {
        path: '/Tools',
        title: 'Tools',
        icon: react_1.default.createElement(icons_1.UserOutlined, null),
        key: '4',
        breadJump: false,
        routes: [
            {
                path: "/Tools/Tool-1",
                title: "Tool-1",
                key: '5',
                breadJump: true,
                component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Tools/index'); }); }),
            },
            {
                path: "/Tools/Tool-2",
                title: "Tool-2",
                key: '6',
                breadJump: true,
                component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Tools/index'); }); }),
            },
            {
                path: "/Tools/Tool-3",
                title: "Tool-3",
                key: '7',
                breadJump: true,
                component: (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require('../views/Tools/index'); }); }),
            }
        ]
    }
];
exports.mainRoutes = mainRoutes;
//# sourceMappingURL=index.js.map