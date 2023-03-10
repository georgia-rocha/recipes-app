import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" printIcon={ false } />
      <h1>Favorite Recipes</h1>
      <Footer />
    </div>
  );
}
