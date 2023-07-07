import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  getAllProductsFromCategory,
  getProductByName,
} from '../services/api';

import { ProductDetails, ProductDetailsWithQuantity } from '../types/type';
import ProductCard from '../components/ProductCard';

function Search() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState<ProductDetails[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<ProductDetailsWithQuantity[]>([]);

  const { category, product } = useParams();
  useEffect(() => {
    if (category) {
      getProductsFromCategory(category);
    } else if (product) {
      setSearchInput(product);
      searchProducts(product);
    }
  }, [category, product]);

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

  const searchProducts = async (productName: string) => {
    setIsLoading(true);
    const results = await getProductByName(productName);
    setProductList(results);
    setIsLoading(false);
    // navigate(`/${productName}`);
  };

  const onChangeSearchField = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value);
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
      <input
        data-testid="query-input"
        type="text"
        name="searchField"
        value={ searchInput }
        placeholder="Insira o nome do Produto"
        onChange={ onChangeSearchField }
      />
      <button
        onClick={ () => searchProducts() }
        data-testid="query-button"
      >
        Pesquisar
      </button>

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

      <Link
        to="/checkout"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    </main>
  );
}

export default Search;
