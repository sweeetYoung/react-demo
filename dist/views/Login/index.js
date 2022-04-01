"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = require("react");
require("./style.scss");
var react_router_dom_1 = require("react-router-dom");
function Login() {
    var history = (0, react_router_dom_1.useHistory)();
    function onFinish(values) {
        console.log('Success:', values);
        window.localStorage.setItem('userInfo', JSON.stringify(values));
        history.push('/Home');
    }
    function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    }
    return (react_1.default.createElement("div", { className: 'form' },
        react_1.default.createElement(antd_1.Form, { className: "login", labelCol: { span: 8 }, wrapperCol: { span: 8 }, initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
            react_1.default.createElement(antd_1.Form.Item, { label: "\u7528\u6237\u540D", name: "username", className: 'loginFormItem', rules: [{ required: true, message: '请输入用户名!' }] },
                react_1.default.createElement(antd_1.Input, null)),
            react_1.default.createElement(antd_1.Form.Item, { label: "\u5BC6\u7801", name: "password", className: 'loginFormItem', rules: [{ required: true, message: '请输入密码!' }] },
                react_1.default.createElement(antd_1.Input.Password, null)),
            react_1.default.createElement(antd_1.Form.Item, { className: 'loginFormItem', name: "remember", valuePropName: "checked", wrapperCol: { offset: 8, span: 16 } },
                react_1.default.createElement(antd_1.Checkbox, null, "\u8BB0\u4F4F\u5BC6\u7801")),
            react_1.default.createElement(antd_1.Form.Item, { className: 'loginFormItem', wrapperCol: { offset: 8, span: 16 } },
                react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "\u63D0\u4EA4")))));
}
exports.default = Login;
//# sourceMappingURL=index.js.map