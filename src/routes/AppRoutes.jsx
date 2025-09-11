import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import ServiceIndex from "../pages/service";
import About from "../pages/about/about";
import MobileApp from "../pages/development/mobileApp";
import WebApp from "../pages/development/webApp";
import CustomizeErp from "../pages/development/customizeERP";
import WebDevelopment from "../pages/development/webDevelopment";
import SeoMarketing from "../pages/marketing/seo";
import SocialMedia from "../pages/marketing/socialMedia";
import EmailMarketing from "../pages/marketing/emailMarketing";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Development  */}
      <Route path="/mobile-app" element={<MobileApp />} />
      <Route path="/web-app" element={<WebApp />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/customize-erp" element={<CustomizeErp/>} />


      {/* social media  */}

      <Route path="/seo" element={<SeoMarketing />} />
      <Route path="/social-media" element={<SocialMedia />} />
      <Route path="/email-marketing" element={<EmailMarketing/>} />

      


      <Route path="/service" element={<ServiceIndex />} />
      

    </Routes>
  );
};

export default AppRoutes;
