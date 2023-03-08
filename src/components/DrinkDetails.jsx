import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeIngredients from './RecipeIngredients';
import RecipesContext from '../context/RecipesContext';
import Recommendations from './Recommendations';

// Renderiza os detalhes da receita de bebida
export default function DrinkDetails({ recipe }) {
  const { recipes } = useContext(RecipesContext);
  const drink = recipe;

  return (
    <div>
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{drink.strDrink}</h1>
      <p data-testid="recipe-category">{drink.strAlcoholic}</p>
      <h2>Ingredientes</h2>
      <RecipeIngredients recipe={ drink } />
      <h2>Instruções</h2>
      <p data-testid="instructions">{drink.strInstructions}</p>
      <h2>Recomendações</h2>
      <Recommendations recipes={ recipes.meals } />
    </div>
  );
}

DrinkDetails.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
