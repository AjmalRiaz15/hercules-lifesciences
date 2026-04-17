import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/Products/ProductDetail';
import Seeds from '../pages/Seeds/Seeds';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import OurMission from '../pages/OurMission/OurMission';
import useScrollTop from '../hooks/useScrollTop';

function ScrollHandler() {
  useScrollTop();
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productSlug" element={<ProductDetail />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
