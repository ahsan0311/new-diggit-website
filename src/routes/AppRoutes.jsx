import { Routes, Route } from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";


const Home = React.lazy(() => import("../pages/home/home"));
const About = React.lazy(() => import("../pages/about/about"));
const MobileApp = React.lazy(() => import("../pages/development/mobileApp"));
const WebApp = React.lazy(() => import("../pages/development/webApp"));
const CustomizeErp = React.lazy(() => import("../pages/development/customizeERP"));
const WebDevelopment = React.lazy(() => import("../pages/development/webDevelopment"));
const SeoMarketing = React.lazy(() => import("../pages/marketing/seo"));
const SocialMedia = React.lazy(() => import("../pages/marketing/socialMedia"));
const EmailMarketing = React.lazy(() => import("../pages/marketing/emailMarketing"));
const Devops_Automation = React.lazy(() => import("../pages/branding/devops_Automation"));
const YearlyCloud = React.lazy(() => import("../pages/branding/yearlyCloud"));
const VpsServer = React.lazy(() => import("../pages/branding/providingVPS"));
const CloudSolution = React.lazy(() => import("../pages/branding/cloudSolution"));
const Hosting = React.lazy(() => import("../pages/branding/hosting"));
const Product = React.lazy(() => import("../pages/product/product"));
const PointOfSale = React.lazy(() => import("../pages/product/pointOfSale"));
const Laundary = React.lazy(() => import("../pages/product/laundary"));
const Hydrila = React.lazy(() => import("../pages/product/hydrila"));
const Contact = React.lazy(() => import("../pages/contact/contact"));
const Marketing = React.lazy(() => import("../pages/packages/marketing"));
const DevOps = React.lazy(() => import("../pages/packages/devOps"));
const Cloud = React.lazy(() => import("../pages/packages/cloud"));





const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



        {/* Development */}
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/web-app" element={<WebApp />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/customize-erp" element={<CustomizeErp />} />

        {/* Marketing */}
        <Route path="/seo" element={<SeoMarketing />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />

        {/* Branding */}
        <Route path="/providing-vps-server" element={<VpsServer />} />
        <Route path="/yearly-cloud-plan" element={<YearlyCloud />} />
        <Route path="/cloud-solutions" element={<CloudSolution />} />
        <Route path="/devops-automations" element={<Devops_Automation />} />
        <Route path="/hosting-plans" element={<Hosting />} />

        {/* Products */}
        <Route path="/product" element={<Product />} />
        <Route path="/Point-Of-Sale" element={<PointOfSale />} />
        <Route path="/Laundary-management" element={<Laundary />} />
        <Route path="/Hydrila" element={<Hydrila />} />


        {/* packages */}

        <Route path="/marketing" element={<Marketing />} />
        <Route path="/devOps" element={<DevOps />} />
        <Route path="/cloud" element={<Cloud />} />

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
