import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Esse componente renderiza as receitas de comidas e bebidas dinamicamente
export default function RecipeCards({ recipes, recipeType }) {
  const recipesUrl = recipeType === 'Meal' ? 'meals' : 'drinks';

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div
          key={ recipe[`id${recipeType}`] }
          data-testid={ `${index}-recipe-card` }
        >
          <Link to={ `/${recipesUrl}/${recipe[`id${recipeType}`]}` }>
            <img
              src={ recipe[`str${recipeType}Thumb`] }
              alt={ recipe[`str${recipeType}`] }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe[`str${recipeType}`]}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  recipeType: PropTypes.string,
}.isRequired;
