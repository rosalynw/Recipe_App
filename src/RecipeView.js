import React from "react";

//needs to be used in RecipeList
//should have props for recipe uploading
//should be one row
function ReceipeView({recipe, deleteRecipe}) {
    return(
      
            <tr className="recipeView">
                <td><p>{recipe.name}</p></td>
                <td><p>{recipe.cuisine}</p></td>
                <td><img src={recipe.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "scale-down" }}/></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
                <td><button type="submit" name="delete" onClick={deleteRecipe}>Delete</button></td>
            </tr>
      
    )
}

export default ReceipeView;