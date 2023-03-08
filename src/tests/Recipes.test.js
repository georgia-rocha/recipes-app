import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import RecipesProvider from '../context/RecipesProvider';
import fetch from '../../cypress/mocks/fetch';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(fetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testa a página de receitas', () => {
  it('Testa se a página de comidas é renderizada e exibe as informações corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/meals');
    });

    expect(history.location.pathname).toBe('/meals');
    expect(await screen.findByText(/corba/i)).toBeInTheDocument();
  });

  it('Testa se a página de bebidas é renderizada', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/drinks');
    });

    expect(history.location.pathname).toBe('/drinks');
    expect(await screen.findByText(/^gg$/im)).toBeInTheDocument();
  });

  it('Testa se ao clicar no filtro de categoria, as comidas são filtradas', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/meals');
    });

    expect(await screen.findByText(/corba/i)).toBeInTheDocument();

    const categoryBeefButton = await screen.findByRole('button', { name: /beef/i });
    userEvent.click(categoryBeefButton);
    expect(await screen.findByText(/beef and mustard pie/i)).toBeInTheDocument();
  });

  it('Testa se ao clicar no filtro de categoria, as bebidas são filtradas', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/drinks');
    });

    expect(await screen.findByText(/^gg$/im)).toBeInTheDocument();

    const categoryCocktailButton = await screen.findByRole('button', { name: /cocktail/i });
    userEvent.click(categoryCocktailButton);
    expect(await screen.findByText(/155 belmont/i)).toBeInTheDocument();
  });

  it('Testa se ao clicar no filtro "All", todas as comidas são mostradas', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/meals');
    });

    expect(await screen.findByText(/corba/i)).toBeInTheDocument();

    const categoryBeefButton = await screen.findByRole('button', { name: /beef/i });
    userEvent.click(categoryBeefButton);
    expect(await screen.findByText(/beef and mustard pie/i)).toBeInTheDocument();

    const categoryAllButton = await screen.findByRole('button', { name: /all/i });
    userEvent.click(categoryAllButton);
    expect(await screen.findByText(/corba/i)).toBeInTheDocument();
  });

  it('Testa se ao clicar no mesmo filtro duas vezes, todas as comidas são mostradas', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push('/meals');
    });

    expect(await screen.findByText(/corba/i)).toBeInTheDocument();

    const categoryBeefButton = await screen.findByRole('button', { name: /beef/i });
    userEvent.click(categoryBeefButton);
    expect(await screen.findByText(/beef and mustard pie/i)).toBeInTheDocument();

    userEvent.click(categoryBeefButton);
    expect(await screen.findByText(/corba/i)).toBeInTheDocument();
  });
});
