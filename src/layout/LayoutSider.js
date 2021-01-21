import React from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
//路由
import Router from "../router/routes";

const { SubMenu } = Menu;

class LayoutSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 无子级菜单处理
  renderMenu = ({title, path}) => {
    return (
      <Menu.Item key={path}>
        <Link to={path}>{title}</Link>
      </Menu.Item>
    );
  };

  // 子级判断处理(递归)
  renderSubMenu = ({title, path, icon, children}) => {
    return (
      <SubMenu key={path} icon={icon} title={title}>
        {children && children.map((item) => {
          return item.children && item.children.length > 0
            ? this.renderSubMenu(item)
            : this.renderMenu(item);
        })}
      </SubMenu>
    );
  };

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{height: "100%", borderRight: 0}}
        theme="dark"
      >
        {Router && Router.map((firstItem) => {
          return firstItem.children && firstItem.children.length > 0
            ? this.renderSubMenu(firstItem)
            : this.renderMenu(firstItem);
        })}
      </Menu>
    )
  }
}
export default LayoutSide;