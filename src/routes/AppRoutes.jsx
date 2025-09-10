import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import ServiceIndex from "../pages/service";
import About from "../pages/about/about";
import MobileApp from "../pages/development/mobileApp";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mobile-app" element={<MobileApp />} />

      


      <Route path="/service" element={<ServiceIndex />} />
      

    </Routes>
  );
};

export default AppRoutes;
