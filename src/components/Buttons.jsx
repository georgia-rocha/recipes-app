import PropTypes from 'prop-types';
import React from 'react';

// Renderiza botões com as categorias de comidas/bebidas
export default function Buttons({ categories, handleClick }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ () => handleClick(category.strCategory) }
          type="button"
        >
          {category.strCategory}
        </button>
      ))}
      <button
        data-testid="All-category-filter"
        onClick={ () => handleClick('All') }
        type="button"
      >
        All
      </button>
    </div>
  );
}

Buttons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  handleClick: PropTypes.func,
}.isRequired;
