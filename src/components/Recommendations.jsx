import PropTypes from 'prop-types';
import React from 'react';

export default function Recommendations({ recipes }) {
  const maxRecommendations = 6;

  return (
    <div>
      {recipes.slice(0, maxRecommendations).map((recipe, index) => (
        <div key={ recipe.idDrink } data-testid={ `${index}-recommendation-card` }>
          <img src={ recipe.strDrinkThumb } alt={ recipe.strDrink } />
          <h3 data-testid={ `${index}-recommendation-title` }>
            {recipe.strDrink}
          </h3>
        </div>
      ))}
    </div>
  );
}

Recommendations.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
