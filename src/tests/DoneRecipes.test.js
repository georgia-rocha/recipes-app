import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import copy from 'clipboard-copy';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import RecipesProvider from '../context/RecipesProvider';

beforeEach(() => {
  const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  setLocalStorage('doneRecipes', [
    {
      id: '17203',
      nationality: '',
      type: 'drink',
      category: 'Ordinary Drink',
      alcoholicOrNot: 'Alcoholic',
      name: 'Kir',
      image:
        'image:"https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
      doneDate: 'doneDate:"2023-03-13T15:48:37.699Z',
      tags: ['IBA', 'ContemporaryClassic'],
    },
    {
      id: '52977',
      nationality: 'Turkish',
      type: 'meal',
      category: 'Side',
      alcoholicOrNot: '',
      name: 'Corba',
      image:
        'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
      doneDate: 'doneDate:"2023-03-13T15:48:37.699Z',
      tags: ['Soup'],
    },
  ]);
});

afterEach(() => jest.clearAllMocks());

const doneRecipesPath = '/done-recipes';

describe('Testa a página de receitas feitas', () => {
  it('Testa se a página contém os elementos corretos', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push(doneRecipesPath);
    });

    expect(await screen.findByText(/done recipes/i)).toBeInTheDocument();
    expect(await screen.findByTestId(/filter-by-all-btn/i)).toBeInTheDocument();
    expect(
      await screen.findByTestId(/filter-by-meal-btn/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(/filter-by-drink-btn/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(/0-horizontal-image/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(/0-horizontal-top-text/i),
    ).toBeInTheDocument();
    expect(await screen.findByTestId(/0-horizontal-name/i)).toBeInTheDocument();
    expect(
      await screen.findByTestId(/0-horizontal-done-date/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(/0-horizontal-share-btn/i),
    ).toBeInTheDocument();
  });

  it.skip('Testa se os filtros funcionam corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push(doneRecipesPath);
    });

    const allFilter = await screen.findByTestId(/filter-by-all-btn/i);
    const mealFilter = await screen.findByTestId(/filter-by-meal-btn/i);
    const drinkFilter = await screen.findByTestId(/filter-by-drink-btn/i);

    userEvent.click(allFilter);
    expect(
      await screen.findAllByTestId(/0-horizontal-image/i),
    ).toHaveLength(2);

    userEvent.click(mealFilter);
    expect(
      await screen.findAllByTestId(/0-horizontal-image/i),
    ).not.toHaveLength(1);

    userEvent.click(drinkFilter);
    expect(
      await screen.findAllByTestId(/0-horizontal-image/i),
    ).toHaveLength(1);
  });

  it.skip('Testa se o botão de compartilhar funciona corretamente', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push(doneRecipesPath);
    });

    const shareBtn = await screen.findByTestId(/0-horizontal-share-btn/i);
    userEvent.click(shareBtn);

    copy.mockImplementation(() => Promise.resolve());

    expect(await screen.findByText(/Link copied!/i)).toBeInTheDocument();
  });

  it('Direciona para a tela de detalhes da receita ao clicar na foto da receita', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push(doneRecipesPath);
    });

    const recipeImage = await screen.findByTestId(/0-horizontal-image/i);
    userEvent.click(recipeImage);
    expect(history.location.pathname).toBe('/drinks/17203');
  });

  it('Direciona para a tela de detalhes da receita ao clicar no nome da receita', async () => {
    const { history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    waitFor(() => {
      history.push(doneRecipesPath);
    });

    const recipeName = await screen.findByTestId(/0-horizontal-name/i);
    userEvent.click(recipeName);
    expect(history.location.pathname).toBe('/drinks/17203');
  });
});
