import React from 'react';
import { ProductDetails } from '../types/type';

type ProductCardProps = {
  product: ProductDetails
  addItemToCard: () => void;
};
function ProductCard({ product, addItemToCard }: ProductCardProps) {
  return (
    <>
      <img src={ product.thumbnail } alt="" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <button
        onClick={ () => addItemToCard() }
      >
        Adicionar ao Carrinho
      </button>
    </>
  );
}

export default ProductCard;
