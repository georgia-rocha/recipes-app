import React from 'react';
import PropTypes from 'prop-types';
import RecipeIngredients from './RecipeIngredients';
import YoutubeEmbed from './YoutubeEmbed';

// Renderiza os detalhes da receita de comida
export default function MealDetails({ recipe }) {
  const meal = recipe;
  const embedId = meal.strYoutube?.split('=')[1];

  return (
    <div>
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
      <YoutubeEmbed embedId={ embedId } />
    </div>
  );
}

MealDetails.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
