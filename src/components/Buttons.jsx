import PropTypes from 'prop-types';
import React from 'react';

// Renderiza botões com as categorias de comidas/bebidas
export default function Buttons({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
