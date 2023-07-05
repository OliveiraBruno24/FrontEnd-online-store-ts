import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <>
      <input type="text" name="searchField" placeholder="Insira o nome do Produto" />
      <button>Pesquisar</button>
      <h2
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>

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
