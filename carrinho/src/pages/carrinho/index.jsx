import React, { useContext } from "react";
import { Header } from "../../components/header";
import { CartContext } from "../../context/cartContext";

export function Carrinho() {
  const { cart, removeFromCart } = useContext(CartContext);

  const calcularTotal = () => {
    return cart.reduce((total, item) => {
      // Verifica se o value é um número válido
      const itemValue = parseFloat(item.value);
      if (!isNaN(itemValue)) {
        return total + itemValue;
      }
      return total;
    }, 0);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Meu Carrinho</h1>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            <p>Você tem {cart.length} {cart.length === 1 ? "item" : "itens"} no carrinho:</p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {cart.map((item) => (
                <li
                  key={item.id || Math.random()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px",
                  }}
                >
                  <img
                    src={item.image || "https://via.placeholder.com/50"}
                    alt={item.title || "Produto"}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h3>{item.title || "Produto sem título"}</h3>
                    <p>R$ {item.value ? item.value.toFixed(2) : "0,00"}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: "#ff0000",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "20px", fontSize: "18px" }}>
              <strong>Total: R$ {calcularTotal().toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
