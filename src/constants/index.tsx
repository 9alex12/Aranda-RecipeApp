import React from "react";
import { NavbarView } from "../types/globalTypes";

import VegetarianIcon from "../components/VegetarianIcon/VegetarianIcon";
import MainIcon from "../components/MainIcon/MainIcon";
import CakeIcon from "../components/CakeIcon/CakeIcon";
import FastFoodIcon from "../components/FastFoodIcon/FastFoodIcon";
import KidsIcon from "../components/KidsIcon/KidsIcon";
import SoupsIcon from "../components/SoupsIcon/SoupsIcon";

export const CATEGORIES: NavbarView[] = [
  {
    id: "salad",
    text: "Vegetarianos",
    shortText: "Vegetarianos",
    image: <VegetarianIcon />,
  },
  {
    id: "main course",
    text: "Platos Principales",
    shortText: "Principales",
    image: <MainIcon />,
  },
  {
    id: "dessert",
    text: "Postres",
    shortText: "Postres",
    image: <CakeIcon />,
  },
  {
    id: "snack",
    text: "Comida Rápida",
    shortText: "Rápida",
    image: <FastFoodIcon />,
  },
  {
    id: "fingerfood",
    text: "Menú Niños",
    shortText: "Niños",
    image: <KidsIcon />,
  },
  {
    id: "soup",
    text: "Sopas",
    shortText: "Sopas",
    image: <SoupsIcon />,
  },
];
