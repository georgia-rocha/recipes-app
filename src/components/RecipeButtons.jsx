import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipeButtons({ recipe }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    const isFavoriteRecipe = favoriteRecipes.some(
      (favoriteRecipe) => favoriteRecipe.id === recipe.idMeal
        || favoriteRecipe.id === recipe.idDrink,
    );

    setIsFavorite(isFavoriteRecipe);
  }, [recipe]);

  const copyLink = () => {
    copy(window.location.href);
    setIsLinkCopied(true);
  };

  const toggleRecipesAsFavorite = () => {
    if (isFavorite) {
      const favoriteRecipes = JSON.parse(
        localStorage.getItem('favoriteRecipes'),
      );

      const newFavoriteRecipes = favoriteRecipes.filter(
        (favoriteRecipe) => favoriteRecipe.id !== recipe.idMeal
          && favoriteRecipe.id !== recipe.idDrink,
      );

      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify(newFavoriteRecipes),
      );
      setIsFavorite(false);
      return;
    }
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    const favoriteRecipe = {
      id: recipe.idMeal || recipe.idDrink,
      type: recipe.idMeal ? 'meal' : 'drink',
      nationality: recipe.strArea || '',
      category: recipe.strCategory || '',
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe.strMeal || recipe.strDrink,
      image: recipe.strMealThumb || recipe.strDrinkThumb,
    };

    favoriteRecipes.push(favoriteRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    setIsFavorite(true);
  };

  return (
    <>
      <div>
        <button type="button" onClick={ copyLink }>
          <img src={ shareIcon } alt="" data-testid="share-btn" />
          <p>Compartilhar</p>
        </button>
        <button type="button" onClick={ toggleRecipesAsFavorite }>
          <img
            src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
            alt=""
            data-testid="favorite-btn"
          />
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
