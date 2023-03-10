import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import FinishRecipeButton from './FinishRecipeButton';

export default function RecipeIngredients({ recipe, isRecipeStarted }) {
  const [finishedSteps, setFinishedSteps] = useState([]);

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
              <input
                type="checkbox"
                data-testid={ `${ingredient.index}-ingredient-step` }
                onChange={ () => toggleFinishedStep(ingredient.index) }
                checked={ isStepFinished(ingredient.index) }
              />
            )}
            <span
              className={
                isStepFinished(ingredient.index)
                  ? 'line-through decoration-solid decoration-black'
                  : ''
              }
            >
              {ingredient.name}
              {' '}
              {ingredient.measure}
            </span>
          </li>
        ))}
      </ul>
      {isRecipeStarted && (
        <FinishRecipeButton isDisabled={ !isRecipeFinished() } />
      )}
    </>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({}),
  isRecipeStarted: PropTypes.bool,
}.isRequired;
