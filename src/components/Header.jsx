import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

import LogoTitle from './header/LogoTitle';
import HeaderIcons from './header/HeaderIcons';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';


export default function Header({ title, printIcon = true }) {
  const [btnSearch, setBtnSearch] = useState(false);
  const { setSearch } = useContext(RecipesContext);

  const handleClick = () => {
    if (btnSearch === true) {
      setBtnSearch(false);
    } else {
      setBtnSearch(true);
    }
  };

  const displayTitleIcon = (type) => {
    switch (type) {
    case 'Meals':
      return <img src={ mealIcon } alt="meals icon" className="h-10 mt-2" />;

    case 'Drinks':
      return <img src={ drinkIcon } alt="drinks icon" className="h-10 mt-2" />;

    default:
      break;
    }
  };

  return (
    <header>
      <nav
        className="flex flex-col fixed top-0 bg-yellow px-3 w-full"
        data-testid="header"
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

        <div className="flex py-1 justify-between items-center">
          <LogoTitle />
          <HeaderIcons handleClick={ handleClick } printIcon={ printIcon } />
        </div>
      </nav>
      <div className="py-3 px-3 flex flex-col space-y-1 -mb-6 mt-12">
        {displayTitleIcon(title)}
        <h1
          data-testid="page-title"
          className="text-center text-blue uppercase font-bold tracking-wider p-2"
        >
          {title}
        </h1>
        {btnSearch && (
          <input
            type="text"
            data-testid="search-input"
            className="py-1 px-2 border-[1px] border-blue rounded-md mb-3"
          />
        )}
      </div>

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  printIcon: PropTypes.bool,
};
