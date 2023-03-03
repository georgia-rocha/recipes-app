import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import RecipeCards from '../components/RecipeCards';
import Buttons from '../components/Buttons';

// Renderiza as receitas e categorias de acordo com o path
export default function Recipes({ match }) {
  const { recipes, categories } = useContext(RecipesContext);

  return (
    <div>
      {match.path === '/meals' ? (
        <>
          <Buttons categories={ categories.meals } />
          <RecipeCards recipes={ recipes.meals } recipeType="Meal" />
        </>
      ) : (
        <>
          <Buttons categories={ categories.drinks } />
          <RecipeCards recipes={ recipes.drinks } recipeType="Drink" />
        </>
      )}
    </div>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;
