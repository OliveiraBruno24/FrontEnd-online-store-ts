import React, { useState } from 'react';
import { ProductDetailsWithQuantity } from '../../types/type';

type CartItemProps = {
  product: ProductDetailsWithQuantity,
  removeItem: (productId: string) => void
};

export function CartItem({ product, removeItem }:CartItemProps) {
  const [quantity, setQuantity] = useState(product.quantity);

  const addItem = (selectedProductId: string) => {
    setQuantity((prev) => prev + 1);
    const fileLocal:ProductDetailsWithQuantity[] = JSON
      .parse(localStorage.getItem('carrinho') ?? '[]');
    const productIndex = fileLocal
      .findIndex((element) => (element.id === selectedProductId));
    fileLocal[productIndex].quantity += 1;
    localStorage.setItem('carrinho', JSON.stringify(fileLocal));
  };

  const subtractItem = (selectedProductId: string) => {
    setQuantity((prev) => prev - 1);
    const fileLocal:ProductDetailsWithQuantity[] = JSON
      .parse(localStorage.getItem('carrinho') ?? '[]');
    const productIndex = fileLocal
      .findIndex((element) => (element.id === selectedProductId));
    fileLocal[productIndex].quantity -= 1;
    localStorage.setItem('carrinho', JSON.stringify(fileLocal));
  };

  return (
    <li>
      <button
        onClick={ () => removeItem(product.id) }
        data-testid="remove-product"
      >
        x
      </button>
      <img src={ product.thumbnail } alt="" />
      <h2
        data-testid="shopping-cart-product-name"
      >
        {product.title}
      </h2>
      <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      <button
        data-testid="product-increase-quantity"
        onClick={ () => addItem(product.id) }
      >
        +
      </button>
      <button
        data-testid="product-decrease-quantity"
        onClick={ () => subtractItem(product.id) }
        disabled={ quantity === 1 }
      >
        -
      </button>
      <h2>{product.price}</h2>
    </li>
  );
}
