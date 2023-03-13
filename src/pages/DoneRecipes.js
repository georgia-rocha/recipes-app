import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DoneRecipesCards from '../components/DoneRecipesCards';
import DoneRecipesButtons from '../components/DoneRecipesButtons';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(getLocalStorage);
  }, []);

  return (
    <div>
      <Header title="Done Recipes" printIcon={ false } />
      <main className="mb-14">
        <DoneRecipesButtons setFilter={ setFilter } />
        <DoneRecipesCards doneRecipes={ doneRecipes } filter={ filter } />
      </main>
      <Footer />
    </div>
  );
}
