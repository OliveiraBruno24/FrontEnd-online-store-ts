import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import { ProductDetails, ProductDetailsWithQuantity } from '../types/type';

function Checkout() {
  const [cartProducts, setCartProducts] = useState<ProductDetailsWithQuantity[]>([]);
  useEffect(() => {
    const fileLocal = JSON.parse(localStorage.getItem('carrinho') ?? '[]');
    setCartProducts(fileLocal);
  }, []);

  return (
    <div>

      {cartProducts.length === 0
        ? (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        )
        : <Cart
            products={ cartProducts }
        />}

    </div>
  );
}

export default Checkout;
