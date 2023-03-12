import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import RecipeIngredients from './RecipeIngredients';
import YouTubeEmbed from './YouTubeEmbed';
import RecipesContext from '../context/RecipesContext';
import RecipeButtons from './RecipeButtons';
import RecommendationsDrinks from './RecommendationsDrinks';

// Renderiza os detalhes da receita de comida

export default function MealDetails({ recipe, isRecipeStarted }) {
  const { recipes } = useContext(RecipesContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const [recipeInProgress, setRecipeInProgress] = useState([]);
  const [startRecipe, setStartRecipe] = useState(false);
  const id = pathname.split('/')[2];

  const meal = recipe;
  const embedId = meal.strYoutube?.split('=')[1];

  const handleStartRecipeClick = () => {
    console.log(recipeInProgress);
    console.log(id);
    if (recipeInProgress) {
      history.push(`/meals/${id}in-progress`);
    } else {
      setStartRecipe(true);
      setRecipeInProgress(true);
      history.push(`/meals/${id}/in-progress`);
    }
  };

  return (
    <div>
      <RecipeButtons recipe={ recipe } />
      <img
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{meal.strMeal}</h1>
      <p data-testid="recipe-category">{meal.strCategory}</p>
      <h2>Ingredientes</h2>
      <RecipeIngredients recipe={ meal } isRecipeStarted={ isRecipeStarted } />
      <h2>Instruções</h2>
      <p data-testid="instructions">{meal.strInstructions}</p>
      <YouTubeEmbed embedId={ embedId } />
      <h2>Recomendações</h2>
      <RecommendationsDrinks recipes={ recipes.drinks } />
      <div>
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
    </div>
  );
}

MealDetails.propTypes = {
  recipe: PropTypes.shape({}),
  isRecipeStarted: PropTypes.bool,
}.isRequired;
