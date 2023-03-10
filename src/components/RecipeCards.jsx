import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Esse componente renderiza as receitas de comidas e bebidas dinamicamente.
Ele recebe um array de objetos com as receitas e o tipo de receita (Meal ou Drink) e renderiza os cards com as informações de cada receita.
Clicar em um card direciona para a página de detalhes da receita. */
export default function RecipeCards({ recipes, recipeType }) {
  return (
    <div className="columns-2 px-2 mt-1 space-y-4">
      {recipes.map((recipe, index) => (
        <div
          key={ recipe[`id${recipeType}`] }
          data-testid={ `${index}-recipe-card` }
          className="p-2 rounded shadow"
        >
          <Link
            to={
              recipeType === 'Meal'
                ? `/meals/${recipe.idMeal}`
                : `/drinks/${recipe.idDrink}`
            }
            className="no-underline"
          >
            <img
              src={ recipe[`str${recipeType}Thumb`] }
              alt={ recipe[`str${recipeType}`] }
              data-testid={ `${index}-card-img` }
              className="rounded"
            />
            <h3
              data-testid={ `${index}-card-name` }
              className="text-center text-lg pt-2 text-blue"
            >
              {recipe[`str${recipeType}`]}
            </h3>
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
