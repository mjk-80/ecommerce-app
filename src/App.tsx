import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // درست بودن مسیر رو چک کن
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes /> {/* این هم مسیرهای سایت رو مدیریت می‌کنه */}
      <Footer />
    </Router>
  );
}

export default App;
