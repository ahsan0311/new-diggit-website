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
import Devops_Automation from "../pages/branding/devops_Automation";
import YearlyCloud from "../pages/branding/yearlyCloud";
import VpsServer from "../pages/branding/providingVPS";
import CloudSolution from "../pages/branding/cloudSolution";
import Hosting from "../pages/branding/hosting";
import Product from "../pages/product/product";


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

      {/* branding  */}
      <Route path="/providing-vps-server" element={<VpsServer/>} />
      <Route path="/yearly-cloud-plan" element={<YearlyCloud/>} />
      <Route path="/cloud-solutions" element={<CloudSolution/>} />
      <Route path="/devops-automations" element={<Devops_Automation/>} />
      <Route path="/hosting-plans" element={<Hosting/>} />

      <Route path="/product" element={<Product/>} />




      


      <Route path="/service" element={<ServiceIndex />} />
      

    </Routes>
  );
};

export default AppRoutes;
