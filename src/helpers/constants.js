// Contém as constantes utilizadas no projeto
const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const MEAL_CATEGORIES_URL = `${MEALS_URL}list.php?c=list`;
export const DRINK_CATEGORIES_URL = `${DRINKS_URL}list.php?c=list`;

export const MEAL_RECIPES_URL = `${MEALS_URL}search.php?s=`;
export const DRINK_RECIPES_URL = `${DRINKS_URL}search.php?s=`;

export const MEAL_RECIPES_BY_CATEGORY_URL = `${MEALS_URL}filter.php?c=`;
export const DRINK_RECIPES_BY_CATEGORY_URL = `${DRINKS_URL}filter.php?c=`;

export const FIRST_5_CATEGORIES = 5;
export const FIRST_12_RECIPES = 12;
