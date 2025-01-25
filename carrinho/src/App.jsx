import { CartProvider } from "./context/cartContext";
import "./index.css";
import { AppRoutes } from "./routes";
import React from "react";

function App() {
  return (
    <>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </>
  );
}

export default App;
