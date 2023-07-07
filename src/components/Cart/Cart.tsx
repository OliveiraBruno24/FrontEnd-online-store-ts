import React, { useEffect, useState } from 'react';
import { ProductDetailsWithQuantity } from '../../types/type';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import { CartItem } from './CartItem';

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
            <CartItem product={ product } key={ product.id } />
          ))}
        </ul>
      </div>

      <CartFooter />
    </>
  );
}

export default Cart;
