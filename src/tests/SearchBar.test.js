import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import * as fetchApi from '../helpers/fetchApi';
import RecipesProvider from '../context/RecipesProvider';

afterEach(() => {
  jest.restoreAllMocks();
});
describe('Testa o componente SearchBar', () => {
  const iconDataTest = 'search-top-btn';
  const btnSearch = 'exec-search-btn';
  const inputSearch = 'search-input';
  const firstLetter = 'first-letter-search-radio';
  it('Testa se os componentes são renderizados na tela', async () => {
    const { debug } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
    const btnIconSearch = screen.getByTestId(iconDataTest);
    userEvent.click(btnIconSearch);
    debug();
    const radioIngredients = await screen.findByTestId('ingredient-search-radio');
    const radioName = await screen.findByTestId('name-search-radio');
    const radioFirstLetter = await screen.findByTestId(firstLetter);
    const search = await screen.findByTestId(btnSearch);

    expect(radioIngredients).toBeInTheDocument();
    expect(radioName).toBeInTheDocument();
    expect(radioFirstLetter).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it.only('Testa o radio Ingredientes', async () => {
    const mockMeals = [
      {
        strMeal: 'Beef Dumpling Stew',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
        idMeal: '52873',
      },
      {
        strMeal: 'Beef stroganoff',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
        idMeal: '52834',
      },
      {
        strMeal: 'Boulangère Potatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/qywups1511796761.jpg',
        idMeal: '52914',
      },
      {
        strMeal: 'Braised Beef Chilli',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
        idMeal: '52826',
      },
      {
        strMeal: 'Brown Stew Chicken',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
        idMeal: '52940',
      },
      {
        strMeal: 'Creamy Tomato Soup',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
        idMeal: '52841',
      },
      {
        strMeal: 'Jamaican Beef Patties',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg',
        idMeal: '52938',
      },
      {
        strMeal: 'Kafteji',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
        idMeal: '52971',
      },
      {
        strMeal: 'Katsu Chicken curry',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
        idMeal: '52820',
      },
      {
        strMeal: 'Lamb Biryani',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
        idMeal: '52805',
      },
      {
        strMeal: 'Lancashire hotpot',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg',
        idMeal: '52884',
      },
      {
        strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg',
        idMeal: '53045',
      },
      {
        strMeal: 'Potato Gratin with Chicken',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
        idMeal: '52780',
      },
      {
        strMeal: 'Rappie Pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
        idMeal: '52933',
      },
      {
        strMeal: 'Rosół (Polish Chicken Soup)',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg',
        idMeal: '53020',
      },
      {
        strMeal: 'Seafood fideuà',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg',
        idMeal: '52836',
      },
      {
        strMeal: 'Spaghetti Bolognese',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
        idMeal: '52770',
      },
      {
        strMeal: 'Split Pea Soup',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg',
        idMeal: '52925',
      },
      {
        strMeal: 'Steak and Kidney Pie',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg',
        idMeal: '52881',
      },
      {
        strMeal: 'Traditional Croatian Goulash',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg',
        idMeal: '53057',
      },
      {
        strMeal: 'Venetian Duck Ragu',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
        idMeal: '52838',
      },
    ];
    jest.spyOn(fetchApi, 'getApi').mockResolvedValueOnce(mockMeals);
    const { debug, history } = renderWithRouter(
      <RecipesProvider>
        <App />
      </RecipesProvider>,
    );

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnLogin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputPassword, '1234567');

    expect(btnLogin).toBeEnabled();
    userEvent.click(btnLogin);

    waitFor(() => {
      expect(history.location.pathname).toBe('/meals');
      const buttonSearch = screen.getByTestId('search-top-btn');
      userEvent.click(buttonSearch);
    });

    const searchInput = await screen.findByTestId(inputSearch);
    const radioIngredients = await screen.findByTestId('ingredient-search-radio');
    expect(radioIngredients).toBeInTheDocument();
    debug();
    userEvent.type(searchInput, 'onions');
    userEvent.click(radioIngredients);
    const search = await screen.findByTestId(btnSearch);
    userEvent.click(search);
    debug();

    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    index.forEach(async (i) => {
      await waitFor(() => {
        const recipes = screen.findByTestId(`${i}`);
        expect(recipes).toBeInTheDocument();
      });
    });
  });

  // it('Testa o radio Name', async () => {
  //   const { history } = renderWithRouter(<App />, { initialEntries: ['/meals'] });
  //   const buttonSearch = screen.getByTestId(iconDataTest);
  //   userEvent.click(buttonSearch);

  //   const searchInput = await screen.findByTestId(inputSearch);
  //   const radioName = await screen.findByTestId('name-search-radio');

  //   userEvent.type(searchInput, 'Poutine');
  //   expect(radioName).toBeInTheDocument();
  //   userEvent.click(radioName);

  //   const search = await screen.findByTestId(btnSearch);
  //   userEvent.click(search);
  //   waitFor(() => {
  //     expect(history.location.pathname).toBe('/meals/52804');
  //   });
  // });

  // it('Testa o radio First letter', async () => {
  //   renderWithRouter(<App />, { initialEntries: ['/meals'] });
  //   const buttonSearch = screen.getByTestId(iconDataTest);
  //   userEvent.click(buttonSearch);

  //   const searchInput = await screen.findByTestId(inputSearch);
  //   const radioFirtsLetter = await screen.findByTestId(firstLetter);

  //   expect(radioFirtsLetter).toBeInTheDocument();
  //   userEvent.type(searchInput, 'a');
  //   userEvent.click(radioFirtsLetter);

  //   const search = await screen.findByTestId(btnSearch);
  //   userEvent.click(search);

  //   const index = [0, 1, 2, 3];

  //   index.forEach(async (i) => {
  //     const recipes = await screen.findByTestId(`${i}-recipe-card`);
  //     expect(recipes).toBeInTheDocument();
  //   });
  // });
  // it('Testa se o alert é renderizado na tela, caso o user tente fazer a busca com mais de uma letra', async () => {
  //   renderWithRouter(<App />, { initialEntries: ['/meals'] });
  //   const buttonSearch = screen.getByTestId(iconDataTest);
  //   userEvent.click(buttonSearch);

  //   const searchInput = await screen.findByTestId(inputSearch);
  //   const radioFirtsLetter = await screen.findByTestId(firstLetter);

  //   userEvent.type(searchInput, 'aa');
  //   userEvent.click(radioFirtsLetter);

  //   const alert = await screen.findByRole('alert');
  //   expect(alert).toBeInTheDocument();
  //   expect(alert).toHaveTextContent('Your search must have only 1 (one) character');
  // });
});
