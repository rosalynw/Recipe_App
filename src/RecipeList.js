import React from "react";
import ReceipeView from "./RecipeView";


function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // RecipeList displays ALL recipes
  // just needs to house RecipeView
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="item">Name</th>
            <th className="item">Cuisine</th>
            <th className="item">Photo</th>
            <th className="item">Ingredients</th>
            <th className="item">Preparation</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
        {/*RecipeView would probably go within here*/}
        {recipes.map((recipe, index) => (
          <ReceipeView
          deleteRecipe={() => deleteRecipe(index)}
          key={index}
          recipe={recipe}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
