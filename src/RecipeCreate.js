import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({newRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // should have as many inputs as table heads within RecipeList
  const [content, setContent] = useState("");
  //a change handler for the multiple inputs instead of one for each
  const handleChange = (event) => setContent({...content, [event.target.name]: event.target.value});
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const cuisine = formData.get("cuisine");
    const photo = formData.get("photo");
    const ingredients = formData.get("ingredients");
    const preparation = formData.get("preparation");
    newRecipe({name, cuisine, photo, ingredients, preparation});
    event.target.reset();
  }
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              className="table-item"
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={content.name}
              required={true}
              placeholder="Name"/>
            </td>
            <td>
              <input
              className="table-item"
              id="cuisine"
              type="text"
              name="cuisine"
              onChange={handleChange}
              value={content.cuisine}
              required={true}
              placeholder="Cuisine"
              />
            </td>
            <td>
              <input
              className="table-item"
              id="photo"
              type="url"
              name="photo"
              placeholder="URL"
              onChange={handleChange}
              />
            </td>
            <td>
              <textarea
              className="table-item"
              id="ingredients"
              name="ingredients"
              value={content.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
              className="table-item"
              id="preparation"
              name="preparation"
              value={content.preparation}
              onChange={handleChange}
              placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
