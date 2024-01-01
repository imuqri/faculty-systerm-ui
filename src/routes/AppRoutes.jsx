import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import AddSoftware from "../pages/AddSoftware";
import AddEquipment from "../pages/AddEquipment";
import Account from "../pages/Account";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/addSoftware" element={<AddSoftware />} />
      <Route path="/addEquipment" element={<AddEquipment />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default AppRoutes;
