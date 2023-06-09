import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { getApi } from '../helpers/fetchApi';

export default function SearchBar() {
  const { filter, setFilter, search, setRecipes } = useContext(RecipesContext);
  const history = useHistory();

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
    const {
      location: { pathname },
    } = history;
    console.log(pathname);
    const firstLetter = 'first-letter';
    const recipesPage = pathname.includes('meal') ? 'meal' : 'cocktail';
    if (search.length !== 1 && filter === firstLetter) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const endpointFirstLetter = `https://www.the${recipesPage}db.com/api/json/v1/1/${getFilter()}=${search}`;
    const responseApi = await getApi(endpointFirstLetter);
    const recipesObject = recipesPage === 'meal' ? 'meals' : 'drinks';
    const idRecipes = recipesPage === 'meal' ? 'idMeal' : 'idDrink';
    if (responseApi[recipesObject]?.length === 1) {
      history.push(
        `${recipesObject}/${responseApi[recipesObject][0][idRecipes]}`,
      );
    }
    setRecipes(responseApi);
  };

  return (
    <div className="flex flex-col items-center p-2 space-y-1">
      <div className="flex justify-center space-x-2" id="search-bar">
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
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
        className="bg-yellow rounded-lg px-3 text-blue text-sm h-8 w-20 mb-1"
      >
        Search
      </button>
    </div>
  );
}
