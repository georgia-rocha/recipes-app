import {
  MEAL_RECIPES_URL,
  DRINK_RECIPES_URL,
  MEAL_CATEGORIES_URL,
  DRINK_CATEGORIES_URL,
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
