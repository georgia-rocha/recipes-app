import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa o componente SearchBar', () => {
  const iconDataTest = 'search-top-btn';
  const btnSearch = 'exec-search-btn';
  const inputSearch = 'search-input';
  it('Testa se os componentes são renderizados na tela', async () => {
    const btnIconSearch = screen.getByTestId(iconDataTest);
    renderWithRouter(<App />, { initialEntries: ['/meals'] });
    userEvent.click(btnIconSearch);

    const radioIngredients = await screen.findByTestId('ingredient-search-radio');
    const radioName = await screen.findByTestId('name-search-radio');
    const radioFirstLetter = await screen.findByTestId('first-letter-search-radio');
    const search = await screen.findByTestId(btnSearch);

    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it('Testa o radio Ingredientes', async () => {
    const { debug } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId('search-top-btn');
    userEvent.click(buttonSearch);

    debug();
    const searchInput = await screen.findByTestId(inputSearch);
    const radioIngredients = await screen.findByTestId('ingredient-search-radio');

    userEvent.type(searchInput, 'onions');
    expect(radioIngredients).toBeInTheDocument();
    userEvent.click(radioIngredients);

    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);

    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    index.forEach(async (i) => {
      const recipes = await screen.findByTestId(`${i}-recipe-card`);
      expect(recipes).toBeInTheDocument();
    });
  });

  it('Testa o radio Name', async () => {
    const { history } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);

    const searchInput = await screen.findByTestId(inputSearch);
    const radioName = await screen.findByTestId('name-search-radio');

    userEvent.type(searchInput, 'Poutine');
    expect(radioName).toBeInTheDocument();
    userEvent.click(radioName);

    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52804');
    });
  });

  it('Testa o radio First letter', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);

    const searchInput = await screen.findByTestId(inputSearch);
    const radioFirtsLetter = await screen.findByTestId('first-letter-search-radio');

    userEvent.type(searchInput, 'a');
    expect(radioFirtsLetter).toBeInTheDocument();
    userEvent.click(radioFirtsLetter);

    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);

    const index = [0, 1, 2, 3];

    index.forEach(async (i) => {
      const recipes = await screen.findByTestId(`${i}-recipe-card`);
      expect(recipes).toBeInTheDocument();
    });
  });
});
