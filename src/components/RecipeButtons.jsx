import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/favoriteIcon.svg';

export default function RecipeButtons({ recipe }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  console.table(recipe);

  const copyLink = () => {
    copy(window.location.href);
    setIsLinkCopied(true);
  };

  const saveRecipeAsFavorite = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    const favoriteRecipe = {
      id: recipe.idMeal || recipe.idDrink,
      type: recipe.idMeal ? 'meal' : 'drink',
      nationality: recipe.strAre || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
    };

    favoriteRecipes.push(favoriteRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  };

  return (
    <>
      <div>
        <button type="button" onClick={ copyLink }>
          <img src={ shareIcon } alt="" data-testid="share-btn" />
          <p>Compartilhar</p>
        </button>
        <button type="button" onClick={ saveRecipeAsFavorite }>
          <img src={ favoriteIcon } alt="" data-testid="favorite-btn" />
          <p>Favoritar</p>
        </button>
      </div>
      {isLinkCopied && <p>Link copied!</p>}
    </>
  );
}

RecipeButtons.propTypes = {
  recipe: PropTypes.shape({}),
}.isRequired;
