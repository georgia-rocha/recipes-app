import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const { filter, setFilter, search, setRecipes } = useContext(RecipesContext);
  const history = useHistory();

  const getApi = async (endpoint) => {
    const response = await fetch(endpoint);
    console.log(response);
    const data = await response.json();
    return data;
  };

  const getFilter = () => {
    switch (filter) {
    case 'Name':
      return 'search.php?s';
    case 'ingredient':
      return 'filter.php?i';
    default:
      return 'search.php?f';
    }
  };

  const handleClick = async () => {
    const { location: { pathname } } = history;
    const firstLetter = 'first-letter';
    const recipesPage = pathname.includes('meal') ? 'meal' : 'cocktail';
    if (search.length !== 1 && filter === firstLetter) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const endpointFirstLetter = `https://www.the${recipesPage}db.com/api/json/v1/1/${getFilter()}=${search}`;
    const responseApi = await getApi(endpointFirstLetter);
    console.log(responseApi);
    setRecipes(responseApi);
  };

  return (
    <div>
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name={ filter }
          value="ingredient"
          data-testid="ingredient-search-radio"
          checked={ filter === 'ingredient' }
          onChange={ ({ target: { value } }) => setFilter(value) }
        />
        Ingredientes
      </label>
      <label htmlFor="Name">
        <input
          type="radio"
          id="Name"
          name={ filter }
          value="Name"
          data-testid="name-search-radio"
          checked={ filter === 'Name' }
          onChange={ ({ target: { value } }) => setFilter(value) }
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          id="first-letter"
          name={ filter }
          value="first-letter"
          data-testid="first-letter-search-radio"
          checked={ filter === 'first-letter' }
          onChange={ ({ target: { value } }) => setFilter(value) }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
