import React from "react";

//needs to be used in RecipeList
//should have props for recipe uploading
//should be one row
function ReceipeView({recipe, deleteRecipe}) {

    return(
      
            <tr className="recipeView">
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt="" /></td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td><button type="submit" onClick={deleteRecipe}>Delete</button></td>
            </tr>
      
    )
}

export default ReceipeView;