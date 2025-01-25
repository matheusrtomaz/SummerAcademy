import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Recupera o carrinho do localStorage ao carregar a página
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Salva o carrinho no localStorage sempre que ele for atualizado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {  
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      // Filtra os itens para remover apenas o item com o ID correspondente
      const updatedCart = prevCart.filter((item) => item.id !== id);

      // Atualiza o localStorage com o novo estado
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Retorna o novo estado
      return updatedCart;
    });
  };

  const getItemCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
}
