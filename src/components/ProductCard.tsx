import React from 'react';
import { ProductDetails } from '../types/type';

type ProductCardProps = {
  product: ProductDetails;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ProductCard({ product, checked, onChange }: ProductCardProps) {
  return (
    <>
      <img src={ product.thumbnail } alt="" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <input type="radio" checked={ checked } onChange={ onChange } />
      <button>Adicionar ao Carrinho</button>
    </>
  );
}

export default ProductCard;
