import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // فایل CSS رو وارد می‌کنیم

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              خانه
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              سبد خرید
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
