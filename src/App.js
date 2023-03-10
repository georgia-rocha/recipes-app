import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeInProgress from './pages/RecipeInProgress';

export default function App() {
  return (
    <RecipesProvider>
      <LoginProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route
            exact
            path="/meals/:id/in-progress"
            component={ RecipeInProgress }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ RecipeInProgress }
          />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/meals" component={ Recipes } />
          <Route exact path="/drinks" component={ Recipes } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </LoginProvider>
    </RecipesProvider>
  );
}
