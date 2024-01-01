import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ collapsed }) => {
  return (
    <div style={{ padding: "5px", textAlign: "center" }}>
      <h1>KPPIM</h1>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
        {SidebarItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;