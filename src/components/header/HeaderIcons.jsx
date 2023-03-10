import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function HeaderIcons({ printIcon = true, handleClick }) {
  return (
    <div className="flex space-x-5">
      {printIcon && (
        <button type="button" onClick={ handleClick }>
          <img
            src={ searchIcon }
            alt="searchIcon"
            data-testid="search-top-btn"
            className="h-7"
          />
        </button>
      )}
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
          className="h-7"
        />
      </Link>
    </div>
  );
}

HeaderIcons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  printIcon: PropTypes.bool,
};
