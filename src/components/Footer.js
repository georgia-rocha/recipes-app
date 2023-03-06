import React from 'react';
import { Link } from 'react-router-dom';
import iconDrink from '../images/drinkIcon.svg';
import iconMeals from '../images/mealIcon.svg';
import '../style/footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="/drinks">
        <img
          src={ iconDrink }
          className="iconDrink"
          alt="iconDrink"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/meals">
        <img
          src={ iconMeals }
          className="iconMeal"
          alt="iconMeal"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
