import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Redirect, useHistory } from 'react-router-dom';
import { fetchDrinks12Cards } from '../helpers/fetchApi';
import '../styles/buttonStart.scss';

const maxRecommendations = 6;

function RecommendationsDrinks() {
  const [drinks, setDrink] = useState([]);
  const [recipeInProgress, setRecipeInProgress] = useState(null);
  const [recipeDone, setRecipeDone] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDrinks12Cards();
      const dataSlice = data.slice(0, maxRecommendations);
      setDrink(dataSlice);
    };
    fetch();
  }, []);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes) {
      doneRecipes.forEach((recipe) => {
        if (recipe.id === drinks[0]?.idDrink) {
          setRecipeDone(true);
        }
      });
    }

    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes) {
      const recipeInProgressId = inProgressRecipes.cocktails[drinks[0].idDrink];
      if (recipeInProgressId) {
        setRecipeInProgress(recipeInProgressId);
      }
    }
  }, [drinks]);

  const IMAGE_TWO = drinks.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, []);

  const handleStartRecipe = () => {
    if (recipeInProgress) {
      history.push(`/bebidas/${drinks[0].idDrink}/in-progress`);
    } else {
      const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
|| {};
      inProgressRecipes.cocktails = { ...inProgressRecipes.cocktails,
        [drinks[0].idDrink]: Date.now() };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      history.push(`/bebidas/${drinks[0].idDrink}/in-progress`);
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel>
          {IMAGE_TWO.map((image, index) => (
            <Carousel.Item
              key={ index }
            >
              <div className="d-flex justify-content-around">
                <div data-testid={ `${(index * 2)}-recommendation-card` }>
                  <img
                    className="d-block w-45"
                    src={ image[0].strDrinkThumb }
                    alt={ image[0].strDrink }
                  />
                  <h5
                    data-testid={ `${(index * 2)}-recommendation-title` }
                  >
                    {image[0].strDrink}

                  </h5>
                </div>
                <div data-testid={ `${(index * 2) + 1}-recommendation-card` }>
                  <img
                    className="d-block w-45"
                    src={ image[1].strDrinkThumb }
                    alt={ image[1].strDrink }
                  />
                  <h5
                    data-testid={ `${(index * 2) + 1}-recommendation-title` }
                  >
                    {image[1].strDrink}

                  </h5>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {recipeDone ? null : (
          <div>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="btn btn-start-recipe btn-start"
              onClick={ handleStartRecipe }
            >
              {recipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
            </button>
          </div>
        )}
        {recipeInProgress && (
          <Redirect to={ `/bebidas/${drinks[0].idDrink}/in-progress` } />
        )}
      </div>
    </div>
  );
}
export default RecommendationsDrinks;
