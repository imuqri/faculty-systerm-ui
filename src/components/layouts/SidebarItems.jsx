import React from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const sidebarItems = [
  {
    key: "home",
    icon: <UserOutlined />,
    label: "Home",
    path: "/home",
  },
  {
    key: "addUser",
    icon: <UserOutlined />,
    label: "Add User",
    path: "/addUser",
  },
  {
    key: "addSoftware",
    icon: <VideoCameraOutlined />,
    label: "Add Software",
    path: "/addSoftware",
  },
  {
    key: "addEquipment",
    icon: <UploadOutlined />,
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
