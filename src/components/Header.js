import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../style/header.css';

function Header({ title, printIcon = true }) {
  const [btnSearch, setBtnSearch] = useState(false);

  const handleClick = () => {
    if (btnSearch === true) {
      setBtnSearch(false);
    } else {
      setBtnSearch(true);
    }
  };

  return (
    <header className="header" data-testid="header">
      <div className="header-container">
        <h2>
          RECIPES
          <span>app</span>
        </h2>
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profileIcon" />
        </Link>
        {
          printIcon && (
            <button
              type="button"
              className="btn-search"
              onClick={ () => handleClick() }
            >
              <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
            </button>)
        }
      </div>
      <h1
        data-testid="page-title"
      >
        { title }
      </h1>
      {
        btnSearch && <input type="text" data-testid="search-input" />
      }
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  printIcon: PropTypes.bool.isRequired,
};

export default Header;
