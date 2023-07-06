import React from 'react';
import { ProductDetails } from '../../types/type';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';

type CartProps = {
  products: ProductDetails[]
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
