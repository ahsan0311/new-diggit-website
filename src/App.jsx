import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Cursor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <CustomCursor />
    <Navbar/>
    <AppRoutes />
    <Footer/>
    <Outlet />
    </>
  );
};

export default App;
