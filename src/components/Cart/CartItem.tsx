import React, { useState } from 'react';
import { ProductDetailsWithQuantity } from '../../types/type';

type CartItemProps = {
  product: ProductDetailsWithQuantity
};

export function CartItem({ product }:CartItemProps) {
  const [quantity, setQuantity] = useState(product.quantity);
  return (
    <li>
      <img src={ product.thumbnail } alt="" />
      <h2
        data-testid="shopping-cart-product-name"
      >
        {product.title}
      </h2>
      <p>{quantity}</p>
      <button onClick={ () => setQuantity((prev) => prev + 1) }>+</button>
      <button onClick={ () => setQuantity((prev) => prev - 1) }>-</button>
      <h2>{product.price}</h2>
    </li>
  );
}
