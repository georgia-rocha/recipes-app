export const detailsMeal = (dataMeal) => {
  const mealDetail = {
    id: dataMeal.idMeal,
    name: dataMeal.strMeal,
    category: dataMeal.strCategory,
    area: dataMeal.strArea,
    type: 'meal',
    image: dataMeal.strMealThumb,
    nationality: dataMeal.strArea,
    alcoholic: '',
    youtube: dataMeal.strYoutube,
  };
  return mealDetail;
};

export const detailsDrink = (dataDrink) => {
  const drinkDetail = {
    id: dataDrink.idDrink,
    name: dataDrink.strDrink,
    category: dataDrink.strCategory,
    alcoholic: dataDrink.strAlcoholic,
    type: 'drink',
    image: dataDrink.strDrinkThumb,
    nationality: '',
    youtube: dataDrink.strYoutube,
  };
  return drinkDetail;
};
