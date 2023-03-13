import React from 'react';
import recipesIcon from '../../images/recipesIcon.svg';

export default function LogoTitle() {
  return (
    <div className="flex space-x-5 items-center">
      <img src={ recipesIcon } alt="" className="h-10 my-1" />
      <div className="flex flex-col text-blue h-fit -space-y-2">
        <h3 className="text-xl font-normal mb-0"><em>RECIPES</em></h3>
        <span className="font-extrabold text-base mb-0.5">app</span>
      </div>
    </div>
  );
}
