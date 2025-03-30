export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "گوشی آیفون 13",
      price: "45,000,000 تومان",
      image: "/iphone.jpg",
    },
    {
      id: 2,
      name: "لپ‌تاپ ایسوس",
      price: "38,500,000 تومان",
      image: "/laptop.jpg",
    },
    {
      id: 3,
      name: "هدفون سونی",
      price: "3,200,000 تومان",
      image: "/headphone.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              افزودن به سبد خرید
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
