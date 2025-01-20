import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import type { newRecipe } from "../../types/globalTypes";

const newRecipes: newRecipe[] = [
  {
    id: "1_new_recipe",
    textOne: "Ojingeo",
    textTwo: "Muchim",
    srcImg: "/assets/ic_ojingeo_muchim.png",
    rate: 5.0,
    portions: 4,
    preparationTime: 10,
    difficulty: 'fácil',
  },
  {
    id: "2_new_recipe",
    textOne: "Cola",
    textTwo: "Chicken",
    srcImg: "/assets/ic_cola_chicken.png",
    rate: 5.0,
    portions: 8,
    preparationTime: 12,
    difficulty: 'alta',
  },
  {
    id: "3_new_recipe",
    textOne: "Roasted",
    textTwo: "Carrot",
    srcImg: "/assets/ic_roasted_carrot.png",
    rate: 4.5,
    portions: 4,
    preparationTime: 11,
    difficulty: 'media',
  },
  {
    id: "4_new_recipe",
    textOne: "Sweet",
    textTwo: "Cherries",
    srcImg: "/assets/ic_cherries.png",
    rate: 4.0,
    portions: 4,
    preparationTime: 12,
    difficulty: 'fácil',
  },
];

const RecipesCarousel: React.FC = () => {
  return (
    <section className="new-recipes">
      <span>Nuevas Recetas</span>
      <ul className="new-recipes__carousel">
        {newRecipes.map((newRecipe) => {
          return <RecipeCard key={newRecipe.id} recipeData={newRecipe} />;
        })}
      </ul>
    </section>
  );
};

export default RecipesCarousel;
