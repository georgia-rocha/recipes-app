import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import FinishRecipeButton from './FinishRecipeButton';
import styles from '../styles/RecipeIngredients.module.scss';

export default function RecipeIngredients({ recipe, isRecipeStarted }) {
  const [finishedSteps, setFinishedSteps] = useState([]);
  const history = useHistory();

  const updateFinishedStepsOnLocalStorage = (updatedSteps) => {
    const finishedStepsObject = {
      ...JSON.parse(localStorage.getItem('inProgressRecipes')),
      [recipe.idMeal ? 'meals' : 'drinks']: {
        [recipe.idMeal || recipe.idDrink]: [...updatedSteps],
      },
    };

    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify(finishedStepsObject),
    );
  };

  useEffect(() => {
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );
    if (inProgressRecipes) {
      const { pathname } = window.location;

      const type = pathname.split('/')[1];
      if (!inProgressRecipes[type]) return;

      const id = pathname.split('/')[2];
      const currentFinishedSteps = inProgressRecipes[type][id];
      setFinishedSteps(currentFinishedSteps);
    }
  }, []);

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

  const isStepFinished = (step) => {
    if (!isRecipeStarted) return false;
    return finishedSteps.includes(step);
  };

  const toggleFinishedStep = (step) => {
    if (isStepFinished(step)) {
      setFinishedSteps(
        finishedSteps.filter((finishedStep) => finishedStep !== step),
      );
    } else {
      setFinishedSteps([...finishedSteps, step]);
    }
    updateFinishedStepsOnLocalStorage([...finishedSteps, step]);
  };

  const isRecipeFinished = () => {
    const ingredients = getIngredients(recipe);
    const finishedStepsLength = finishedSteps.length;
    const ingredientsLength = ingredients.length;
    return finishedStepsLength === ingredientsLength;
  };

  const finishRecipe = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

    const newDoneRecipe = {
      id: recipe.idMeal || recipe.idDrink,
      nationality: recipe.strArea || '',
      type: recipe.idMeal ? 'meal' : 'drink',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
      doneDate: new Date().toLocaleDateString('pt-BR'),
      tags: recipe.tags || [],
    };

    doneRecipes.push(newDoneRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  };

  return (
    <>
      <ul>
        {getIngredients(recipe).map((ingredient) => (
          <li
            key={ ingredient.index }
            data-testid={ `${ingredient.index}-ingredient-name-and-measure` }
            id={ ingredient.index }
          >
            {isRecipeStarted && (
              <label
                htmlFor={ ingredient.name }
                data-testid={ `${ingredient.index}-ingredient-step` }
                className={
                  isStepFinished(ingredient.index) ? styles.finished_step : ''
                }
              >
                <input
                  type="checkbox"
                  onChange={ () => toggleFinishedStep(ingredient.index) }
                  checked={ isStepFinished(ingredient.index) }
                  className="mr-1"
                  id={ ingredient.name }
                />
                <span>
                  {ingredient.name}
                  {' '}
                  {ingredient.measure}
                </span>
              </label>
            )}
          </li>
        ))}
      </ul>
      {isRecipeStarted && (
        <FinishRecipeButton
          isDisabled={ !isRecipeFinished() }
          finishRecipe={ finishRecipe }
        />
      )}
    </>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({}),
  isRecipeStarted: PropTypes.bool,
}.isRequired;
