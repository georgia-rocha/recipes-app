import React, { useContext } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipesContext from '../context/RecipesContext';

// Página de receita em progresso
export default function RecipeInProgress() {
  const { startedRecipes } = useContext(RecipesContext);

  const isRecipeStarted = () => {
    const { pathname } = window.location;
    const type = pathname.split('/')[1];
    const id = pathname.split('/')[2];
    return true;
    return startedRecipes[type].some((recipe) => recipe.id === id);
  };

  return <RecipeDetails isRecipeStarted={ isRecipeStarted() } />;
}
