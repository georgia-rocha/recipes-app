import PropTypes from 'prop-types';
import React from 'react';

export default function Recommendations({ recipes }) {
  // console.table(recipes[0]);
  const maxRecommendations = 6;

  return (
    <div>
      {recipes?.slice(0, maxRecommendations).map((recipe) => (
        <div key={ recipe.idDrink }>
          <img src={ recipe.strDrinkThumb } alt={ recipe.strDrink } />
        </div>
      ))}
    </div>
  );
}

Recommendations.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
