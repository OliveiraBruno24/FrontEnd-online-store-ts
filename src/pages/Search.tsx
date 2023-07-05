import React from 'react';

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
    </>
  );
}

export default Search;
