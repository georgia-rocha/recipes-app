import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa a page Login', () => {
  it('testa se os inputs são renderizados na tela e se o input inicia desabilitado, e testa se é possível digitar nos inputs e a reação do button', async () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnlogin = screen.getByTestId('login-submit-btn');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnlogin).toBeInTheDocument();
    expect(btnlogin).toBeDisabled();

    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputPassword, '1234567');

    expect(btnlogin).toBeEnabled();
    userEvent.click(btnlogin);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals');
    });
  });
});
