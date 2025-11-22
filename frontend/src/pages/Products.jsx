import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-50 to-sky-100 min-h-screen pb-20">
      {/* 🎠 Hero Section */}
      <div className="bg-[#0a1416] text-center py-16 shadow-inner border-b border-[#10b981]/20  ">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-[#10b981]">
          Kids Fun Games & Toys 🧩
        </h1>
        <p className="text-yellow-100 mt-4 text-lg">
          Discover colorful toys, games & puzzles for kids of all ages!
        </p>
      </div>

      {/* 🧸 Products Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {products.length === 0 ? (
          <p className="text-center text-pink-600 animate-pulse">
            Loading fun games...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-yellow-400 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-2xl bg-gradient-to-br from-pink-100 to-sky-100">
                  <img
                    src={p.image || 'https://via.placeholder.com/300x200?text=Kids+Game'}
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-sky-700 group-hover:text-pink-600 transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {p.description || "Fun and exciting kids’ game that sparks creativity!"}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-extrabold text-pink-500">
                      ${p.price}
                    </span>
                    <span className="bg-yellow-300 text-sky-800 text-xs px-3 py-1 rounded-full font-semibold group-hover:bg-yellow-400 group-hover:text-pink-700 transition">
                      Buy Now 🎮
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
