import React from "react";
import { CATEGORIES } from "../../constants/index.tsx";
import { useCategory } from "../../context/CategoryContext.tsx";

const Categories: React.FC = () => {

  const { setCategory, category: selectedCategory } = useCategory();

  return (
    <ul className="categories">
      {CATEGORIES.map((category) => {
        return (
          <li
            key={category.id}
            className="categories__card"
            onClick={() => setCategory(category.id)}
            style={
              category.id === selectedCategory
                ? { color: "#D84A4A", border: "2px solid #D84A4A" }
                : {}
            }
          >
            {category.image}
            <span>{category.shortText}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
