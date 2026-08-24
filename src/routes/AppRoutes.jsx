import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/Products/ProductDetail';
import Crops from '../pages/Crops/Crops';
import Sustainability from '../pages/Sustainability/Sustainability';
import AboutUs from '../pages/AboutUs/AboutUs';
import Career from '../pages/Career/Career';
import ContactUs from '../pages/ContactUs/ContactUs';
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productSlug" element={<ProductDetail />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/seeds" element={<Navigate to="/crops" replace />} />
        <Route path="/career" element={<Career />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-mission" element={<Navigate to="/about-us" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
