import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import { ProductDetailsWithQuantity } from '../types/type';

function Checkout() {
  const [cartProducts, setCartProducts] = useState<ProductDetailsWithQuantity[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fileLocal = JSON.parse(localStorage.getItem('carrinho') ?? '[]');
    setCartProducts(fileLocal);
  }, []);

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
        : <Cart products={ cartProducts } />}
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
