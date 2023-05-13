import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  // deletbutton functionality should be here
  // newRecipe info should be here
  // RecipeData contains premade recipes within an array. could be part of testing

  const newRecipe = (createRecipe) => setRecipes((currentRecipe) => [createRecipe, ...currentRecipe])
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList />
      <RecipeCreate newRecipe={newRecipe} />
    </div>
  );
}

export default App;
