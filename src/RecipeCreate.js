import React, { useState } from "react";

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
    newRecipe(content);
    setContent({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="item">
              <input
                
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={content.name}
                required={true}
                placeholder="Name"
              />
            </td>
            <td className="item">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={content.cuisine}
                required={true}
                placeholder="Cuisine"
              />
            </td>
            <td className="item">
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={content.photo}
              />
            </td>
            <td className="item">
              <textarea
                id="ingredients"
                name="ingredients"
                value={content.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
              />
            </td>
            <td className="item">
              <textarea
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
