import React from 'react';
import { ProductDetailsWithQuantity } from '../../types/type';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';

type CartProps = {
  products: ProductDetailsWithQuantity[]
};

function Cart({ products }:CartProps) {
  return (
    <>
      <CartHeader />
      <div>
        <ul>
          {products.map((product) => (
            <li key={ product.id }>
              <img src={ product.thumbnail } alt="" />
              <h2
                data-testid="shopping-cart-product-name"
              >
                {product.title}

              </h2>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <h2>{product.price}</h2>
            </li>
          ))}
        </ul>
      </div>
      <CartFooter />
    </>
  );
}

export default Cart;
