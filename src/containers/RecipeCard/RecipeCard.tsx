import React from "react";
import type { newRecipe } from "../../types/globalTypes";

import Raiting from "../../components/RaitingIcon/Raiting";
import Favorite from "../../components/FavoriteIcon/Favorite";
import PlateIcon from "../../components/PlateIcon/PlateIcon";
import ClockIcon from "../../components/ClockIcon/ClockIcon";
import ChefIcon from "../../components/ChefIcon/ChefIcon";

interface RecipeCardProps {
  recipeData: newRecipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipeData }) => {
  return (
    <li className="recipe-card">
      <img
        src={recipeData.srcImg}
        alt={`${recipeData.textOne} ${recipeData.textTwo}`}
        className="recipe-card__img"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />
      <section className="recipe-card__info">
        <p className="recipe-card__title">
          {recipeData.textOne} <span>{recipeData.textTwo}</span>
        </p>
        <div className="recipe-card__raiting">
          <p>
            <Raiting />
            <span>{recipeData.rate.toFixed(1)}</span>
          </p>
          <Favorite />
        </div>
      </section>
      <section className="recipe-card-turned">
        <p className="recipe-card-turned__description">
          <PlateIcon />
          <span className="recipe-card-turned__description-title">
            Tamaño de la porción
          </span>
          <span className="recipe-card-turned__description-value">{`${4} raciones`}</span>
          <ClockIcon />
          <span className="recipe-card-turned__description-title">
            Tiempo de preparación
          </span>
          <span className="recipe-card-turned__description-value">{`${10} minutos`}</span>
          <ChefIcon />
          <span className="recipe-card-turned__description-title">
            Dificultad
          </span>
          <span className="recipe-card-turned__description-value">{`${"facil"}`}</span>
        </p>
      </section>
    </li>
  );
};

export default RecipeCard;
