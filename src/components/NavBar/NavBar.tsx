import React from "react";
import { CATEGORIES } from "../../constants/index.tsx";
import { useCategory } from "../../context/CategoryContext.tsx";

const NavBar: React.FC = () => {
  const { setCategory, category: selectedCategory } = useCategory();

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <nav className="navbar">
      <h1 className="main-title">
        <span className="main-title__first">Recipe</span>
        <span className="main-title__second">App</span>
      </h1>
      <ul className="navbar__views">
        <li>
          <button
            className="navbar__item"
            onClick={() => handleCategory("home")}
            style={
              "home" === selectedCategory ? { color: "#D84A4A" } : {}
            }
          >
            Home
          </button>
        </li>
        {CATEGORIES?.map((navbarView) => {
          return (
            <li key={navbarView.id}>
              <button
                className="navbar__item"
                onClick={() => handleCategory(navbarView.id)}
                style={
                  navbarView.id === selectedCategory ? { color: "#D84A4A" } : {}
                }
              >
                {navbarView.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="navbar__home" onClick={() => handleCategory("home")}>
        <img src={"/assets/ic_home.png"} alt="icono home" />
      </div>
    </nav>
  );
};

export default NavBar;
