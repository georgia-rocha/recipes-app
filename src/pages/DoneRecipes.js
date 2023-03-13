import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" printIcon={ false } />
      <h1>Done Recipes</h1>
      <Footer />
    </div>
  );
}
