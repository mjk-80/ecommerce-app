import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart"; // اطمینان از وجود این صفحه
import About from "../pages/About"; // اطمینان از وجود این صفحه

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
