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
    <div>
      <Header title="Profile" printIcon={ false } />
      <h3 data-testid="h3rofile-email">
        { emailLogin?.email }
      </h3>

      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ redirectDoneRecipes }
        >
          Done Recipes
        </button>
<<<<<<< HEAD
=======
      </Link>

      <Link to="/favorite-recipes">
>>>>>>> main-group-1-cria-tela-detalhes-2
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ redirectFavorites }
        >
          Favorite Recipes
        </button>
<<<<<<< HEAD
=======
      </Link>

      <Link to="/">
>>>>>>> main-group-1-cria-tela-detalhes-2
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
<<<<<<< HEAD
      </div>
=======
      </Link>

>>>>>>> main-group-1-cria-tela-detalhes-2
      <Footer />
    </>
  );
}
