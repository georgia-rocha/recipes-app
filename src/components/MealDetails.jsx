import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeIngredients from './RecipeIngredients';
import YouTubeEmbed from './YouTubeEmbed';
import RecipesContext from '../context/RecipesContext';
import Recommendations from './Recommendations';
import RecipeButtons from './RecipeButtons';

// Renderiza os detalhes da receita de comida
export default function MealDetails({ recipe }) {
  const { recipes } = useContext(RecipesContext);
  const meal = recipe;
  const embedId = meal.strYoutube?.split('=')[1];

  return (
    <div>
      <RecipeButtons recipe={ recipe } />
      <img
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{meal.strMeal}</h1>
      <p data-testid="recipe-category">{meal.strCategory}</p>
      <h2>Ingredientes</h2>
      <RecipeIngredients recipe={ meal } />
      <h2>Instruções</h2>
      <p data-testid="instructions">{meal.strInstructions}</p>
      <YouTubeEmbed embedId={ embedId } />
      <h2>Recomendações</h2>
      <Recommendations recipes={ recipes.drinks } />
    </div>
  );
}

MealDetails.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
