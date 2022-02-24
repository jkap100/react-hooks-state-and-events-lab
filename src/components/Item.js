import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  const cartClass = isInCart ? "in-cart" : "";
  const removeAdd = isInCart ? "remove" : "add";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={removeAdd}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
