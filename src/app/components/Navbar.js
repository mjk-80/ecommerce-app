"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          فروشگاه من
        </Link>

        {/* دکمه منو موبایل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        {/* لینک */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-6`}>
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            خانه
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            محصولات
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            سبد خرید
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600">
            ورود
          </Link>
        </div>
      </div>
    </nav>
  );
}
