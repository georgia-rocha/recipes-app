import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import SearchBar from '../components/SearchBar';
import RecipesProvider from '../context/RecipesProvider';

describe('Testa o componente SearchBar', () => {
  it('Testa se os componentes são renderizados na tela', () => {
    renderWithRouter(
      <RecipesProvider>
        <SearchBar />
      </RecipesProvider>,
    );
    const radioIngredients = screen.getByTestId('ingredient-search-radio');
    const radioName = screen.getByTestId('name-search-radio');
    const radioFirstLetter = screen.getByTestId('first-letter-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');

    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  it('Testa o radio Ingredientes', () => {
    renderWithRouter(
      <RecipesProvider>
        <SearchBar />
      </RecipesProvider>,
    );
    const radioIngredients = screen.getByTestId('ingredient-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');

    userEvent.click(radioIngredients);
    userEvent.click(buttonSearch);

    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    index.forEach(async (i) => {
      const recipes = await screen.findByTestId(`${i}-recipe-card`);
      expect(recipes).toBeInTheDocument();
    });
  });
});
