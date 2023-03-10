import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  const emailLogin = JSON.parse(localStorage.getItem('user'));
  console.log(emailLogin);

  const redirectDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const redirectFavorites = () => {
    history.push('/favorite-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <div className="mb-14">
        <Header title="Profile" printIcon={ false } />
        <p data-testid="profile-email">{emailLogin?.email}</p>

        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ redirectDoneRecipes }
          >
            Done Recipes
          </button>
        </Link>

        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ redirectFavorites }
          >
            Favorite Recipes
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleLogout }
          >
            Logout
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
