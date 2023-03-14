import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function DoneRecipesCards({ doneRecipes, filter }) {
  const isMeal = (type) => type === 'meal';

  const filterRecipes = (recipe) => {
    if (filter === 'meals') return isMeal(recipe.type);
    if (filter === 'drinks') return !isMeal(recipe.type);
    return true;
  };

  return (
    <div>
      {doneRecipes
        .filter(filterRecipes)
        .map(
          (
            {
              id,
              category,
              alcoholicOrNot,
              doneDate,
              image,
              name,
              nationality,
              tags,
              type,
            },
            index,
          ) => (
            <div key={ id }>
              <Link to={ `/${type === 'meal' ? 'meals' : 'drinks'}/${id}` }>
                <img
                  src={ image }
                  alt={ name }
                  data-testid={ `${index}-horizontal-image` }
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
              </Link>
              <h4 data-testid={ `${index}-horizontal-top-text` }>
                {isMeal(type)
                  ? `${nationality} - ${category}`
                  : `${alcoholicOrNot}`}
              </h4>
              <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
              <div>
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareButton
                testId={ `${index}-horizontal-share-btn` }
                type={ type }
                id={ id }
              />
            </div>
          ),
        )}
    </div>
  );
}

DoneRecipesCards.propTypes = {
  doneRecipes: PropTypes.arrayOf(PropTypes.shape({})),
  filter: PropTypes.string,
}.isRequired;
