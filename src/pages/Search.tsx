import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  getAllProductsFromCategory,
  getProductByName,
} from '../services/api';

import { ProductDetails } from '../types/type';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';

function Search() {
  const [productList, setProductList] = useState<ProductDetails[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<ProductDetails[]>([]);

  function addToCart(product:ProductDetails) {
    const arrayCart = shoppingCart;
    arrayCart.push(product);
    setShoppingCart(arrayCart);
    localStorage.setItem('carriho', JSON.stringify(arrayCart));
  }

  const searchProducts = async () => {
    setIsLoading(true);
    const results = await getProductByName(searchInput);
    setProductList(results);
    setIsLoading(false);
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
    <>
      <Categories handleCategoryClick={ getProductsFromCategory } />
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
    </>
  );
}

export default Search;
