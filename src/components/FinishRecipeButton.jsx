import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function FinishRecipeButton({ isDisabled }) {
  const history = useHistory();

  return (
    <button
      data-testid="finish-recipe-btn"
      disabled={ isDisabled }
      onClick={ () => history.push('/done-recipes') }
    >
      Finish
    </button>
  );
}

FinishRecipeButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};
