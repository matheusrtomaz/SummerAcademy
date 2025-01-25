import React from "react";
import { MainStyles } from "./styles";
import { Card } from "../card";
import products from "../../../products.json";

export function Main() {
  return (
    <MainStyles>
      <div>
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.descriptions}
            image={item.image}
            value={item.value}
          />
        ))}
      </div>
    </MainStyles>
  );
}
