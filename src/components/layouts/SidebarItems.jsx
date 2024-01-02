import React from "react";
import {
  UserOutlined,
  DesktopOutlined,
  HomeOutlined,
  UserAddOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const sidebarItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Home",
    path: "/home",
  },
  {
    key: "addUser",
    icon: <UserAddOutlined />,
    label: "Add User",
    path: "/addUser",
  },
  {
    key: "addSoftware",
    icon: <AppstoreAddOutlined />,
    label: "Add Software",
    path: "/addSoftware",
  },
  {
    key: "addEquipment",
    icon: <DesktopOutlined />,
    label: "Add Equipment",
    path: "/addEquipment",
  },
  {
    key: "account",
    icon: <UserOutlined />,
    label: "Account",
    path: "/account",
  },
];

export default sidebarItems;
