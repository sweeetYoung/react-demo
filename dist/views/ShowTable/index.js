"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = require("react");
function showTable() {
    var columns = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
            width: 150,
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: function () { return react_1.default.createElement("a", null, "action"); },
        },
    ];
    var data = [];
    for (var i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: "Edrward ".concat(i),
            age: 32,
            address: "London Park no. ".concat(i),
        });
    }
    return (react_1.default.createElement(antd_1.Table, { columns: columns, dataSource: data, scroll: { x: 1500, y: 1000 } }));
}
exports.default = showTable;
//# sourceMappingURL=index.js.map