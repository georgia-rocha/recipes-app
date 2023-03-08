import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Footer from '../components/Footer';

describe('Testando o component Footer', () => {
  it('Testa se é renderizado o component Footer e se as imagens redirecionam o user a rota correta', async () => {
    const { history } = renderWithRouter(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();

    const linkDrink = screen.getByTestId('drinks-bottom-btn');
    expect(linkDrink).toBeInTheDocument();
    userEvent.click(linkDrink);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks');
    });

    const linkMeals = screen.getByTestId('meals-bottom-btn');
    expect(linkMeals).toBeInTheDocument();
    userEvent.click(linkMeals);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals');
    });
  });
});
