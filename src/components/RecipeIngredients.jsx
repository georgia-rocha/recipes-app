import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeIngredients({ recipe }) {
  // console.table(recipe);

  const getIngredients = (recipeDetails) => {
    const ingredients = [];
    const ingredientsLimit = 20;

    for (let i = 0; i <= ingredientsLimit; i += 1) {
      if (recipeDetails[`strIngredient${i}`]) {
        const name = recipeDetails[`strIngredient${i}`];
        const measure = recipeDetails[`strMeasure${i}`];
        ingredients.push({ index: i - 1, name, measure });
      }
    }
    return ingredients;
  };

  return (
    <ul>
      {getIngredients(recipe).map((ingredient) => (
        <li
          key={ ingredient.index }
          data-testid={ `${ingredient.index}-ingredient-name-and-measure` }
          id={ ingredient.index }
        >
          {ingredient.name}
          {' '}
          {ingredient.measure}
        </li>
      ))}
    </ul>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
