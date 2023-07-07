import React from 'react';
import { ProductDetailsWithQuantity } from '../../types/type';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import { CartItem } from './CartItem';

type CartProps = {
  products: ProductDetailsWithQuantity[];
  removeItem: (productId:string) => void;

};

function Cart({ products, removeItem }:CartProps) {
  return (
    <>
      <CartHeader />
      <div>
        <ul>
          {products.map((product) => (
            <CartItem
              product={ product }
              key={ product.id }
              removeItem={ () => removeItem(product.id) }
            />
          ))}
        </ul>
      </div>
      <CartFooter />
    </>
  );
}

export default Cart;
