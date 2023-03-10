import PropTypes from 'prop-types';
import React from 'react';

export default function FinishRecipeButton({ isDisabled, finishRecipe }) {
  return (
    <button
      data-testid="finish-recipe-btn"
      disabled={ isDisabled }
      onClick={ finishRecipe }
    >
      Finish
    </button>
  );
}

FinishRecipeButton.propTypes = {
  isDisabled: PropTypes.bool,
  finishRecipe: PropTypes.func,
}.isRequired;
