import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import RecipeCards from '../components/RecipeCards';

// Renderiza as receitas de acordo com o path
export default function Recipes({ match }) {
  const {
    recipes: { meals, drinks },
  } = useContext(RecipesContext);

  return (
    <div>
      {match.path === '/meals' ? (
        <RecipeCards recipes={ meals } recipeType="Meal" />
      ) : (
        <RecipeCards recipes={ drinks } recipeType="Drink" />
      )}
    </div>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;
