# RecipeApp

RecipeApp is a modern web application built with React, TypeScript, and Vite. It provides users with a seamless experience to explore and discover various recipes. The application leverages the Spoonacular API to fetch and display recipe data dynamically.

## Features

- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across all devices.
- **Category-Based Navigation**: Users can easily navigate through different categories of recipes such as Vegetarian, Main Course, Desserts, Fast Food, Kids Menu, and Soups.
- **Recipe Details**: Each recipe card provides detailed information including preparation time, portion size, difficulty level, and rating.
- **Dynamic Data Fetching**: The application uses React Query to fetch and manage data from the Spoonacular API efficiently.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Sass**: A CSS preprocessor for writing more maintainable and scalable styles.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Axios**: A promise-based HTTP client for making API requests.

## Project Structure
```
.
├── public/
│   └── assets/
├── src/
│   ├── api/
│   │   └── recipesAPI.ts
│   ├── components/
│   │   ├── CakeIcon/
│   │   ├── ChefIcon/
│   │   ├── ClockIcon/
│   │   ├── FastFoodIcon/
│   │   ├── FavoriteIcon/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── KidsIcon/
│   │   ├── MainIcon/
│   │   ├── NavBar/
│   │   └── ...
│   ├── constants/
│   ├── containers/
│   ├── context/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── variables.scss
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
## Getting Started

### Prerequisites

- Node.js (>= 18.x)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/9alex12/Aranda-RecipeApp.git
   cd recipeapp
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Create a [```.env```](.env ) file based on the [```.env.example```](.env.example ):
   ```sh
   cp .env.example .env
   ```

4. Add your Spoonacular API key to the [```.env```](.env ) file:
   ```env
   VITE_API_URL = `https://api.spoonacular.com/recipes/complexSearch`
   VITE_API_KEY = `YOUR_API_KEY`

### Running the Application

To start the development server:
```sh
yarn run dev
```

To build the application for production:
```sh
yarn run build
```

To preview the production build:
```sh
yarn run preview
```

### Linting

To lint the codebase:
```sh
yarn run lint
```

## Contributing

Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

- [Spoonacular API](https://spoonacular.com/food-api) for providing the recipe data.
- [Vite](https://vitejs.dev/) for the fast build tool and development server.
- [React](https://reactjs.org/) for the powerful UI library.
- [TypeScript](https://www.typescriptlang.org/) for the typed superset of JavaScript.

---

Thank you for using RecipeApp! If you have any questions or feedback, please feel free to open an issue or contact us.