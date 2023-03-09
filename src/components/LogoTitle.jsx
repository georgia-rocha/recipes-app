import React from 'react';
import recipesIcon from '../images/recipesIcon.svg';

export default function LogoTitle() {
  return (
    <div className="flex space-x-5 items-center">
      <img src={ recipesIcon } alt="" className="h-10 mt-1" />
      <div className="flex space-x-1 items-baseline text-blue h-fit mt-1">
        <h3 className="italic text-xl font-normal mb-0">RECIPES</h3>
        <span className="font-extrabold text-base">app</span>
      </div>
    </div>
  );
}
