import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import FinishRecipeButton from './FinishRecipeButton';
import styles from '../styles/RecipeIngredients.module.scss';

export default function RecipeIngredients({ recipe, isRecipeStarted }) {
  const [finishedSteps, setFinishedSteps] = useState([]);
  const history = useHistory();

  const updateFinishedStepsOnLocalStorage = (updatedSteps) => {
    if (!localStorage.getItem('inProgressRecipes')) {
      const inProgressRecipes = {
        meals: {},
        drinks: {},
      };
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify(inProgressRecipes),
      );
    }
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
    const { pathname } = window.location;
    const type = pathname.split('/')[1];
    const id = pathname.split('/')[2];

    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes'),
    );

    console.log(inProgressRecipes);
    if (inProgressRecipes) {
      const currentFinishedSteps = inProgressRecipes[type][id];
      if (inProgressRecipes[type][id] !== undefined) {
        setFinishedSteps(currentFinishedSteps);
      }
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

  const isStepFinished = (step) => finishedSteps.includes(step);

  const toggleFinishedStep = (step) => {
    if (isStepFinished(step)) {
      const updatedSteps = finishedSteps.filter(
        (finishedStep) => finishedStep !== step,
      );
      setFinishedSteps(updatedSteps);
      updateFinishedStepsOnLocalStorage(updatedSteps);
    } else {
      setFinishedSteps([...finishedSteps, step]);
      updateFinishedStepsOnLocalStorage([...finishedSteps, step]);
    }
  };

  const isRecipeFinished = useCallback(() => {
    const ingredients = getIngredients(recipe);
    const finishedStepsLength = finishedSteps.length;
    const ingredientsLength = ingredients.length;
    return finishedStepsLength === ingredientsLength;
  }, [finishedSteps, recipe]);

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
      doneDate: new Date().toISOString(),
      tags: recipe.strTags ? recipe.strTags.split(',') : [],
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
            {isRecipeStarted ? (
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
            ) : (
              <span>
                {ingredient.name}
                {' '}
                {ingredient.measure}
              </span>
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
