import React from 'react';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../types/type';

type ProductCardProps = {
  product: ProductDetails
  addItemToCard: () => void;
};
function ProductCard({ product, addItemToCard }: ProductCardProps) {
  return (
    <>
      <Link
        data-testid="product-detail-link"
        to={ `/product/${product.id}` }
      >
        <img src={ product.thumbnail } alt="" />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
      </Link>
      <button
        data-testid="product-add-to-cart"
        onClick={ () => addItemToCard() }
      >
        Adicionar ao Carrinho
      </button>
    </>
  );
}

export default ProductCard;
