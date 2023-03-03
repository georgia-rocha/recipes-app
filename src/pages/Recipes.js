import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import RecipeCards from '../components/RecipeCards';
import Buttons from '../components/Buttons';
import { fetchRecipesByCategory } from '../helpers/fetchApi';
import { FIRST_12_RECIPES } from '../helpers/constants';

// Renderiza as receitas e categorias de acordo com o path
export default function Recipes({ match }) {
  const { recipes, categories } = useContext(RecipesContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'All') return;

    const getRecipesByCategory = async () => {
      if (match.path === '/meals') {
        const mealsData = await fetchRecipesByCategory(
          'meals',
          selectedCategory,
        );
        setSelectedRecipes(mealsData.meals.slice(0, FIRST_12_RECIPES));
      } else {
        const drinksData = await fetchRecipesByCategory(
          'drinks',
          selectedCategory,
        );
        setSelectedRecipes(drinksData.drinks.slice(0, FIRST_12_RECIPES));
      }
    };
    getRecipesByCategory();
  }, [selectedCategory, match.path]);

  const handleClick = async (category) => {
    if (selectedCategory === 'All' || selectedCategory !== category) {
      setSelectedCategory(category);
      return;
    }
    setSelectedCategory('All');
  };

  return (
    <div>
      {match.path === '/meals' ? (
        <>
          <Buttons categories={ categories.meals } handleClick={ handleClick } />
          <RecipeCards
            recipes={
              selectedCategory !== 'All' ? selectedRecipes : recipes.meals
            }
            recipeType="Meal"
          />
        </>
      ) : (
        <>
          <Buttons categories={ categories.drinks } handleClick={ handleClick } />
          <RecipeCards
            recipes={
              selectedCategory !== 'All' ? selectedRecipes : recipes.drinks
            }
            recipeType="Drink"
          />
        </>
      )}
    </div>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;
