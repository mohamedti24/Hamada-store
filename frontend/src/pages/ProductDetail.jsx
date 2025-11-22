import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch product
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  // Add to Cart
  const handleAddToCart = () => {
    // -------------------------
    // 1) Save to backend
    // -------------------------
    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: Number(product.id), // FIXED
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Backend response:", data))
      .catch((err) => console.error("Cart backend error:", err));

    // -------------------------
    // 2) Save to local storage
    // -------------------------
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // -------------------------
    // 3) Toast + redirect
    // -------------------------
    const toast = document.createElement("div");
    toast.textContent = `${product.name} added to cart!`;
    toast.className =
      "fixed top-6 right-6 bg-[#10b981] text-white px-5 py-3 rounded-lg shadow-lg z-[9999] transition-all duration-500";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
        navigate("/cart");
      }, 500);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d1b1e] text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0d1b1e] text-white flex items-center justify-center">
        <p className="text-[#a3b3b3]">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1b1e] min-h-screen pb-20 text-white">
      <div className="bg-[#0a1416] text-center py-16 shadow-inner border-b border-[#10b981]/20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#10b981]">
          {product.name}
        </h1>
        <p className="mt-3 text-lg text-[#a3b3b3]">
          Premium Quality · Fast Shipping · Satisfaction Guaranteed
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-[#10b981]/20 bg-[#0f1618] shadow-lg">
            <img
              src={
                product.image ||
                "https://via.placeholder.com/500x400?text=Product+Image"
              }
              alt={product.name}
              className="w-full max-w-md object-contain transition hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="bg-[#121c1d] rounded-2xl shadow-lg p-8 border border-[#10b981]/15">
          <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
          <p className="text-[#b0c4c4] mb-6 leading-relaxed">
            {product.description ||
              "This high-quality product offers excellent performance."}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-[#10b981]">
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 rounded-full font-semibold bg-[#10b981] hover:bg-[#059669] transition hover:scale-105"
            >
              🛒 Add to Cart
            </button>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 text-[#34d399] hover:text-[#10b981]"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
