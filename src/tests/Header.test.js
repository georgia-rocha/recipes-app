import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Header from '../components/Header';
import RecipesProvider from '../context/RecipesProvider';

describe('Testando o component Header', () => {
  it('Testa se é renderizado o component Header e se as imagens redirecionam o user a rota correta', () => {

    const { history } = renderWithRouter(
      <RecipesProvider>
        <Header />
      </RecipesProvider>,
    );

    const { history } = renderWithRouter(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();

    const textHeader = screen.getByRole('heading', { name: /recipes/i });
    expect(textHeader).toBeInTheDocument();

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();

    const search = screen.getByTestId('search-top-btn');
    expect(search).toBeInTheDocument();
    userEvent.click(search);

    waitFor(() => {
      const inputSearh = screen.getByTestId('search-input');
      expect(inputSearh).toBeInTheDocument();
      userEvent.type(inputSearh, 'chicken');
      userEvent.click(search);
      expect(inputSearh).not.toBeInTheDocument();
    });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
    userEvent.click(iconProfile);

    waitFor(() => {
      expect(history.location.pathname).toBe('/profile');
      const titlePage = screen.getByTestId('page-title');
      expect(titlePage).toBeInTheDocument();
    });
  });
});
