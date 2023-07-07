import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const onChangeSearchField = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value);
  };

  return (
    <div>
      <input
        data-testid="query-input"
        type="text"
        name="searchField"
        value={ searchInput }
        placeholder="Insira o nome do Produto"
        onChange={ onChangeSearchField }
      />
      <button
        onClick={ () => navigate(`/${searchInput}`) }
        data-testid="query-button"
      >
        Pesquisar
      </button>
      <Link
        to="/checkout"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    </div>
  );
}

export default Header;
