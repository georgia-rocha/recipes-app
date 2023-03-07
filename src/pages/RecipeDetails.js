import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MealDetails from '../components/MealDetails';
import DrinkDetails from '../components/DrinkDetails';
import { fetchRecipesById } from '../helpers/fetchApi';

// Página de detalhes da receita
export default function RecipeDetails({ match }) {
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    const getRecipeDetails = async () => {
      const {
        params: { id },
        path,
      } = match;

      const type = path.includes('meals') ? 'meals' : 'drinks';
      const data = await fetchRecipesById(type, id);
      setRecipeDetails(data);
      console.log('data', data);
      console.log(`type: ${type}, id:${id}`);
    };
    getRecipeDetails();
  }, [match]);

  if (recipeDetails.idMeal) return <MealDetails recipe={ recipeDetails } />;

  return <DrinkDetails recipe={ recipeDetails } />;
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;
