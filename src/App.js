import React from 'react';
import CategoriesContainerComponent from './components/CategoryList/CategoriesContainerComponent';
import categoriesInfo from './data/data';
const App = () => {
  return <CategoriesContainerComponent categoriesInfo={categoriesInfo} />;
};

export default App;
