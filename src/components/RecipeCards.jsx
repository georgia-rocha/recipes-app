import React from 'react';
import PropTypes from 'prop-types';

// Esse componente renderiza as receitas de comidas e bebidas dinamicamente
export default function RecipeCards({ recipes, recipeType }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={ recipe[`id${recipeType}`] } data-testid={ `${index}-recipe-card` }>
          <img
            src={ recipe[`str${recipeType}Thumb`] }
            alt={ recipe[`str${recipeType}`] }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>{recipe[`str${recipeType}`]}</p>
        </div>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  recipeType: PropTypes.string,
}.isRequired;
