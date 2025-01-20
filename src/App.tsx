import React from "react";
import "./app.scss";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Categories from "./containers/Categories/Categories";
import RecipesCarousel from "./containers/RecipeCarousel/RecipesCarousel";
import Footer from "./components/Footer/Footer";
import RecipesByCategory from "./containers/RecipesByCategorie/RecipeByCategory";

import { useCategory } from "./context/CategoryContext";

const App = (): JSX.Element => {
  const { category: selectedCategory } = useCategory();

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Hero />
        <Categories />
        {selectedCategory === "home" ? (
          <RecipesCarousel />
        ) : (
          <RecipesByCategory />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
