import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Esse componente renderiza as receitas de comidas e bebidas dinamicamente.
Ele recebe um array de objetos com as receitas e o tipo de receita (Meal ou Drink) e renderiza os cards com as informações de cada receita.
Clicar em um card direciona para a página de detalhes da receita. */
export default function RecipeCards({ recipes, recipeType }) {
  if (!recipes) {
    return global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }
  const onze = 11;
  return (
    <div>
      {recipes.filter((_recipe, index) => index <= onze).map((recipe, index) => (
        <div
          key={ recipe[`id${recipeType}`] }
          data-testid={ `${index}-recipe-card` }
        >
          <Link
            to={
              recipeType === 'Meal'
                ? `/meals/${recipe.idMeal}`
                : `/drinks/${recipe.idDrink}`
            }
          >
            <img
              src={ recipe[`str${recipeType}Thumb`] }
              alt={ recipe[`str${recipeType}`] }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              {recipe[`str${recipeType}`]}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  recipeType: PropTypes.string,
}.isRequired;
