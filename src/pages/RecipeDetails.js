import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MealDetails from '../components/MealDetails';
import DrinkDetails from '../components/DrinkDetails';
import { fetchRecipesById } from '../helpers/fetchApi';

// Página de detalhes da receita
export default function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    const getRecipeDetails = async () => {
      const id = pathname.split('/')[2];
      const data = await fetchRecipesById(pathname, id);

      if (pathname.includes('meals')) {
        setRecipeDetails(data?.meals[0]);
      } else {
        setRecipeDetails(data?.drinks[0]);
      }
    };
    getRecipeDetails();
  }, [pathname]);

  if (pathname.includes('meals')) return <MealDetails recipe={ recipeDetails } />;

  return <DrinkDetails recipe={ recipeDetails } />;
}
