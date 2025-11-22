import express from "express";
import { readJSON, writeJSON } from "../../utils/fileHelper.js";

const router = express.Router();

// Use only file names — helper builds path correctly
const CART_FILE = "cart.json";
const PRODUCTS_FILE = "products.json";

// GET cart
router.get("/", (req, res) => {
  const cart = readJSON(CART_FILE);
  res.json(cart);
});

// ADD to cart
router.post("/add", (req, res) => {
  const { productId, quantity } = req.body;

  const cart = readJSON(CART_FILE);
  const products = readJSON(PRODUCTS_FILE);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  }

  writeJSON(CART_FILE, cart);

  res.json({ success: true, cart });
});

// CLEAR cart
router.post("/clear", (req, res) => {
  writeJSON(CART_FILE, []);
  res.json({ success: true });
});

export default router;
