// Contém as funções que fazem as requisições à API
import {
  MEAL_RECIPES_URL,
  DRINK_RECIPES_URL,
  MEAL_CATEGORIES_URL,
  DRINK_CATEGORIES_URL,
  MEAL_RECIPES_BY_CATEGORY_URL,
  DRINK_RECIPES_BY_CATEGORY_URL,
  MEAL_RECIPES_BY_ID_URL,
  DRINK_RECIPES_BY_ID_URL,

} from './constants';

export const fetchRecipes = async () => {
  const mealsResponse = await fetch(MEAL_RECIPES_URL);
  const mealsData = await mealsResponse.json();
  const drinksResponse = await fetch(DRINK_RECIPES_URL);
  const drinksData = await drinksResponse.json();
  return { mealsData, drinksData };
};

export const fetchCategories = async () => {
  const mealsCategories = await fetch(MEAL_CATEGORIES_URL);
  const mealsData = await mealsCategories.json();
  const drinksCategories = await fetch(DRINK_CATEGORIES_URL);
  const drinksData = await drinksCategories.json();
  return { mealsData, drinksData };
};

export const fetchRecipesByCategory = async (type, category) => {
  if (type === 'meals') {
    const mealsResponse = await fetch(
      `${MEAL_RECIPES_BY_CATEGORY_URL}${category}`,
    );
    const mealsData = await mealsResponse.json();
    return mealsData;
  }
  const drinksResponse = await fetch(
    `${DRINK_RECIPES_BY_CATEGORY_URL}${category}`,
  );
  const drinksData = await drinksResponse.json();
  return drinksData;
};

export const fetchRecipesById = async (pathname, id) => {
  if (pathname.includes('meals')) {
    const mealsResponse = await fetch(`${MEAL_RECIPES_BY_ID_URL}${id}`);
    const mealsData = await mealsResponse.json();
    return mealsData;
  }
  const drinksResponse = await fetch(`${DRINK_RECIPES_BY_ID_URL}${id}`);
  const drinksData = await drinksResponse.json();
  return drinksData;
};

export const filterMeals = async (endpoint) => {
  try {
    if (endpoint === '' || endpoint === null) {
      return [];
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.meals;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const filterDrinks = async (endpoint) => {
  try {
    if (endpoint === '' || endpoint === null) {
      return [];
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const ZERO = 0;
const TWELVE = 12;

export async function fetchMeals12Cards() {
  const fetchData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await fetchData.json();
  const twelveMeals = data.meals.slice(ZERO, TWELVE);

  return twelveMeals;
}
export async function fetchDrinks12Cards() {
  const fetchData = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await fetchData.json();
  const twelveDrinks = data.drinks.slice(ZERO, TWELVE);

  return twelveDrinks;
}
