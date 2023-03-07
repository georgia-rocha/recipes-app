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
      console.log(data, ' data');
      console.log(id, pathname);
      if (pathname.includes('meals')) {
        setRecipeDetails(data?.meals[0]);
      } else {
        setRecipeDetails(data?.drinks[0]);
      }
    };
    getRecipeDetails();
  }, [pathname]);
  /*
  console.log('recipeDetails', recipeDetails);
  console.log('pathname', pathname);
  console.log('id', pathname.split('/')[2]); */

  if (pathname.includes('meals')) return <MealDetails recipe={ recipeDetails } />;

  return <DrinkDetails recipe={ recipeDetails } />;
}
