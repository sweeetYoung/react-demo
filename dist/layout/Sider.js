"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./sider.scss");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var router_1 = require("../router");
var utils_1 = require("../utils");
// import {useLocation} from "react-router";
// import sideMenus from '../utils/sideMenu';
var Sider = antd_1.Layout.Sider;
var SubMenu = antd_1.Menu.SubMenu;
function SideMenu() {
    var location = (0, react_router_dom_1.useLocation)();
    var pagePath = location.pathname.split('/').pop();
    console.log(location, pagePath);
    var flatRoutes = (0, utils_1.flatten)(router_1.mainRoutes, 'routes');
    console.log(flatRoutes);
    var _a = react_1.default.useState(function () { return pagePath || 'home'; }), menuTitle = _a[0], setMenuTitle = _a[1];
    var _b = react_1.default.useState(function () { return ''; }), selectKey = _b[0], setSelectKey = _b[1];
    react_1.default.useEffect(function () {
        // window.localStorage.setItem('menuTitle', menuTitle)
        handleSelectedKey();
    });
    function handleMenuChange(title) {
        setMenuTitle(title);
        // handleSelectedKey(mainRoutes.find(item => item.title.toLowerCase() === pageIndexParams.toLowerCase()).key)
    }
    function handleSelectedKey() {
        console.log(menuTitle);
        // @ts-ignore
        var wq = flatRoutes.find(function (item) { return item.title.toLowerCase() === menuTitle.toLowerCase(); });
        // console.log(wq, wq.key)
        // @ts-ignore
        setSelectKey(wq.key);
        console.log(selectKey);
    }
    return (react_1.default.createElement(antd_1.Menu, { selectedKeys: [selectKey], className: "menu", theme: "dark", mode: "inline" }, router_1.mainRoutes.map(function (item) {
        return item.routes && item.routes.length > 0 ?
            react_1.default.createElement(SubMenu, { key: item.key, icon: item.icon, title: item.title }, item.routes.map(function (itemC) { return (react_1.default.createElement(antd_1.Menu.Item, { key: itemC.key, onClick: function () { return handleMenuChange(itemC.title); } },
                react_1.default.createElement(react_router_dom_1.Link, { to: itemC.path }, itemC.title))); }))
            :
                react_1.default.createElement(antd_1.Menu.Item, { key: item.key, icon: item.icon, onClick: function () { return handleMenuChange(item.title); } },
                    react_1.default.createElement(react_router_dom_1.Link, { to: item.path }, item.title));
    })));
}
function LayoutSide() {
    return (react_1.default.createElement(Sider, null,
        react_1.default.createElement("div", { className: "logo" }, "Model Insights"),
        react_1.default.createElement(SideMenu, null)));
}
exports.default = LayoutSide;
//# sourceMappingURL=Sider.js.map