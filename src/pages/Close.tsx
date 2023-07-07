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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    const inputs = [
      'fullname',
      'email',
      'cpf',
      'phone',
      'cep',
      'address',
      'paymentMethod'];

    const allInputs = inputs.every((input) => formValues[input]
    && formValues[input] !== '');

    if (allInputs) {
      localStorage.setItem('carrinho', JSON.stringify([]));
      setHasError(false);
      navigate('/');
    } else {
      setHasError(true);
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
              <input type="text" name="fullname" data-testid="checkout-fullname" />
            </label>
            <label>
              E-mail
              <input type="email" name="email" data-testid="checkout-email" />
            </label>
            <label>
              CPF
              <input type="text" name="cpf" data-testid="checkout-cpf" />
            </label>
            <label>
              Telefone
              <input type="tel" name="phone" data-testid="checkout-phone" />
            </label>
            <label>
              CEP
              <input type="text" name="cep" data-testid="checkout-cep" />
            </label>
            <label>
              Endereço
              <input type="text" name="address" data-testid="checkout-address" />
            </label>

            <h3>Método de pagamento</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Boleto"
                data-testid="ticket-payment"
              />
              Boleto
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Visa"
                data-testid="visa-payment"
              />
              Visa
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="MasterCard"
                data-testid="master-payment"
              />
              MasterCard
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Elo"
                data-testid="elo-payment"
              />
              Elo
            </label>

            <button type="submit" data-testid="checkout-btn">Finalizar compra</button>
          </form>

        </>
      )}
    </>
  );
}

export default Close;
