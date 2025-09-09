import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import ServiceIndex from "../pages/service";
import ServerIndex from "../pages/server";
import About from "../pages/about/about";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />


      <Route path="/service" element={<ServiceIndex />} />
      <Route path="/service" element={<ServerIndex />} />

    </Routes>
  );
};

export default AppRoutes;
