import React from "react";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#FFFFFF",
        padding: "0 16px",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          background: "#FFFFFF",
        }}
      />

      <Button
        type="text"
        icon={<UserOutlined />}
        onClick={() => {
          console.log("Account button clicked");
        }}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
          background: "#FFFFFF",
        }}
      />
    </div>
  );
};

export default Header;
