import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// const mockData = {
//   "results": [
//       {
//           "id": 645479,
//           "title": "Green Monster Ice Pops",
//           "image": "https://img.spoonacular.com/recipes/645479-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 637016,
//           "title": "Caramel Peanut Fudge Cake",
//           "image": "https://img.spoonacular.com/recipes/637016-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 636676,
//           "title": "Cacao chia pudding with avocado mousse",
//           "image": "https://img.spoonacular.com/recipes/636676-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 639177,
//           "title": "Chocolate Pudding - Rave Diet",
//           "image": "https://img.spoonacular.com/recipes/639177-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 643450,
//           "title": "Fresh Cherry Scones",
//           "image": "https://img.spoonacular.com/recipes/643450-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 658007,
//           "title": "Raw Vegan Chocolate and Raspberry Cake",
//           "image": "https://img.spoonacular.com/recipes/658007-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 632639,
//           "title": "Applesauce Carrot Cake Muffins",
//           "image": "https://img.spoonacular.com/recipes/632639-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 665303,
//           "title": "Wholemeal Cake",
//           "image": "https://img.spoonacular.com/recipes/665303-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 715569,
//           "title": "Strawberry Cheesecake Chocolate Crepes",
//           "image": "https://img.spoonacular.com/recipes/715569-312x231.jpg",
//           "imageType": "jpg"
//       },
//       {
//           "id": 642780,
//           "title": "Fig and Walnut Pudding",
//           "image": "https://img.spoonacular.com/recipes/642780-312x231.jpg",
//           "imageType": "jpg"
//       }
//   ],
//   "offset": 0,
//   "number": 10,
//   "totalResults": 984
// }

const fetchData = async (type: string) => {
  const { data } = await axios.get(
    `${API_URL}?apiKey=${API_KEY}`,
    {
      params: { type },
    }
  );
  return data;
};

export const useCategoryData = (category: string) => {
  // return {data: mockData}
  return useQuery(["categoryData", category], () => fetchData(category), {
    enabled: category !== "home" && !!category,
  });
};
