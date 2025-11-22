import { useEffect, useState } from "react";
import axios from "axios"; //to call your backend API.
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0d1b1e] text-white text-center py-20 shadow-inner">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
           Play. Laugh. Grow
        </h1>

        <p className="text-lg text-[#b0c4c4] max-w-2xl mx-auto leading-relaxed">
          Discover the perfect toys that spark joy, creativity, and  e ndless fun for every child
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#10b981]/30 transition-transform duration-300 hover:scale-105"
        >
          Browse Products
        </Link>
      </section>

      {/* PRODUCT GRID */}
      <div className="bg-[#f9fafb] min-h-screen py-14">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-[#0d1b1e] tracking-tight">
          Kids’ Favorites
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 animate-pulse">
            Loading products...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={
                      p.image ||
                      "https://via.placeholder.com/300x200?text=Product+Image"
                    }
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-[#0d1b1e] group-hover:text-[#10b981] transition-colors duration-300">
                    {p.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 min-h-[40px]">
                    {p.description ||
                      "High-quality product with excellent performance."}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-2xl font-bold text-[#10b981]">
                      ${p.price}
                    </span>
                    <span className="bg-[#d1fae5] text-[#065f46] text-xs px-3 py-1 rounded-full font-semibold group-hover:bg-[#10b981] group-hover:text-white transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;