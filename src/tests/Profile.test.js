import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import { renderWithRouter } from './helpers/RenderWithRouter';

describe('Testa a pege de Profile', () => {
  it('Testa se os componentes são renderizados na tela', () => {
    window.localStorage.setItem('user', JSON.stringify({ email: 'teste@teste.com' }));
    renderWithRouter(<Profile />);

    const header = screen.getByTestId('header');
    const email = screen.getByTestId('profile-email');
    const emailText = screen.getByText('teste@teste.com');
    const btnDoneRecipes = screen.getByTestId('profile-done-btn');
    const btnFavorites = screen.getByTestId('profile-favorite-btn');
    const btnLogout = screen.getByTestId('profile-logout-btn');
    const footer = screen.getByTestId('footer');

    expect(header).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
    expect(btnDoneRecipes).toBeInTheDocument();
    expect(btnFavorites).toBeInTheDocument();
    expect(btnLogout).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('Testa se ao clicar no button Done Recipes o user é redirecionado corretamente', async () => {
    const { history } = renderWithRouter(<Profile />);

    const btnDoneRecipes = screen.getByTestId('profile-done-btn');
    userEvent.click(btnDoneRecipes);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/done-recipes');
    });
  });

  it('Testa se ao clicar no button Favorite Recipes o user é redirecionado corretamente', async () => {
    const { history } = renderWithRouter(<Profile />);

    const btnFavorites = screen.getByTestId('profile-favorite-btn');
    userEvent.click(btnFavorites);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/favorite-recipes');
    });
  });

  it('Testa se ao clicar no button Logout o user é redirecionado corretamente para tela de login e o localStorage é limpo', async () => {
    const { history } = renderWithRouter(<Profile />);
    const btnLogout = screen.getByTestId('profile-logout-btn');
    userEvent.click(btnLogout);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});
