import React from 'react';
import PropTypes from 'prop-types';
import RecommendationsDrinks from './RecommendationsDrinks';
import RecommendationsMeals from './RecommendationsMeals';

function Carousel({ path }) {
  return (
    <div className="carousel">
      {path.includes('meals') ? <RecommendationsDrinks /> : <RecommendationsMeals />}
    </div>
  );
}

Carousel.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Carousel;
