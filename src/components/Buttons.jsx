import PropTypes from 'prop-types';
import React from 'react';

// Renderiza botões com as categorias de comidas/bebidas e um botão para todas as categorias
export default function Buttons({ categories, handleClick }) {
  return (
    <div className="flex justify-around">
      {categories.map((category) => (
        <button
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ () => handleClick(category.strCategory) }
          type="button"
          className="bg-yellow-400 rounded-lg px-1.5 py-1 text-sm"
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
