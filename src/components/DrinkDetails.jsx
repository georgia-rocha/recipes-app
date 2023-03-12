import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeIngredients from './RecipeIngredients';
import YouTubeEmbed from './YouTubeEmbed';

import RecipesContext from '../context/RecipesContext';
import RecipeButtons from './RecipeButtons';
import RecommendationsMeals from './RecommendationsMeals';

// Renderiza os detalhes da receita de bebida
export default function DrinkDetails({ recipe, isRecipeStarted }) {
  const { recipes } = useContext(RecipesContext);
  const drink = recipe;
  const history = useHistory();
  const { pathname } = useLocation();
  const [recipeInProgress, setRecipeInProgress] = useState(false);
  const [startRecipe, setStartRecipe] = useState(false);
  const id = pathname.split('/')[2];
  // recupera as receitas em progresso do localStorage
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const newInProgressRecipes = {
    ...inProgressRecipes,
    drinks: [...(inProgressRecipes?.drinks || []), id],
  };
  // adiciona a receita atual em progresso, se ela ainda não estiver lá
  localStorage.setItem('inProgressRecipes', JSON.stringify(newInProgressRecipes));
  // salva as receitas em progresso atualizadas no localStorage
  const embedId = drink.strYoutube?.split('=')[1];
  const handleStartRecipeClick = () => {
    console.log(recipeInProgress);
    console.log(id);
    if (recipeInProgress) {
      history.push(`/drinks/${id}/in-progress'`);
    } else {
      setStartRecipe(true);
      setRecipeInProgress(true);
      console.log('aaa');
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div>
      <RecipeButtons recipe={ recipe } />
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{drink.strDrink}</h1>
      <p data-testid="recipe-category">{drink.strAlcoholic}</p>
      <h2>Ingredientes</h2>
      <RecipeIngredients recipe={ drink } isRecipeStarted={ isRecipeStarted } />
      <h2>Instruções</h2>
      <p data-testid="instructions">{drink.strInstructions}</p>
      <YouTubeEmbed embedId={ embedId } />
      <h2>Recomendações</h2>
      <RecommendationsMeals recipes={ recipes.meals } />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="btn btn-start-recipe btn-start"
        onClick={ handleStartRecipeClick }
      >
        {
          startRecipe ? 'Continue Recipe' : 'Start Recipe'
        }
      </button>
    </div>
  );
}

DrinkDetails.propTypes = {
  recipe: PropTypes.shape({}),
  isRecipeStarted: PropTypes.bool,
}.isRequired;
