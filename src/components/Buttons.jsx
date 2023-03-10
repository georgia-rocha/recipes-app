import PropTypes from 'prop-types';
import React from 'react';

// Renderiza botões com as categorias de comidas/bebidas e um botão para todas as categorias
export default function Buttons({ categories, handleClick }) {
  return (
    <div className="flex justify-around py-2 flex-wrap -mb-1">
      {categories.map((category) => (
        <button
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ () => handleClick(category.strCategory) }
          type="button"
          className="bg-yellow rounded-lg px-2 text-blue text-sm h-8 mb-1"
        >
          {category.strCategory}
        </button>
      ))}
      <button
        data-testid="All-category-filter"
        onClick={ () => handleClick('All') }
        type="button"
        className="bg-yellow rounded-lg px-3 text-blue text-sm h-8"
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
