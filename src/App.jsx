import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Cursor";

const App = () => {
  return (
    <>
    <CustomCursor />
    <Navbar/>
    <AppRoutes />
    <Outlet />
    </>
  );
};

export default App;
