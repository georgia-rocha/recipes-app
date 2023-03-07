import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeIngredients({ recipe }) {
  const getIngredients = (recipeDetails) => recipeDetails.ingredients;

  return (
    <div>{getIngredients(recipe)}</div>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
