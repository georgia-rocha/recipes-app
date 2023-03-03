import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import MOCK_RECIPES from './mocks/mockRecipes';
import MOCK_CATEGORIES from './mocks/mockCategories';
import App from '../App';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockImplementation(() => MOCK_RECIPES),
  });
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockImplementation(() => MOCK_CATEGORIES),
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('1 - Testa a página de receitas', () => {
  it('Testa se a rota de comidas contém 12 cards de receitas e 5 botões', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');

    const cards = await screen.findAllByTestId(/-recipe-card/);
    expect(cards).toHaveLength(12);

    const buttons = await screen.findAllByTestId(/-bottom-btn/);
    expect(buttons).toHaveLength(5);
  });

  it('Testa se a rota de bebidas contém 12 cards de receitas e 5 botões', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');

    const cards = await screen.findAllByTestId(/-recipe-card/);
    expect(cards).toHaveLength(12);

    const buttons = await screen.findAllByTestId(/-bottom-btn/);
    expect(buttons).toHaveLength(5);
  });
  it('Exibe as 5 primeiras categorias de refeições na tela "/foods".', async () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    history.push('/foods');
    await getCategories(getByTestId, mealsData.meals, 'Beef');
  });
  it('Exibe as 5 primeiras categorias de bebidas na tela "/drinks".', async () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    history.push('/drinks');
    const drinksCategories = [...drinksData.drinks];
    drinksCategories[2] = { strCategory: 'Shake' };
    await getCategories(getByTestId, drinksCategories.drinks, 'Shake');
  });
});
