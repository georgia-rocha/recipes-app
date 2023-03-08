import PropTypes from 'prop-types';
import React, { useMemo, useState, useEffect } from 'react';
import RecipesContext from './RecipesContext';
import { fetchRecipes, fetchCategories } from '../helpers/fetchApi';
import { FIRST_12_RECIPES, FIRST_5_CATEGORIES } from '../helpers/constants';

// Passa o contexto para os componentes filhos
export default function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState({
    meals: [],
    drinks: [],
  });
  const [categories, setCategories] = useState({
    meals: [],
    drinks: [],
  });
  const [search, setSearch] = useState('');
  const [module, setModule] = useState('');

  useEffect(() => {
    // Busca as receitas da API, limitando a 12
    const getRecipes = async () => {
      const { mealsData, drinksData } = await fetchRecipes();

      setRecipes({
        meals: mealsData.meals.slice(0, FIRST_12_RECIPES),
        drinks: drinksData.drinks.slice(0, FIRST_12_RECIPES),
      });
    };

    // Busca as categorias da API, limitando a 5
    const getCategories = async () => {
      const { mealsData, drinksData } = await fetchCategories();
      setCategories({
        meals: mealsData.meals.slice(0, FIRST_5_CATEGORIES),
        drinks: drinksData.drinks.slice(0, FIRST_5_CATEGORIES),
      });
    };

    getRecipes();
    getCategories();
  }, []);

  const context = useMemo(
    () => ({
      recipes,
      categories,
      search,
      setSearch,
      module,
      setModule,
    }),
    [recipes, categories, search, setSearch, module, setModule],
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
