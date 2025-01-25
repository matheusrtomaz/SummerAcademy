import React, { useContext } from "react";
import { CardStyles } from "./styles";
import { CartContext } from "../../context/cartContext";

export function Card({ title, description, image, value, id }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, title, value, image });
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
