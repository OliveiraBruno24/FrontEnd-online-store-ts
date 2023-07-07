import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductDetailsWithQuantity } from '../types/type';

function Close() {
  const [cartProducts, setCartProducts] = useState<ProductDetailsWithQuantity[]>([]);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('carrinho') ?? '[]');
    setCartProducts(storedCart);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    if (Object.values(formValues).some((value) => value === '')) {
      setHasError(true);
    } else {
      localStorage.setItem('carrinho', JSON.stringify([]));
      setHasError(false);
      navigate('/');
    }
  };
  return (
    <>
      <h1>Resumo do Carrinho</h1>
      {hasError && <p data-testid="error-msg">Campos inválidos</p>}
      {cartProducts.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : (
        <>
          <ul>
            {cartProducts.map((product) => (
              <li key={ product.id }>
                <h2>{product.title}</h2>
                <p>
                  Preço:
                  {product.price}
                </p>
                <p>
                  Quantidade:
                  {product.quantity}
                </p>
              </li>
            ))}
          </ul>
          <h2>Dados do comprador</h2>
          <form onSubmit={ handleSubmit }>
            <label>
              Nome completo
              <input type="text" data-testid="checkout-fullname" required />
            </label>
            <label>
              E-mail
              <input type="email" data-testid="checkout-email" required />
            </label>
            <label>
              CPF
              <input type="text" data-testid="checkout-cpf" required />
            </label>
            <label>
              Telefone
              <input type="tel" data-testid="checkout-phone" required />
            </label>
            <label>
              CEP
              <input type="text" data-testid="checkout-cep" required />
            </label>
            <label>
              Endereço
              <input type="text" data-testid="checkout-address" required />
            </label>

            <h3>Método de pagamento</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cartão de crédito"
                required
              />
              Cartão de crédito
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cartão de débito"
                required
              />
              Cartão de débito
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="Dinheiro" required />
              Dinheiro
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="Cheque" required />
              Cheque
            </label>

            <button type="submit" data-testid="checkout-btn">Finalizar compra</button>
          </form>

        </>
      )}
    </>
  );
}

export default Close;
