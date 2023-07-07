import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { ProductDetails, ProductDetailsWithQuantity } from '../types/type';

function ProductDetail() {
  const { productId = '' } = useParams();
  const [product, setProduct] = useState<ProductDetails>();
  const [isLoading, setIsLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState<ProductDetailsWithQuantity[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('carrinho');
    if (storedCart) {
      setShoppingCart(JSON.parse(storedCart));
    }
  }, []);

  function addToCart(newProduct:ProductDetails) {
    const arrayCart = [...shoppingCart];
    const productIndex = arrayCart.findIndex((trem) => (trem.id === newProduct.id));

    if (productIndex === -1) {
      arrayCart.push({ ...newProduct, quantity: 1 });
    } else {
      arrayCart[productIndex].quantity += 1;
    }
    setShoppingCart(arrayCart);
    localStorage.setItem('carrinho', JSON.stringify(arrayCart));
  }

  useEffect(() => {
    const getProduct = async () => {
      const result = await getProductById(productId);
      setProduct(result);
      setIsLoading(false);
    };

    getProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <section>
      <img
        data-testid="product-detail-image"
        src={ product?.thumbnail }
        alt={ product?.title }
      />
      <h1 data-testid="product-detail-name">{product?.title}</h1>
      <p data-testid="product-detail-price">{product?.price}</p>
      {product && (
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho

        </button>
      )}
    </section>
  );
}

export default ProductDetail;
