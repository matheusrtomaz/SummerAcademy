import React, { createContext, useState, useEffect } from "react";

// Criando o contexto
export const CartContext = createContext();

// Provedor do contexto
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
    // Garantir que o item tenha um id único
    if (!item.id) {
      console.error("Item sem ID:", item);
      return; // Não adiciona itens sem ID
    }
  
    console.log("Item adicionado ao carrinho:", item);
  
    setCart((prevCart) => {
      // Evitar duplicatas, se necessário (opcional)
      const isItemInCart = prevCart.some((cartItem) => cartItem.id === item.id);
      if (isItemInCart) {
        console.warn("Item já está no carrinho:", item);
        return prevCart;
      }
      
  
      const updatedCart = [...prevCart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      console.log("Carrinho antes da remoção:", prevCart);
      console.log("ID a ser removido:", id);

      // Filtra os itens para remover apenas o item com o ID correspondente
      const updatedCart = prevCart.filter((item) => item.id !== id);
      console.log("Carrinho após a remoção:", updatedCart);

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
