"use client";

import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "گوشی آیفون 13", price: 45000000, quantity: 1 },
    { id: 2, name: "لپ‌تاپ ایسوس", price: 38500000, quantity: 1 },
  ]);

  //حذف محصولات از سبد
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //تغییر تعداد محصول
  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  //محاسبه مجموع قیمت
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">سبد خرید</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">سبد خرید شما خالی است.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3 mb-3"
            >
              <span className="text-lg">{item.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded-l"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
              <span>{(item.price * item.quantity).toLocaleString()} تومان</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                ❌
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-semibold">مجموع:</span>
            <span className="text-xl font-bold">
              {totalPrice.toLocaleString()} تومان
            </span>
          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            پرداخت 🛒
          </button>
        </div>
      )}
    </main>
  );
}
