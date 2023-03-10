import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LogoTitle from './header/LogoTitle';
import HeaderIcons from './header/HeaderIcons';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function Header({ title, printIcon = true }) {
  const [btnSearch, setBtnSearch] = useState(false);

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
      <nav className="flex flex-col sticky bg-yellow px-3" data-testid="header">
        <div className="flex py-1 justify-between items-center">
          <LogoTitle />
          <HeaderIcons handleClick={ handleClick } printIcon={ printIcon } />
        </div>
      </nav>
      <div className="py-2 px-3 flex flex-col space-y-1">
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
            className="py-1 px-2 border-[1px] border-blue rounded-md"
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
