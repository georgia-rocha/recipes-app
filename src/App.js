import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <div className="meals">
      <LoginProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Meals } />
        </Switch>
      </LoginProvider>
    </div>
  );
}

export default App;
