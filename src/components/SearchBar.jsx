import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const { module, setModule, search, recipes, setRecipes } = useContext(RecipesContext);

  const getApi = async (endpoint) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };

  const handleClickMeals = async () => {
    const firstLetter = 'first-letter';
    // let cloneRecipes = recipes;
    if (search.length > 1 && module === firstLetter) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (search.length === 1 && module === firstLetter) {
      const endpointfirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
      console.log('oi');
      const responseApi = await getApi(endpointfirstLetter);
      console.log(responseApi);
      setRecipes(...recipes, recipes.drinks(responseApi));
    }
    console.log(recipes);
  };

  return (
    <div>
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name={ module }
          value="ingredient"
          data-testid="ingredient-search-radio"
          checked={ module === 'ingredient' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Ingredientes
      </label>
      <label htmlFor="Name">
        <input
          type="radio"
          id="Name"
          name={ module }
          value="Name"
          data-testid="name-search-radio"
          checked={ module === 'Name' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          id="first-letter"
          name={ module }
          value="first-letter"
          data-testid="first-letter-search-radio"
          checked={ module === 'first-letter' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClickMeals }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
