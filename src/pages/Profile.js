import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
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
    <div>
      <Header title="Profile" printIcon={ false } />
      <p data-testid="profile-email">{ emailLogin?.email }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ redirectDoneRecipes }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ redirectFavorites }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
