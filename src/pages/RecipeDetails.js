import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchRecipesById } from '../helpers/fetchApi';

// Página de detalhes da receita
export default function RecipeDetails({ match }) {
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    async function getRecipeDetails() {
      const { path, params: { id } } = match;
      const type = path === '/meals/:id' ? 'meals' : 'drinks';
      const data = await fetchRecipesById(type, id);
      setRecipeDetails(data);
    }
    getRecipeDetails();
  }, [match]);

  return (
    <div>
      {recipeDetails}
    </div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
}.isRequired;
