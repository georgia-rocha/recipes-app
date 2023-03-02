import PropTypes from 'prop-types';
import React, { useMemo, useState, useEffect } from 'react';
import RecipesContext from './RecipesContext';

// Passa o contexto para os componentes filhos
export default function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState({
    meals: [],
    drinks: [],
  });

  // Busca as receitas da API, limitando a 12
  useEffect(() => {
    const fetchRecipes = async () => {
      const mealsResponse = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      const mealsData = await mealsResponse.json();

      const drinksResponse = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      );
      const drinksData = await drinksResponse.json();

      const maxRecipes = 12;

      setRecipes({
        meals: mealsData.meals.slice(0, maxRecipes),
        drinks: drinksData.drinks.slice(0, maxRecipes),
      });
    };
    fetchRecipes();
  }, []);

  const context = useMemo(
    () => ({
      recipes,
    }),
    [recipes],
  );

  return (
    <RecipesContext.Provider value={ context }>
      <div>{children}</div>
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
