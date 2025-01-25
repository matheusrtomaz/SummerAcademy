import React from "react";
import { Header } from "../../components/header";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export function Carrinho() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <Header />
      <div>
        <h1>Meu Carrinho</h1>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px" }}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>R$ {item.value.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
