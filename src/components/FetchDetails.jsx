import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeDetails from '../pages/RecipeDetails';
import { fetchRecipesById } from '../helpers/fetchApi';

export default function FetchDetails() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    const getRecipeDetails = async () => {
      const id = pathname.split('/')[2];
      const data = await fetchRecipesById(pathname, id);
      setRecipeDetails(data);
    };
    getRecipeDetails();
  }, [pathname]);

  console.log('recipeDetails', recipeDetails);
  console.log('pathname', pathname);
  console.log('id', pathname.split('/')[2]);

  return (
    <RecipeDetails recipeDetails={ recipeDetails } />
  );
}
