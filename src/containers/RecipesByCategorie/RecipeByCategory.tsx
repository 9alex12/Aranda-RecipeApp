import React from "react";
import { useCategory } from "../../context/CategoryContext";
import { useCategoryData } from "../../api/recipesAPI";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipesByCategory:React.FC = () => {
  const { category } = useCategory();
  const { data, isLoading, error } = useCategoryData(category);

  if (isLoading) return <div className="loader">Cargando...</div>;
  if (error) return <div>Error al cargar los datos.</div>;

  return (
    <div>
      <h3 className="text-recipes">Recetas favoritas</h3>
      <ul className="recipes">
        {data?.results?.map(
          (
            item: { id: string; title: string; image: string },
            index: number
          ) => {
            const [textOne,...textTwo] = item.title.split(' ')
            const recipeData = {
              id: item.id,
              textOne,
              textTwo:textTwo.join(' '),
              srcImg: item.image,
              rate: 5.0,
              portions: 8,
              preparationTime: 12,
              difficulty: "media",
            };
            return (
              <React.Fragment key={index}>
                <RecipeCard recipeData={recipeData} />
              </React.Fragment>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default RecipesByCategory;
