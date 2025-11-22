import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from localStorage when page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-[#0a1416] text-white py-10 px-6">
      <h1 className="text-3xl font-bold text-[#10b981] mb-8 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-center">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-[#102022] p-4 rounded-lg border border-[#10b981]/30"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-400">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-400 hover:text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 border-t border-[#10b981]/30 pt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-extrabold text-[#10b981]">
              ${total}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
