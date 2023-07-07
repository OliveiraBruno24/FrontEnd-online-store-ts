import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  getAllProductsFromCategory,
  getProductByName,
} from '../services/api';

import { ProductDetails, ProductDetailsWithQuantity } from '../types/type';
import ProductCard from '../components/ProductCard';

function Search() {
  const [productList, setProductList] = useState<ProductDetails[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<ProductDetailsWithQuantity[]>([]);

  const { category, productName } = useParams();
  useEffect(() => {
    if (category) {
      getProductsFromCategory(category);
    } else if (productName) {
      searchProducts(productName);
    }
  }, [category, productName]);

  useEffect(() => {
    const storedCart = localStorage.getItem('carrinho');
    if (storedCart) {
      setShoppingCart(JSON.parse(storedCart));
    }
  }, []);

  function addToCart(newProduct:ProductDetails) {
    const arrayCart = shoppingCart;
    const productIndex = arrayCart.findIndex((product) => (product.id === newProduct.id));
    if (productIndex === -1) {
      arrayCart.push({ ...newProduct, quantity: 1 });
    } else {
      arrayCart[productIndex].quantity += 1;
    }
    setShoppingCart(arrayCart);
    localStorage.setItem('carrinho', JSON.stringify(arrayCart));
  }

  const searchProducts = async (product: string) => {
    setIsLoading(true);
    const results = await getProductByName(product);
    setProductList(results);
    setIsLoading(false);
  };

  const getProductsFromCategory = async (categoryId: string) => {
    setIsLoading(true);
    const results = await getAllProductsFromCategory(categoryId);
    setProductList(results);
    setIsLoading(false);
  };

  if (isLoading) {
    return (<div>Carregando...</div>);
  }

  return (
    <main>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>

      {productList.length === 0
        ? (
          <h2>
            Nenhum produto foi encontrado
          </h2>
        )
        : (
          <ul>
            {productList.map((product) => (
              <li data-testid="product" key={ product.id }>
                <ProductCard
                  addItemToCard={ () => addToCart(product) }
                  product={ product }
                />
              </li>
            ))}
          </ul>
        )}
    </main>
  );
}

export default Search;
