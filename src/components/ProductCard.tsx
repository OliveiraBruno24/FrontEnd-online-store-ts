import React from 'react';
import { ProductDetails } from '../types/type';

type ProductCardProps = {
  product: ProductDetails
};
function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <img src={ product.thumbnail } alt="" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <button>Adicionar ao Carrinho</button>
    </>
  );
}

export default ProductCard;
