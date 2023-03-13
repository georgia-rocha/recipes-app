import PropTypes from 'prop-types';
import React from 'react';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import allRecipesIcon from '../images/allRecipesIcon.svg';

export default function DoneRecipesButtons({ setFilter }) {
  return (
    <div>
      <button
        onClick={ () => setFilter('meals') }
        type="button"
        data-testid="filter-by-meal-btn"
      >
        <img src={ mealIcon } alt="Meals" />
        <p>Meals</p>
      </button>
      <button
        onClick={ () => setFilter('drinks') }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        <img src={ drinkIcon } alt="Drink" />
        <p>Drinks</p>
      </button>
      <button
        onClick={ () => setFilter('all') }
        type="button"
        data-testid="filter-by-all-btn"
      >
        <img src={ allRecipesIcon } alt="All" />
        <p>All</p>
      </button>
    </div>
  );
}

DoneRecipesButtons.propTypes = {
  setFilter: PropTypes.func,
}.isRequired;
