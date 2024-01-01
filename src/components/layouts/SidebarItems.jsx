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
  },
  {
    key: "addUser",
    icon: <UserOutlined />,
    label: "Add User",
  },
  {
    key: "addSoftware",
    icon: <VideoCameraOutlined />,
    label: "Add Software",
  },
  {
    key: "addEquipment",
    icon: <UploadOutlined />,
    label: "Add Equipment",
  },
  {
    key: "account",
    icon: <UserOutlined />,
    label: "Account",
  },
];

export default sidebarItems;
