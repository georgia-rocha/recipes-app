import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, printIcon = true }) {
  const [btnSearch, setBtnSearch] = useState(false);
  const { setSearch } = useContext(RecipesContext);

  const handleClick = () => {
    if (btnSearch === true) {
      setBtnSearch(false);
    } else {
      setBtnSearch(true);
    }
  };

  return (
    <header className="w-full h-20 flex flex-col sticky" data-testid="header">
      <div className="flex h-14 justify-between">
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
              className=""
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
        btnSearch && (
          <input
            type="text"
            data-testid="search-input"
            onChange={ ({ target: { value } }) => setSearch(value) }
          />)
      }
      <SearchBar />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  printIcon: PropTypes.bool.isRequired,
};

export default Header;
