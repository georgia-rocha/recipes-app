import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipesProvider from './context/RecipesProvider';

// import rockGlass from './images/rockGlass.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      {/* <div className="meals">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
        </object>
      </div> */}
      <RecipesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/meals/:id" component={ RecipeDetails } />
            <Route exact path="/drinks/:id" component={ RecipeDetails } />
            <Route exact path="/meals" component={ Recipes } />
            <Route exact path="/drinks" component={ Recipes } />
          </Switch>
        </BrowserRouter>
      </RecipesProvider>
    </>
  );
}
