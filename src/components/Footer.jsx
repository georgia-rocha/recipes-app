import React from 'react';
import { Link } from 'react-router-dom';
import iconDrink from '../images/drinkIcon.svg';
import iconMeals from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="fixed bottom-0 bg-blue w-full flex p-2 space-x-5 justify-center"
    >
      <Link to="/drinks">
        <img
          src={ iconDrink }
          className="h-7"
          alt="iconDrink"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/meals">
        <img
          src={ iconMeals }
          className="h-7"
          alt="iconMeal"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </footer>
  );
}
