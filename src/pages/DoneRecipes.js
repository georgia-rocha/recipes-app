import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import allRecipesIcon from '../images/allRecipesIcon.svg';
import DoneRecipesCards from '../components/DoneRecipesCards';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(getLocalStorage);
  }, []);

  return (
    <div>
      <Header title="Done Recipes" printIcon={ false } />
      <main className="mb-14">
        <div>
          <button type="button" data-testid="filter-by-all-btn">
            <img src={ allRecipesIcon } alt="All" />
            <p>All</p>
          </button>
          <button type="button" data-testid="filter-by-meal-btn">
            <img src={ mealIcon } alt="Meals" />
            <p>Meals</p>
          </button>
          <button type="button" data-testid="filter-by-drink-btn">
            <img src={ drinkIcon } alt="Drink" />
            <p>Drinks</p>
          </button>
        </div>
        <DoneRecipesCards doneRecipes={ doneRecipes } />
      </main>
      <Footer />
    </div>
  );
}
