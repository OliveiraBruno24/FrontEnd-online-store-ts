import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductByName, getProductsFromCategoryAndQuery } from '../services/api';
import { ProductDetails } from '../types/type';
import ProductCard from '../components/ProductCard';

function Search() {
  const [productList, setProductList] = useState<ProductDetails[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryInput = event.target.id;
    setSelectedCategory(categoryInput);

    getProductsFromCategoryAndQuery(categoryInput, '')
      .then((data) => {
        setProductList(data.results);
      })
      .catch((error) => {
        console.error('Erro ao adquirir produtos', error);
      });
  };

  const searchProducts = async () => {
    setIsLoading(true);
    const results = await getProductByName(searchInput);
    setProductList(results);
    setIsLoading(false);
  };

  const onChangeSearchField = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value);
  };

  if (isLoading) {
    return (<div>Carregando...</div>);
  }

  return (
    <>
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
                  product={ product }
                  checked={ selectedCategory === product.id }
                  onChange={ handleCategoryChange }
                />
              </li>
            ))}
          </ul>
        )}

      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    </>
  );
}

export default Search;
