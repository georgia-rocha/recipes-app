import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import RecipesProvider from '../context/RecipesProvider';
import fetch from '../../cypress/mocks/fetch';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testa a página de receitas em progresso', () => {
  it('Testa se a página de comidas em progresso é renderizada e exibe as informações corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/meals/52977/in-progress');
    });

    expect(history.location.pathname).toBe('/meals/52977/in-progress');
    expect(await screen.findByTestId(/recipe-title/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/recipe-category/i)).toBeInTheDocument();
    expect(
      await screen.findByTestId(/0-ingredient-name-and-measure/i),
    ).toBeInTheDocument();
    expect(await screen.findByTestId(/instructions/i)).toBeInTheDocument();
  });

  it('Testa se a página de bebidas em progresso é renderizada e exibe as informações corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/drinks/15997/in-progress');
    });

    expect(history.location.pathname).toBe('/drinks/15997/in-progress');
    expect(await screen.findByText(/^gg$/im)).toBeInTheDocument();
  });
});
