import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/buttonStart.scss';
import { fetchDrinks12Cards } from '../helpers/fetchApi';

// Recomendação de Drinks para o componente Carousel
const maxRecommendations = 6;

export default function RecommendationsDrinks() {
  const [drinks, setDrink] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDrinks12Cards();
      const dataSlice = data.slice(0, maxRecommendations);
      setDrink(dataSlice);
    };
    fetch();
  }, []);

  const IMAGE_TWO = drinks.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, []);

  return (
    <div>
      <div className="carousel-container">
        <Carousel>
          {IMAGE_TWO.map((image, index) => (
            <Carousel.Item key={ index }>
              <div className="d-flex justify-content-around">
                <div data-testid={ `${index * 2}-recommendation-card` }>
                  <img
                    className="d-block w-45"
                    src={ image[0].strDrinkThumb }
                    alt={ image[0].strDrink }
                  />
                  <h5 data-testid={ `${index * 2}-recommendation-title` }>
                    {image[0].strDrink}
                  </h5>
                </div>
                <div data-testid={ `${index * 2 + 1}-recommendation-card` }>
                  <img
                    className="d-block w-45"
                    src={ image[1].strDrinkThumb }
                    alt={ image[1].strDrink }
                  />
                  <h5 data-testid={ `${index * 2 + 1}-recommendation-title` }>
                    {image[1].strDrink}
                  </h5>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="btn btn-start-recipe btn-start"
          >
            Start Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
