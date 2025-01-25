import React, { useContext } from "react";
import { CardStyles } from "./styles";
import { CartContext } from "../../context/cartContext";

export function Card({ id, title, description, image, value }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!id) {
      // Gere um ID único se o ID estiver indefinido
      const generatedId = Math.random().toString(36).substr(2, 9);
      addToCart({ id: generatedId, title, value, image });
    } else {
      addToCart({ id, title, value, image });
    }
  };
  

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <CardStyles>
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{truncateText(description, 50)}</p>
          <p>R$ {value.toFixed(2)}</p>
          <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>

      </div>
    </CardStyles>
  );
}
