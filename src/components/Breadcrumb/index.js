import { Breadcrumb } from "antd";
import React from "react";
import { mainRoutes } from "../../router";
import {flatten} from "../../utils";
import {Link, useLocation} from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathArr = location.pathname.split('/').filter(item => item)
  const flatRoutes = flatten(mainRoutes, 'routes');
  let breadcrumbs = []
  pathArr.map(item => breadcrumbs.push(flatRoutes.find(itemR => itemR.title === item)))
  console.log(breadcrumbs)
  return (
    <Breadcrumb style={{ margin: '16px' }}>
      {
        breadcrumbs.map(item => {
          return (
            item?.breadJump ?
              <Breadcrumb.Item key={item.key}>
                <Link to={item.path}>{item.title}</Link>
              </Breadcrumb.Item>
              :
              <Breadcrumb.Item key={item?.key}>
                {item?.title}
              </Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  )
}
function HeaderBreadcrumb () {
  return (
    <Breadcrumbs />
  )

}

export default HeaderBreadcrumb;
