import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { ProductDetails } from '../types/type';

function ProductDetail() {
  const { productId = '' } = useParams();
  const [product, setProduct] = useState<ProductDetails>();
  const [isLoading, setIsLoading] = useState(true);

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

    </section>
  );
}

export default ProductDetail;
