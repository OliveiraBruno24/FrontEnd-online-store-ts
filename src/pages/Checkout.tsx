import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import { ProductDetailsWithQuantity } from '../types/type';

function Checkout() {
  const fileLocal = JSON.parse(localStorage.getItem('carrinho') ?? '[]');
  const [cartProducts, setCartProducts] = useState(fileLocal);
  const navigate = useNavigate();

  const removeItem = (selectedProductId: string) => {
    const filteredArray = cartProducts
      .filter((element:ProductDetailsWithQuantity) => element.id !== selectedProductId);
    localStorage.setItem('carrinho', JSON.stringify(filteredArray));
    setCartProducts(filteredArray);
  };

  const finalizarCompra = () => {
    navigate('/close');
  };
  return (
    <div>

      {cartProducts.length === 0
        ? (
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        )
        : <Cart
            removeItem={ removeItem }
            products={ cartProducts }
        />}
      <button
        type="button"
        onClick={ finalizarCompra }
        data-testid="checkout-products"
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Checkout;
