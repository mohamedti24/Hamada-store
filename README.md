# 🛍️ Store App (JSON-Powered E-commerce Prototype)

## Overview

This is a modern e-commerce prototype application built using **React** and **Tailwind CSS** for the frontend, powered by a simple local **JSON server** for product data simulation.

This project focuses on providing a clean, responsive, and fast user interface for browsing products, viewing details, and simulating a shopping experience.

## ✨ Features

* **Responsive Design:** Optimized for desktop, tablet, and mobile viewing.
* **Dynamic Product Listing:** Fetches product data from a simple API endpoint (`http://localhost:5000/api/products`).
* **React Router:** Clean routing for product details and other pages.
* **Modern UI:** Styled using Tailwind CSS for rapid and attractive styling.

## 🚀 Getting Started

### Prerequisites

You need the following installed on your machine:

* [Node.js](https://nodejs.org/) (which includes npm)

### Installation and Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/mohamedti24/Hamada-store]
cd store_app_json
```

2. **Install dependencies** (in the `frontend` and the root, if applicable):
```bash
# Assuming your React code is in a 'frontend' directory
cd frontend
npm install
```

3. **Start the Backend (Simulated API):**
*(You will need a mock API setup, likely using `json-server` or similar, running on port 5000)*
```bash
# Example command to start the JSON server (if applicable)
npm run api
```

4. **Start the Frontend Development Server:**
```bash
npm run dev
```

The application should now be running in your browser at `http://localhost:5173` (or the port specified by your Vite/React setup).
