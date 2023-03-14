import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';

describe('Testa o componente SearchBar', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const iconDataTest = 'search-top-btn';
  const btnSearch = 'exec-search-btn';
  const inputSearch = 'search-input';
  const firstLetter = 'first-letter-search-radio';
  const filterIngredients = 'ingredient-search-radio';
  const filterName = 'name-search-radio';
  it('Testa se os componentes são renderizados na tela', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const btnIconSearch = screen.getByTestId(iconDataTest);
    userEvent.click(btnIconSearch);
    const radioIngredients = await screen.findByTestId(filterIngredients);
    const radioName = await screen.findByTestId(filterName);
    const radioFirstLetter = await screen.findByTestId(firstLetter);
    const search = await screen.findByTestId(btnSearch);
    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
  it('Testa o radio Ingredientes na page meals', async () => {
    const { history } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
    expect(history.location.pathname).toBe('/meals');
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioIngredients = await screen.findByTestId(filterIngredients);
    expect(radioIngredients).toBeInTheDocument();
    userEvent.type(searchInput, 'Chicken');
    userEvent.click(radioIngredients);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      screen.getByText('Brown Stew Chicken');
    });
  });
  it('Testa o radio Name na page meals', async () => {
    const { history } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioName = await screen.findByTestId(filterName);
    userEvent.type(searchInput, 'Arrabiata');
    expect(radioName).toBeInTheDocument();
    userEvent.click(radioName);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52771');
      screen.getByText('Spicy Arrabiata Penne');
    });
  });
  it('Testa o radio First letter na page meals', async () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioFirtsLetter = await screen.findByTestId(firstLetter);
    expect(radioFirtsLetter).toBeInTheDocument();
    userEvent.type(searchInput, 'a');
    userEvent.click(radioFirtsLetter);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      screen.getByText('Apam balik');
    });
  });
  it('Testa se o alert é renderizado na tela, caso o user tente fazer a busca com mais de uma letra', async () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation();
    renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioFirtsLetter = await screen.findByTestId(firstLetter);
    userEvent.type(searchInput, 'aa');
    userEvent.click(radioFirtsLetter);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      expect(alert).toHaveBeenCalledTimes(1);
    });
  });
  it('Testa o radio Ingredientes na page drinks', async () => {
    const { history } = renderWithRouter(<App />, { initialEntries: ['/drinks'] });
    expect(history.location.pathname).toBe('/drinks');
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioIngredients = await screen.findByTestId(filterIngredients);
    expect(radioIngredients).toBeInTheDocument();
    userEvent.type(searchInput, 'Light rum');
    userEvent.click(radioIngredients);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      screen.getByText('Apricot Lady');
    });
  });
  it('Testa o radio Name na page drinks', async () => {
    const { history } = renderWithRouter(<App />, { initialEntries: ['/drinks'] });
    const buttonSearch = screen.getByTestId(iconDataTest);
    userEvent.click(buttonSearch);
    const searchInput = await screen.findByTestId(inputSearch);
    const radioName = await screen.findByTestId(filterName);
    userEvent.type(searchInput, 'Aquamarine');
    expect(radioName).toBeInTheDocument();
    userEvent.click(radioName);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/178319');
      screen.getByText('Aquamarine');
    });
  });
});
